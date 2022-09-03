var Hd=Object.defineProperty;var Wd=(o,e,t)=>e in o?Hd(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var ae=(o,e,t)=>(Wd(o,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();function li(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function Gh(o,e){o.prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e}/*!
 * GSAP 3.11.0
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var hn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},is={duration:.5,overwrite:!1,delay:0},ac,Bn,yt,wn=1e8,it=1/wn,Tl=Math.PI*2,Xd=Tl/4,Yd=0,Vh=Math.sqrt,$d=Math.cos,qd=Math.sin,Dt=function(e){return typeof e=="string"},dt=function(e){return typeof e=="function"},xi=function(e){return typeof e=="number"},oc=function(e){return typeof e>"u"},ei=function(e){return typeof e=="object"},en=function(e){return e!==!1},Hh=function(){return typeof window<"u"},ua=function(e){return dt(e)||Dt(e)},Wh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},zt=Array.isArray,Al=/(?:-?\.?\d|\.)+/gi,Xh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Wr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Do=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Yh=/[+-]=-?[.\d]+/,$h=/[^,'"\[\]\s]+/gi,jd=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ot,yn,Cl,lc,fn={},io={},qh,jh=function(e){return(io=fr(e,fn))&&dn},cc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ro=function(e,t){return!t&&console.warn(e)},Zh=function(e,t){return e&&(fn[e]=t)&&io&&(io[e]=t)||fn},Xs=function(){return 0},Zd={suppressEvents:!0,isStart:!0},Fs={suppressEvents:!0},uc={},Oi=[],Dl={},Kh,ln={},Lo={},Fc=30,Wa=[],hc="",fc=function(e){var t=e[0],n,i;if(ei(t)||dt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Wa.length;i--&&!Wa[i].targetTest(t););n=Wa[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new yf(e[i],n)))||e.splice(i,1);return e},sr=function(e){return e._gsap||fc(En(e))[0]._gsap},Jh=function(e,t,n){return(n=e[t])&&dt(n)?e[t]():oc(n)&&e.getAttribute&&e.getAttribute(t)||n},tn=function(e,t){return(e=e.split(",")).forEach(t)||e},gt=function(e){return Math.round(e*1e5)/1e5||0},Rt=function(e){return Math.round(e*1e7)/1e7||0},Zr=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Kd=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},so=function(){var e=Oi.length,t=Oi.slice(0),n,i;for(Dl={},Oi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Qh=function(e,t,n,i){Oi.length&&so(),e.render(t,n,i||Bn),Oi.length&&so()},ef=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match($h).length<2?t:Dt(e)?e.trim():e},tf=function(e){return e},Ln=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Jd=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},fr=function(e,t){for(var n in t)e[n]=t[n];return e},Oc=function o(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ei(t[n])?o(e[n]||(e[n]={}),t[n]):t[n]);return e},ao=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Os=function(e){var t=e.parent||ot,n=e.keyframes?Jd(zt(e.keyframes)):Ln;if(en(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Qd=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},nf=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],s;if(r)for(s=t[r];a&&a[r]>s;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},_o=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},vi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},ar=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},ep=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Ll=function(e,t,n,i){return e._startAt&&(Bn?e._startAt.revert(Fs):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},tp=function o(e){return!e||e._ts&&o(e.parent)},zc=function(e){return e._repeat?rs(e._tTime,e=e.duration()+e._rDelay)*e:0},rs=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},oo=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},xo=function(e){return e._end=Rt(e._start+(e._tDur/Math.abs(e._ts||e._rts||it)||0))},vo=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Rt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),xo(e),n._dirty||ar(n,e)),e},rf=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=oo(e.rawTime(),t),(!t._dur||ra(0,t.totalDuration(),n)-t._tTime>it)&&t.render(n,!0)),ar(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-it}},Yn=function(e,t,n,i){return t.parent&&vi(t),t._start=Rt((xi(n)?n:n||e!==ot?vn(e,n,t):e._time)+t._delay),t._end=Rt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),nf(e,t,"_first","_last",e._sort?"_start":0),Pl(t)||(e._recent=t),i||rf(e,t),e._ts<0&&vo(e,e._tTime),e},sf=function(e,t){return(fn.ScrollTrigger||cc("scrollTrigger",t))&&fn.ScrollTrigger.create(t,e)},af=function(e,t,n,i){if(pc(e,t),!e._initted)return 1;if(!n&&e._pt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Kh!==cn.frame)return Oi.push(e),e._lazy=[t,i],1},np=function o(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||o(t))},Pl=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},ip=function(e,t,n,i){var r=e.ratio,a=t<0||!t&&(!e._start&&np(e)&&!(!e._initted&&Pl(e))||(e._ts<0||e._dp._ts<0)&&!Pl(e))?0:1,s=e._rDelay,l=0,c,u,h;if(s&&e._repeat&&(l=ra(0,e._tDur,t),u=rs(l,s),e._yoyo&&u&1&&(a=1-a),u!==rs(e._tTime,s)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||Bn||i||e._zTime===it||!t&&e._zTime){if(!e._initted&&af(e,t,i,n))return;for(h=e._zTime,e._zTime=t||(n?it:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Ll(e,t,n,!0),e._onUpdate&&!n&&Tn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Tn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&vi(e,1),n||(Tn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},rp=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},ss=function(e,t,n,i){var r=e._repeat,a=Rt(t)||0,s=e._tTime/e._tDur;return s&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:Rt(a*(r+1)+e._rDelay*r):a,s>0&&!i?vo(e,e._tTime=e._tDur*s):e.parent&&xo(e),n||ar(e.parent,e),e},Nc=function(e){return e instanceof Qt?ar(e):ss(e,e._dur)},sp={_start:0,endTime:Xs,totalDuration:Xs},vn=function o(e,t,n){var i=e.labels,r=e._recent||sp,a=e.duration()>=wn?r.endTime(!1):e._dur,s,l,c;return Dt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",s=t.indexOf("="),l==="<"||l===">"?(s>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(s<0?r:n).totalDuration()/100:1)):s<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(s-1)+t.substr(s+1)),c&&n&&(l=l/100*(zt(n)?n[0]:n).totalDuration()),s>1?o(e,t.substr(0,s-1),n)+l:a+l)):t==null?a:+t},zs=function(e,t,n){var i=xi(t[1]),r=(i?2:1)+(e<2?0:1),a=t[r],s,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(s=a,l=n;l&&!("immediateRender"in s);)s=l.vars.defaults||{},l=en(l.vars.inherit)&&l.parent;a.immediateRender=en(s.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new Mt(t[0],a,t[r+1])},Gi=function(e,t){return e||e===0?t(e):t},ra=function(e,t,n){return n<e?e:n>t?t:n},Ot=function(e,t){return!Dt(e)||!(t=jd.exec(e))?"":t[1]},ap=function(e,t,n){return Gi(n,function(i){return ra(e,t,i)})},Rl=[].slice,of=function(e,t){return e&&ei(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ei(e[0]))&&!e.nodeType&&e!==yn},op=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return Dt(i)&&!t||of(i,1)?(r=n).push.apply(r,En(i)):n.push(i)})||n},En=function(e,t,n){return yt&&!t&&yt.selector?yt.selector(e):Dt(e)&&!n&&(Cl||!as())?Rl.call((t||lc).querySelectorAll(e),0):zt(e)?op(e,n):of(e)?Rl.call(e,0):e?[e]:[]},Il=function(e){return e=En(e)[0]||ro("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return En(t,n.querySelectorAll?n:n===e?ro("Invalid scope")||lc.createElement("div"):e)}},lf=function(e){return e.sort(function(){return .5-Math.random()})},cf=function(e){if(dt(e))return e;var t=ei(e)?e:{each:e},n=or(t.ease),i=t.from||0,r=parseFloat(t.base)||0,a={},s=i>0&&i<1,l=isNaN(i)||s,c=t.axis,u=i,h=i;return Dt(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!s&&l&&(u=i[0],h=i[1]),function(f,m,_){var d=(_||t).length,p=a[d],g,y,S,b,v,T,C,x,E;if(!p){if(E=t.grid==="auto"?0:(t.grid||[1,wn])[1],!E){for(C=-wn;C<(C=_[E++].getBoundingClientRect().left)&&E<d;);E--}for(p=a[d]=[],g=l?Math.min(E,d)*u-.5:i%E,y=E===wn?0:l?d*h/E-.5:i/E|0,C=0,x=wn,T=0;T<d;T++)S=T%E-g,b=y-(T/E|0),p[T]=v=c?Math.abs(c==="y"?b:S):Vh(S*S+b*b),v>C&&(C=v),v<x&&(x=v);i==="random"&&lf(p),p.max=C-x,p.min=x,p.v=d=(parseFloat(t.amount)||parseFloat(t.each)*(E>d?d-1:c?c==="y"?d/E:E:Math.max(E,d/E))||0)*(i==="edges"?-1:1),p.b=d<0?r-d:r,p.u=Ot(t.amount||t.each)||0,n=n&&d<0?_f(n):n}return d=(p[f]-p.min)/p.max||0,Rt(p.b+(n?n(d):d)*p.v)+p.u}},Fl=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Rt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(xi(n)?0:Ot(n))}},uf=function(e,t){var n=zt(e),i,r;return!n&&ei(e)&&(i=n=e.radius||wn,e.values?(e=En(e.values),(r=!xi(e[0]))&&(i*=i)):e=Fl(e.increment)),Gi(t,n?dt(e)?function(a){return r=e(a),Math.abs(r-a)<=i?r:a}:function(a){for(var s=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=wn,u=0,h=e.length,f,m;h--;)r?(f=e[h].x-s,m=e[h].y-l,f=f*f+m*m):f=Math.abs(e[h]-s),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:a,r||u===a||xi(a)?u:u+Ot(a)}:Fl(e))},hf=function(e,t,n,i){return Gi(zt(e)?!t:n===!0?!!(n=0):!i,function(){return zt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},lp=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,a){return a(r)},i)}},cp=function(e,t){return function(n){return e(parseFloat(n))+(t||Ot(n))}},up=function(e,t,n){return df(e,t,0,1,n)},ff=function(e,t,n){return Gi(n,function(i){return e[~~t(i)]})},hp=function o(e,t,n){var i=t-e;return zt(e)?ff(e,o(0,e.length),t):Gi(n,function(r){return(i+(r-e)%i)%i+e})},fp=function o(e,t,n){var i=t-e,r=i*2;return zt(e)?ff(e,o(0,e.length-1),t):Gi(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>i?r-a:a)})},Ys=function(e){for(var t=0,n="",i,r,a,s;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),s=e.charAt(i+7)==="[",r=e.substr(i+7,a-i-7).match(s?$h:Al),n+=e.substr(t,i-t)+hf(s?r:+r[0],s?0:+r[1],+r[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},df=function(e,t,n,i,r){var a=t-e,s=i-n;return Gi(r,function(l){return n+((l-e)/a*s||0)})},dp=function o(e,t,n,i){var r=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!r){var a=Dt(e),s={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(zt(e)&&!zt(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(o(e[c-1],e[c]));h--,r=function(_){_*=h;var d=Math.min(f,~~_);return u[d](_-d)},n=t}else i||(e=fr(zt(e)?[]:{},e));if(!u){for(l in t)dc.call(s,e,l,"get",t[l]);r=function(_){return _c(_,s)||(a?e.p:e)}}}return Gi(n,r)},kc=function(e,t,n){var i=e.labels,r=wn,a,s,l;for(a in i)s=i[a]-t,s<0==!!n&&s&&r>(s=Math.abs(s))&&(l=a,r=s);return l},Tn=function(e,t,n){var i=e.vars,r=i[t],a=yt,s=e._ctx,l,c,u;if(!!r)return l=i[t+"Params"],c=i.callbackScope||e,n&&Oi.length&&so(),s&&(yt=s),u=l?r.apply(c,l):r.call(c),yt=a,u},As=function(e){return vi(e),e.scrollTrigger&&e.scrollTrigger.kill(!1),e.progress()<1&&Tn(e,"onInterrupt"),e},Xr,pp=function(e){e=!e.name&&e.default||e;var t=e.name,n=dt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Xs,render:_c,add:dc,kill:Lp,modifier:Dp,rawVars:0},a={targetTest:0,get:0,getSetter:gc,aliases:{},register:0};if(as(),e!==i){if(ln[t])return;Ln(i,Ln(ao(e,r),a)),fr(i.prototype,fr(r,ao(e,a))),ln[i.prop=t]=i,e.targetTest&&(Wa.push(i),uc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Zh(t,i),e.register&&e.register(dn,i,nn)},nt=255,Cs={aqua:[0,nt,nt],lime:[0,nt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,nt],navy:[0,0,128],white:[nt,nt,nt],olive:[128,128,0],yellow:[nt,nt,0],orange:[nt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[nt,0,0],pink:[nt,192,203],cyan:[0,nt,nt],transparent:[nt,nt,nt,0]},Po=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*nt+.5|0},pf=function(e,t,n){var i=e?xi(e)?[e>>16,e>>8&nt,e&nt]:0:Cs.black,r,a,s,l,c,u,h,f,m,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Cs[e])i=Cs[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),s=e.charAt(3),e="#"+r+r+a+a+s+s+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&nt,i&nt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&nt,e&nt]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(Al),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,r=u*2-a,i.length>3&&(i[3]*=1),i[0]=Po(l+1/3,r,a),i[1]=Po(l,r,a),i[2]=Po(l-1/3,r,a);else if(~e.indexOf("="))return i=e.match(Xh),n&&i.length<4&&(i[3]=1),i}else i=e.match(Al)||Cs.transparent;i=i.map(Number)}return t&&!_&&(r=i[0]/nt,a=i[1]/nt,s=i[2]/nt,h=Math.max(r,a,s),f=Math.min(r,a,s),u=(h+f)/2,h===f?l=c=0:(m=h-f,c=u>.5?m/(2-h-f):m/(h+f),l=h===r?(a-s)/m+(a<s?6:0):h===a?(s-r)/m+2:(r-a)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},mf=function(e){var t=[],n=[],i=-1;return e.split(zi).forEach(function(r){var a=r.match(Wr)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Bc=function(e,t,n){var i="",r=(e+i).match(zi),a=t?"hsla(":"rgba(",s=0,l,c,u,h;if(!r)return e;if(r=r.map(function(f){return(f=pf(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=mf(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(zi,"1").split(Wr),h=c.length-1;s<h;s++)i+=c[s]+(~l.indexOf(s)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(zi),h=c.length-1;s<h;s++)i+=c[s]+r[s];return i+c[h]},zi=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Cs)o+="|"+e+"\\b";return new RegExp(o+")","gi")}(),mp=/hsl[a]?\(/,gf=function(e){var t=e.join(" "),n;if(zi.lastIndex=0,zi.test(t))return n=mp.test(t),e[1]=Bc(e[1],n),e[0]=Bc(e[0],n,mf(e[1])),!0},$s,cn=function(){var o=Date.now,e=500,t=33,n=o(),i=n,r=1e3/240,a=r,s=[],l,c,u,h,f,m,_=function d(p){var g=o()-i,y=p===!0,S,b,v,T;if(g>e&&(n+=g-t),i+=g,v=i-n,S=v-a,(S>0||y)&&(T=++h.frame,f=v-h.time*1e3,h.time=v=v/1e3,a+=S+(S>=r?4:r-S),b=1),y||(l=c(d)),b)for(m=0;m<s.length;m++)s[m](v,f,T,p)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){qh&&(!Cl&&Hh()&&(yn=Cl=window,lc=yn.document||{},fn.gsap=dn,(yn.gsapVersions||(yn.gsapVersions=[])).push(dn.version),jh(io||yn.GreenSockGlobals||!yn.gsap&&yn||{}),u=yn.requestAnimationFrame),l&&h.sleep(),c=u||function(p){return setTimeout(p,a-h.time*1e3+1|0)},$s=1,_(2))},sleep:function(){(u?yn.cancelAnimationFrame:clearTimeout)(l),$s=0,c=Xs},lagSmoothing:function(p,g){e=p||1/it,t=Math.min(g,e,0)},fps:function(p){r=1e3/(p||240),a=h.time*1e3+r},add:function(p,g,y){var S=g?function(b,v,T,C){p(b,v,T,C),h.remove(S)}:p;return h.remove(p),s[y?"unshift":"push"](S),as(),S},remove:function(p,g){~(g=s.indexOf(p))&&s.splice(g,1)&&m>=g&&m--},_listeners:s},h}(),as=function(){return!$s&&cn.wake()},Xe={},gp=/^[\d.\-M][\d.\-,\s]/,_p=/["']/g,xp=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,a=n.length,s,l,c;r<a;r++)l=n[r],s=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,s),t[i]=isNaN(c)?c.replace(_p,"").trim():+c,i=l.substr(s+1).trim();return t},vp=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},yp=function(e){var t=(e+"").split("("),n=Xe[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[xp(t[1])]:vp(e).split(",").map(ef)):Xe._CE&&gp.test(e)?Xe._CE("",e):n},_f=function(e){return function(t){return 1-e(1-t)}},xf=function o(e,t){for(var n=e._first,i;n;)n instanceof Qt?o(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?o(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},or=function(e,t){return e&&(dt(e)?e:Xe[e]||yp(e))||t},vr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},a;return tn(e,function(s){Xe[s]=fn[s]=r,Xe[a=s.toLowerCase()]=n;for(var l in r)Xe[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Xe[s+"."+l]=r[l]}),r},vf=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ro=function o(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/Tl*(Math.asin(1/i)||0),s=function(u){return u===1?1:i*Math.pow(2,-10*u)*qd((u-a)*r)+1},l=e==="out"?s:e==="in"?function(c){return 1-s(1-c)}:vf(s);return r=Tl/r,l.config=function(c,u){return o(e,c,u)},l},Io=function o(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:vf(n);return i.config=function(r){return o(e,r)},i};tn("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,e){var t=e<5?e+1:e;vr(o+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Xe.Linear.easeNone=Xe.none=Xe.Linear.easeIn;vr("Elastic",Ro("in"),Ro("out"),Ro());(function(o,e){var t=1/e,n=2*t,i=2.5*t,r=function(s){return s<t?o*s*s:s<n?o*Math.pow(s-1.5/e,2)+.75:s<i?o*(s-=2.25/e)*s+.9375:o*Math.pow(s-2.625/e,2)+.984375};vr("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);vr("Expo",function(o){return o?Math.pow(2,10*(o-1)):0});vr("Circ",function(o){return-(Vh(1-o*o)-1)});vr("Sine",function(o){return o===1?1:-$d(o*Xd)+1});vr("Back",Io("in"),Io("out"),Io());Xe.SteppedEase=Xe.steps=fn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,a=1-it;return function(s){return((i*ra(0,a,s)|0)+r)*n}}};is.ease=Xe["quad.out"];tn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return hc+=o+","+o+"Params,"});var yf=function(e,t){this.id=Yd++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Jh,this.set=t?t.getSetter:gc},os=function(){function o(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ss(this,+t.duration,1,1),this.data=t.data,yt&&(this._ctx=yt,yt.data.push(this)),$s||cn.wake()}var e=o.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ss(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(as(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(vo(this,n),!r._dp||r.parent||rf(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Yn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===it||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Qh(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+zc(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+zc(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?rs(this._tTime,r)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-it?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?oo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-it?0:this._rts,this.totalTime(ra(-this._delay,this._tDur,i),!0),xo(this),ep(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(as(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==it&&(this._tTime-=it)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Yn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(en(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?oo(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Fs);var i=Bn;return Bn=n,this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents),this.data!=="nested"&&vi(this),Bn=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this.vars.immediateRender?-1:r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Nc(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Nc(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(vn(this,n),en(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,en(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-it:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-it,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-it)},e.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(r){var a=dt(n)?n:tf,s=function(){var c=i.then;i.then=null,dt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),r(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?s():i._prom=s})},e.kill=function(){As(this)},o}();Ln(os.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-it,_prom:0,_ps:!1,_rts:1});var Qt=function(o){Gh(e,o);function e(n,i){var r;return n===void 0&&(n={}),r=o.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=en(n.sortChildren),ot&&Yn(n.parent||ot,li(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&sf(li(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,a){return zs(0,arguments,this),this},t.from=function(i,r,a){return zs(1,arguments,this),this},t.fromTo=function(i,r,a,s){return zs(2,arguments,this),this},t.set=function(i,r,a){return r.duration=0,r.parent=this,Os(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Mt(i,r,vn(this,a),1),this},t.call=function(i,r,a){return Yn(this,Mt.delayedCall(0,i,r),a)},t.staggerTo=function(i,r,a,s,l,c,u){return a.duration=r,a.stagger=a.stagger||s,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Mt(i,a,vn(this,l)),this},t.staggerFrom=function(i,r,a,s,l,c,u){return a.runBackwards=1,Os(a).immediateRender=en(a.immediateRender),this.staggerTo(i,r,a,s,l,c,u)},t.staggerFromTo=function(i,r,a,s,l,c,u,h){return s.startAt=a,Os(s).immediateRender=en(s.immediateRender),this.staggerTo(i,r,s,l,c,u,h)},t.render=function(i,r,a){var s=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Rt(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,m,_,d,p,g,y,S,b,v,T,C;if(this!==ot&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(s!==this._time&&c&&(u+=this._time-s,i+=this._time-s),f=u,b=this._start,S=this._ts,g=!S,h&&(c||(s=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,a);if(f=Rt(u%p),u===l?(d=this._repeat,f=c):(d=~~(u/p),d&&d===u/p&&(f=c,d--),f>c&&(f=c)),v=rs(this._tTime,p),!s&&this._tTime&&v!==d&&(v=d),T&&d&1&&(f=c-f,C=1),d!==v&&!this._lock){var x=T&&v&1,E=x===(T&&d&1);if(d<v&&(x=!x),s=x?0:c,this._lock=1,this.render(s||(C?0:Rt(d*p)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&Tn(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1),s&&s!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,E&&(this._lock=2,s=x?c:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;xf(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=rp(this,Rt(s),Rt(f)),y&&(u-=f-(f=y._start))),this._tTime=u,this._time=f,this._act=!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,s=0),!s&&f&&!r&&(Tn(this,"onStart"),this._tTime!==u))return this;if(f>=s&&i>=0)for(m=this._first;m;){if(_=m._next,(m._act||f>=m._start)&&m._ts&&y!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(f-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(f-m._start)*m._ts,r,a),f!==this._time||!this._ts&&!g){y=0,_&&(u+=this._zTime=-it);break}}m=_}else{a=a||Bn,m=this._last;for(var P=i<0?i:f;m;){if(_=m._prev,(m._act||P<=m._end)&&m._ts&&y!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(P-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(P-m._start)*m._ts,r,a),f!==this._time||!this._ts&&!g){y=0,_&&(u+=this._zTime=P?-it:it);break}}m=_}}if(y&&!r&&(this.pause(),y.render(f>=s?0:-it)._zTime=f>=s?1:-1,this._ts))return this._start=b,xo(this),this.render(i,r,a);this._onUpdate&&!r&&Tn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&s)&&(b===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&vi(this,1),!r&&!(i<0&&!s)&&(u||s||!l)&&(Tn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var a=this;if(xi(r)||(r=vn(this,r,i)),!(i instanceof os)){if(zt(i))return i.forEach(function(s){return a.add(s,r)}),this;if(Dt(i))return this.addLabel(i,r);if(dt(i))i=Mt.delayedCall(0,i);else return this}return this!==i?Yn(this,i,r):this},t.getChildren=function(i,r,a,s){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),s===void 0&&(s=-wn);for(var l=[],c=this._first;c;)c._start>=s&&(c instanceof Mt?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},t.remove=function(i){return Dt(i)?this.removeLabel(i):dt(i)?this.killTweensOf(i):(_o(this,i),i===this._recent&&(this._recent=this._last),ar(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Rt(cn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),o.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=vn(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,a){var s=Mt.delayedCall(0,r||Xs,a);return s.data="isPause",this._hasPause=1,Yn(this,s,vn(this,i))},t.removePause=function(i){var r=this._first;for(i=vn(this,i);r;)r._start===i&&r.data==="isPause"&&vi(r),r=r._next},t.killTweensOf=function(i,r,a){for(var s=this.getTweensOf(i,a),l=s.length;l--;)Li!==s[l]&&s[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var a=[],s=En(i),l=this._first,c=xi(r),u;l;)l instanceof Mt?Kd(l._targets,s)&&(c?(!Li||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(u=l.getTweensOf(s,r)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,r){r=r||{};var a=this,s=vn(a,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,m,_=Mt.to(a,Ln({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:r.duration||Math.abs((s-(c&&"time"in c?c.time:a._time))/a.timeScale())||it,onStart:function(){if(a.pause(),!m){var p=r.duration||Math.abs((s-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==p&&ss(_,p,0,1).render(_._time,!0,!0),m=1}u&&u.apply(_,h||[])}},r));return f?_.render(0):_},t.tweenFromTo=function(i,r,a){return this.tweenTo(r,Ln({startAt:{time:vn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),kc(this,vn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),kc(this,vn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+it)},t.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var s=this._first,l=this.labels,c;s;)s._start>=a&&(s._start+=i,s._end+=i),s=s._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return ar(this)},t.invalidate=function(){var i=this._first;for(this._lock=0;i;)i.invalidate(),i=i._next;return o.prototype.invalidate.call(this)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ar(this)},t.totalDuration=function(i){var r=0,a=this,s=a._last,l=wn,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;s;)c=s._prev,s._dirty&&s.totalDuration(),u=s._start,u>l&&a._sort&&s._ts&&!a._lock?(a._lock=1,Yn(a,s,u-s._delay,1)._lock=0):l=u,u<0&&s._ts&&(r-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),s._end>r&&s._ts&&(r=s._end),s=c;ss(a,a===ot&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(ot._ts&&(Qh(ot,oo(i,ot)),Kh=cn.frame),cn.frame>=Fc){Fc+=hn.autoSleep||120;var r=ot._first;if((!r||!r._ts)&&hn.autoSleep&&cn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||cn.sleep()}}},e}(os);Ln(Qt.prototype,{_lock:0,_hasPause:0,_forcing:0});var bp=function(e,t,n,i,r,a,s){var l=new nn(this._pt,e,t,0,1,Tf,null,r),c=0,u=0,h,f,m,_,d,p,g,y;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=Ys(i)),a&&(y=[n,i],a(y,e,t),n=y[0],i=y[1]),f=n.match(Do)||[];h=Do.exec(i);)_=h[0],d=i.substring(c,h.index),m?m=(m+1)%5:d.substr(-5)==="rgba("&&(m=1),_!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:d||u===1?d:",",s:p,c:_.charAt(1)==="="?Zr(p,_)-p:parseFloat(_)-p,m:m&&m<4?Math.round:0},c=Do.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=s,(Yh.test(i)||g)&&(l.e=0),this._pt=l,l},dc=function(e,t,n,i,r,a,s,l,c,u){dt(i)&&(i=i(r||0,e,a));var h=e[t],f=n!=="get"?n:dt(h)?c?e[t.indexOf("set")||!dt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,m=dt(h)?c?Tp:wf:mc,_;if(Dt(i)&&(~i.indexOf("random(")&&(i=Ys(i)),i.charAt(1)==="="&&(_=Zr(f,i)+(Ot(f)||0),(_||_===0)&&(i=_))),!u||f!==i||Ol)return!isNaN(f*i)&&i!==""?(_=new nn(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?Cp:Ef,0,m),c&&(_.fp=c),s&&_.modifier(s,this,e),this._pt=_):(!h&&!(t in e)&&cc(t,i),bp.call(this,e,t,f,i,m,l||hn.stringFilter,c))},Sp=function(e,t,n,i,r){if(dt(e)&&(e=Ns(e,r,t,n,i)),!ei(e)||e.style&&e.nodeType||zt(e)||Wh(e))return Dt(e)?Ns(e,r,t,n,i):e;var a={},s;for(s in e)a[s]=Ns(e[s],r,t,n,i);return a},bf=function(e,t,n,i,r,a){var s,l,c,u;if(ln[e]&&(s=new ln[e]).init(r,s.rawVars?t[e]:Sp(t[e],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new nn(n._pt,r,e,0,1,s.render,s,0,s.priority),n!==Xr))for(c=n._ptLookup[n._targets.indexOf(r)],u=s._props.length;u--;)c[s._props[u]]=l;return s},Li,Ol,pc=function o(e,t){var n=e.vars,i=n.ease,r=n.startAt,a=n.immediateRender,s=n.lazy,l=n.onUpdate,c=n.onUpdateParams,u=n.callbackScope,h=n.runBackwards,f=n.yoyoEase,m=n.keyframes,_=n.autoRevert,d=e._dur,p=e._startAt,g=e._targets,y=e.parent,S=y&&y.data==="nested"?y.parent._targets:g,b=e._overwrite==="auto"&&!ac,v=e.timeline,T,C,x,E,P,I,$,j,F,H,O,V,G;if(v&&(!m||!i)&&(i="none"),e._ease=or(i,is.ease),e._yEase=f?_f(or(f===!0?i:f,is.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!v&&!!n.runBackwards,!v||m&&!n.stagger){if(j=g[0]?sr(g[0]).harness:0,V=j&&n[j.prop],T=ao(n,uc),p&&(p.revert(h&&d?Fs:Zd),p._lazy=0),r){if(vi(e._startAt=Mt.set(g,Ln({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:en(s),startAt:null,delay:0,onUpdate:l,onUpdateParams:c,callbackScope:u,stagger:0},r))),t<0&&(Bn||!a&&!_)&&e._startAt.revert(Fs),a&&d&&t<=0){t&&(e._zTime=t);return}}else if(h&&d&&!p){if(t&&(a=!1),x=Ln({overwrite:!1,data:"isFromStart",lazy:a&&en(s),immediateRender:a,stagger:0,parent:y},T),V&&(x[j.prop]=V),vi(e._startAt=Mt.set(g,x)),t<0&&(Bn?e._startAt.revert(Fs):e._startAt.render(-1,!0)),e._zTime=t,!a)o(e._startAt,it);else if(!t)return}for(e._pt=e._ptCache=0,s=d&&en(s)||s&&!d,C=0;C<g.length;C++){if(P=g[C],$=P._gsap||fc(g)[C]._gsap,e._ptLookup[C]=H={},Dl[$.id]&&Oi.length&&so(),O=S===g?C:S.indexOf(P),j&&(F=new j).init(P,V||T,e,O,S)!==!1&&(e._pt=E=new nn(e._pt,P,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(N){H[N]=E}),F.priority&&(I=1)),!j||V)for(x in T)ln[x]&&(F=bf(x,T,e,O,P,S))?F.priority&&(I=1):H[x]=E=dc.call(e,P,x,"get",T[x],O,S,0,n.stringFilter);e._op&&e._op[C]&&e.kill(P,e._op[C]),b&&e._pt&&(Li=e,ot.killTweensOf(P,H,e.globalTime(t)),G=!e.parent,Li=0),e._pt&&s&&(Dl[$.id]=1)}I&&Af(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!G,m&&t<=0&&v.render(wn,!0,!0)},Mp=function(e,t,n,i,r,a,s){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,h,f;if(!l)for(l=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(c=h[f][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Ol=1,e.vars[t]="+=0",pc(e,s),Ol=0,1;l.push(c)}for(f=l.length;f--;)u=l[f],c=u._pt||u,c.s=(i||i===0)&&!r?i:c.s+(i||0)+a*c.c,c.c=n-c.s,u.e&&(u.e=gt(n)+Ot(u.e)),u.b&&(u.b=c.s+Ot(u.b))},wp=function(e,t){var n=e[0]?sr(e[0]).harness:0,i=n&&n.aliases,r,a,s,l;if(!i)return t;r=fr({},t);for(a in i)if(a in r)for(l=i[a].split(","),s=l.length;s--;)r[l[s]]=r[a];return r},Ep=function(e,t,n,i){var r=t.ease||i||"power1.inOut",a,s;if(zt(t))s=n[e]||(n[e]=[]),t.forEach(function(l,c){return s.push({t:c/(t.length-1)*100,v:l,e:r})});else for(a in t)s=n[a]||(n[a]=[]),a==="ease"||s.push({t:parseFloat(e),v:t[a],e:r})},Ns=function(e,t,n,i,r){return dt(e)?e.call(t,n,i,r):Dt(e)&&~e.indexOf("random(")?Ys(e):e},Sf=hc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Mf={};tn(Sf+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return Mf[o]=1});var Mt=function(o){Gh(e,o);function e(n,i,r,a){var s;typeof i=="number"&&(r.duration=i,i=r,r=null),s=o.call(this,a?i:Os(i))||this;var l=s.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,m=l.overwrite,_=l.keyframes,d=l.defaults,p=l.scrollTrigger,g=l.yoyoEase,y=i.parent||ot,S=(zt(n)||Wh(n)?xi(n[0]):"length"in i)?[n]:En(n),b,v,T,C,x,E,P,I;if(s._targets=S.length?fc(S):ro("GSAP target "+n+" not found. https://greensock.com",!hn.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=m,_||f||ua(c)||ua(u)){if(i=s.vars,b=s.timeline=new Qt({data:"nested",defaults:d||{}}),b.kill(),b.parent=b._dp=li(s),b._start=0,f||ua(c)||ua(u)){if(C=S.length,P=f&&cf(f),ei(f))for(x in f)~Sf.indexOf(x)&&(I||(I={}),I[x]=f[x]);for(v=0;v<C;v++)T=ao(i,Mf),T.stagger=0,g&&(T.yoyoEase=g),I&&fr(T,I),E=S[v],T.duration=+Ns(c,li(s),v,E,S),T.delay=(+Ns(u,li(s),v,E,S)||0)-s._delay,!f&&C===1&&T.delay&&(s._delay=u=T.delay,s._start+=u,T.delay=0),b.to(E,T,P?P(v,E,S):0),b._ease=Xe.none;b.duration()?c=u=0:s.timeline=0}else if(_){Os(Ln(b.vars.defaults,{ease:"none"})),b._ease=or(_.ease||i.ease||"none");var $=0,j,F,H;if(zt(_))_.forEach(function(O){return b.to(S,O,">")}),b.duration();else{T={};for(x in _)x==="ease"||x==="easeEach"||Ep(x,_[x],T,_.easeEach);for(x in T)for(j=T[x].sort(function(O,V){return O.t-V.t}),$=0,v=0;v<j.length;v++)F=j[v],H={ease:F.e,duration:(F.t-(v?j[v-1].t:0))/100*c},H[x]=F.v,b.to(S,H,$),$+=H.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||s.duration(c=b.duration())}else s.timeline=0;return m===!0&&!ac&&(Li=li(s),ot.killTweensOf(S),Li=0),Yn(y,li(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),(h||!c&&!_&&s._start===Rt(y._time)&&en(h)&&tp(li(s))&&y.data!=="nested")&&(s._tTime=-it,s.render(Math.max(0,-u))),p&&sf(li(s),p),s}var t=e.prototype;return t.render=function(i,r,a){var s=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-it&&!u?l:i<it?0:i,f,m,_,d,p,g,y,S,b;if(!c)ip(this,i,r,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,S=this.timeline,this._repeat){if(d=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(d*100+i,r,a);if(f=Rt(h%d),h===l?(_=this._repeat,f=c):(_=~~(h/d),_&&_===h/d&&(f=c,_--),f>c&&(f=c)),g=this._yoyo&&_&1,g&&(b=this._yEase,f=c-f),p=rs(this._tTime,d),f===s&&!a&&this._initted)return this._tTime=h,this;_!==p&&(S&&this._yEase&&xf(S,g),this.vars.repeatRefresh&&!g&&!this._lock&&(this._lock=a=1,this.render(Rt(d*_),!0).invalidate()._lock=0))}if(!this._initted){if(af(this,u?i:f,a,r))return this._tTime=0,this;if(s!==this._time)return this;if(c!==this._dur)return this.render(i,r,a)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(b||this._ease)(f/c),this._from&&(this.ratio=y=1-y),f&&!s&&!r&&(Tn(this,"onStart"),this._tTime!==h))return this;for(m=this._pt;m;)m.r(y,m.d),m=m._next;S&&S.render(i<0?i:!f&&g?-it:S._dur*S._ease(f/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&Ll(this,i,r,a),Tn(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!r&&this.parent&&Tn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Ll(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&vi(this,1),!r&&!(u&&!s)&&(h||s)&&(Tn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(){return this._pt=this._op=this._startAt=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),o.prototype.invalidate.call(this)},t.resetTo=function(i,r,a,s){$s||cn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||pc(this,l),c=this._ease(l/this._dur),Mp(this,i,r,a,s,c,l)?this.resetTo(i,r,a,s):(vo(this,0),this.parent||nf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?As(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Li&&Li.vars.overwrite!==!0)._first||As(this),this.parent&&a!==this.timeline.totalDuration()&&ss(this,this._dur*this.timeline._tDur/a,0,1),this}var s=this._targets,l=i?En(i):s,c=this._ptLookup,u=this._pt,h,f,m,_,d,p,g;if((!r||r==="all")&&Qd(s,l))return r==="all"&&(this._pt=0),As(this);for(h=this._op=this._op||[],r!=="all"&&(Dt(r)&&(d={},tn(r,function(y){return d[y]=1}),r=d),r=wp(s,r)),g=s.length;g--;)if(~l.indexOf(s[g])){f=c[g],r==="all"?(h[g]=r,_=f,m={}):(m=h[g]=h[g]||{},_=r);for(d in _)p=f&&f[d],p&&((!("kill"in p.d)||p.d.kill(d)===!0)&&_o(this,p,"_pt"),delete f[d]),m!=="all"&&(m[d]=1)}return this._initted&&!this._pt&&u&&As(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return zs(1,arguments)},e.delayedCall=function(i,r,a,s){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:s})},e.fromTo=function(i,r,a){return zs(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,a){return ot.killTweensOf(i,r,a)},e}(os);Ln(Mt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});tn("staggerTo,staggerFrom,staggerFromTo",function(o){Mt[o]=function(){var e=new Qt,t=Rl.call(arguments,0);return t.splice(o==="staggerFromTo"?5:4,0,0),e[o].apply(e,t)}});var mc=function(e,t,n){return e[t]=n},wf=function(e,t,n){return e[t](n)},Tp=function(e,t,n,i){return e[t](i.fp,n)},Ap=function(e,t,n){return e.setAttribute(t,n)},gc=function(e,t){return dt(e[t])?wf:oc(e[t])&&e.setAttribute?Ap:mc},Ef=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Cp=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Tf=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},_c=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Dp=function(e,t,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(e,t,n),r=a},Lp=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?_o(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Pp=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Af=function(e){for(var t=e._pt,n,i,r,a;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=r},nn=function(){function o(t,n,i,r,a,s,l,c,u){this.t=n,this.s=r,this.c=a,this.p=i,this.r=s||Ef,this.d=l||this,this.set=c||mc,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=o.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=Pp,this.m=n,this.mt=r,this.tween=i},o}();tn(hc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return uc[o]=1});fn.TweenMax=fn.TweenLite=Mt;fn.TimelineLite=fn.TimelineMax=Qt;ot=new Qt({sortChildren:!1,defaults:is,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});hn.stringFilter=gf;var ls=[],Xa={},Rp=[],Uc=0,Fo=function(e){return(Xa[e]||Rp).map(function(t){return t()})},zl=function(){var e=Date.now(),t=[];e-Uc>2&&(Fo("matchMediaInit"),ls.forEach(function(n){var i=n.queries,r=n.conditions,a,s,l,c;for(s in i)a=yn.matchMedia(i[s]).matches,a&&(l=1),a!==r[s]&&(r[s]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Fo("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),Uc=e,Fo("matchMedia"))},Cf=function(){function o(t,n){this.selector=n&&Il(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=o.prototype;return e.add=function(n,i,r){dt(n)&&(r=i,i=n,n=dt);var a=this,s=function(){var c=yt,u=a.selector,h;return c&&c.data.push(a),r&&(a.selector=Il(r)),yt=a,h=i.apply(a,arguments),dt(h)&&a._r.push(h),yt=c,a.selector=u,a.isReverted=!1,h};return a.last=s,n===dt?s(a):n?a[n]=s:s},e.ignore=function(n){var i=yt;yt=null,n(this),yt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof o?n.push.apply(n,i.getTweens()):i instanceof Mt&&i._targets[0]!==i.vars.onComplete&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?(this.getTweens().map(function(s){return{g:s.globalTime(0),t:s}}).sort(function(s,l){return l.g-s.g||-1}).forEach(function(s){return s.t.revert(n)}),this.data.forEach(function(s){return!(s instanceof os)&&s.revert&&s.revert(n)}),this._r.forEach(function(s){return s(n,r)}),this.isReverted=!0):this.data.forEach(function(s){return s.kill&&s.kill()}),this.clear(),i){var a=ls.indexOf(this);~a&&ls.splice(a,1)}},e.revert=function(n){this.kill(n||{})},o}(),Ip=function(){function o(t){this.contexts=[],this.scope=t}var e=o.prototype;return e.add=function(n,i,r){ei(n)||(n={matches:n});var a=new Cf(0,r||this.scope),s=a.conditions={},l,c,u;this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=yn.matchMedia(n[c]),l&&(ls.indexOf(a)<0&&ls.push(a),(s[c]=l.matches)&&(u=1),l.addListener?l.addListener(zl):l.addEventListener("change",zl)));return u&&i(a),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},o}(),lo={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return pp(i)})},timeline:function(e){return new Qt(e)},getTweensOf:function(e,t){return ot.getTweensOf(e,t)},getProperty:function(e,t,n,i){Dt(e)&&(e=En(e)[0]);var r=sr(e||{}).get,a=n?tf:ef;return n==="native"&&(n=""),e&&(t?a((ln[t]&&ln[t].get||r)(e,t,n,i)):function(s,l,c){return a((ln[s]&&ln[s].get||r)(e,s,l,c))})},quickSetter:function(e,t,n){if(e=En(e),e.length>1){var i=e.map(function(u){return dn.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var a=ln[t],s=sr(e),l=s.harness&&(s.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;Xr._pt=0,h.init(e,n?u+n:u,Xr,0,[e]),h.render(1,h),Xr._pt&&_c(1,Xr)}:s.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,s,1)}},quickTo:function(e,t,n){var i,r=dn.to(e,fr((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,u){return r.resetTo(t,l,c,u)};return a.tween=r,a},isTweening:function(e){return ot.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=or(e.ease,is.ease)),Oc(is,e||{})},config:function(e){return Oc(hn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(s){return s&&!ln[s]&&!fn[s]&&ro(t+" effect requires "+s+" plugin.")}),Lo[t]=function(s,l,c){return n(En(s),Ln(l||{},r),c)},a&&(Qt.prototype[t]=function(s,l,c){return this.add(Lo[t](s,ei(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Xe[e]=or(t)},parseEase:function(e,t){return arguments.length?or(e,t):Xe},getById:function(e){return ot.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Qt(e),i,r;for(n.smoothChildTiming=en(e.smoothChildTiming),ot.remove(n),n._dp=0,n._time=n._tTime=ot._time,i=ot._first;i;)r=i._next,(t||!(!i._dur&&i instanceof Mt&&i.vars.onComplete===i._targets[0]))&&Yn(n,i,i._start-i._delay),i=r;return Yn(ot,n,0),n},context:function(e,t){return e?new Cf(e,t):yt},matchMedia:function(e){return new Ip(e)},matchMediaRefresh:function(){return ls.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||zl()},addEventListener:function(e,t){var n=Xa[e]||(Xa[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Xa[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:hp,wrapYoyo:fp,distribute:cf,random:hf,snap:uf,normalize:up,getUnit:Ot,clamp:ap,splitColor:pf,toArray:En,selector:Il,mapRange:df,pipe:lp,unitize:cp,interpolate:dp,shuffle:lf},install:jh,effects:Lo,ticker:cn,updateRoot:Qt.updateRoot,plugins:ln,globalTimeline:ot,core:{PropTween:nn,globals:Zh,Tween:Mt,Timeline:Qt,Animation:os,getCache:sr,_removeLinkedListItem:_o,reverting:function(){return Bn},context:function(e){return e&&yt&&(yt.data.push(e),e._ctx=yt),yt},suppressOverwrites:function(e){return ac=e}}};tn("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return lo[o]=Mt[o]});cn.add(Qt.updateRoot);Xr=lo.to({},{duration:0});var Fp=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Op=function(e,t){var n=e._targets,i,r,a;for(i in t)for(r=n.length;r--;)a=e._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=Fp(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[r],i))},Oo=function(e,t){return{name:e,rawVars:1,init:function(i,r,a){a._onInit=function(s){var l,c;if(Dt(r)&&(l={},tn(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}Op(s,r)}}}},dn=lo.registerPlugin({name:"attr",init:function(e,t,n,i,r){var a,s,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",s=this.add(e,"setAttribute",(l||0)+"",t[a],i,r,0,0,a),s.op=a,s.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Bn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Oo("roundProps",Fl),Oo("modifiers"),Oo("snap",uf))||lo;Mt.version=Qt.version=dn.version="3.11.0";qh=1;Hh()&&as();Xe.Power0;Xe.Power1;Xe.Power2;Xe.Power3;Xe.Power4;Xe.Linear;Xe.Quad;Xe.Cubic;Xe.Quart;Xe.Quint;Xe.Strong;Xe.Elastic;Xe.Back;Xe.SteppedEase;Xe.Bounce;Xe.Sine;Xe.Expo;Xe.Circ;/*!
 * CSSPlugin 3.11.0
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Gc,Pi,Kr,xc,Qi,Vc,vc,zp=function(){return typeof window<"u"},yi={},$i=180/Math.PI,Jr=Math.PI/180,Sr=Math.atan2,Hc=1e8,yc=/([A-Z])/g,Np=/(left|right|width|margin|padding|x)/i,kp=/[\s,\(]\S/,di={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Nl=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Bp=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Up=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Gp=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Df=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Lf=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Vp=function(e,t,n){return e.style[t]=n},Hp=function(e,t,n){return e.style.setProperty(t,n)},Wp=function(e,t,n){return e._gsap[t]=n},Xp=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Yp=function(e,t,n,i,r){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},$p=function(e,t,n,i,r){var a=e._gsap;a[t]=n,a.renderTransform(r,a)},ft="transform",jn=ft+"Origin",qp=function(e){var t=this,n=this.target,i=n.style;if(e in yi){if(this.tfm=this.tfm||{},e!=="transform"&&(e=di[e]||e,~e.indexOf(",")?e.split(",").forEach(function(r){return t.tfm[r]=ui(n,r)}):this.tfm[e]=n._gsap.x?n._gsap[e]:ui(n,e)),n._gsap.svg&&(this.svg=n.getAttribute(e)||""),this.props.indexOf(ft)>=0)return;e=ft}i&&this.props.push(e,i[e])},Pf=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},jp=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,a;for(r=0;r<e.length;r+=2)e[r+1]?n[e[r]]=e[r+1]:n.removeProperty(e[r].replace(yc,"-$1").toLowerCase());if(this.tfm){i.svg&&t.setAttribute("transform",this.svg||"");for(a in this.tfm)i[a]=this.tfm[a];r=vc(),r&&!r.isStart&&!n[ft]&&(Pf(n),i.uncache=1)}},Rf=function(e,t){var n={target:e,props:[],revert:jp,save:qp};return t&&t.split(",").forEach(function(i){return n.save(i)}),n},If,kl=function(e,t){var n=Pi.createElementNS?Pi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Pi.createElement(e);return n.style?n:Pi.createElement(e)},Zn=function o(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(yc,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&o(e,cs(t)||t,1)||""},Wc="O,Moz,ms,Ms,Webkit".split(","),cs=function(e,t,n){var i=t||Qi,r=i.style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Wc[a]+e in r););return a<0?null:(a===3?"ms":a>=0?Wc[a]:"")+e},Bl=function(){zp()&&window.document&&(Gc=window,Pi=Gc.document,Kr=Pi.documentElement,Qi=kl("div")||{style:{}},kl("div"),ft=cs(ft),jn=ft+"Origin",Qi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",If=!!cs("perspective"),vc=dn.core.reverting,xc=1)},zo=function o(e){var t=kl("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,a;if(Kr.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=o}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Kr.removeChild(t),this.style.cssText=r,a},Xc=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Ff=function(e){var t;try{t=e.getBBox()}catch{t=zo.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===zo||(t=zo.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Xc(e,["x","cx","x1"])||0,y:+Xc(e,["y","cy","y1"])||0,width:0,height:0}:t},Of=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Ff(e))},qs=function(e,t){if(t){var n=e.style;t in yi&&t!==jn&&(t=ft),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(yc,"-$1").toLowerCase())):n.removeAttribute(t)}},Ri=function(e,t,n,i,r,a){var s=new nn(e._pt,t,n,0,1,a?Lf:Df);return e._pt=s,s.b=i,s.e=r,e._props.push(n),s},Yc={deg:1,rad:1,turn:1},Zp={grid:1,flex:1},Bi=function o(e,t,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",s=Qi.style,l=Np.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",m=i==="%",_,d,p,g;return i===a||!r||Yc[i]||Yc[a]?r:(a!=="px"&&!f&&(r=o(e,t,n,"px")),g=e.getCTM&&Of(e),(m||a==="%")&&(yi[t]||~t.indexOf("adius"))?(_=g?e.getBBox()[l?"width":"height"]:e[u],gt(m?r/_*h:r/100*_)):(s[l?"width":"height"]=h+(f?a:i),d=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(d=(e.ownerSVGElement||{}).parentNode),(!d||d===Pi||!d.appendChild)&&(d=Pi.body),p=d._gsap,p&&m&&p.width&&l&&p.time===cn.time&&!p.uncache?gt(r/p.width*h):((m||a==="%")&&!Zp[Zn(d,"display")]&&(s.position=Zn(e,"position")),d===e&&(s.position="static"),d.appendChild(Qi),_=Qi[u],d.removeChild(Qi),s.position="absolute",l&&m&&(p=sr(d),p.time=cn.time,p.width=d[u]),gt(f?_*r/h:_&&r?h/_*r:0))))},ui=function(e,t,n,i){var r;return xc||Bl(),t in di&&t!=="transform"&&(t=di[t],~t.indexOf(",")&&(t=t.split(",")[0])),yi[t]&&t!=="transform"?(r=Zs(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:uo(Zn(e,jn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=co[t]&&co[t](e,t,n)||Zn(e,t)||Jh(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Bi(e,t,r,n)+n:r},Kp=function(e,t,n,i){if(!n||n==="none"){var r=cs(t,e,1),a=r&&Zn(e,r,1);a&&a!==n?(t=r,n=a):t==="borderColor"&&(n=Zn(e,"borderTopColor"))}var s=new nn(this._pt,e.style,t,0,1,Tf),l=0,c=0,u,h,f,m,_,d,p,g,y,S,b,v;if(s.b=n,s.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=Zn(e,t)||i,e.style[t]=n),u=[n,i],gf(u),n=u[0],i=u[1],f=n.match(Wr)||[],v=i.match(Wr)||[],v.length){for(;h=Wr.exec(i);)p=h[0],y=i.substring(l,h.index),_?_=(_+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(_=1),p!==(d=f[c++]||"")&&(m=parseFloat(d)||0,b=d.substr((m+"").length),p.charAt(1)==="="&&(p=Zr(m,p)+b),g=parseFloat(p),S=p.substr((g+"").length),l=Wr.lastIndex-S.length,S||(S=S||hn.units[t]||b,l===i.length&&(i+=S,s.e+=S)),b!==S&&(m=Bi(e,t,d,S)||0),s._pt={_next:s._pt,p:y||c===1?y:",",s:m,c:g-m,m:_&&_<4||t==="zIndex"?Math.round:0});s.c=l<i.length?i.substring(l,i.length):""}else s.r=t==="display"&&i==="none"?Lf:Df;return Yh.test(i)&&(s.e=0),this._pt=s,s},$c={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Jp=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=$c[n]||n,t[1]=$c[i]||i,t.join(" ")},Qp=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,a=n._gsap,s,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)s=r[c],yi[s]&&(l=1,s=s==="transformOrigin"?jn:ft),qs(n,s);l&&(qs(n,ft),a&&(a.svg&&n.removeAttribute("transform"),Zs(n,1),a.uncache=1,Pf(i)))}},co={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var a=e._pt=new nn(e._pt,t,n,0,0,Qp);return a.u=i,a.pr=-10,a.tween=r,e._props.push(n),1}}},js=[1,0,0,1,0,0],zf={},Nf=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},qc=function(e){var t=Zn(e,ft);return Nf(t)?js:t.substr(7).match(Xh).map(gt)},bc=function(e,t){var n=e._gsap||sr(e),i=e.style,r=qc(e),a,s,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?js:r):(r===js&&!e.offsetParent&&e!==Kr&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(c=1,s=e.nextElementSibling,Kr.appendChild(e)),r=qc(e),l?i.display=l:qs(e,"display"),c&&(s?a.insertBefore(e,s):a?a.appendChild(e):Kr.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Ul=function(e,t,n,i,r,a){var s=e._gsap,l=r||bc(e,!0),c=s.xOrigin||0,u=s.yOrigin||0,h=s.xOffset||0,f=s.yOffset||0,m=l[0],_=l[1],d=l[2],p=l[3],g=l[4],y=l[5],S=t.split(" "),b=parseFloat(S[0])||0,v=parseFloat(S[1])||0,T,C,x,E;n?l!==js&&(C=m*p-_*d)&&(x=b*(p/C)+v*(-d/C)+(d*y-p*g)/C,E=b*(-_/C)+v*(m/C)-(m*y-_*g)/C,b=x,v=E):(T=Ff(e),b=T.x+(~S[0].indexOf("%")?b/100*T.width:b),v=T.y+(~(S[1]||S[0]).indexOf("%")?v/100*T.height:v)),i||i!==!1&&s.smooth?(g=b-c,y=v-u,s.xOffset=h+(g*m+y*d)-g,s.yOffset=f+(g*_+y*p)-y):s.xOffset=s.yOffset=0,s.xOrigin=b,s.yOrigin=v,s.smooth=!!i,s.origin=t,s.originIsAbsolute=!!n,e.style[jn]="0px 0px",a&&(Ri(a,s,"xOrigin",c,b),Ri(a,s,"yOrigin",u,v),Ri(a,s,"xOffset",h,s.xOffset),Ri(a,s,"yOffset",f,s.yOffset)),e.setAttribute("data-svg-origin",b+" "+v)},Zs=function(e,t){var n=e._gsap||new yf(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,a="px",s="deg",l=getComputedStyle(e),c=Zn(e,jn)||"0",u,h,f,m,_,d,p,g,y,S,b,v,T,C,x,E,P,I,$,j,F,H,O,V,G,N,D,ee,Q,ne,ce,ye;return u=h=f=d=p=g=y=S=b=0,m=_=1,n.svg=!!(e.getCTM&&Of(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[ft]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+l[ft]),i.scale=i.rotate=i.translate="none"),C=bc(e,n.svg),n.svg&&(V=(!n.uncache||c==="0px 0px")&&!t&&e.getAttribute("data-svg-origin"),Ul(e,V||c,!!V||n.originIsAbsolute,n.smooth!==!1,C)),v=n.xOrigin||0,T=n.yOrigin||0,C!==js&&(I=C[0],$=C[1],j=C[2],F=C[3],u=H=C[4],h=O=C[5],C.length===6?(m=Math.sqrt(I*I+$*$),_=Math.sqrt(F*F+j*j),d=I||$?Sr($,I)*$i:0,y=j||F?Sr(j,F)*$i+d:0,y&&(_*=Math.abs(Math.cos(y*Jr))),n.svg&&(u-=v-(v*I+T*j),h-=T-(v*$+T*F))):(ye=C[6],ne=C[7],D=C[8],ee=C[9],Q=C[10],ce=C[11],u=C[12],h=C[13],f=C[14],x=Sr(ye,Q),p=x*$i,x&&(E=Math.cos(-x),P=Math.sin(-x),V=H*E+D*P,G=O*E+ee*P,N=ye*E+Q*P,D=H*-P+D*E,ee=O*-P+ee*E,Q=ye*-P+Q*E,ce=ne*-P+ce*E,H=V,O=G,ye=N),x=Sr(-j,Q),g=x*$i,x&&(E=Math.cos(-x),P=Math.sin(-x),V=I*E-D*P,G=$*E-ee*P,N=j*E-Q*P,ce=F*P+ce*E,I=V,$=G,j=N),x=Sr($,I),d=x*$i,x&&(E=Math.cos(x),P=Math.sin(x),V=I*E+$*P,G=H*E+O*P,$=$*E-I*P,O=O*E-H*P,I=V,H=G),p&&Math.abs(p)+Math.abs(d)>359.9&&(p=d=0,g=180-g),m=gt(Math.sqrt(I*I+$*$+j*j)),_=gt(Math.sqrt(O*O+ye*ye)),x=Sr(H,O),y=Math.abs(x)>2e-4?x*$i:0,b=ce?1/(ce<0?-ce:ce):0),n.svg&&(V=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Nf(Zn(e,ft)),V&&e.setAttribute("transform",V))),Math.abs(y)>90&&Math.abs(y)<270&&(r?(m*=-1,y+=d<=0?180:-180,d+=d<=0?180:-180):(_*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=gt(m),n.scaleY=gt(_),n.rotation=gt(d)+s,n.rotationX=gt(p)+s,n.rotationY=gt(g)+s,n.skewX=y+s,n.skewY=S+s,n.transformPerspective=b+a,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[jn]=uo(c)),n.xOffset=n.yOffset=0,n.force3D=hn.force3D,n.renderTransform=n.svg?tm:If?kf:em,n.uncache=0,n},uo=function(e){return(e=e.split(" "))[0]+" "+e[1]},No=function(e,t,n){var i=Ot(t);return gt(parseFloat(t)+parseFloat(Bi(e,"x",n+"px",i)))+i},em=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,kf(e,t)},Vi="0deg",bs="0px",Hi=") ",kf=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,s=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,m=n.skewY,_=n.scaleX,d=n.scaleY,p=n.transformPerspective,g=n.force3D,y=n.target,S=n.zOrigin,b="",v=g==="auto"&&e&&e!==1||g===!0;if(S&&(h!==Vi||u!==Vi)){var T=parseFloat(u)*Jr,C=Math.sin(T),x=Math.cos(T),E;T=parseFloat(h)*Jr,E=Math.cos(T),a=No(y,a,C*E*-S),s=No(y,s,-Math.sin(T)*-S),l=No(y,l,x*E*-S+S)}p!==bs&&(b+="perspective("+p+Hi),(i||r)&&(b+="translate("+i+"%, "+r+"%) "),(v||a!==bs||s!==bs||l!==bs)&&(b+=l!==bs||v?"translate3d("+a+", "+s+", "+l+") ":"translate("+a+", "+s+Hi),c!==Vi&&(b+="rotate("+c+Hi),u!==Vi&&(b+="rotateY("+u+Hi),h!==Vi&&(b+="rotateX("+h+Hi),(f!==Vi||m!==Vi)&&(b+="skew("+f+", "+m+Hi),(_!==1||d!==1)&&(b+="scale("+_+", "+d+Hi),y.style[ft]=b||"translate(0, 0)"},tm=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,s=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,m=n.target,_=n.xOrigin,d=n.yOrigin,p=n.xOffset,g=n.yOffset,y=n.forceCSS,S=parseFloat(a),b=parseFloat(s),v,T,C,x,E;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Jr,c*=Jr,v=Math.cos(l)*h,T=Math.sin(l)*h,C=Math.sin(l-c)*-f,x=Math.cos(l-c)*f,c&&(u*=Jr,E=Math.tan(c-u),E=Math.sqrt(1+E*E),C*=E,x*=E,u&&(E=Math.tan(u),E=Math.sqrt(1+E*E),v*=E,T*=E)),v=gt(v),T=gt(T),C=gt(C),x=gt(x)):(v=h,x=f,T=C=0),(S&&!~(a+"").indexOf("px")||b&&!~(s+"").indexOf("px"))&&(S=Bi(m,"x",a,"px"),b=Bi(m,"y",s,"px")),(_||d||p||g)&&(S=gt(S+_-(_*v+d*C)+p),b=gt(b+d-(_*T+d*x)+g)),(i||r)&&(E=m.getBBox(),S=gt(S+i/100*E.width),b=gt(b+r/100*E.height)),E="matrix("+v+","+T+","+C+","+x+","+S+","+b+")",m.setAttribute("transform",E),y&&(m.style[ft]=E)},nm=function(e,t,n,i,r){var a=360,s=Dt(r),l=parseFloat(r)*(s&&~r.indexOf("rad")?$i:1),c=l-i,u=i+c+"deg",h,f;return s&&(h=r.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*Hc)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*Hc)%a-~~(c/a)*a)),e._pt=f=new nn(e._pt,t,n,i,c,Bp),f.e=u,f.u="deg",e._props.push(n),f},jc=function(e,t){for(var n in t)e[n]=t[n];return e},im=function(e,t,n){var i=jc({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,s,l,c,u,h,f,m,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[ft]=t,s=Zs(n,1),qs(n,ft),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ft],a[ft]=t,s=Zs(n,1),a[ft]=c);for(l in yi)c=i[l],u=s[l],c!==u&&r.indexOf(l)<0&&(m=Ot(c),_=Ot(u),h=m!==_?Bi(n,l,c,_):parseFloat(c),f=parseFloat(u),e._pt=new nn(e._pt,s,l,h,f-h,Nl),e._pt.u=_||0,e._props.push(l));jc(s,i)};tn("padding,margin,Width,Radius",function(o,e){var t="Top",n="Right",i="Bottom",r="Left",a=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(s){return e<2?o+s:"border"+s+o});co[e>1?"border"+o:o]=function(s,l,c,u,h){var f,m;if(arguments.length<4)return f=a.map(function(_){return ui(s,_,c)}),m=f.join(" "),m.split(f[0]).length===5?f[0]:m;f=(u+"").split(" "),m={},a.forEach(function(_,d){return m[_]=f[d]=f[d]||f[(d-1)/2|0]}),s.init(l,m,h)}});var Bf={name:"css",register:Bl,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var a=this._props,s=e.style,l=n.vars.startAt,c,u,h,f,m,_,d,p,g,y,S,b,v,T,C,x;xc||Bl(),this.styles=this.styles||Rf(e),x=this.styles.props,this.tween=n;for(d in t)if(d!=="autoRound"&&(u=t[d],!(ln[d]&&bf(d,t,n,i,e,r)))){if(m=typeof u,_=co[d],m==="function"&&(u=u.call(n,i,e,r),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=Ys(u)),_)_(this,e,d,u,n)&&(C=1);else if(d.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(d)+"").trim(),u+="",zi.lastIndex=0,zi.test(c)||(p=Ot(c),g=Ot(u)),g?p!==g&&(c=Bi(e,d,c,g)+g):p&&(u+=p),this.add(s,"setProperty",c,u,i,r,0,0,d),a.push(d),x.push(d,s[d]);else if(m!=="undefined"){if(l&&d in l?(c=typeof l[d]=="function"?l[d].call(n,i,e,r):l[d],Dt(c)&&~c.indexOf("random(")&&(c=Ys(c)),Ot(c+"")||(c+=hn.units[d]||Ot(ui(e,d))||""),(c+"").charAt(1)==="="&&(c=ui(e,d))):c=ui(e,d),f=parseFloat(c),y=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),d in di&&(d==="autoAlpha"&&(f===1&&ui(e,"visibility")==="hidden"&&h&&(f=0),x.push("visibility",s.visibility),Ri(this,s,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),d!=="scale"&&d!=="transform"&&(d=di[d],~d.indexOf(",")&&(d=d.split(",")[0]))),S=d in yi,S){if(this.styles.save(d),b||(v=e._gsap,v.renderTransform&&!t.parseTransform||Zs(e,t.parseTransform),T=t.smoothOrigin!==!1&&v.smooth,b=this._pt=new nn(this._pt,s,ft,0,1,v.renderTransform,v,0,-1),b.dep=1),d==="scale")this._pt=new nn(this._pt,v,"scaleY",v.scaleY,(y?Zr(v.scaleY,y+h):h)-v.scaleY||0,Nl),this._pt.u=0,a.push("scaleY",d),d+="X";else if(d==="transformOrigin"){x.push(jn,s[jn]),u=Jp(u),v.svg?Ul(e,u,0,T,0,this):(g=parseFloat(u.split(" ")[2])||0,g!==v.zOrigin&&Ri(this,v,"zOrigin",v.zOrigin,g),Ri(this,s,d,uo(c),uo(u)));continue}else if(d==="svgOrigin"){Ul(e,u,1,T,0,this);continue}else if(d in zf){nm(this,v,d,f,y?Zr(f,y+u):u);continue}else if(d==="smoothOrigin"){Ri(this,v,"smooth",v.smooth,u);continue}else if(d==="force3D"){v[d]=u;continue}else if(d==="transform"){im(this,u,e);continue}}else d in s||(d=cs(d)||d);if(S||(h||h===0)&&(f||f===0)&&!kp.test(u)&&d in s)p=(c+"").substr((f+"").length),h||(h=0),g=Ot(u)||(d in hn.units?hn.units[d]:p),p!==g&&(f=Bi(e,d,c,g)),this._pt=new nn(this._pt,S?v:s,d,f,(y?Zr(f,y+h):h)-f,!S&&(g==="px"||d==="zIndex")&&t.autoRound!==!1?Gp:Nl),this._pt.u=g||0,p!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=Up);else if(d in s)Kp.call(this,e,d,c,y?y+u:u);else if(d in e)this.add(e,d,c||e[d],y?y+u:u,i,r);else{cc(d,u);continue}S||x.push(d,s[d]),a.push(d)}}C&&Af(this)},render:function(e,t){if(t.tween._time||!vc())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ui,aliases:di,getSetter:function(e,t,n){var i=di[t];return i&&i.indexOf(",")<0&&(t=i),t in yi&&t!==jn&&(e._gsap.x||ui(e,"x"))?n&&Vc===n?t==="scale"?Xp:Wp:(Vc=n||{})&&(t==="scale"?Yp:$p):e.style&&!oc(e.style[t])?Vp:~t.indexOf("-")?Hp:gc(e,t)},core:{_removeProperty:qs,_getMatrix:bc}};dn.utils.checkPrefix=cs;dn.core.getStyleSaver=Rf;(function(o,e,t,n){var i=tn(o+","+e+","+t,function(r){yi[r]=1});tn(e,function(r){hn.units[r]="deg",zf[r]=1}),di[i[13]]=o+","+e,tn(n,function(r){var a=r.split(":");di[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");tn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){hn.units[o]="px"});dn.registerPlugin(Bf);var Uf=dn.registerPlugin(Bf)||dn;Uf.core.Tween;function Zc(o,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(o,n.key,n)}}function rm(o,e,t){return e&&Zc(o.prototype,e),t&&Zc(o,t),o}/*!
 * Observer 3.11.0
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ht,Gl,un,er,tr,Qr,Gf,qi,ks,Vf,pi,Nn,Hf=function(){return Ht||typeof window<"u"&&(Ht=window.gsap)&&Ht.registerPlugin&&Ht},Wf=1,Yr=[],Je=[],Kn=[],Bs=Date.now,Vl=function(e,t){return t},sm=function(){var e=ks.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,Je),i.push.apply(i,Kn),Je=n,Kn=i,Vl=function(a,s){return t[a](s)}},Ni=function(e,t){return~Kn.indexOf(e)&&Kn[Kn.indexOf(e)+1][t]},Ya=function(e){return!!~Vf.indexOf(e)},qt=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},kt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ha="scrollLeft",fa="scrollTop",Kc=function(){return pi&&pi.isPressed||Je.cache++},ho=function(e,t){var n=function i(r){if(r||r===0){Wf&&(un.history.scrollRestoration="manual");var a=pi&&pi.isPressed;r=i.v=Math.round(r)||(pi&&pi.iOS?1:0),e(r),i.cacheID=Je.cache,a&&Vl("ss",r)}else(t||Je.cache!==i.cacheID||Vl("ref"))&&(i.cacheID=Je.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Vt={s:ha,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:ho(function(o){return arguments.length?un.scrollTo(o,wt.sc()):un.pageXOffset||er[ha]||tr[ha]||Qr[ha]||0})},wt={s:fa,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Vt,sc:ho(function(o){return arguments.length?un.scrollTo(Vt.sc(),o):un.pageYOffset||er[fa]||tr[fa]||Qr[fa]||0})},jt=function(e){return Ht.utils.toArray(e)[0]||(typeof e=="string"&&Ht.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Ui=function(e,t){var n=t.s,i=t.sc,r=Je.indexOf(e),a=i===wt.sc?1:2;return!~r&&(r=Je.push(e)-1),Je[r+a]||(Je[r+a]=ho(Ni(e,n),!0)||(Ya(e)?i:ho(function(s){return arguments.length?e[n]=s:e[n]})))},Hl=function(e,t,n){var i=e,r=e,a=Bs(),s=a,l=t||50,c=Math.max(500,l*3),u=function(_,d){var p=Bs();d||p-a>l?(r=i,i=_,s=a,a=p):n?i+=_:i=r+(_-r)/(p-s)*(a-s)},h=function(){r=i=n?0:i,s=a=0},f=function(_){var d=s,p=r,g=Bs();return(_||_===0)&&_!==i&&u(_),a===s||g-s>c?0:(i+(n?p:-p))/((n?g:a)-d)*1e3};return{update:u,reset:h,getVelocity:f}},Ss=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Jc=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Xf=function(){ks=Ht.core.globals().ScrollTrigger,ks&&ks.core&&sm()},Yf=function(e){return Ht=e||Hf(),Ht&&typeof document<"u"&&document.body&&(un=window,er=document,tr=er.documentElement,Qr=er.body,Vf=[un,er,tr,Qr],Ht.utils.clamp,qi="onpointerenter"in Qr?"pointer":"mouse",Gf=bt.isTouch=un.matchMedia&&un.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in un||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Nn=bt.eventTypes=("ontouchstart"in tr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in tr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Wf=0},500),Xf(),Gl=1),Gl};Vt.op=wt;Je.cache=0;var bt=function(){function o(t){this.init(t)}var e=o.prototype;return e.init=function(n){Gl||Yf(Ht)||console.warn("Please gsap.registerPlugin(Observer)"),ks||Xf();var i=n.tolerance,r=n.dragMinimum,a=n.type,s=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,m=n.ignore,_=n.wheelSpeed,d=n.event,p=n.onDragStart,g=n.onDragEnd,y=n.onDrag,S=n.onPress,b=n.onRelease,v=n.onRight,T=n.onLeft,C=n.onUp,x=n.onDown,E=n.onChangeX,P=n.onChangeY,I=n.onChange,$=n.onToggleX,j=n.onToggleY,F=n.onHover,H=n.onHoverEnd,O=n.onMove,V=n.ignoreCheck,G=n.isNormalizer,N=n.onGestureStart,D=n.onGestureEnd,ee=n.onWheel,Q=n.onEnable,ne=n.onDisable,ce=n.onClick,ye=n.scrollSpeed,W=n.capture,Ie=n.allowClicks,be=n.lockAxis,Pe=n.onLockAxis;this.target=s=jt(s)||tr,this.vars=n,m&&(m=Ht.utils.toArray(m)),i=i||1e-9,r=r||0,_=_||1,ye=ye||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(un.getComputedStyle(Qr).lineHeight)||22);var ue,Ne,me,_e,Ye,et,He,Y=this,Qe=0,Ce=0,pt=Ui(s,Vt),lt=Ui(s,wt),L=pt(),M=lt(),q=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Nn[0]==="pointerdown",ie=Ya(s),te=s.ownerDocument||er,oe=[0,0,0],ve=[0,0,0],A=0,J=function(){return A=Bs()},re=function(K,we){return(Y.event=K)&&m&&~m.indexOf(K.target)||we&&q&&K.pointerType!=="touch"||V&&V(K,we)},de=function(){Y._vx.reset(),Y._vy.reset(),Ne.pause(),h&&h(Y)},le=function(){var K=Y.deltaX=Jc(oe),we=Y.deltaY=Jc(ve),Se=Math.abs(K)>=i,Re=Math.abs(we)>=i;I&&(Se||Re)&&I(Y,K,we,oe,ve),Se&&(v&&Y.deltaX>0&&v(Y),T&&Y.deltaX<0&&T(Y),E&&E(Y),$&&Y.deltaX<0!=Qe<0&&$(Y),Qe=Y.deltaX,oe[0]=oe[1]=oe[2]=0),Re&&(x&&Y.deltaY>0&&x(Y),C&&Y.deltaY<0&&C(Y),P&&P(Y),j&&Y.deltaY<0!=Ce<0&&j(Y),Ce=Y.deltaY,ve[0]=ve[1]=ve[2]=0),(_e||me)&&(O&&O(Y),me&&(y(Y),me=!1),_e=!1),et&&!(et=!1)&&Pe&&Pe(Y),Ye&&(ee(Y),Ye=!1),ue=0},Te=function(K,we,Se){oe[Se]+=K,ve[Se]+=we,Y._vx.update(K),Y._vy.update(we),c?ue||(ue=requestAnimationFrame(le)):le()},ke=function(K,we){He!=="y"&&(oe[2]+=K,Y._vx.update(K,!0)),He!=="x"&&(ve[2]+=we,Y._vy.update(we,!0)),be&&!He&&(Y.axis=He=Math.abs(K)>Math.abs(we)?"x":"y",et=!0),c?ue||(ue=requestAnimationFrame(le)):le()},Ae=function(K){if(!re(K,1)){K=Ss(K,u);var we=K.clientX,Se=K.clientY,Re=we-Y.x,mt=Se-Y.y,ze=Y.isDragging;Y.x=we,Y.y=Se,(ze||Math.abs(Y.startX-we)>=r||Math.abs(Y.startY-Se)>=r)&&(y&&(me=!0),ze||(Y.isDragging=!0),ke(Re,mt),ze||p&&p(Y))}},R=Y.onPress=function(Oe){re(Oe,1)||(Y.axis=He=null,Ne.pause(),Y.isPressed=!0,Oe=Ss(Oe),Qe=Ce=0,Y.startX=Y.x=Oe.clientX,Y.startY=Y.y=Oe.clientY,Y._vx.reset(),Y._vy.reset(),qt(G?s:te,Nn[1],Ae,u,!0),Y.deltaX=Y.deltaY=0,S&&S(Y))},se=function(K){if(!re(K,1)){kt(G?s:te,Nn[1],Ae,!0);var we=Y.isDragging&&(Math.abs(Y.x-Y.startX)>3||Math.abs(Y.y-Y.startY)>3),Se=Ss(K);we||(Y._vx.reset(),Y._vy.reset(),u&&Ie&&Ht.delayedCall(.08,function(){if(Bs()-A>300&&!K.defaultPrevented){if(K.target.click)K.target.click();else if(te.createEvent){var Re=te.createEvent("MouseEvents");Re.initMouseEvent("click",!0,!0,un,1,Se.screenX,Se.screenY,Se.clientX,Se.clientY,!1,!1,!1,!1,0,null),K.target.dispatchEvent(Re)}}})),Y.isDragging=Y.isGesturing=Y.isPressed=!1,h&&!G&&Ne.restart(!0),g&&we&&g(Y),b&&b(Y,we)}},X=function(K){return K.touches&&K.touches.length>1&&(Y.isGesturing=!0)&&N(K,Y.isDragging)},he=function(){return(Y.isGesturing=!1)||D(Y)},fe=function(K){if(!re(K)){var we=pt(),Se=lt();Te((we-L)*ye,(Se-M)*ye,1),L=we,M=Se,h&&Ne.restart(!0)}},Ue=function(K){if(!re(K)){K=Ss(K,u),ee&&(Ye=!0);var we=(K.deltaMode===1?l:K.deltaMode===2?un.innerHeight:1)*_;Te(K.deltaX*we,K.deltaY*we,0),h&&!G&&Ne.restart(!0)}},st=function(K){if(!re(K)){var we=K.clientX,Se=K.clientY,Re=we-Y.x,mt=Se-Y.y;Y.x=we,Y.y=Se,_e=!0,(Re||mt)&&ke(Re,mt)}},je=function(K){Y.event=K,F(Y)},$t=function(K){Y.event=K,H(Y)},tt=function(K){return re(K)||Ss(K,u)&&ce(Y)};Ne=Y._dc=Ht.delayedCall(f||.25,de).pause(),Y.deltaX=Y.deltaY=0,Y._vx=Hl(0,50,!0),Y._vy=Hl(0,50,!0),Y.scrollX=pt,Y.scrollY=lt,Y.isDragging=Y.isGesturing=Y.isPressed=!1,Y.enable=function(Oe){return Y.isEnabled||(qt(ie?te:s,"scroll",Kc),a.indexOf("scroll")>=0&&qt(ie?te:s,"scroll",fe,u,W),a.indexOf("wheel")>=0&&qt(s,"wheel",Ue,u,W),(a.indexOf("touch")>=0&&Gf||a.indexOf("pointer")>=0)&&(qt(s,Nn[0],R,u,W),qt(te,Nn[2],se),qt(te,Nn[3],se),Ie&&qt(s,"click",J,!1,!0),ce&&qt(s,"click",tt),N&&qt(te,"gesturestart",X),D&&qt(te,"gestureend",he),F&&qt(s,qi+"enter",je),H&&qt(s,qi+"leave",$t),O&&qt(s,qi+"move",st)),Y.isEnabled=!0,Oe&&Oe.type&&R(Oe),Q&&Q(Y)),Y},Y.disable=function(){Y.isEnabled&&(Yr.filter(function(Oe){return Oe!==Y&&Ya(Oe.target)}).length||kt(ie?te:s,"scroll",Kc),Y.isPressed&&(Y._vx.reset(),Y._vy.reset(),kt(G?s:te,Nn[1],Ae,!0)),kt(ie?te:s,"scroll",fe,W),kt(s,"wheel",Ue,W),kt(s,Nn[0],R,W),kt(te,Nn[2],se),kt(te,Nn[3],se),kt(s,"click",J,!0),kt(s,"click",tt),kt(te,"gesturestart",X),kt(te,"gestureend",he),kt(s,qi+"enter",je),kt(s,qi+"leave",$t),kt(s,qi+"move",st),Y.isEnabled=Y.isPressed=Y.isDragging=!1,ne&&ne(Y))},Y.kill=function(){Y.disable();var Oe=Yr.indexOf(Y);Oe>=0&&Yr.splice(Oe,1),pi===Y&&(pi=0)},Yr.push(Y),G&&Ya(s)&&(pi=Y),Y.enable(d)},rm(o,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),o}();bt.version="3.11.0";bt.create=function(o){return new bt(o)};bt.register=Yf;bt.getAll=function(){return Yr.slice()};bt.getById=function(o){return Yr.filter(function(e){return e.vars.id===o})[0]};Hf()&&Ht.registerPlugin(bt);/*!
 * ScrollTrigger 3.11.0
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ee,Gr,$e,ut,mi,ht,$f,fo,po,$r,$a,da,Lt,yo,Wl,Ut,Qc,eu,Vr,qf,ko,jf,bn,Zf,Kf,Jf,Di,Xl,Bo,pa=1,Gt=Date.now,Uo=Gt(),Dn=0,ma=0,tu=function(){return yo=1},nu=function(){return yo=0},Wn=function(e){return e},Ds=function(e){return Math.round(e*1e5)/1e5||0},Qf=function(){return typeof window<"u"},ed=function(){return Ee||Qf()&&(Ee=window.gsap)&&Ee.registerPlugin&&Ee},dr=function(e){return!!~$f.indexOf(e)},td=function(e){return Ni(e,"getBoundingClientRect")||(dr(e)?function(){return eo.width=$e.innerWidth,eo.height=$e.innerHeight,eo}:function(){return hi(e)})},am=function(e,t,n){var i=n.d,r=n.d2,a=n.a;return(a=Ni(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?$e["inner"+r]:e["client"+r])||0}},om=function(e,t){return!t||~Kn.indexOf(e)?td(e):function(){return eo}},Ii=function(e,t){var n=t.s,i=t.d2,r=t.d,a=t.a;return(n="scroll"+i)&&(a=Ni(e,n))?a()-td(e)()[r]:dr(e)?(mi[n]||ht[n])-($e["inner"+i]||mi["client"+i]||ht["client"+i]):e[n]-e["offset"+i]},ga=function(e,t){for(var n=0;n<Vr.length;n+=3)(!t||~t.indexOf(Vr[n+1]))&&e(Vr[n],Vr[n+1],Vr[n+2])},Hn=function(e){return typeof e=="string"},gi=function(e){return typeof e=="function"},Ls=function(e){return typeof e=="number"},qa=function(e){return typeof e=="object"},Ms=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Go=function(e,t){if(e.enabled){var n=t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Mr=Math.abs,nd="left",id="top",Sc="right",Mc="bottom",lr="width",cr="height",Us="Right",Gs="Left",Vs="Top",Hs="Bottom",vt="padding",Sn="margin",us="Width",wc="Height",Bt="px",$n=function(e){return $e.getComputedStyle(e)},lm=function(e){var t=$n(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},iu=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},hi=function(e,t){var n=t&&$n(e)[Wl]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ee.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Yl=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},rd=function(e){var t=[],n=e.labels,i=e.duration(),r;for(r in n)t.push(n[r]/i);return t},cm=function(e){return function(t){return Ee.utils.snap(rd(e),t)}},Ec=function(e){var t=Ee.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,r){return i-r});return n?function(i,r,a){a===void 0&&(a=.001);var s;if(!r)return t(i);if(r>0){for(i-=a,s=0;s<n.length;s++)if(n[s]>=i)return n[s];return n[s-1]}else for(s=n.length,i+=a;s--;)if(n[s]<=i)return n[s];return n[0]}:function(i,r,a){a===void 0&&(a=.001);var s=t(i);return!r||Math.abs(s-i)<a||s-i<0==r<0?s:t(r<0?i-e:i+e)}},um=function(e){return function(t,n){return Ec(rd(e))(t,n.direction)}},_a=function(e,t,n,i){return n.split(",").forEach(function(r){return e(t,r,i)})},Pt=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},At=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},xa=function(e,t,n){return n&&n.wheelHandler&&e(t,"wheel",n)},ru={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},va={toggleActions:"play",anticipatePin:0},mo={top:0,left:0,center:.5,bottom:1,right:1},ja=function(e,t){if(Hn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in mo?mo[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},ya=function(e,t,n,i,r,a,s,l){var c=r.startColor,u=r.endColor,h=r.fontSize,f=r.indent,m=r.fontWeight,_=ut.createElement("div"),d=dr(n)||Ni(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,g=d?ht:n,y=e.indexOf("start")!==-1,S=y?c:u,b="border-color:"+S+";font-size:"+h+";color:"+S+";font-weight:"+m+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return b+="position:"+((p||l)&&d?"fixed;":"absolute;"),(p||l||!d)&&(b+=(i===wt?Sc:Mc)+":"+(a+parseFloat(f))+"px;"),s&&(b+="box-sizing:border-box;text-align:left;width:"+s.offsetWidth+"px;"),_._isStart=y,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=b,_.innerText=t||t===0?e+"-"+t:e,g.children[0]?g.insertBefore(_,g.children[0]):g.appendChild(_),_._offset=_["offset"+i.op.d2],Za(_,0,i,y),_},Za=function(e,t,n,i){var r={display:"block"},a=n[i?"os2":"p2"],s=n[i?"p2":"os2"];e._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+a+us]=1,r["border"+s+us]=0,r[n.p]=t+"px",Ee.set(e,r)},We=[],$l={},ql,su=function(){return Gt()-Dn>34&&Js()},wr=function(){(!bn||!bn.isPressed||bn.startX>ht.clientWidth)&&(Je.cache++,ql||(ql=requestAnimationFrame(Js)),Dn||mr("scrollStart"),Dn=Gt())},au=function(){Jf=$e.innerWidth,Kf=$e.innerHeight},Ps=function(){Je.cache++,!Lt&&!jf&&!ut.fullscreenElement&&!ut.webkitFullscreenElement&&(!Zf||Jf!==$e.innerWidth||Math.abs($e.innerHeight-Kf)>$e.innerHeight*.25)&&fo.restart(!0)},pr={},hm=[],sd=function o(){return At(Ze,"scrollEnd",o)||qr(!0)},mr=function(e){return pr[e]&&pr[e].map(function(t){return t()})||hm},on=[],ad=function(e){for(var t=0;t<on.length;t+=5)(!e||on[t+4]&&on[t+4].query===e)&&(on[t].style.cssText=on[t+1],on[t].getBBox&&on[t].setAttribute("transform",on[t+2]||""),on[t+3].uncache=1)},Tc=function(e,t){var n;for(Ut=0;Ut<We.length;Ut++)n=We[Ut],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));t&&ad(t),t||mr("revert")},od=function(){return Je.cache++&&Je.forEach(function(e){return typeof e=="function"&&(e.rec=0)})},Ks,Ka=0,qr=function(e,t){if(Dn&&!e){Pt(Ze,"scrollEnd",sd);return}Ks=!0;var n=mr("refreshInit");qf&&Ze.sort(),t||Tc(),We.slice(0).forEach(function(i){return i.refresh()}),We.forEach(function(i){return i.vars.end==="max"&&i.setPositions(i.start,Math.max(i.start+1,Ii(i.scroller,i._dir)))}),n.forEach(function(i){return i&&i.render&&i.render(-1)}),od(),fo.pause(),Ka++,Ks=!1,mr("refresh")},ou=0,Ja=1,Ki,Js=function(){if(!Ks){Ze.isUpdating=!0,Ki&&Ki.update(0);var e=We.length,t=Gt(),n=t-Uo>=50,i=e&&We[0].scroll();if(Ja=ou>i?-1:1,ou=i,n&&(Dn&&!yo&&t-Dn>200&&(Dn=0,mr("scrollEnd")),$a=Uo,Uo=t),Ja<0){for(Ut=e;Ut-- >0;)We[Ut]&&We[Ut].update(0,n);Ja=1}else for(Ut=0;Ut<e;Ut++)We[Ut]&&We[Ut].update(0,n);Ze.isUpdating=!1}ql=0},jl=[nd,id,Mc,Sc,Sn+Hs,Sn+Us,Sn+Vs,Sn+Gs,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Qa=jl.concat([lr,cr,"boxSizing","max"+us,"max"+wc,"position",Sn,vt,vt+Vs,vt+Us,vt+Hs,vt+Gs]),fm=function(e,t,n){Qs(n);var i=e._gsap;if(i.spacerIsNative)Qs(i.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},Vo=function(e,t,n,i){if(!e._gsap.swappedIn){for(var r=jl.length,a=t.style,s=e.style,l;r--;)l=jl[r],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),s[Mc]=s[Sc]=a.flexBasis="auto",a.overflow="visible",a.boxSizing="border-box",a[lr]=Yl(e,Vt)+Bt,a[cr]=Yl(e,wt)+Bt,a[vt]=s[Sn]=s[id]=s[nd]="0",Qs(i),s[lr]=s["max"+us]=n[lr],s[cr]=s["max"+wc]=n[cr],s[vt]=n[vt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},dm=/([A-Z])/g,Qs=function(e){if(e){var t=e.t.style,n=e.length,i=0,r,a;for((e.t._gsap||Ee.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],r=e[i],a?t[r]=a:t[r]&&t.removeProperty(r.replace(dm,"-$1").toLowerCase())}},ba=function(e){for(var t=Qa.length,n=e.style,i=[],r=0;r<t;r++)i.push(Qa[r],n[Qa[r]]);return i.t=e,i},pm=function(e,t,n){for(var i=[],r=e.length,a=n?8:0,s;a<r;a+=2)s=e[a],i.push(s,s in t?t[s]:e[a+1]);return i.t=e.t,i},eo={left:0,top:0},lu=function(e,t,n,i,r,a,s,l,c,u,h,f,m){gi(e)&&(e=e(l)),Hn(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?ja("0"+e.substr(3),n):0));var _=m?m.time():0,d,p,g;if(m&&m.seek(0),Ls(e))s&&Za(s,n,i,!0);else{gi(t)&&(t=t(l));var y=(e||"0").split(" "),S,b,v,T;g=jt(t)||ht,S=hi(g)||{},(!S||!S.left&&!S.top)&&$n(g).display==="none"&&(T=g.style.display,g.style.display="block",S=hi(g),T?g.style.display=T:g.style.removeProperty("display")),b=ja(y[0],S[i.d]),v=ja(y[1]||"0",n),e=S[i.p]-c[i.p]-u+b+r-v,s&&Za(s,v,i,n-v<20||s._isStart&&v>20),n-=n-v}if(a){var C=e+n,x=a._isStart;d="scroll"+i.d2,Za(a,C,i,x&&C>20||!x&&(h?Math.max(ht[d],mi[d]):a.parentNode[d])<=C+1),h&&(c=hi(s),h&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+Bt))}return m&&g&&(d=hi(g),m.seek(f),p=hi(g),m._caScrollDist=d[i.p]-p[i.p],e=e/m._caScrollDist*f),m&&m.seek(_),m?e:Math.round(e)},mm=/(webkit|moz|length|cssText|inset)/i,cu=function(e,t,n,i){if(e.parentNode!==t){var r=e.style,a,s;if(t===ht){e._stOrig=r.cssText,s=$n(e);for(a in s)!+a&&!mm.test(a)&&s[a]&&typeof r[a]=="string"&&a!=="0"&&(r[a]=s[a]);r.top=n,r.left=i}else r.cssText=e._stOrig;Ee.core.getCache(e).uncache=1,t.appendChild(e)}},uu=function(e,t){var n=Ui(e,t),i="_scroll"+t.p2,r,a,s=function l(c,u,h,f,m){var _=l.tween,d=u.onComplete,p={};return h=h||n(),m=f&&m||0,f=f||c-h,_&&_.kill(),r=Math.round(h),u[i]=c,u.modifiers=p,p[i]=function(g){return g=Math.round(n()),g!==r&&g!==a&&Math.abs(g-r)>3&&Math.abs(g-a)>3?(_.kill(),l.tween=0):g=h+f*_.ratio+m*_.ratio*_.ratio,a=r,r=Math.round(g)},u.onComplete=function(){l.tween=0,d&&d.call(_)},_=l.tween=Ee.to(e,u),_};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Pt(e,"wheel",n.wheelHandler),s},Ze=function(){function o(t,n){Gr||o.register(Ee)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),this.init(t,n)}var e=o.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ma){this.update=this.refresh=this.kill=Wn;return}n=iu(Hn(n)||Ls(n)||n.nodeType?{trigger:n}:n,va);var r=n,a=r.onUpdate,s=r.toggleClass,l=r.id,c=r.onToggle,u=r.onRefresh,h=r.scrub,f=r.trigger,m=r.pin,_=r.pinSpacing,d=r.invalidateOnRefresh,p=r.anticipatePin,g=r.onScrubComplete,y=r.onSnapComplete,S=r.once,b=r.snap,v=r.pinReparent,T=r.pinSpacer,C=r.containerAnimation,x=r.fastScrollEnd,E=r.preventOverlaps,P=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Vt:wt,I=!h&&h!==0,$=jt(n.scroller||$e),j=Ee.core.getCache($),F=dr($),H=("pinType"in n?n.pinType:Ni($,"pinType")||F&&"fixed")==="fixed",O=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],V=I&&n.toggleActions.split(" "),G="markers"in n?n.markers:va.markers,N=F?0:parseFloat($n($)["border"+P.p2+us])||0,D=this,ee=n.onRefreshInit&&function(){return n.onRefreshInit(D)},Q=am($,F,P),ne=om($,F),ce=0,ye=0,W=Ui($,P),Ie,be,Pe,ue,Ne,me,_e,Ye,et,He,Y,Qe,Ce,pt,lt,L,M,q,ie,te,oe,ve,A,J,re,de,le,Te,ke,Ae,R,se,X,he,fe,Ue,st,je;if(Xl(D),D._dir=P,p*=45,D.scroller=$,D.scroll=C?C.time.bind(C):W,ue=W(),D.vars=n,i=i||n.animation,"refreshPriority"in n&&(qf=1,n.refreshPriority===-9999&&(Ki=D)),j.tweenScroll=j.tweenScroll||{top:uu($,wt),left:uu($,Vt)},D.tweenTo=Ie=j.tweenScroll[P.p],D.scrubDuration=function(K){R=Ls(K)&&K,R?Ae?Ae.duration(K):Ae=Ee.to(i,{ease:"expo",totalProgress:"+=0.001",duration:R,paused:!0,onComplete:function(){return g&&g(D)}}):(Ae&&Ae.progress(1).kill(),Ae=0)},i&&(i.vars.lazy=!1,i._initted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.render(0,!0,!0),D.animation=i.pause(),i.scrollTrigger=D,D.scrubDuration(h),Te=0,l||(l=i.vars.id)),We.push(D),b&&((!qa(b)||b.push)&&(b={snapTo:b}),"scrollBehavior"in ht.style&&Ee.set(F?[ht,mi]:$,{scrollBehavior:"auto"}),Pe=gi(b.snapTo)?b.snapTo:b.snapTo==="labels"?cm(i):b.snapTo==="labelsDirectional"?um(i):b.directional!==!1?function(K,we){return Ec(b.snapTo)(K,Gt()-ye<500?0:we.direction)}:Ee.utils.snap(b.snapTo),se=b.duration||{min:.1,max:2},se=qa(se)?$r(se.min,se.max):$r(se,se),X=Ee.delayedCall(b.delay||R/2||.1,function(){var K=W(),we=Gt()-ye<500,Se=Ie.tween;if((we||Math.abs(D.getVelocity())<10)&&!Se&&!yo&&ce!==K){var Re=(K-me)/Ce,mt=i&&!I?i.totalProgress():Re,ze=we?0:(mt-ke)/(Gt()-$a)*1e3||0,ct=Ee.utils.clamp(-Re,1-Re,Mr(ze/2)*ze/.185),w=Re+(b.inertia===!1?0:ct),k=$r(0,1,Pe(w,D)),U=Math.round(me+k*Ce),B=b,Z=B.onStart,ge=B.onInterrupt,xe=B.onComplete;if(K<=_e&&K>=me&&U!==K){if(Se&&!Se._initted&&Se.data<=Mr(U-K))return;b.inertia===!1&&(ct=k-Re),Ie(U,{duration:se(Mr(Math.max(Mr(w-mt),Mr(k-mt))*.185/ze/.05||0)),ease:b.ease||"power3",data:Mr(U-K),onInterrupt:function(){return X.restart(!0)&&ge&&ge(D)},onComplete:function(){D.update(),ce=W(),Te=ke=i&&!I?i.totalProgress():D.progress,y&&y(D),xe&&xe(D)}},K,ct*Ce,U-K-ct*Ce),Z&&Z(D,Ie.tween)}}else D.isActive&&ce!==K&&X.restart(!0)}).pause()),l&&($l[l]=D),f=D.trigger=jt(f||m),je=f&&f._gsap&&f._gsap.stRevert,je&&(je=je(D)),m=m===!0?f:jt(m),Hn(s)&&(s={targets:f,className:s}),m&&(_===!1||_===Sn||(_=!_&&$n(m.parentNode).display==="flex"?!1:vt),D.pin=m,n.force3D!==!1&&Ee.set(m,{force3D:!0}),be=Ee.core.getCache(m),be.spacer?pt=be.pinState:(T&&(T=jt(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),be.spacerIsNative=!!T,T&&(be.spacerState=ba(T))),be.spacer=M=T||ut.createElement("div"),M.classList.add("pin-spacer"),l&&M.classList.add("pin-spacer-"+l),be.pinState=pt=ba(m)),D.spacer=M=be.spacer,le=$n(m),A=le[_+P.os2],ie=Ee.getProperty(m),te=Ee.quickSetter(m,P.a,Bt),Vo(m,M,le),L=ba(m)),G){Qe=qa(G)?iu(G,ru):ru,He=ya("scroller-start",l,$,P,Qe,0),Y=ya("scroller-end",l,$,P,Qe,0,He),q=He["offset"+P.op.d2];var $t=jt(Ni($,"content")||$);Ye=this.markerStart=ya("start",l,$t,P,Qe,q,0,C),et=this.markerEnd=ya("end",l,$t,P,Qe,q,0,C),C&&(st=Ee.quickSetter([Ye,et],P.a,Bt)),!H&&!(Kn.length&&Ni($,"fixedMarkers")===!0)&&(lm(F?ht:$),Ee.set([He,Y],{force3D:!0}),re=Ee.quickSetter(He,P.a,Bt),de=Ee.quickSetter(Y,P.a,Bt))}if(C){var tt=C.vars.onUpdate,Oe=C.vars.onUpdateParams;C.eventCallback("onUpdate",function(){D.update(0,0,1),tt&&tt.apply(Oe||[])})}D.previous=function(){return We[We.indexOf(D)-1]},D.next=function(){return We[We.indexOf(D)+1]},D.revert=function(K,we){if(!we)return D.kill(!0);var Se=K!==!1||!D.enabled,Re=Lt;Se!==D.isReverted&&(Se&&(D.scroll.rec||!Lt||!Ks||(D.scroll.rec=W()),fe=Math.max(W(),D.scroll.rec||0),he=D.progress,Ue=i&&i.progress()),Ye&&[Ye,et,He,Y].forEach(function(mt){return mt.style.display=Se?"none":"block"}),Se&&(Lt=1),D.update(Se),Lt=Re,m&&(Se?fm(m,M,pt):(!v||!D.isActive)&&Vo(m,M,$n(m),J)),D.isReverted=Se)},D.refresh=function(K,we){if(!((Lt||!D.enabled)&&!we)){if(m&&K&&Dn){Pt(o,"scrollEnd",sd);return}!Ks&&ee&&ee(D),Lt=1,ye=Gt(),Ie.tween&&(Ie.tween.kill(),Ie.tween=0),Ae&&Ae.pause(),d&&i&&i.revert().invalidate(),D.isReverted||D.revert(!0,!0);for(var Se=Q(),Re=ne(),mt=C?C.duration():Ii($,P),ze=0,ct=0,w=n.end,k=n.endTrigger||f,U=n.start||(n.start===0||!f?0:m?"0 0":"0 100%"),B=D.pinnedContainer=n.pinnedContainer&&jt(n.pinnedContainer),Z=f&&Math.max(0,We.indexOf(D))||0,ge=Z,xe,Me,Fe,Ge,De,Le,qe,Rn,ni,mn;ge--;)Le=We[ge],Le.end||Le.refresh(0,1)||(Lt=1),qe=Le.pin,qe&&(qe===f||qe===m)&&!Le.isReverted&&(mn||(mn=[]),mn.unshift(Le),Le.revert(!0,!0)),Le!==We[ge]&&(Z--,ge--);for(gi(U)&&(U=U(D)),me=lu(U,f,Se,P,W(),Ye,He,D,Re,N,H,mt,C)||(m?-.001:0),gi(w)&&(w=w(D)),Hn(w)&&!w.indexOf("+=")&&(~w.indexOf(" ")?w=(Hn(U)?U.split(" ")[0]:"")+w:(ze=ja(w.substr(2),Se),w=Hn(U)?U:me+ze,k=f)),_e=Math.max(me,lu(w||(k?"100% 0":mt),k,Se,P,W()+ze,et,Y,D,Re,N,H,mt,C))||-.001,Ce=_e-me||(me-=.01)&&.001,ze=0,ge=Z;ge--;)Le=We[ge],qe=Le.pin,qe&&Le.start-Le._pinPush<me&&!C&&Le.end>0&&(xe=Le.end-Le.start,(qe===f||qe===B)&&!Ls(U)&&(ze+=xe*(1-Le.progress)),qe===m&&(ct+=xe));if(me+=ze,_e+=ze,D._pinPush=ct,Ye&&ze&&(xe={},xe[P.a]="+="+ze,B&&(xe[P.p]="-="+W()),Ee.set([Ye,et],xe)),m)xe=$n(m),Ge=P===wt,Fe=W(),oe=parseFloat(ie(P.a))+ct,!mt&&_e>1&&((F?ht:$).style["overflow-"+P.a]="scroll"),Vo(m,M,xe),L=ba(m),Me=hi(m,!0),Rn=H&&Ui($,Ge?Vt:wt)(),_&&(J=[_+P.os2,Ce+ct+Bt],J.t=M,ge=_===vt?Yl(m,P)+Ce+ct:0,ge&&J.push(P.d,ge+Bt),Qs(J),H&&W(fe)),H&&(De={top:Me.top+(Ge?Fe-me:Rn)+Bt,left:Me.left+(Ge?Rn:Fe-me)+Bt,boxSizing:"border-box",position:"fixed"},De[lr]=De["max"+us]=Math.ceil(Me.width)+Bt,De[cr]=De["max"+wc]=Math.ceil(Me.height)+Bt,De[Sn]=De[Sn+Vs]=De[Sn+Us]=De[Sn+Hs]=De[Sn+Gs]="0",De[vt]=xe[vt],De[vt+Vs]=xe[vt+Vs],De[vt+Us]=xe[vt+Us],De[vt+Hs]=xe[vt+Hs],De[vt+Gs]=xe[vt+Gs],lt=pm(pt,De,v)),i?(ni=i._initted,ko(1),i.render(i.duration(),!0,!0),ve=ie(P.a)-oe+Ce+ct,Ce!==ve&&H&&lt.splice(lt.length-2,2),i.render(0,!0,!0),ni||i.invalidate(),ko(0)):ve=Ce;else if(f&&W()&&!C)for(Me=f.parentNode;Me&&Me!==ht;)Me._pinOffset&&(me-=Me._pinOffset,_e-=Me._pinOffset),Me=Me.parentNode;mn&&mn.forEach(function(gn){return gn.revert(!1,!0)}),D.start=me,D.end=_e,ue=Ne=W(),C||(ue<fe&&W(fe),D.scroll.rec=0),D.revert(!1,!0),X&&(ce=-1,D.isActive&&W(me+Ce*he),X.restart(!0)),Lt=0,i&&I&&(i._initted||Ue)&&i.progress()!==Ue&&i.progress(Ue,!0).render(i.time(),!0,!0),(he!==D.progress||C)&&(i&&!I&&i.totalProgress(he,!0),D.progress=(ue-me)/Ce===he?0:he,D.update(0,0,1)),m&&_&&(M._pinOffset=Math.round(D.progress*ve)),u&&u(D)}},D.getVelocity=function(){return(W()-Ne)/(Gt()-$a)*1e3||0},D.endAnimation=function(){Ms(D.callbackAnimation),i&&(Ae?Ae.progress(1):i.paused()?I||Ms(i,D.direction<0,1):Ms(i,i.reversed()))},D.labelToScroll=function(K){return i&&i.labels&&(me||D.refresh()||me)+i.labels[K]/i.duration()*Ce||0},D.getTrailing=function(K){var we=We.indexOf(D),Se=D.direction>0?We.slice(0,we).reverse():We.slice(we+1);return(Hn(K)?Se.filter(function(Re){return Re.vars.preventOverlaps===K}):Se).filter(function(Re){return D.direction>0?Re.end<=me:Re.start>=_e})},D.update=function(K,we,Se){if(!(C&&!Se&&!K)){var Re=D.scroll(),mt=K?0:(Re-me)/Ce,ze=mt<0?0:mt>1?1:mt||0,ct=D.progress,w,k,U,B,Z,ge,xe,Me;if(we&&(Ne=ue,ue=C?W():Re,b&&(ke=Te,Te=i&&!I?i.totalProgress():ze)),p&&!ze&&m&&!Lt&&!pa&&Dn&&me<Re+(Re-Ne)/(Gt()-$a)*p&&(ze=1e-4),ze!==ct&&D.enabled){if(w=D.isActive=!!ze&&ze<1,k=!!ct&&ct<1,ge=w!==k,Z=ge||!!ze!=!!ct,D.direction=ze>ct?1:-1,D.progress=ze,Z&&!Lt&&(U=ze&&!ct?0:ze===1?1:ct===1?2:3,I&&(B=!ge&&V[U+1]!=="none"&&V[U+1]||V[U],Me=i&&(B==="complete"||B==="reset"||B in i))),E&&(ge||Me)&&(Me||h||!i)&&(gi(E)?E(D):D.getTrailing(E).forEach(function(Le){return Le.endAnimation()})),I||(Ae&&!Lt&&!pa?((C||Ki&&Ki!==D)&&Ae.render(Ae._dp._time-Ae._start),Ae.resetTo?Ae.resetTo("totalProgress",ze,i._tTime/i._tDur):(Ae.vars.totalProgress=ze,Ae.invalidate().restart())):i&&i.totalProgress(ze,!!Lt)),m){if(K&&_&&(M.style[_+P.os2]=A),!H)te(Ds(oe+ve*ze));else if(Z){if(xe=!K&&ze>ct&&_e+1>Re&&Re+1>=Ii($,P),v)if(!K&&(w||xe)){var Fe=hi(m,!0),Ge=Re-me;cu(m,ht,Fe.top+(P===wt?Ge:0)+Bt,Fe.left+(P===wt?0:Ge)+Bt)}else cu(m,M);Qs(w||xe?lt:L),ve!==Ce&&ze<1&&w||te(oe+(ze===1&&!xe?ve:0))}}b&&!Ie.tween&&!Lt&&!pa&&X.restart(!0),s&&(ge||S&&ze&&(ze<1||!Bo))&&po(s.targets).forEach(function(Le){return Le.classList[w||S?"add":"remove"](s.className)}),a&&!I&&!K&&a(D),Z&&!Lt?(I&&(Me&&(B==="complete"?i.pause().totalProgress(1):B==="reset"?i.restart(!0).pause():B==="restart"?i.restart(!0):i[B]()),a&&a(D)),(ge||!Bo)&&(c&&ge&&Go(D,c),O[U]&&Go(D,O[U]),S&&(ze===1?D.kill(!1,1):O[U]=0),ge||(U=ze===1?1:3,O[U]&&Go(D,O[U]))),x&&!w&&Math.abs(D.getVelocity())>(Ls(x)?x:2500)&&(Ms(D.callbackAnimation),Ae?Ae.progress(1):Ms(i,!ze,1))):I&&a&&!Lt&&a(D)}if(de){var De=C?Re/C.duration()*(C._caScrollDist||0):Re;re(De+(He._isFlipped?1:0)),de(De)}st&&st(-Re/C.duration()*(C._caScrollDist||0))}},D.enable=function(K,we){D.enabled||(D.enabled=!0,Pt($,"resize",Ps),Pt(F?ut:$,"scroll",wr),ee&&Pt(o,"refreshInit",ee),K!==!1&&(D.progress=he=0,ue=Ne=ce=W()),we!==!1&&D.refresh())},D.getTween=function(K){return K&&Ie?Ie.tween:Ae},D.setPositions=function(K,we){m&&(oe+=K-me,ve+=we-K-Ce),D.start=me=K,D.end=_e=we,Ce=we-K,D.update()},D.disable=function(K,we){if(D.enabled&&(K!==!1&&D.revert(!0,!0),D.enabled=D.isActive=!1,we||Ae&&Ae.pause(),fe=0,be&&(be.uncache=1),ee&&At(o,"refreshInit",ee),X&&(X.pause(),Ie.tween&&Ie.tween.kill()&&(Ie.tween=0)),!F)){for(var Se=We.length;Se--;)if(We[Se].scroller===$&&We[Se]!==D)return;At($,"resize",Ps),At($,"scroll",wr)}},D.kill=function(K,we){D.disable(K,we),Ae&&!we&&Ae.kill(),l&&delete $l[l];var Se=We.indexOf(D);Se>=0&&We.splice(Se,1),Se===Ut&&Ja>0&&Ut--,Se=0,We.forEach(function(Re){return Re.scroller===D.scroller&&(Se=1)}),Se||(D.scroll.rec=0),i&&(i.scrollTrigger=null,K&&i.render(-1),we||i.kill()),Ye&&[Ye,et,He,Y].forEach(function(Re){return Re.parentNode&&Re.parentNode.removeChild(Re)}),Ki===D&&(Ki=0),m&&(be&&(be.uncache=1),Se=0,We.forEach(function(Re){return Re.pin===m&&Se++}),Se||(be.spacer=0)),n.onKill&&n.onKill(D)},D.enable(!1,!1),je&&je(D),!i||!i.add||Ce?D.refresh():Ee.delayedCall(.01,function(){return me||_e||D.refresh()})&&(Ce=.01)&&(me=_e=0)},o.register=function(n){return Gr||(Ee=n||ed(),Qf()&&window.document&&o.enable(),Gr=ma),Gr},o.defaults=function(n){if(n)for(var i in n)va[i]=n[i];return va},o.disable=function(n,i){ma=0,We.forEach(function(a){return a[i?"kill":"disable"](n)}),At($e,"wheel",wr),At(ut,"scroll",wr),clearInterval(da),At(ut,"touchcancel",Wn),At(ht,"touchstart",Wn),_a(At,ut,"pointerdown,touchstart,mousedown",tu),_a(At,ut,"pointerup,touchend,mouseup",nu),fo.kill(),ga(At);for(var r=0;r<Je.length;r+=3)xa(At,Je[r],Je[r+1]),xa(At,Je[r],Je[r+2])},o.enable=function(){if($e=window,ut=document,mi=ut.documentElement,ht=ut.body,Ee&&(po=Ee.utils.toArray,$r=Ee.utils.clamp,Xl=Ee.core.context||Wn,ko=Ee.core.suppressOverwrites||Wn,Ee.core.globals("ScrollTrigger",o),ht)){ma=1,bt.register(Ee),o.isTouch=bt.isTouch,Di=bt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Pt($e,"wheel",wr),$f=[$e,ut,mi,ht],Ee.matchMedia?(o.matchMedia=function(l){var c,u;for(u in l)c?c.add(u,l[u]):c=Ee.matchMedia(u,l[u]);return c},Ee.addEventListener("matchMediaInit",function(){return Tc()}),Ee.addEventListener("matchMediaRevert",function(){return ad()}),Ee.addEventListener("matchMedia",function(){qr(0,1),mr("matchMedia")}),Ee.matchMedia("(orientation: portrait)",function(){return au(),au})):console.warn("Requires GSAP 3.11.0 or later"),Pt(ut,"scroll",wr);var n=ht.style,i=n.borderTopStyle,r=Ee.core.Animation.prototype,a,s;for(r.revert||Object.defineProperty(r,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",a=hi(ht),wt.m=Math.round(a.top+wt.sc())||0,Vt.m=Math.round(a.left+Vt.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),da=setInterval(su,250),Ee.delayedCall(.5,function(){return pa=0}),Pt(ut,"touchcancel",Wn),Pt(ht,"touchstart",Wn),_a(Pt,ut,"pointerdown,touchstart,mousedown",tu),_a(Pt,ut,"pointerup,touchend,mouseup",nu),Wl=Ee.utils.checkPrefix("transform"),Qa.push(Wl),Gr=Gt(),fo=Ee.delayedCall(.2,qr).pause(),Vr=[ut,"visibilitychange",function(){var l=$e.innerWidth,c=$e.innerHeight;ut.hidden?(Qc=l,eu=c):(Qc!==l||eu!==c)&&Ps()},ut,"DOMContentLoaded",qr,$e,"load",qr,$e,"resize",Ps],ga(Pt),We.forEach(function(l){return l.enable(0,1)}),s=0;s<Je.length;s+=3)xa(At,Je[s],Je[s+1]),xa(At,Je[s],Je[s+2])}},o.config=function(n){"limitCallbacks"in n&&(Bo=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(da)||(da=i)&&setInterval(su,i),"ignoreMobileResize"in n&&(Zf=o.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(ga(At)||ga(Pt,n.autoRefreshEvents||"none"),jf=(n.autoRefreshEvents+"").indexOf("resize")===-1)},o.scrollerProxy=function(n,i){var r=jt(n),a=Je.indexOf(r),s=dr(r);~a&&Je.splice(a,s?6:2),i&&(s?Kn.unshift($e,i,ht,i,mi,i):Kn.unshift(r,i))},o.clearMatchMedia=function(n){We.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},o.isInViewport=function(n,i,r){var a=(Hn(n)?jt(n):n).getBoundingClientRect(),s=a[r?lr:cr]*i||0;return r?a.right-s>0&&a.left+s<$e.innerWidth:a.bottom-s>0&&a.top+s<$e.innerHeight},o.positionInViewport=function(n,i,r){Hn(n)&&(n=jt(n));var a=n.getBoundingClientRect(),s=a[r?lr:cr],l=i==null?s/2:i in mo?mo[i]*s:~i.indexOf("%")?parseFloat(i)*s/100:parseFloat(i)||0;return r?(a.left+l)/$e.innerWidth:(a.top+l)/$e.innerHeight},o.killAll=function(n){if(We.forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=pr.killAll||[];pr={},i.forEach(function(r){return r()})}},o}();Ze.version="3.11.0";Ze.saveStyles=function(o){return o?po(o).forEach(function(e){if(e&&e.style){var t=on.indexOf(e);t>=0&&on.splice(t,5),on.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ee.core.getCache(e),Xl())}}):on};Ze.revert=function(o,e){return Tc(!o,e)};Ze.create=function(o,e){return new Ze(o,e)};Ze.refresh=function(o){return o?Ps():(Gr||Ze.register())&&qr(!0)};Ze.update=Js;Ze.clearScrollMemory=od;Ze.maxScroll=function(o,e){return Ii(o,e?Vt:wt)};Ze.getScrollFunc=function(o,e){return Ui(jt(o),e?Vt:wt)};Ze.getById=function(o){return $l[o]};Ze.getAll=function(){return We.filter(function(o){return o.vars.id!=="ScrollSmoother"})};Ze.isScrolling=function(){return!!Dn};Ze.snapDirectional=Ec;Ze.addEventListener=function(o,e){var t=pr[o]||(pr[o]=[]);~t.indexOf(e)||t.push(e)};Ze.removeEventListener=function(o,e){var t=pr[o],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Ze.batch=function(o,e){var t=[],n={},i=e.interval||.016,r=e.batchMax||1e9,a=function(c,u){var h=[],f=[],m=Ee.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(_){h.length||m.restart(!0),h.push(_.trigger),f.push(_),r<=h.length&&m.progress(1)}},s;for(s in e)n[s]=s.substr(0,2)==="on"&&gi(e[s])&&s!=="onRefreshInit"?a(s,e[s]):e[s];return gi(r)&&(r=r(),Pt(Ze,"refresh",function(){return r=e.batchMax()})),po(o).forEach(function(l){var c={};for(s in n)c[s]=n[s];c.trigger=l,t.push(Ze.create(c))}),t};var hu=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Ho=function o(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(bt.isTouch?" pinch-zoom":""):"none",e===mi&&o(ht,t)},fu={auto:1,scroll:1},gm=function(e){var t=e.event,n=e.target,i=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,a=r._gsap||Ee.core.getCache(r),s=Gt(),l;if(!a._isScrollT||s-a._isScrollT>2e3){for(;r&&r.scrollHeight<=r.clientHeight;)r=r.parentNode;a._isScroll=r&&!dr(r)&&r!==n&&(fu[(l=$n(r)).overflowY]||fu[l.overflowX]),a._isScrollT=s}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},ld=function(e,t,n,i){return bt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&gm,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Pt(ut,bt.eventTypes[0],pu,!1,!0)},onDisable:function(){return At(ut,bt.eventTypes[0],pu,!0)}})},_m=/(input|label|select|textarea)/i,du,pu=function(e){var t=_m.test(e.target.tagName);(t||du)&&(e._gsapAllow=!0,du=t)},xm=function(e){qa(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,r=t.allowNestedScroll,a,s,l=jt(e.target)||mi,c=Ee.core.globals().ScrollSmoother,u=c&&c.get(),h=Di&&(e.content&&jt(e.content)||u&&e.content!==!1&&!u.smooth()&&u.content()),f=Ui(l,wt),m=Ui(l,Vt),_=1,d=(bt.isTouch&&$e.visualViewport?$e.visualViewport.scale*$e.visualViewport.width:$e.outerWidth)/$e.innerWidth,p=0,g=gi(i)?function(){return i(a)}:function(){return i||2.8},y,S,b=ld(l,e.type,!0,r),v=function(){return S=!1},T=Wn,C=Wn,x=function(){s=Ii(l,wt),C=$r(Di?1:0,s),n&&(T=$r(0,Ii(l,Vt))),y=Ka},E=function(){h._gsap.y=Ds(parseFloat(h._gsap.y)+f.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},P=function(){if(S){requestAnimationFrame(v);var V=Ds(a.deltaY/2),G=C(f.v-V);if(h&&G!==f.v+f.offset){f.offset=G-f.v;var N=Ds((parseFloat(h&&h._gsap.y)||0)-f.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+N+", 0, 1)",h._gsap.y=N+"px",f.cacheID=Je.cache,Js()}return!0}f.offset&&E(),S=!0},I,$,j,F,H=function(){x(),I.isActive()&&I.vars.scrollY>s&&(f()>s?I.progress(1)&&f(s):I.resetTo("scrollY",s))};return h&&Ee.set(h,{y:"+=0"}),e.ignoreCheck=function(O){return Di&&O.type==="touchmove"&&P()||_>1.05&&O.type!=="touchstart"||a.isGesturing||O.touches&&O.touches.length>1},e.onPress=function(){var O=_;_=Ds(($e.visualViewport&&$e.visualViewport.scale||1)/d),I.pause(),O!==_&&Ho(l,_>1.01?!0:n?!1:"x"),$=m(),j=f(),x(),y=Ka},e.onRelease=e.onGestureStart=function(O,V){if(f.offset&&E(),!V)F.restart(!0);else{Je.cache++;var G=g(),N,D;n&&(N=m(),D=N+G*.05*-O.velocityX/.227,G*=hu(m,N,D,Ii(l,Vt)),I.vars.scrollX=T(D)),N=f(),D=N+G*.05*-O.velocityY/.227,G*=hu(f,N,D,Ii(l,wt)),I.vars.scrollY=C(D),I.invalidate().duration(G).play(.01),(Di&&I.vars.scrollY>=s||N>=s-1)&&Ee.to({},{onUpdate:H,duration:G})}},e.onWheel=function(){I._ts&&I.pause(),Gt()-p>1e3&&(y=0,p=Gt())},e.onChange=function(O,V,G,N,D){if(Ka!==y&&x(),V&&n&&m(T(N[2]===V?$+(O.startX-O.x):m()+V-N[1])),G){f.offset&&E();var ee=D[2]===G,Q=ee?j+O.startY-O.y:f()+G-D[1],ne=C(Q);ee&&Q!==ne&&(j+=ne-Q),f(ne)}(G||V)&&Js()},e.onEnable=function(){Ho(l,n?!1:"x"),Pt($e,"resize",H),b.enable()},e.onDisable=function(){Ho(l,!0),At($e,"resize",H),b.kill()},e.lockAxis=e.lockAxis!==!1,a=new bt(e),a.iOS=Di,Di&&!f()&&f(1),Di&&Ee.ticker.add(Wn),F=a._dc,I=Ee.to(a,{ease:"power4",paused:!0,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",onComplete:F.vars.onComplete}),a};Ze.sort=function(o){return We.sort(o||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};Ze.observe=function(o){return new bt(o)};Ze.normalizeScroll=function(o){if(typeof o>"u")return bn;if(o===!0&&bn)return bn.enable();if(o===!1)return bn&&bn.kill();var e=o instanceof bt?o:xm(o);return bn&&bn.target===e.target&&bn.kill(),dr(e.target)&&(bn=e),e};Ze.core={_getVelocityProp:Hl,_inputObserver:ld,_scrollers:Je,_proxies:Kn,bridge:{ss:function(){Dn||mr("scrollStart"),Dn=Gt()},ref:function(){return Lt}}};ed()&&Ee.registerPlugin(Ze);/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ac="143",Er={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Tr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},vm=0,mu=1,ym=2,cd=1,bm=2,Rs=3,ea=0,Un=1,hs=2,Sm=1,ki=0,es=1,Zl=2,gu=3,_u=4,Mm=5,Hr=100,wm=101,Em=102,xu=103,vu=104,Tm=200,Am=201,Cm=202,Dm=203,ud=204,hd=205,Lm=206,Pm=207,Rm=208,Im=209,Fm=210,Om=0,zm=1,Nm=2,Kl=3,km=4,Bm=5,Um=6,Gm=7,fd=0,Vm=1,Hm=2,_i=0,Wm=1,Xm=2,Ym=3,$m=4,qm=5,dd=300,fs=301,ds=302,Jl=303,Ql=304,bo=306,ec=1e3,kn=1001,tc=1002,Zt=1003,yu=1004,bu=1005,Mn=1006,jm=1007,So=1008,gr=1009,Zm=1010,Km=1011,pd=1012,Jm=1013,nr=1014,ir=1015,ta=1016,Qm=1017,eg=1018,ts=1020,tg=1021,ng=1022,qn=1023,ig=1024,rg=1025,ur=1026,ps=1027,sg=1028,ag=1029,og=1030,lg=1031,cg=1033,Wo=33776,Xo=33777,Yo=33778,$o=33779,Su=35840,Mu=35841,wu=35842,Eu=35843,ug=36196,Tu=37492,Au=37496,Cu=37808,Du=37809,Lu=37810,Pu=37811,Ru=37812,Iu=37813,Fu=37814,Ou=37815,zu=37816,Nu=37817,ku=37818,Bu=37819,Uu=37820,Gu=37821,Vu=36492,_r=3e3,at=3001,hg=3200,fg=3201,dg=0,pg=1,ci="srgb",rr="srgb-linear",qo=7680,mg=519,Hu=35044,Wu="300 es",nc=1035;class yr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jo=Math.PI/180,Xu=180/Math.PI;function sa(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(It[o&255]+It[o>>8&255]+It[o>>16&255]+It[o>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[n&255]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]).toLowerCase()}function Kt(o,e,t){return Math.max(e,Math.min(t,o))}function gg(o,e){return(o%e+e)%e}function Zo(o,e,t){return(1-t)*o+t*e}function Yu(o){return(o&o-1)===0&&o!==0}function ic(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}class Be{constructor(e=0,t=0){Be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class An{constructor(){An.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,a,s,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=s,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],s=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],m=n[5],_=n[8],d=i[0],p=i[3],g=i[6],y=i[1],S=i[4],b=i[7],v=i[2],T=i[5],C=i[8];return r[0]=a*d+s*y+l*v,r[3]=a*p+s*S+l*T,r[6]=a*g+s*b+l*C,r[1]=c*d+u*y+h*v,r[4]=c*p+u*S+h*T,r[7]=c*g+u*b+h*C,r[2]=f*d+m*y+_*v,r[5]=f*p+m*S+_*T,r[8]=f*g+m*b+_*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],s=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*s*c-n*r*u+n*s*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],s=e[5],l=e[6],c=e[7],u=e[8],h=u*a-s*c,f=s*l-u*r,m=c*r-a*l,_=t*h+n*f+i*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/_;return e[0]=h*d,e[1]=(i*c-u*n)*d,e[2]=(s*n-i*a)*d,e[3]=f*d,e[4]=(u*t-i*l)*d,e[5]=(i*r-s*t)*d,e[6]=m*d,e[7]=(n*l-c*t)*d,e[8]=(a*t-n*r)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,s){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*s)+a+e,-i*c,i*l,-i*(-c*a+l*s)+s+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,r=i[0],a=i[3],s=i[6],l=i[1],c=i[4],u=i[7];return i[0]=t*r+n*l,i[3]=t*a+n*c,i[6]=t*s+n*u,i[1]=-n*r+t*l,i[4]=-n*a+t*c,i[7]=-n*s+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function md(o){for(let e=o.length-1;e>=0;--e)if(o[e]>65535)return!0;return!1}function na(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function hr(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function to(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const Ko={[ci]:{[rr]:hr},[rr]:{[ci]:to}},In={legacyMode:!0,get workingColorSpace(){return rr},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,e,t){if(this.legacyMode||e===t||!e||!t)return o;if(Ko[e]&&Ko[e][t]!==void 0){const n=Ko[e][t];return o.r=n(o.r),o.g=n(o.g),o.b=n(o.b),o}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)}},gd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},St={r:0,g:0,b:0},Fn={h:0,s:0,l:0},Sa={h:0,s:0,l:0};function Jo(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}function Ma(o,e){return e.r=o.r,e.g=o.g,e.b=o.b,e}class rt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,In.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=rr){return this.r=e,this.g=t,this.b=n,In.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=rr){if(e=gg(e,1),t=Kt(t,0,1),n=Kt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Jo(a,r,e+1/3),this.g=Jo(a,r,e),this.b=Jo(a,r,e-1/3)}return In.toWorkingColorSpace(this,i),this}setStyle(e,t=ci){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],s=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,In.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,In.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const l=parseFloat(r[1])/360,c=parseInt(r[2],10)/100,u=parseInt(r[3],10)/100;return n(r[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,In.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,In.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=ci){const n=gd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hr(e.r),this.g=hr(e.g),this.b=hr(e.b),this}copyLinearToSRGB(e){return this.r=to(e.r),this.g=to(e.g),this.b=to(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ci){return In.fromWorkingColorSpace(Ma(this,St),e),Kt(St.r*255,0,255)<<16^Kt(St.g*255,0,255)<<8^Kt(St.b*255,0,255)<<0}getHexString(e=ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rr){In.fromWorkingColorSpace(Ma(this,St),t);const n=St.r,i=St.g,r=St.b,a=Math.max(n,i,r),s=Math.min(n,i,r);let l,c;const u=(s+a)/2;if(s===a)l=0,c=0;else{const h=a-s;switch(c=u<=.5?h/(a+s):h/(2-a-s),a){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=rr){return In.fromWorkingColorSpace(Ma(this,St),t),e.r=St.r,e.g=St.g,e.b=St.b,e}getStyle(e=ci){return In.fromWorkingColorSpace(Ma(this,St),e),e!==ci?`color(${e} ${St.r} ${St.g} ${St.b})`:`rgb(${St.r*255|0},${St.g*255|0},${St.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Fn),Fn.h+=e,Fn.s+=t,Fn.l+=n,this.setHSL(Fn.h,Fn.s,Fn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Fn),e.getHSL(Sa);const n=Zo(Fn.h,Sa.h,t),i=Zo(Fn.s,Sa.s,t),r=Zo(Fn.l,Sa.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}rt.NAMES=gd;let Ar;class _d{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ar===void 0&&(Ar=na("canvas")),Ar.width=e.width,Ar.height=e.height;const n=Ar.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ar}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=na("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=hr(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(hr(t[n]/255)*255):t[n]=hr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class xd{constructor(e=null){this.isSource=!0,this.uuid=sa(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,s=i.length;a<s;a++)i[a].isDataTexture?r.push(Qo(i[a].image)):r.push(Qo(i[a]))}else r=Qo(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Qo(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?_d.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _g=0;class pn extends yr{constructor(e=pn.DEFAULT_IMAGE,t=pn.DEFAULT_MAPPING,n=kn,i=kn,r=Mn,a=So,s=qn,l=gr,c=1,u=_r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_g++}),this.uuid=sa(),this.name="",this.source=new xd(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new An,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ec:e.x=e.x-Math.floor(e.x);break;case kn:e.x=e.x<0?0:1;break;case tc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ec:e.y=e.y-Math.floor(e.y);break;case kn:e.y=e.y<0?0:1;break;case tc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=dd;class Ct{constructor(e=0,t=0,n=0,i=1){Ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],_=l[9],d=l[2],p=l[6],g=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-d)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+d)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,b=(m+1)/2,v=(g+1)/2,T=(u+f)/4,C=(h+d)/4,x=(_+p)/4;return S>b&&S>v?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=T/n,r=C/n):b>v?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=T/i,r=x/i):v<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(v),n=C/r,i=x/r),this.set(n,i,r,t),this}let y=Math.sqrt((p-_)*(p-_)+(h-d)*(h-d)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(p-_)/y,this.y=(h-d)/y,this.z=(f-u)/y,this.w=Math.acos((c+m+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ti extends yr{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new pn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Mn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new xd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vd extends pn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xg extends pn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,s){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=r[a+0],m=r[a+1],_=r[a+2],d=r[a+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(s===1){e[t+0]=f,e[t+1]=m,e[t+2]=_,e[t+3]=d;return}if(h!==d||l!==f||c!==m||u!==_){let p=1-s;const g=l*f+c*m+u*_+h*d,y=g>=0?1:-1,S=1-g*g;if(S>Number.EPSILON){const v=Math.sqrt(S),T=Math.atan2(v,g*y);p=Math.sin(p*T)/v,s=Math.sin(s*T)/v}const b=s*y;if(l=l*p+f*b,c=c*p+m*b,u=u*p+_*b,h=h*p+d*b,p===1-s){const v=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=v,c*=v,u*=v,h*=v}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){const s=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[a],f=r[a+1],m=r[a+2],_=r[a+3];return e[t]=s*_+u*h+l*m-c*f,e[t+1]=l*_+u*f+c*h-s*m,e[t+2]=c*_+u*m+s*f-l*h,e[t+3]=u*_-s*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,r=e._z,a=e._order,s=Math.cos,l=Math.sin,c=s(n/2),u=s(i/2),h=s(r/2),f=l(n/2),m=l(i/2),_=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h-f*m*_;break;case"YXZ":this._x=f*u*h+c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h+f*m*_;break;case"ZXY":this._x=f*u*h-c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h-f*m*_;break;case"ZYX":this._x=f*u*h-c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h+f*m*_;break;case"YZX":this._x=f*u*h+c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h-f*m*_;break;case"XZY":this._x=f*u*h-c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],s=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+s+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-i)*m}else if(n>s&&n>h){const m=2*Math.sqrt(1+n-s-h);this._w=(u-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+c)/m}else if(s>h){const m=2*Math.sqrt(1+s-n-h);this._w=(r-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-s);this._w=(a-i)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,s=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*s+i*c-r*l,this._y=i*u+a*l+r*s-n*c,this._z=r*u+a*c+n*l-i*s,this._w=a*u-n*s-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let s=a*e._w+n*e._x+i*e._y+r*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-s*s;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,s),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,n=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($u.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($u.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,s=e.z,l=e.w,c=l*t+a*i-s*n,u=l*n+s*t-r*i,h=l*i+r*n-a*t,f=-r*t-a*n-s*i;return this.x=c*l+f*-r+u*-s-h*-a,this.y=u*l+f*-a+h*-r-c*-s,this.z=h*l+f*-s+c*-a-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,s=t.y,l=t.z;return this.x=i*l-r*s,this.y=r*a-n*l,this.z=n*s-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return el.copy(this).projectOnVector(e),this.sub(el)}reflect(e){return this.sub(el.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const el=new z,$u=new xr;class aa{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,s=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>a&&(a=h),f>s&&(s=f)}return this.min.set(t,n,i),this.max.set(r,a,s),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,s=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>a&&(a=h),f>s&&(s=f)}return this.min.set(t,n,i),this.max.set(r,a,s),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let a=0,s=r.count;a<s;a++)Wi.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Wi)}else n.boundingBox===null&&n.computeBoundingBox(),tl.copy(n.boundingBox),tl.applyMatrix4(e.matrixWorld),this.union(tl);const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Wi),Wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ws),wa.subVectors(this.max,ws),Cr.subVectors(e.a,ws),Dr.subVectors(e.b,ws),Lr.subVectors(e.c,ws),Si.subVectors(Dr,Cr),Mi.subVectors(Lr,Dr),Xi.subVectors(Cr,Lr);let t=[0,-Si.z,Si.y,0,-Mi.z,Mi.y,0,-Xi.z,Xi.y,Si.z,0,-Si.x,Mi.z,0,-Mi.x,Xi.z,0,-Xi.x,-Si.y,Si.x,0,-Mi.y,Mi.x,0,-Xi.y,Xi.x,0];return!nl(t,Cr,Dr,Lr,wa)||(t=[1,0,0,0,1,0,0,0,1],!nl(t,Cr,Dr,Lr,wa))?!1:(Ea.crossVectors(Si,Mi),t=[Ea.x,Ea.y,Ea.z],nl(t,Cr,Dr,Lr,wa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Wi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Wi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ii=[new z,new z,new z,new z,new z,new z,new z,new z],Wi=new z,tl=new aa,Cr=new z,Dr=new z,Lr=new z,Si=new z,Mi=new z,Xi=new z,ws=new z,wa=new z,Ea=new z,Yi=new z;function nl(o,e,t,n,i){for(let r=0,a=o.length-3;r<=a;r+=3){Yi.fromArray(o,r);const s=i.x*Math.abs(Yi.x)+i.y*Math.abs(Yi.y)+i.z*Math.abs(Yi.z),l=e.dot(Yi),c=t.dot(Yi),u=n.dot(Yi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>s)return!1}return!0}const vg=new aa,qu=new z,Ta=new z,il=new z;class Mo{constructor(e=new z,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):vg.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){il.subVectors(e,this.center);const t=il.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(il.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?Ta.set(0,0,1).multiplyScalar(e.radius):Ta.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(qu.copy(e.center).add(Ta)),this.expandByPoint(qu.copy(e.center).sub(Ta)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ri=new z,rl=new z,Aa=new z,wi=new z,sl=new z,Ca=new z,al=new z;class yd{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ri.copy(this.direction).multiplyScalar(t).add(this.origin),ri.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){rl.copy(e).add(t).multiplyScalar(.5),Aa.copy(t).sub(e).normalize(),wi.copy(this.origin).sub(rl);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Aa),s=wi.dot(this.direction),l=-wi.dot(Aa),c=wi.lengthSq(),u=Math.abs(1-a*a);let h,f,m,_;if(u>0)if(h=a*l-s,f=a*s-l,_=r*u,h>=0)if(f>=-_)if(f<=_){const d=1/u;h*=d,f*=d,m=h*(h+a*f+2*s)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+s)),m=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+s)),m=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-a*r+s)),f=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(h=Math.max(0,-(a*r+s)),f=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+s)),m=-h*h+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(Aa).multiplyScalar(f).add(rl),m}intersectSphere(e,t){ri.subVectors(e.center,this.origin);const n=ri.dot(this.direction),i=ri.dot(ri)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),s=n-a,l=n+a;return s<0&&l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,s,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>i||((r>n||n!==n)&&(n=r),(a<i||i!==i)&&(i=a),h>=0?(s=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(s=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||s>i)||((s>n||n!==n)&&(n=s),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ri)!==null}intersectTriangle(e,t,n,i,r){sl.subVectors(t,e),Ca.subVectors(n,e),al.crossVectors(sl,Ca);let a=this.direction.dot(al),s;if(a>0){if(i)return null;s=1}else if(a<0)s=-1,a=-a;else return null;wi.subVectors(this.origin,e);const l=s*this.direction.dot(Ca.crossVectors(wi,Ca));if(l<0)return null;const c=s*this.direction.dot(sl.cross(wi));if(c<0||l+c>a)return null;const u=-s*wi.dot(al);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,a,s,l,c,u,h,f,m,_,d,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=a,g[9]=s,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=f,g[3]=m,g[7]=_,g[11]=d,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Pr.setFromMatrixColumn(e,0).length(),r=1/Pr.setFromMatrixColumn(e,1).length(),a=1/Pr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),s=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=a*u,m=a*h,_=s*u,d=s*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+_*c,t[5]=f-d*c,t[9]=-s*l,t[2]=d-f*c,t[6]=_+m*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,m=l*h,_=c*u,d=c*h;t[0]=f+d*s,t[4]=_*s-m,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-s,t[2]=m*s-_,t[6]=d+f*s,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,m=l*h,_=c*u,d=c*h;t[0]=f-d*s,t[4]=-a*h,t[8]=_+m*s,t[1]=m+_*s,t[5]=a*u,t[9]=d-f*s,t[2]=-a*c,t[6]=s,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,m=a*h,_=s*u,d=s*h;t[0]=l*u,t[4]=_*c-m,t[8]=f*c+d,t[1]=l*h,t[5]=d*c+f,t[9]=m*c-_,t[2]=-c,t[6]=s*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,_=s*l,d=s*c;t[0]=l*u,t[4]=d-f*h,t[8]=_*h+m,t[1]=h,t[5]=a*u,t[9]=-s*u,t[2]=-c*u,t[6]=m*h+_,t[10]=f-d*h}else if(e.order==="XZY"){const f=a*l,m=a*c,_=s*l,d=s*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+d,t[5]=a*u,t[9]=m*h-_,t[2]=_*h-m,t[6]=s*u,t[10]=d*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yg,e,bg)}lookAt(e,t,n){const i=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),Ei.crossVectors(n,sn),Ei.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),Ei.crossVectors(n,sn)),Ei.normalize(),Da.crossVectors(sn,Ei),i[0]=Ei.x,i[4]=Da.x,i[8]=sn.x,i[1]=Ei.y,i[5]=Da.y,i[9]=sn.y,i[2]=Ei.z,i[6]=Da.z,i[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],s=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],m=n[13],_=n[2],d=n[6],p=n[10],g=n[14],y=n[3],S=n[7],b=n[11],v=n[15],T=i[0],C=i[4],x=i[8],E=i[12],P=i[1],I=i[5],$=i[9],j=i[13],F=i[2],H=i[6],O=i[10],V=i[14],G=i[3],N=i[7],D=i[11],ee=i[15];return r[0]=a*T+s*P+l*F+c*G,r[4]=a*C+s*I+l*H+c*N,r[8]=a*x+s*$+l*O+c*D,r[12]=a*E+s*j+l*V+c*ee,r[1]=u*T+h*P+f*F+m*G,r[5]=u*C+h*I+f*H+m*N,r[9]=u*x+h*$+f*O+m*D,r[13]=u*E+h*j+f*V+m*ee,r[2]=_*T+d*P+p*F+g*G,r[6]=_*C+d*I+p*H+g*N,r[10]=_*x+d*$+p*O+g*D,r[14]=_*E+d*j+p*V+g*ee,r[3]=y*T+S*P+b*F+v*G,r[7]=y*C+S*I+b*H+v*N,r[11]=y*x+S*$+b*O+v*D,r[15]=y*E+S*j+b*V+v*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],s=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],m=e[14],_=e[3],d=e[7],p=e[11],g=e[15];return _*(+r*l*h-i*c*h-r*s*f+n*c*f+i*s*m-n*l*m)+d*(+t*l*m-t*c*f+r*a*f-i*a*m+i*c*u-r*l*u)+p*(+t*c*h-t*s*m-r*a*h+n*a*m+r*s*u-n*c*u)+g*(-i*s*u-t*l*h+t*s*f+i*a*h-n*a*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],s=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],m=e[11],_=e[12],d=e[13],p=e[14],g=e[15],y=h*p*c-d*f*c+d*l*m-s*p*m-h*l*g+s*f*g,S=_*f*c-u*p*c-_*l*m+a*p*m+u*l*g-a*f*g,b=u*d*c-_*h*c+_*s*m-a*d*m-u*s*g+a*h*g,v=_*h*l-u*d*l-_*s*f+a*d*f+u*s*p-a*h*p,T=t*y+n*S+i*b+r*v;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=y*C,e[1]=(d*f*r-h*p*r-d*i*m+n*p*m+h*i*g-n*f*g)*C,e[2]=(s*p*r-d*l*r+d*i*c-n*p*c-s*i*g+n*l*g)*C,e[3]=(h*l*r-s*f*r-h*i*c+n*f*c+s*i*m-n*l*m)*C,e[4]=S*C,e[5]=(u*p*r-_*f*r+_*i*m-t*p*m-u*i*g+t*f*g)*C,e[6]=(_*l*r-a*p*r-_*i*c+t*p*c+a*i*g-t*l*g)*C,e[7]=(a*f*r-u*l*r+u*i*c-t*f*c-a*i*m+t*l*m)*C,e[8]=b*C,e[9]=(_*h*r-u*d*r-_*n*m+t*d*m+u*n*g-t*h*g)*C,e[10]=(a*d*r-_*s*r+_*n*c-t*d*c-a*n*g+t*s*g)*C,e[11]=(u*s*r-a*h*r-u*n*c+t*h*c+a*n*m-t*s*m)*C,e[12]=v*C,e[13]=(u*d*i-_*h*i+_*n*f-t*d*f-u*n*p+t*h*p)*C,e[14]=(_*s*i-a*d*i-_*n*l+t*d*l+a*n*p-t*s*p)*C,e[15]=(a*h*i-u*s*i+u*n*l-t*h*l-a*n*f+t*s*f)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,s=e.y,l=e.z,c=r*a,u=r*s;return this.set(c*a+n,c*s-i*l,c*l+i*s,0,c*s+i*l,u*s+n,u*l-i*a,0,c*l-i*s,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,s=t._z,l=t._w,c=r+r,u=a+a,h=s+s,f=r*c,m=r*u,_=r*h,d=a*u,p=a*h,g=s*h,y=l*c,S=l*u,b=l*h,v=n.x,T=n.y,C=n.z;return i[0]=(1-(d+g))*v,i[1]=(m+b)*v,i[2]=(_-S)*v,i[3]=0,i[4]=(m-b)*T,i[5]=(1-(f+g))*T,i[6]=(p+y)*T,i[7]=0,i[8]=(_+S)*C,i[9]=(p-y)*C,i[10]=(1-(f+d))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Pr.set(i[0],i[1],i[2]).length();const a=Pr.set(i[4],i[5],i[6]).length(),s=Pr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],On.copy(this);const c=1/r,u=1/a,h=1/s;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=u,On.elements[5]*=u,On.elements[6]*=u,On.elements[8]*=h,On.elements[9]*=h,On.elements[10]*=h,t.setFromRotationMatrix(On),n.x=r,n.y=a,n.z=s,this}makePerspective(e,t,n,i,r,a){const s=this.elements,l=2*r/(t-e),c=2*r/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),f=-(a+r)/(a-r),m=-2*a*r/(a-r);return s[0]=l,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=c,s[9]=h,s[13]=0,s[2]=0,s[6]=0,s[10]=f,s[14]=m,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,i,r,a){const s=this.elements,l=1/(t-e),c=1/(n-i),u=1/(a-r),h=(t+e)*l,f=(n+i)*c,m=(a+r)*u;return s[0]=2*l,s[4]=0,s[8]=0,s[12]=-h,s[1]=0,s[5]=2*c,s[9]=0,s[13]=-f,s[2]=0,s[6]=0,s[10]=-2*u,s[14]=-m,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Pr=new z,On=new Et,yg=new z(0,0,0),bg=new z(1,1,1),Ei=new z,Da=new z,sn=new z,ju=new Et,Zu=new xr;class oa{constructor(e=0,t=0,n=0,i=oa.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],s=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(Kt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(s,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ju.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ju,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zu.setFromEuler(this),this.setFromQuaternion(Zu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}oa.DefaultOrder="XYZ";oa.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class bd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sg=0;const Ku=new z,Rr=new xr,si=new Et,La=new z,Es=new z,Mg=new z,wg=new xr,Ju=new z(1,0,0),Qu=new z(0,1,0),eh=new z(0,0,1),Eg={type:"added"},th={type:"removed"};class Pn extends yr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sg++}),this.uuid=sa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pn.DefaultUp.clone();const e=new z,t=new oa,n=new xr,i=new z(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Et},normalMatrix:{value:new An}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=Pn.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new bd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Rr.setFromAxisAngle(e,t),this.quaternion.multiply(Rr),this}rotateOnWorldAxis(e,t){return Rr.setFromAxisAngle(e,t),this.quaternion.premultiply(Rr),this}rotateX(e){return this.rotateOnAxis(Ju,e)}rotateY(e){return this.rotateOnAxis(Qu,e)}rotateZ(e){return this.rotateOnAxis(eh,e)}translateOnAxis(e,t){return Ku.copy(e).applyQuaternion(this.quaternion),this.position.add(Ku.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ju,e)}translateY(e){return this.translateOnAxis(Qu,e)}translateZ(e){return this.translateOnAxis(eh,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?La.copy(e):La.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(Es,La,this.up):si.lookAt(La,Es,this.up),this.quaternion.setFromRotationMatrix(si),i&&(si.extractRotation(i.matrixWorld),Rr.setFromRotationMatrix(si),this.quaternion.premultiply(Rr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Eg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(th)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(th)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),si.multiply(e.parent.matrixWorld)),e.applyMatrix4(si),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,e,Mg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,wg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(r(e.materials,this.material[l]));i.material=s}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let s=0;s<this.children.length;s++)i.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];i.animations.push(r(e.animations,l))}}if(t){const s=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),m=a(e.animations),_=a(e.nodes);s.length>0&&(n.geometries=s),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(s){const l=[];for(const c in s){const u=s[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Pn.DefaultUp=new z(0,1,0);Pn.DefaultMatrixAutoUpdate=!0;const zn=new z,ai=new z,ol=new z,oi=new z,Ir=new z,Fr=new z,nh=new z,ll=new z,cl=new z,ul=new z;class fi{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),zn.subVectors(e,t),i.cross(zn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){zn.subVectors(i,t),ai.subVectors(n,t),ol.subVectors(e,t);const a=zn.dot(zn),s=zn.dot(ai),l=zn.dot(ol),c=ai.dot(ai),u=ai.dot(ol),h=a*c-s*s;if(h===0)return r.set(-2,-1,-1);const f=1/h,m=(c*l-s*u)*f,_=(a*u-s*l)*f;return r.set(1-m-_,_,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,oi),oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getUV(e,t,n,i,r,a,s,l){return this.getBarycoord(e,t,n,i,oi),l.set(0,0),l.addScaledVector(r,oi.x),l.addScaledVector(a,oi.y),l.addScaledVector(s,oi.z),l}static isFrontFacing(e,t,n,i){return zn.subVectors(n,t),ai.subVectors(e,t),zn.cross(ai).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),zn.cross(ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return fi.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,s;Ir.subVectors(i,n),Fr.subVectors(r,n),ll.subVectors(e,n);const l=Ir.dot(ll),c=Fr.dot(ll);if(l<=0&&c<=0)return t.copy(n);cl.subVectors(e,i);const u=Ir.dot(cl),h=Fr.dot(cl);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ir,a);ul.subVectors(e,r);const m=Ir.dot(ul),_=Fr.dot(ul);if(_>=0&&m<=_)return t.copy(r);const d=m*c-l*_;if(d<=0&&c>=0&&_<=0)return s=c/(c-_),t.copy(n).addScaledVector(Fr,s);const p=u*_-m*h;if(p<=0&&h-u>=0&&m-_>=0)return nh.subVectors(r,i),s=(h-u)/(h-u+(m-_)),t.copy(i).addScaledVector(nh,s);const g=1/(p+d+f);return a=d*g,s=f*g,t.copy(n).addScaledVector(Ir,a).addScaledVector(Fr,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Tg=0;class la extends yr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=sa(),this.name="",this.type="Material",this.blending=es,this.side=ea,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=ud,this.blendDst=hd,this.blendEquation=Hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Kl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qo,this.stencilZFail=qo,this.stencilZPass=qo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Sm;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(n.blending=this.blending),this.side!==ea&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const a=[];for(const s in r){const l=r[s];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Cc extends la{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=fd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new z,Pa=new Be;class Jn{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Hu,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),a=new rt),t[n++]=a.r,t[n++]=a.g,t[n++]=a.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),a=new Be),t[n++]=a.x,t[n++]=a.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),a=new z),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),a=new Ct),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z,t[n++]=a.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Pa.fromBufferAttribute(this,t),Pa.applyMatrix3(e),this.setXY(t,Pa.x,Pa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hu&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Sd extends Jn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Md extends Jn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Wt extends Jn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ag=0;const xn=new Et,hl=new Pn,Or=new z,an=new aa,Ts=new aa,Tt=new z;class Vn extends yr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ag++}),this.uuid=sa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(md(e)?Md:Sd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new An().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,n){return xn.makeTranslation(e,t,n),this.applyMatrix4(xn),this}scale(e,t,n){return xn.makeScale(e,t,n),this.applyMatrix4(xn),this}lookAt(e){return hl.lookAt(e),hl.updateMatrix(),this.applyMatrix4(hl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Or).negate(),this.translate(Or.x,Or.y,Or.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Wt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new aa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];an.setFromBufferAttribute(r),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const s=t[r];Ts.setFromBufferAttribute(s),this.morphTargetsRelative?(Tt.addVectors(an.min,Ts.min),an.expandByPoint(Tt),Tt.addVectors(an.max,Ts.max),an.expandByPoint(Tt)):(an.expandByPoint(Ts.min),an.expandByPoint(Ts.max))}an.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Tt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Tt));if(t)for(let r=0,a=t.length;r<a;r++){const s=t[r],l=this.morphTargetsRelative;for(let c=0,u=s.count;c<u;c++)Tt.fromBufferAttribute(s,c),l&&(Or.fromBufferAttribute(e,c),Tt.add(Or)),i=Math.max(i,n.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,s=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jn(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let P=0;P<s;P++)c[P]=new z,u[P]=new z;const h=new z,f=new z,m=new z,_=new Be,d=new Be,p=new Be,g=new z,y=new z;function S(P,I,$){h.fromArray(i,P*3),f.fromArray(i,I*3),m.fromArray(i,$*3),_.fromArray(a,P*2),d.fromArray(a,I*2),p.fromArray(a,$*2),f.sub(h),m.sub(h),d.sub(_),p.sub(_);const j=1/(d.x*p.y-p.x*d.y);!isFinite(j)||(g.copy(f).multiplyScalar(p.y).addScaledVector(m,-d.y).multiplyScalar(j),y.copy(m).multiplyScalar(d.x).addScaledVector(f,-p.x).multiplyScalar(j),c[P].add(g),c[I].add(g),c[$].add(g),u[P].add(y),u[I].add(y),u[$].add(y))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let P=0,I=b.length;P<I;++P){const $=b[P],j=$.start,F=$.count;for(let H=j,O=j+F;H<O;H+=3)S(n[H+0],n[H+1],n[H+2])}const v=new z,T=new z,C=new z,x=new z;function E(P){C.fromArray(r,P*3),x.copy(C);const I=c[P];v.copy(I),v.sub(C.multiplyScalar(C.dot(I))).normalize(),T.crossVectors(x,I);const j=T.dot(u[P])<0?-1:1;l[P*4]=v.x,l[P*4+1]=v.y,l[P*4+2]=v.z,l[P*4+3]=j}for(let P=0,I=b.length;P<I;++P){const $=b[P],j=$.start,F=$.count;for(let H=j,O=j+F;H<O;H+=3)E(n[H+0]),E(n[H+1]),E(n[H+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Jn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new z,r=new z,a=new z,s=new z,l=new z,c=new z,u=new z,h=new z;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),d=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,d),a.fromBufferAttribute(t,p),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),s.fromBufferAttribute(n,_),l.fromBufferAttribute(n,d),c.fromBufferAttribute(n,p),s.add(u),l.add(u),c.add(u),n.setXYZ(_,s.x,s.y,s.z),n.setXYZ(d,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const a=n[i].array,s=e.attributes[i],l=s.array,c=s.itemSize*t,u=Math.min(l.length,a.length-c);for(let h=0,f=c;h<u;h++,f++)a[f]=l[h]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(s,l){const c=s.array,u=s.itemSize,h=s.normalized,f=new c.constructor(l.length*u);let m=0,_=0;for(let d=0,p=l.length;d<p;d++){s.isInterleavedBufferAttribute?m=l[d]*s.data.stride+s.offset:m=l[d]*u;for(let g=0;g<u;g++)f[_++]=c[m++]}return new Jn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vn,n=this.index.array,i=this.attributes;for(const s in i){const l=i[s],c=e(l,n);t.setAttribute(s,c)}const r=this.morphAttributes;for(const s in r){const l=[],c=r[s];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=e(f,n);l.push(m)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let s=0,l=a.length;s<l;s++){const c=a[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const ih=new Et,zr=new yd,fl=new Mo,Ti=new z,Ai=new z,Ci=new z,dl=new z,pl=new z,ml=new z,Ra=new z,Ia=new z,Fa=new z,Oa=new Be,za=new Be,Na=new Be,gl=new z,ka=new z;class Cn extends Pn{constructor(e=new Vn,t=new Cc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),fl.copy(n.boundingSphere),fl.applyMatrix4(r),e.ray.intersectsSphere(fl)===!1)||(ih.copy(r).invert(),zr.copy(e.ray).applyMatrix4(ih),n.boundingBox!==null&&zr.intersectsBox(n.boundingBox)===!1))return;let a;const s=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,f=n.attributes.uv2,m=n.groups,_=n.drawRange;if(s!==null)if(Array.isArray(i))for(let d=0,p=m.length;d<p;d++){const g=m[d],y=i[g.materialIndex],S=Math.max(g.start,_.start),b=Math.min(s.count,Math.min(g.start+g.count,_.start+_.count));for(let v=S,T=b;v<T;v+=3){const C=s.getX(v),x=s.getX(v+1),E=s.getX(v+2);a=Ba(this,y,e,zr,l,c,u,h,f,C,x,E),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=g.materialIndex,t.push(a))}}else{const d=Math.max(0,_.start),p=Math.min(s.count,_.start+_.count);for(let g=d,y=p;g<y;g+=3){const S=s.getX(g),b=s.getX(g+1),v=s.getX(g+2);a=Ba(this,i,e,zr,l,c,u,h,f,S,b,v),a&&(a.faceIndex=Math.floor(g/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let d=0,p=m.length;d<p;d++){const g=m[d],y=i[g.materialIndex],S=Math.max(g.start,_.start),b=Math.min(l.count,Math.min(g.start+g.count,_.start+_.count));for(let v=S,T=b;v<T;v+=3){const C=v,x=v+1,E=v+2;a=Ba(this,y,e,zr,l,c,u,h,f,C,x,E),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=g.materialIndex,t.push(a))}}else{const d=Math.max(0,_.start),p=Math.min(l.count,_.start+_.count);for(let g=d,y=p;g<y;g+=3){const S=g,b=g+1,v=g+2;a=Ba(this,i,e,zr,l,c,u,h,f,S,b,v),a&&(a.faceIndex=Math.floor(g/3),t.push(a))}}}}function Cg(o,e,t,n,i,r,a,s){let l;if(e.side===Un?l=n.intersectTriangle(a,r,i,!0,s):l=n.intersectTriangle(i,r,a,e.side!==hs,s),l===null)return null;ka.copy(s),ka.applyMatrix4(o.matrixWorld);const c=t.ray.origin.distanceTo(ka);return c<t.near||c>t.far?null:{distance:c,point:ka.clone(),object:o}}function Ba(o,e,t,n,i,r,a,s,l,c,u,h){Ti.fromBufferAttribute(i,c),Ai.fromBufferAttribute(i,u),Ci.fromBufferAttribute(i,h);const f=o.morphTargetInfluences;if(r&&f){Ra.set(0,0,0),Ia.set(0,0,0),Fa.set(0,0,0);for(let _=0,d=r.length;_<d;_++){const p=f[_],g=r[_];p!==0&&(dl.fromBufferAttribute(g,c),pl.fromBufferAttribute(g,u),ml.fromBufferAttribute(g,h),a?(Ra.addScaledVector(dl,p),Ia.addScaledVector(pl,p),Fa.addScaledVector(ml,p)):(Ra.addScaledVector(dl.sub(Ti),p),Ia.addScaledVector(pl.sub(Ai),p),Fa.addScaledVector(ml.sub(Ci),p)))}Ti.add(Ra),Ai.add(Ia),Ci.add(Fa)}o.isSkinnedMesh&&(o.boneTransform(c,Ti),o.boneTransform(u,Ai),o.boneTransform(h,Ci));const m=Cg(o,e,t,n,Ti,Ai,Ci,gl);if(m){s&&(Oa.fromBufferAttribute(s,c),za.fromBufferAttribute(s,u),Na.fromBufferAttribute(s,h),m.uv=fi.getUV(gl,Ti,Ai,Ci,Oa,za,Na,new Be)),l&&(Oa.fromBufferAttribute(l,c),za.fromBufferAttribute(l,u),Na.fromBufferAttribute(l,h),m.uv2=fi.getUV(gl,Ti,Ai,Ci,Oa,za,Na,new Be));const _={a:c,b:u,c:h,normal:new z,materialIndex:0};fi.getNormal(Ti,Ai,Ci,_.normal),m.face=_}return m}class ca extends Vn{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const s=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,m=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Wt(c,3)),this.setAttribute("normal",new Wt(u,3)),this.setAttribute("uv",new Wt(h,2));function _(d,p,g,y,S,b,v,T,C,x,E){const P=b/C,I=v/x,$=b/2,j=v/2,F=T/2,H=C+1,O=x+1;let V=0,G=0;const N=new z;for(let D=0;D<O;D++){const ee=D*I-j;for(let Q=0;Q<H;Q++){const ne=Q*P-$;N[d]=ne*y,N[p]=ee*S,N[g]=F,c.push(N.x,N.y,N.z),N[d]=0,N[p]=0,N[g]=T>0?1:-1,u.push(N.x,N.y,N.z),h.push(Q/C),h.push(1-D/x),V+=1}}for(let D=0;D<x;D++)for(let ee=0;ee<C;ee++){const Q=f+ee+H*D,ne=f+ee+H*(D+1),ce=f+(ee+1)+H*(D+1),ye=f+(ee+1)+H*D;l.push(Q,ne,ye),l.push(ne,ce,ye),G+=6}s.addGroup(m,G,E),m+=G,f+=V}}static fromJSON(e){return new ca(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ms(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const i=o[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ft(o){const e={};for(let t=0;t<o.length;t++){const n=ms(o[t]);for(const i in n)e[i]=n[i]}return e}function Dg(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}const wd={clone:ms,merge:Ft};var Lg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gn extends la{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lg,this.fragmentShader=Pg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ms(e.uniforms),this.uniformsGroups=Dg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ed extends Pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Jt extends Ed{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Xu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(jo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xu*2*Math.atan(Math.tan(jo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(jo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const s=this.filmOffset;s!==0&&(r+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Nr=90,kr=1;class Rg extends Pn{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new Jt(Nr,kr,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new z(1,0,0)),this.add(i);const r=new Jt(Nr,kr,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new z(-1,0,0)),this.add(r);const a=new Jt(Nr,kr,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new z(0,1,0)),this.add(a);const s=new Jt(Nr,kr,e,t);s.layers=this.layers,s.up.set(0,0,-1),s.lookAt(new z(0,-1,0)),this.add(s);const l=new Jt(Nr,kr,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new z(0,0,1)),this.add(l);const c=new Jt(Nr,kr,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new z(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,a,s,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=_i,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,s),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Td extends pn{constructor(e,t,n,i,r,a,s,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:fs,super(e,t,n,i,r,a,s,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ig extends ti{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Td(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Mn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ca(5,5,5),r=new Gn({name:"CubemapFromEquirect",uniforms:ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Un,blending:ki});r.uniforms.tEquirect.value=t;const a=new Cn(i,r),s=t.minFilter;return t.minFilter===So&&(t.minFilter=Mn),new Rg(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const _l=new z,Fg=new z,Og=new An;class ji{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=_l.subVectors(n,t).cross(Fg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(_l),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Og.getNormalMatrix(e),i=this.coplanarPoint(_l).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Br=new Mo,Ua=new z;class Ad{constructor(e=new ji,t=new ji,n=new ji,i=new ji,r=new ji,a=new ji){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(n),s[3].copy(i),s[4].copy(r),s[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],a=n[2],s=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],m=n[9],_=n[10],d=n[11],p=n[12],g=n[13],y=n[14],S=n[15];return t[0].setComponents(s-i,h-l,d-f,S-p).normalize(),t[1].setComponents(s+i,h+l,d+f,S+p).normalize(),t[2].setComponents(s+r,h+c,d+m,S+g).normalize(),t[3].setComponents(s-r,h-c,d-m,S-g).normalize(),t[4].setComponents(s-a,h-u,d-_,S-y).normalize(),t[5].setComponents(s+a,h+u,d+_,S+y).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Br.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Br)}intersectsSprite(e){return Br.center.set(0,0,0),Br.radius=.7071067811865476,Br.applyMatrix4(e.matrixWorld),this.intersectsSphere(Br)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ua.x=i.normal.x>0?e.max.x:e.min.x,Ua.y=i.normal.y>0?e.max.y:e.min.y,Ua.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ua)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Cd(){let o=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=o.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(i),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){o=r}}}function zg(o,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,m=o.createBuffer();o.bindBuffer(u,m),o.bufferData(u,h,f),c.onUploadCallback();let _;if(h instanceof Float32Array)_=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(h instanceof Int16Array)_=5122;else if(h instanceof Uint32Array)_=5125;else if(h instanceof Int32Array)_=5124;else if(h instanceof Int8Array)_=5120;else if(h instanceof Uint8Array)_=5121;else if(h instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const f=u.array,m=u.updateRange;o.bindBuffer(h,c),m.count===-1?o.bufferSubData(h,0,f):(t?o.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):o.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(o.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:a,remove:s,update:l}}class gs extends Vn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,s=Math.floor(n),l=Math.floor(i),c=s+1,u=l+1,h=e/s,f=t/l,m=[],_=[],d=[],p=[];for(let g=0;g<u;g++){const y=g*f-a;for(let S=0;S<c;S++){const b=S*h-r;_.push(b,-y,0),d.push(0,0,1),p.push(S/s),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<s;y++){const S=y+c*g,b=y+c*(g+1),v=y+1+c*(g+1),T=y+1+c*g;m.push(S,b,T),m.push(b,v,T)}this.setIndex(m),this.setAttribute("position",new Wt(_,3)),this.setAttribute("normal",new Wt(d,3)),this.setAttribute("uv",new Wt(p,2))}static fromJSON(e){return new gs(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ng=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,kg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ug=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hg="vec3 transformed = vec3( position );",Wg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xg=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Yg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$g=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,jg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,e_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,t_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,n_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,i_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,r_=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,s_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,a_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,o_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,l_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,c_="gl_FragColor = linearToOutputTexel( gl_FragColor );",u_=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,h_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,f_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,d_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,p_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,m_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,g_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,__=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,x_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,v_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,y_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,b_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,S_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,M_=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,w_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,E_=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,T_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,A_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,C_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,D_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,L_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,P_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,R_=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,I_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,F_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,O_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,z_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,k_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,B_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,U_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,G_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,V_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,H_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,W_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,X_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Y_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,$_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,q_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,j_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Z_=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,K_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Q_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,e0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,t0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,n0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,i0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,r0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,s0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,a0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,o0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,l0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,c0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,u0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,h0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,f0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,d0=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,p0=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,m0=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,g0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,x0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,v0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,y0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,b0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,S0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,M0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,w0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,E0=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,T0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,A0=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,C0=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,D0=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,L0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,P0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,R0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,I0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const F0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,O0=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N0=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,k0=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,B0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,U0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,G0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,V0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,H0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,W0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,X0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Y0=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q0=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,j0=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,K0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Q0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ex=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ix=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ax=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ox=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lx=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ux=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ve={alphamap_fragment:Ng,alphamap_pars_fragment:kg,alphatest_fragment:Bg,alphatest_pars_fragment:Ug,aomap_fragment:Gg,aomap_pars_fragment:Vg,begin_vertex:Hg,beginnormal_vertex:Wg,bsdfs:Xg,iridescence_fragment:Yg,bumpmap_pars_fragment:$g,clipping_planes_fragment:qg,clipping_planes_pars_fragment:jg,clipping_planes_pars_vertex:Zg,clipping_planes_vertex:Kg,color_fragment:Jg,color_pars_fragment:Qg,color_pars_vertex:e_,color_vertex:t_,common:n_,cube_uv_reflection_fragment:i_,defaultnormal_vertex:r_,displacementmap_pars_vertex:s_,displacementmap_vertex:a_,emissivemap_fragment:o_,emissivemap_pars_fragment:l_,encodings_fragment:c_,encodings_pars_fragment:u_,envmap_fragment:h_,envmap_common_pars_fragment:f_,envmap_pars_fragment:d_,envmap_pars_vertex:p_,envmap_physical_pars_fragment:E_,envmap_vertex:m_,fog_vertex:g_,fog_pars_vertex:__,fog_fragment:x_,fog_pars_fragment:v_,gradientmap_pars_fragment:y_,lightmap_fragment:b_,lightmap_pars_fragment:S_,lights_lambert_vertex:M_,lights_pars_begin:w_,lights_toon_fragment:T_,lights_toon_pars_fragment:A_,lights_phong_fragment:C_,lights_phong_pars_fragment:D_,lights_physical_fragment:L_,lights_physical_pars_fragment:P_,lights_fragment_begin:R_,lights_fragment_maps:I_,lights_fragment_end:F_,logdepthbuf_fragment:O_,logdepthbuf_pars_fragment:z_,logdepthbuf_pars_vertex:N_,logdepthbuf_vertex:k_,map_fragment:B_,map_pars_fragment:U_,map_particle_fragment:G_,map_particle_pars_fragment:V_,metalnessmap_fragment:H_,metalnessmap_pars_fragment:W_,morphcolor_vertex:X_,morphnormal_vertex:Y_,morphtarget_pars_vertex:$_,morphtarget_vertex:q_,normal_fragment_begin:j_,normal_fragment_maps:Z_,normal_pars_fragment:K_,normal_pars_vertex:J_,normal_vertex:Q_,normalmap_pars_fragment:e0,clearcoat_normal_fragment_begin:t0,clearcoat_normal_fragment_maps:n0,clearcoat_pars_fragment:i0,iridescence_pars_fragment:r0,output_fragment:s0,packing:a0,premultiplied_alpha_fragment:o0,project_vertex:l0,dithering_fragment:c0,dithering_pars_fragment:u0,roughnessmap_fragment:h0,roughnessmap_pars_fragment:f0,shadowmap_pars_fragment:d0,shadowmap_pars_vertex:p0,shadowmap_vertex:m0,shadowmask_pars_fragment:g0,skinbase_vertex:_0,skinning_pars_vertex:x0,skinning_vertex:v0,skinnormal_vertex:y0,specularmap_fragment:b0,specularmap_pars_fragment:S0,tonemapping_fragment:M0,tonemapping_pars_fragment:w0,transmission_fragment:E0,transmission_pars_fragment:T0,uv_pars_fragment:A0,uv_pars_vertex:C0,uv_vertex:D0,uv2_pars_fragment:L0,uv2_pars_vertex:P0,uv2_vertex:R0,worldpos_vertex:I0,background_vert:F0,background_frag:O0,cube_vert:z0,cube_frag:N0,depth_vert:k0,depth_frag:B0,distanceRGBA_vert:U0,distanceRGBA_frag:G0,equirect_vert:V0,equirect_frag:H0,linedashed_vert:W0,linedashed_frag:X0,meshbasic_vert:Y0,meshbasic_frag:$0,meshlambert_vert:q0,meshlambert_frag:j0,meshmatcap_vert:Z0,meshmatcap_frag:K0,meshnormal_vert:J0,meshnormal_frag:Q0,meshphong_vert:ex,meshphong_frag:tx,meshphysical_vert:nx,meshphysical_frag:ix,meshtoon_vert:rx,meshtoon_frag:sx,points_vert:ax,points_frag:ox,shadow_vert:lx,shadow_frag:cx,sprite_vert:ux,sprite_frag:hx},pe={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new An},uv2Transform:{value:new An},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new An}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new An}}},Xn={basic:{uniforms:Ft([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Ft([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.fog,pe.lights,{emissive:{value:new rt(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Ft([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Ft([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Ft([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new rt(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Ft([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Ft([pe.points,pe.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Ft([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Ft([pe.common,pe.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Ft([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Ft([pe.sprite,pe.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new An},t2D:{value:null}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},cube:{uniforms:Ft([pe.envmap,{opacity:{value:1}}]),vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Ft([pe.common,pe.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Ft([pe.lights,pe.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Xn.physical={uniforms:Ft([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Be(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};function fx(o,e,t,n,i,r){const a=new rt(0);let s=i===!0?0:1,l,c,u=null,h=0,f=null;function m(d,p){let g=!1,y=p.isScene===!0?p.background:null;y&&y.isTexture&&(y=e.get(y));const S=o.xr,b=S.getSession&&S.getSession();b&&b.environmentBlendMode==="additive"&&(y=null),y===null?_(a,s):y&&y.isColor&&(_(y,1),g=!0),(o.autoClear||g)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),y&&(y.isCubeTexture||y.mapping===bo)?(c===void 0&&(c=new Cn(new ca(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:ms(Xn.cube.uniforms),vertexShader:Xn.cube.vertexShader,fragmentShader:Xn.cube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,(u!==y||h!==y.version||f!==o.toneMapping)&&(c.material.needsUpdate=!0,u=y,h=y.version,f=o.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Cn(new gs(2,2),new Gn({name:"BackgroundMaterial",uniforms:ms(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:ea,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||h!==y.version||f!==o.toneMapping)&&(l.material.needsUpdate=!0,u=y,h=y.version,f=o.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null))}function _(d,p){t.buffers.color.setClear(d.r,d.g,d.b,p,r)}return{getClearColor:function(){return a},setClearColor:function(d,p=1){a.set(d),s=p,_(a,s)},getClearAlpha:function(){return s},setClearAlpha:function(d){s=d,_(a,s)},render:m}}function dx(o,e,t,n){const i=o.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,s={},l=p(null);let c=l,u=!1;function h(F,H,O,V,G){let N=!1;if(a){const D=d(V,O,H);c!==D&&(c=D,m(c.object)),N=g(F,V,O,G),N&&y(F,V,O,G)}else{const D=H.wireframe===!0;(c.geometry!==V.id||c.program!==O.id||c.wireframe!==D)&&(c.geometry=V.id,c.program=O.id,c.wireframe=D,N=!0)}G!==null&&t.update(G,34963),(N||u)&&(u=!1,x(F,H,O,V),G!==null&&o.bindBuffer(34963,t.get(G).buffer))}function f(){return n.isWebGL2?o.createVertexArray():r.createVertexArrayOES()}function m(F){return n.isWebGL2?o.bindVertexArray(F):r.bindVertexArrayOES(F)}function _(F){return n.isWebGL2?o.deleteVertexArray(F):r.deleteVertexArrayOES(F)}function d(F,H,O){const V=O.wireframe===!0;let G=s[F.id];G===void 0&&(G={},s[F.id]=G);let N=G[H.id];N===void 0&&(N={},G[H.id]=N);let D=N[V];return D===void 0&&(D=p(f()),N[V]=D),D}function p(F){const H=[],O=[],V=[];for(let G=0;G<i;G++)H[G]=0,O[G]=0,V[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:O,attributeDivisors:V,object:F,attributes:{},index:null}}function g(F,H,O,V){const G=c.attributes,N=H.attributes;let D=0;const ee=O.getAttributes();for(const Q in ee)if(ee[Q].location>=0){const ce=G[Q];let ye=N[Q];if(ye===void 0&&(Q==="instanceMatrix"&&F.instanceMatrix&&(ye=F.instanceMatrix),Q==="instanceColor"&&F.instanceColor&&(ye=F.instanceColor)),ce===void 0||ce.attribute!==ye||ye&&ce.data!==ye.data)return!0;D++}return c.attributesNum!==D||c.index!==V}function y(F,H,O,V){const G={},N=H.attributes;let D=0;const ee=O.getAttributes();for(const Q in ee)if(ee[Q].location>=0){let ce=N[Q];ce===void 0&&(Q==="instanceMatrix"&&F.instanceMatrix&&(ce=F.instanceMatrix),Q==="instanceColor"&&F.instanceColor&&(ce=F.instanceColor));const ye={};ye.attribute=ce,ce&&ce.data&&(ye.data=ce.data),G[Q]=ye,D++}c.attributes=G,c.attributesNum=D,c.index=V}function S(){const F=c.newAttributes;for(let H=0,O=F.length;H<O;H++)F[H]=0}function b(F){v(F,0)}function v(F,H){const O=c.newAttributes,V=c.enabledAttributes,G=c.attributeDivisors;O[F]=1,V[F]===0&&(o.enableVertexAttribArray(F),V[F]=1),G[F]!==H&&((n.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,H),G[F]=H)}function T(){const F=c.newAttributes,H=c.enabledAttributes;for(let O=0,V=H.length;O<V;O++)H[O]!==F[O]&&(o.disableVertexAttribArray(O),H[O]=0)}function C(F,H,O,V,G,N){n.isWebGL2===!0&&(O===5124||O===5125)?o.vertexAttribIPointer(F,H,O,G,N):o.vertexAttribPointer(F,H,O,V,G,N)}function x(F,H,O,V){if(n.isWebGL2===!1&&(F.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const G=V.attributes,N=O.getAttributes(),D=H.defaultAttributeValues;for(const ee in N){const Q=N[ee];if(Q.location>=0){let ne=G[ee];if(ne===void 0&&(ee==="instanceMatrix"&&F.instanceMatrix&&(ne=F.instanceMatrix),ee==="instanceColor"&&F.instanceColor&&(ne=F.instanceColor)),ne!==void 0){const ce=ne.normalized,ye=ne.itemSize,W=t.get(ne);if(W===void 0)continue;const Ie=W.buffer,be=W.type,Pe=W.bytesPerElement;if(ne.isInterleavedBufferAttribute){const ue=ne.data,Ne=ue.stride,me=ne.offset;if(ue.isInstancedInterleavedBuffer){for(let _e=0;_e<Q.locationSize;_e++)v(Q.location+_e,ue.meshPerAttribute);F.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let _e=0;_e<Q.locationSize;_e++)b(Q.location+_e);o.bindBuffer(34962,Ie);for(let _e=0;_e<Q.locationSize;_e++)C(Q.location+_e,ye/Q.locationSize,be,ce,Ne*Pe,(me+ye/Q.locationSize*_e)*Pe)}else{if(ne.isInstancedBufferAttribute){for(let ue=0;ue<Q.locationSize;ue++)v(Q.location+ue,ne.meshPerAttribute);F.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ue=0;ue<Q.locationSize;ue++)b(Q.location+ue);o.bindBuffer(34962,Ie);for(let ue=0;ue<Q.locationSize;ue++)C(Q.location+ue,ye/Q.locationSize,be,ce,ye*Pe,ye/Q.locationSize*ue*Pe)}}else if(D!==void 0){const ce=D[ee];if(ce!==void 0)switch(ce.length){case 2:o.vertexAttrib2fv(Q.location,ce);break;case 3:o.vertexAttrib3fv(Q.location,ce);break;case 4:o.vertexAttrib4fv(Q.location,ce);break;default:o.vertexAttrib1fv(Q.location,ce)}}}}T()}function E(){$();for(const F in s){const H=s[F];for(const O in H){const V=H[O];for(const G in V)_(V[G].object),delete V[G];delete H[O]}delete s[F]}}function P(F){if(s[F.id]===void 0)return;const H=s[F.id];for(const O in H){const V=H[O];for(const G in V)_(V[G].object),delete V[G];delete H[O]}delete s[F.id]}function I(F){for(const H in s){const O=s[H];if(O[F.id]===void 0)continue;const V=O[F.id];for(const G in V)_(V[G].object),delete V[G];delete O[F.id]}}function $(){j(),u=!0,c!==l&&(c=l,m(c.object))}function j(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:$,resetDefaultState:j,dispose:E,releaseStatesOfGeometry:P,releaseStatesOfProgram:I,initAttributes:S,enableAttribute:b,disableUnusedAttributes:T}}function px(o,e,t,n){const i=n.isWebGL2;let r;function a(c){r=c}function s(c,u){o.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let f,m;if(i)f=o,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,c,u,h),t.update(u,r,h)}this.setMode=a,this.render=s,this.renderInstances=l}function mx(o,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=o.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&o instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&o instanceof WebGL2ComputeRenderingContext;let s=t.precision!==void 0?t.precision:"highp";const l=r(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=o.getParameter(34930),f=o.getParameter(35660),m=o.getParameter(3379),_=o.getParameter(34076),d=o.getParameter(34921),p=o.getParameter(36347),g=o.getParameter(36348),y=o.getParameter(36349),S=f>0,b=a||e.has("OES_texture_float"),v=S&&b,T=a?o.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:s,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:d,maxVertexUniforms:p,maxVaryings:g,maxFragmentUniforms:y,vertexTextures:S,floatFragmentTextures:b,floatVertexTextures:v,maxSamples:T}}function gx(o){const e=this;let t=null,n=0,i=!1,r=!1;const a=new ji,s=new An,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,m){const _=h.length!==0||f||n!==0||i;return i=f,t=u(h,m,0),n=h.length,_},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(h,f,m){const _=h.clippingPlanes,d=h.clipIntersection,p=h.clipShadows,g=o.get(h);if(!i||_===null||_.length===0||r&&!p)r?u(null):c();else{const y=r?0:n,S=y*4;let b=g.clippingState||null;l.value=b,b=u(_,f,S,m);for(let v=0;v!==S;++v)b[v]=t[v];g.clippingState=b,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,m,_){const d=h!==null?h.length:0;let p=null;if(d!==0){if(p=l.value,_!==!0||p===null){const g=m+d*4,y=f.matrixWorldInverse;s.getNormalMatrix(y),(p===null||p.length<g)&&(p=new Float32Array(g));for(let S=0,b=m;S!==d;++S,b+=4)a.copy(h[S]).applyMatrix4(y,s),a.normal.toArray(p,b),p[b+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,p}}function _x(o){let e=new WeakMap;function t(a,s){return s===Jl?a.mapping=fs:s===Ql&&(a.mapping=ds),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const s=a.mapping;if(s===Jl||s===Ql)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Ig(l.height/2);return c.fromEquirectangularTexture(o,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const s=a.target;s.removeEventListener("dispose",i);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class _s extends Ed{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,s=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,s-=u*this.view.offsetY,l=s-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,s,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const jr=4,rh=[.125,.215,.35,.446,.526,.582],Ji=20,xl=new _s,sh=new rt;let vl=null;const Zi=(1+Math.sqrt(5))/2,Ur=1/Zi,ah=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,Zi,Ur),new z(0,Zi,-Ur),new z(Ur,0,Zi),new z(-Ur,0,Zi),new z(Zi,Ur,0),new z(-Zi,Ur,0)];class oh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){vl=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ch(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vl),e.scissorTest=!1,Ga(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fs||e.mapping===ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vl=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:ta,format:qn,encoding:_r,depthBuffer:!1},i=lh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xx(r)),this._blurMaterial=vx(r,e,t)}return i}_compileMaterial(e){const t=new Cn(this._lodPlanes[0],e);this._renderer.compile(t,xl)}_sceneToCubeUV(e,t,n,i){const s=new Jt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(sh),u.toneMapping=_i,u.autoClear=!1;const m=new Cc({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1}),_=new Cn(new ca,m);let d=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,d=!0):(m.color.copy(sh),d=!0);for(let g=0;g<6;g++){const y=g%3;y===0?(s.up.set(0,l[g],0),s.lookAt(c[g],0,0)):y===1?(s.up.set(0,0,l[g]),s.lookAt(0,c[g],0)):(s.up.set(0,l[g],0),s.lookAt(0,0,c[g]));const S=this._cubeSize;Ga(i,y*S,g>2?S:0,S,S),u.setRenderTarget(i),d&&u.render(_,s),u.render(e,s)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===fs||e.mapping===ds;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=uh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ch());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Cn(this._lodPlanes[0],r),s=r.uniforms;s.envMap.value=e;const l=this._cubeSize;Ga(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,xl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=ah[(i-1)%ah.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,s){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Cn(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Ji-1),d=r/_,p=isFinite(r)?1+Math.floor(u*d):Ji;p>Ji&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ji}`);const g=[];let y=0;for(let C=0;C<Ji;++C){const x=C/d,E=Math.exp(-x*x/2);g.push(E),C===0?y+=E:C<p&&(y+=2*E)}for(let C=0;C<g.length;C++)g[C]=g[C]/y;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=g,f.latitudinal.value=a==="latitudinal",s&&(f.poleAxis.value=s);const{_lodMax:S}=this;f.dTheta.value=_,f.mipInt.value=S-n;const b=this._sizeLods[i],v=3*b*(i>S-jr?i-S+jr:0),T=4*(this._cubeSize-b);Ga(t,v,T,3*b,2*b),l.setRenderTarget(t),l.render(h,xl)}}function xx(o){const e=[],t=[],n=[];let i=o;const r=o-jr+1+rh.length;for(let a=0;a<r;a++){const s=Math.pow(2,i);t.push(s);let l=1/s;a>o-jr?l=rh[a-o+jr-1]:a===0&&(l=0),n.push(l);const c=1/(s-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,_=6,d=3,p=2,g=1,y=new Float32Array(d*_*m),S=new Float32Array(p*_*m),b=new Float32Array(g*_*m);for(let T=0;T<m;T++){const C=T%3*2/3-1,x=T>2?0:-1,E=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];y.set(E,d*_*T),S.set(f,p*_*T);const P=[T,T,T,T,T,T];b.set(P,g*_*T)}const v=new Vn;v.setAttribute("position",new Jn(y,d)),v.setAttribute("uv",new Jn(S,p)),v.setAttribute("faceIndex",new Jn(b,g)),e.push(v),i>jr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function lh(o,e,t){const n=new ti(o,e,t);return n.texture.mapping=bo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ga(o,e,t,n,i){o.viewport.set(e,t,n,i),o.scissor.set(e,t,n,i)}function vx(o,e,t){const n=new Float32Array(Ji),i=new z(0,1,0);return new Gn({name:"SphericalGaussianBlur",defines:{n:Ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function ch(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function uh(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Dc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function yx(o){let e=new WeakMap,t=null;function n(s){if(s&&s.isTexture){const l=s.mapping,c=l===Jl||l===Ql,u=l===fs||l===ds;if(c||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let h=e.get(s);return t===null&&(t=new oh(o)),h=c?t.fromEquirectangular(s,h):t.fromCubemap(s,h),e.set(s,h),h.texture}else{if(e.has(s))return e.get(s).texture;{const h=s.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new oh(o));const f=c?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,f),s.addEventListener("dispose",r),f.texture}else return null}}}return s}function i(s){let l=0;const c=6;for(let u=0;u<c;u++)s[u]!==void 0&&l++;return l===c}function r(s){const l=s.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function bx(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Sx(o,e,t,n){const i={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete i[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function s(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],34962);const m=h.morphAttributes;for(const _ in m){const d=m[_];for(let p=0,g=d.length;p<g;p++)e.update(d[p],34962)}}function c(h){const f=[],m=h.index,_=h.attributes.position;let d=0;if(m!==null){const y=m.array;d=m.version;for(let S=0,b=y.length;S<b;S+=3){const v=y[S+0],T=y[S+1],C=y[S+2];f.push(v,T,T,C,C,v)}}else{const y=_.array;d=_.version;for(let S=0,b=y.length/3-1;S<b;S+=3){const v=S+0,T=S+1,C=S+2;f.push(v,T,T,C,C,v)}}const p=new(md(f)?Md:Sd)(f,1);p.version=d;const g=r.get(h);g&&e.remove(g),r.set(h,p)}function u(h){const f=r.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:s,update:l,getWireframeAttribute:u}}function Mx(o,e,t,n){const i=n.isWebGL2;let r;function a(f){r=f}let s,l;function c(f){s=f.type,l=f.bytesPerElement}function u(f,m){o.drawElements(r,m,s,f*l),t.update(m,r,1)}function h(f,m,_){if(_===0)return;let d,p;if(i)d=o,p="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](r,m,s,f*l,_),t.update(m,r,_)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function wx(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,s){switch(t.calls++,a){case 4:t.triangles+=s*(r/3);break;case 1:t.lines+=s*(r/2);break;case 3:t.lines+=s*(r-1);break;case 2:t.lines+=s*r;break;case 0:t.points+=s*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Ex(o,e){return o[0]-e[0]}function Tx(o,e){return Math.abs(e[1])-Math.abs(o[1])}function yl(o,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Uint8Array?t=255:n instanceof Uint16Array?t=65535:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),o.divideScalar(t)}function Ax(o,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new Ct,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,u,h,f){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=d!==void 0?d.length:0;let g=r.get(u);if(g===void 0||g.count!==p){let O=function(){F.dispose(),r.delete(u),u.removeEventListener("dispose",O)};var _=O;g!==void 0&&g.texture.dispose();const b=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],x=u.morphAttributes.normal||[],E=u.morphAttributes.color||[];let P=0;b===!0&&(P=1),v===!0&&(P=2),T===!0&&(P=3);let I=u.attributes.position.count*P,$=1;I>e.maxTextureSize&&($=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const j=new Float32Array(I*$*4*p),F=new vd(j,I,$,p);F.type=ir,F.needsUpdate=!0;const H=P*4;for(let V=0;V<p;V++){const G=C[V],N=x[V],D=E[V],ee=I*$*4*V;for(let Q=0;Q<G.count;Q++){const ne=Q*H;b===!0&&(a.fromBufferAttribute(G,Q),G.normalized===!0&&yl(a,G),j[ee+ne+0]=a.x,j[ee+ne+1]=a.y,j[ee+ne+2]=a.z,j[ee+ne+3]=0),v===!0&&(a.fromBufferAttribute(N,Q),N.normalized===!0&&yl(a,N),j[ee+ne+4]=a.x,j[ee+ne+5]=a.y,j[ee+ne+6]=a.z,j[ee+ne+7]=0),T===!0&&(a.fromBufferAttribute(D,Q),D.normalized===!0&&yl(a,D),j[ee+ne+8]=a.x,j[ee+ne+9]=a.y,j[ee+ne+10]=a.z,j[ee+ne+11]=D.itemSize===4?a.w:1)}}g={count:p,texture:F,size:new Be(I,$)},r.set(u,g),u.addEventListener("dispose",O)}let y=0;for(let b=0;b<m.length;b++)y+=m[b];const S=u.morphTargetsRelative?1:1-y;f.getUniforms().setValue(o,"morphTargetBaseInfluence",S),f.getUniforms().setValue(o,"morphTargetInfluences",m),f.getUniforms().setValue(o,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}else{const d=m===void 0?0:m.length;let p=n[u.id];if(p===void 0||p.length!==d){p=[];for(let v=0;v<d;v++)p[v]=[v,0];n[u.id]=p}for(let v=0;v<d;v++){const T=p[v];T[0]=v,T[1]=m[v]}p.sort(Tx);for(let v=0;v<8;v++)v<d&&p[v][1]?(s[v][0]=p[v][0],s[v][1]=p[v][1]):(s[v][0]=Number.MAX_SAFE_INTEGER,s[v][1]=0);s.sort(Ex);const g=u.morphAttributes.position,y=u.morphAttributes.normal;let S=0;for(let v=0;v<8;v++){const T=s[v],C=T[0],x=T[1];C!==Number.MAX_SAFE_INTEGER&&x?(g&&u.getAttribute("morphTarget"+v)!==g[C]&&u.setAttribute("morphTarget"+v,g[C]),y&&u.getAttribute("morphNormal"+v)!==y[C]&&u.setAttribute("morphNormal"+v,y[C]),i[v]=x,S+=x):(g&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),y&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const b=u.morphTargetsRelative?1:1-S;f.getUniforms().setValue(o,"morphTargetBaseInfluence",b),f.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:l}}function Cx(o,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function a(){i=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const Dd=new pn,Ld=new vd,Pd=new xg,Rd=new Td,hh=[],fh=[],dh=new Float32Array(16),ph=new Float32Array(9),mh=new Float32Array(4);function xs(o,e,t){const n=o[0];if(n<=0||n>0)return o;const i=e*t;let r=hh[i];if(r===void 0&&(r=new Float32Array(i),hh[i]=r),e!==0){n.toArray(r,0);for(let a=1,s=0;a!==e;++a)s+=t,o[a].toArray(r,s)}return r}function Xt(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function Yt(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function wo(o,e){let t=fh[e];t===void 0&&(t=new Int32Array(e),fh[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function Dx(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function Lx(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;o.uniform2fv(this.addr,e),Yt(t,e)}}function Px(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;o.uniform3fv(this.addr,e),Yt(t,e)}}function Rx(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;o.uniform4fv(this.addr,e),Yt(t,e)}}function Ix(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(Xt(t,n))return;mh.set(n),o.uniformMatrix2fv(this.addr,!1,mh),Yt(t,n)}}function Fx(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(Xt(t,n))return;ph.set(n),o.uniformMatrix3fv(this.addr,!1,ph),Yt(t,n)}}function Ox(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(Xt(t,n))return;dh.set(n),o.uniformMatrix4fv(this.addr,!1,dh),Yt(t,n)}}function zx(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function Nx(o,e){const t=this.cache;Xt(t,e)||(o.uniform2iv(this.addr,e),Yt(t,e))}function kx(o,e){const t=this.cache;Xt(t,e)||(o.uniform3iv(this.addr,e),Yt(t,e))}function Bx(o,e){const t=this.cache;Xt(t,e)||(o.uniform4iv(this.addr,e),Yt(t,e))}function Ux(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function Gx(o,e){const t=this.cache;Xt(t,e)||(o.uniform2uiv(this.addr,e),Yt(t,e))}function Vx(o,e){const t=this.cache;Xt(t,e)||(o.uniform3uiv(this.addr,e),Yt(t,e))}function Hx(o,e){const t=this.cache;Xt(t,e)||(o.uniform4uiv(this.addr,e),Yt(t,e))}function Wx(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Dd,i)}function Xx(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Pd,i)}function Yx(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Rd,i)}function $x(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ld,i)}function qx(o){switch(o){case 5126:return Dx;case 35664:return Lx;case 35665:return Px;case 35666:return Rx;case 35674:return Ix;case 35675:return Fx;case 35676:return Ox;case 5124:case 35670:return zx;case 35667:case 35671:return Nx;case 35668:case 35672:return kx;case 35669:case 35673:return Bx;case 5125:return Ux;case 36294:return Gx;case 36295:return Vx;case 36296:return Hx;case 35678:case 36198:case 36298:case 36306:case 35682:return Wx;case 35679:case 36299:case 36307:return Xx;case 35680:case 36300:case 36308:case 36293:return Yx;case 36289:case 36303:case 36311:case 36292:return $x}}function jx(o,e){o.uniform1fv(this.addr,e)}function Zx(o,e){const t=xs(e,this.size,2);o.uniform2fv(this.addr,t)}function Kx(o,e){const t=xs(e,this.size,3);o.uniform3fv(this.addr,t)}function Jx(o,e){const t=xs(e,this.size,4);o.uniform4fv(this.addr,t)}function Qx(o,e){const t=xs(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function ev(o,e){const t=xs(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function tv(o,e){const t=xs(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function nv(o,e){o.uniform1iv(this.addr,e)}function iv(o,e){o.uniform2iv(this.addr,e)}function rv(o,e){o.uniform3iv(this.addr,e)}function sv(o,e){o.uniform4iv(this.addr,e)}function av(o,e){o.uniform1uiv(this.addr,e)}function ov(o,e){o.uniform2uiv(this.addr,e)}function lv(o,e){o.uniform3uiv(this.addr,e)}function cv(o,e){o.uniform4uiv(this.addr,e)}function uv(o,e,t){const n=e.length,i=wo(t,n);o.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture2D(e[r]||Dd,i[r])}function hv(o,e,t){const n=e.length,i=wo(t,n);o.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture3D(e[r]||Pd,i[r])}function fv(o,e,t){const n=e.length,i=wo(t,n);o.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTextureCube(e[r]||Rd,i[r])}function dv(o,e,t){const n=e.length,i=wo(t,n);o.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture2DArray(e[r]||Ld,i[r])}function pv(o){switch(o){case 5126:return jx;case 35664:return Zx;case 35665:return Kx;case 35666:return Jx;case 35674:return Qx;case 35675:return ev;case 35676:return tv;case 5124:case 35670:return nv;case 35667:case 35671:return iv;case 35668:case 35672:return rv;case 35669:case 35673:return sv;case 5125:return av;case 36294:return ov;case 36295:return lv;case 36296:return cv;case 35678:case 36198:case 36298:case 36306:case 35682:return uv;case 35679:case 36299:case 36307:return hv;case 35680:case 36300:case 36308:case 36293:return fv;case 36289:case 36303:case 36311:case 36292:return dv}}class mv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=qx(t.type)}}class gv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=pv(t.type)}}class _v{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const s=i[r];s.setValue(e,t[s.id],n)}}}const bl=/(\w+)(\])?(\[|\.)?/g;function gh(o,e){o.seq.push(e),o.map[e.id]=e}function xv(o,e,t){const n=o.name,i=n.length;for(bl.lastIndex=0;;){const r=bl.exec(n),a=bl.lastIndex;let s=r[1];const l=r[2]==="]",c=r[3];if(l&&(s=s|0),c===void 0||c==="["&&a+2===i){gh(t,c===void 0?new mv(s,o,e):new gv(s,o,e));break}else{let h=t.map[s];h===void 0&&(h=new _v(s),gh(t,h)),t=h}}}class no{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);xv(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const s=t[r],l=n[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function _h(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}let vv=0;function yv(o,e){const t=o.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const s=a+1;n.push(`${s===e?">":" "} ${s}: ${t[a]}`)}return n.join(`
`)}function bv(o){switch(o){case _r:return["Linear","( value )"];case at:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function xh(o,e,t){const n=o.getShaderParameter(e,35713),i=o.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+yv(o.getShaderSource(e),a)}else return i}function Sv(o,e){const t=bv(e);return"vec4 "+o+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Mv(o,e){let t;switch(e){case Wm:t="Linear";break;case Xm:t="Reinhard";break;case Ym:t="OptimizedCineon";break;case $m:t="ACESFilmic";break;case qm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function wv(o){return[o.extensionDerivatives||!!o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Is).join(`
`)}function Ev(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Tv(o,e){const t={},n=o.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=o.getActiveAttrib(e,i),a=r.name;let s=1;r.type===35674&&(s=2),r.type===35675&&(s=3),r.type===35676&&(s=4),t[a]={type:r.type,location:o.getAttribLocation(e,a),locationSize:s}}return t}function Is(o){return o!==""}function vh(o,e){return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yh(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Av=/^[ \t]*#include +<([\w\d./]+)>/gm;function rc(o){return o.replace(Av,Cv)}function Cv(o,e){const t=Ve[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return rc(t)}const Dv=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Lv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bh(o){return o.replace(Lv,Id).replace(Dv,Pv)}function Pv(o,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Id(o,e,t,n)}function Id(o,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Sh(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Rv(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===cd?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===bm?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Rs&&(e="SHADOWMAP_TYPE_VSM"),e}function Iv(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case fs:case ds:e="ENVMAP_TYPE_CUBE";break;case bo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Fv(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ds:e="ENVMAP_MODE_REFRACTION";break}return e}function Ov(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case fd:e="ENVMAP_BLENDING_MULTIPLY";break;case Vm:e="ENVMAP_BLENDING_MIX";break;case Hm:e="ENVMAP_BLENDING_ADD";break}return e}function zv(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Nv(o,e,t,n){const i=o.getContext(),r=t.defines;let a=t.vertexShader,s=t.fragmentShader;const l=Rv(t),c=Iv(t),u=Fv(t),h=Ov(t),f=zv(t),m=t.isWebGL2?"":wv(t),_=Ev(r),d=i.createProgram();let p,g,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[_].filter(Is).join(`
`),p.length>0&&(p+=`
`),g=[m,_].filter(Is).join(`
`),g.length>0&&(g+=`
`)):(p=[Sh(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Is).join(`
`),g=[m,Sh(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_i?"#define TONE_MAPPING":"",t.toneMapping!==_i?Ve.tonemapping_pars_fragment:"",t.toneMapping!==_i?Mv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.encodings_pars_fragment,Sv("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Is).join(`
`)),a=rc(a),a=vh(a,t),a=yh(a,t),s=rc(s),s=vh(s,t),s=yh(s,t),a=bh(a),s=bh(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===Wu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const S=y+p+a,b=y+g+s,v=_h(i,35633,S),T=_h(i,35632,b);if(i.attachShader(d,v),i.attachShader(d,T),t.index0AttributeName!==void 0?i.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(d,0,"position"),i.linkProgram(d),o.debug.checkShaderErrors){const E=i.getProgramInfoLog(d).trim(),P=i.getShaderInfoLog(v).trim(),I=i.getShaderInfoLog(T).trim();let $=!0,j=!0;if(i.getProgramParameter(d,35714)===!1){$=!1;const F=xh(i,v,"vertex"),H=xh(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(d,35715)+`

Program Info Log: `+E+`
`+F+`
`+H)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(P===""||I==="")&&(j=!1);j&&(this.diagnostics={runnable:$,programLog:E,vertexShader:{log:P,prefix:p},fragmentShader:{log:I,prefix:g}})}i.deleteShader(v),i.deleteShader(T);let C;this.getUniforms=function(){return C===void 0&&(C=new no(i,d)),C};let x;return this.getAttributes=function(){return x===void 0&&(x=Tv(i,d)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=vv++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=v,this.fragmentShader=T,this}let kv=0;class Bv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new Uv(e);t.set(e,n)}return t.get(e)}}class Uv{constructor(e){this.id=kv++,this.code=e,this.usedTimes=0}}function Gv(o,e,t,n,i,r,a){const s=new bd,l=new Bv,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x,E,P,I,$){const j=I.fog,F=$.geometry,H=x.isMeshStandardMaterial?I.environment:null,O=(x.isMeshStandardMaterial?t:e).get(x.envMap||H),V=!!O&&O.mapping===bo?O.image.height:null,G=_[x.type];x.precision!==null&&(m=i.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const N=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,D=N!==void 0?N.length:0;let ee=0;F.morphAttributes.position!==void 0&&(ee=1),F.morphAttributes.normal!==void 0&&(ee=2),F.morphAttributes.color!==void 0&&(ee=3);let Q,ne,ce,ye;if(G){const Ne=Xn[G];Q=Ne.vertexShader,ne=Ne.fragmentShader}else Q=x.vertexShader,ne=x.fragmentShader,l.update(x),ce=l.getVertexShaderID(x),ye=l.getFragmentShaderID(x);const W=o.getRenderTarget(),Ie=x.alphaTest>0,be=x.clearcoat>0,Pe=x.iridescence>0;return{isWebGL2:u,shaderID:G,shaderName:x.type,vertexShader:Q,fragmentShader:ne,defines:x.defines,customVertexShaderID:ce,customFragmentShaderID:ye,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:$.isInstancedMesh===!0,instancingColor:$.isInstancedMesh===!0&&$.instanceColor!==null,supportsVertexTextures:f,outputEncoding:W===null?o.outputEncoding:W.isXRRenderTarget===!0?W.texture.encoding:_r,map:!!x.map,matcap:!!x.matcap,envMap:!!O,envMapMode:O&&O.mapping,envMapCubeUVHeight:V,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===pg,tangentSpaceNormalMap:x.normalMapType===dg,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===at,clearcoat:be,clearcoatMap:be&&!!x.clearcoatMap,clearcoatRoughnessMap:be&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:be&&!!x.clearcoatNormalMap,iridescence:Pe,iridescenceMap:Pe&&!!x.iridescenceMap,iridescenceThicknessMap:Pe&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===es,alphaMap:!!x.alphaMap,alphaTest:Ie,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!F.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||x.transmission>0||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||x.sheen>0||!!x.sheenColorMap||!!x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!j,useFog:x.fog===!0,fogExp2:j&&j.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:h,skinning:$.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:ee,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:o.shadowMap.enabled&&P.length>0,shadowMapType:o.shadowMap.type,toneMapping:x.toneMapped?o.toneMapping:_i,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===hs,flipSided:x.side===Un,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)E.push(P),E.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(g(E,x),y(E,x),E.push(o.outputEncoding)),E.push(x.customProgramCacheKey),E.join()}function g(x,E){x.push(E.precision),x.push(E.outputEncoding),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.combine),x.push(E.vertexUvs),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function y(x,E){s.disableAll(),E.isWebGL2&&s.enable(0),E.supportsVertexTextures&&s.enable(1),E.instancing&&s.enable(2),E.instancingColor&&s.enable(3),E.map&&s.enable(4),E.matcap&&s.enable(5),E.envMap&&s.enable(6),E.lightMap&&s.enable(7),E.aoMap&&s.enable(8),E.emissiveMap&&s.enable(9),E.bumpMap&&s.enable(10),E.normalMap&&s.enable(11),E.objectSpaceNormalMap&&s.enable(12),E.tangentSpaceNormalMap&&s.enable(13),E.clearcoat&&s.enable(14),E.clearcoatMap&&s.enable(15),E.clearcoatRoughnessMap&&s.enable(16),E.clearcoatNormalMap&&s.enable(17),E.iridescence&&s.enable(18),E.iridescenceMap&&s.enable(19),E.iridescenceThicknessMap&&s.enable(20),E.displacementMap&&s.enable(21),E.specularMap&&s.enable(22),E.roughnessMap&&s.enable(23),E.metalnessMap&&s.enable(24),E.gradientMap&&s.enable(25),E.alphaMap&&s.enable(26),E.alphaTest&&s.enable(27),E.vertexColors&&s.enable(28),E.vertexAlphas&&s.enable(29),E.vertexUvs&&s.enable(30),E.vertexTangents&&s.enable(31),E.uvsVertexOnly&&s.enable(32),E.fog&&s.enable(33),x.push(s.mask),s.disableAll(),E.useFog&&s.enable(0),E.flatShading&&s.enable(1),E.logarithmicDepthBuffer&&s.enable(2),E.skinning&&s.enable(3),E.morphTargets&&s.enable(4),E.morphNormals&&s.enable(5),E.morphColors&&s.enable(6),E.premultipliedAlpha&&s.enable(7),E.shadowMapEnabled&&s.enable(8),E.physicallyCorrectLights&&s.enable(9),E.doubleSided&&s.enable(10),E.flipSided&&s.enable(11),E.useDepthPacking&&s.enable(12),E.dithering&&s.enable(13),E.specularIntensityMap&&s.enable(14),E.specularColorMap&&s.enable(15),E.transmission&&s.enable(16),E.transmissionMap&&s.enable(17),E.thicknessMap&&s.enable(18),E.sheen&&s.enable(19),E.sheenColorMap&&s.enable(20),E.sheenRoughnessMap&&s.enable(21),E.decodeVideoTexture&&s.enable(22),E.opaque&&s.enable(23),x.push(s.mask)}function S(x){const E=_[x.type];let P;if(E){const I=Xn[E];P=wd.clone(I.uniforms)}else P=x.uniforms;return P}function b(x,E){let P;for(let I=0,$=c.length;I<$;I++){const j=c[I];if(j.cacheKey===E){P=j,++P.usedTimes;break}}return P===void 0&&(P=new Nv(o,E,x,r),c.push(P)),P}function v(x){if(--x.usedTimes===0){const E=c.indexOf(x);c[E]=c[c.length-1],c.pop(),x.destroy()}}function T(x){l.remove(x)}function C(){l.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:S,acquireProgram:b,releaseProgram:v,releaseShaderCache:T,programs:c,dispose:C}}function Vv(){let o=new WeakMap;function e(r){let a=o.get(r);return a===void 0&&(a={},o.set(r,a)),a}function t(r){o.delete(r)}function n(r,a,s){o.get(r)[a]=s}function i(){o=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Hv(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Mh(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function wh(){const o=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h,f,m,_,d,p){let g=o[e];return g===void 0?(g={id:h.id,object:h,geometry:f,material:m,groupOrder:_,renderOrder:h.renderOrder,z:d,group:p},o[e]=g):(g.id=h.id,g.object=h,g.geometry=f,g.material=m,g.groupOrder=_,g.renderOrder=h.renderOrder,g.z=d,g.group=p),e++,g}function s(h,f,m,_,d,p){const g=a(h,f,m,_,d,p);m.transmission>0?n.push(g):m.transparent===!0?i.push(g):t.push(g)}function l(h,f,m,_,d,p){const g=a(h,f,m,_,d,p);m.transmission>0?n.unshift(g):m.transparent===!0?i.unshift(g):t.unshift(g)}function c(h,f){t.length>1&&t.sort(h||Hv),n.length>1&&n.sort(f||Mh),i.length>1&&i.sort(f||Mh)}function u(){for(let h=e,f=o.length;h<f;h++){const m=o[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:s,unshift:l,finish:u,sort:c}}function Wv(){let o=new WeakMap;function e(n,i){let r;return o.has(n)===!1?(r=new wh,o.set(n,[r])):i>=o.get(n).length?(r=new wh,o.get(n).push(r)):r=o.get(n)[i],r}function t(){o=new WeakMap}return{get:e,dispose:t}}function Xv(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new rt};break;case"SpotLight":t={position:new z,direction:new z,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new z,halfWidth:new z,halfHeight:new z};break}return o[e.id]=t,t}}}function Yv(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let $v=0;function qv(o,e){return(e.castShadow?1:0)-(o.castShadow?1:0)}function jv(o,e){const t=new Xv,n=Yv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)i.probe.push(new z);const r=new z,a=new Et,s=new Et;function l(u,h){let f=0,m=0,_=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let d=0,p=0,g=0,y=0,S=0,b=0,v=0,T=0;u.sort(qv);const C=h!==!0?Math.PI:1;for(let E=0,P=u.length;E<P;E++){const I=u[E],$=I.color,j=I.intensity,F=I.distance,H=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=$.r*j*C,m+=$.g*j*C,_+=$.b*j*C;else if(I.isLightProbe)for(let O=0;O<9;O++)i.probe[O].addScaledVector(I.sh.coefficients[O],j);else if(I.isDirectionalLight){const O=t.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity*C),I.castShadow){const V=I.shadow,G=n.get(I);G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,i.directionalShadow[d]=G,i.directionalShadowMap[d]=H,i.directionalShadowMatrix[d]=I.shadow.matrix,b++}i.directional[d]=O,d++}else if(I.isSpotLight){const O=t.get(I);if(O.position.setFromMatrixPosition(I.matrixWorld),O.color.copy($).multiplyScalar(j*C),O.distance=F,O.coneCos=Math.cos(I.angle),O.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),O.decay=I.decay,I.castShadow){const V=I.shadow,G=n.get(I);G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,i.spotShadow[g]=G,i.spotShadowMap[g]=H,i.spotShadowMatrix[g]=I.shadow.matrix,T++}i.spot[g]=O,g++}else if(I.isRectAreaLight){const O=t.get(I);O.color.copy($).multiplyScalar(j),O.halfWidth.set(I.width*.5,0,0),O.halfHeight.set(0,I.height*.5,0),i.rectArea[y]=O,y++}else if(I.isPointLight){const O=t.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity*C),O.distance=I.distance,O.decay=I.decay,I.castShadow){const V=I.shadow,G=n.get(I);G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,G.shadowCameraNear=V.camera.near,G.shadowCameraFar=V.camera.far,i.pointShadow[p]=G,i.pointShadowMap[p]=H,i.pointShadowMatrix[p]=I.shadow.matrix,v++}i.point[p]=O,p++}else if(I.isHemisphereLight){const O=t.get(I);O.skyColor.copy(I.color).multiplyScalar(j*C),O.groundColor.copy(I.groundColor).multiplyScalar(j*C),i.hemi[S]=O,S++}}y>0&&(e.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=_;const x=i.hash;(x.directionalLength!==d||x.pointLength!==p||x.spotLength!==g||x.rectAreaLength!==y||x.hemiLength!==S||x.numDirectionalShadows!==b||x.numPointShadows!==v||x.numSpotShadows!==T)&&(i.directional.length=d,i.spot.length=g,i.rectArea.length=y,i.point.length=p,i.hemi.length=S,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=v,i.spotShadowMatrix.length=T,x.directionalLength=d,x.pointLength=p,x.spotLength=g,x.rectAreaLength=y,x.hemiLength=S,x.numDirectionalShadows=b,x.numPointShadows=v,x.numSpotShadows=T,i.version=$v++)}function c(u,h){let f=0,m=0,_=0,d=0,p=0;const g=h.matrixWorldInverse;for(let y=0,S=u.length;y<S;y++){const b=u[y];if(b.isDirectionalLight){const v=i.directional[f];v.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(g),f++}else if(b.isSpotLight){const v=i.spot[_];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(g),_++}else if(b.isRectAreaLight){const v=i.rectArea[d];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(g),s.identity(),a.copy(b.matrixWorld),a.premultiply(g),s.extractRotation(a),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(s),v.halfHeight.applyMatrix4(s),d++}else if(b.isPointLight){const v=i.point[m];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(g),m++}else if(b.isHemisphereLight){const v=i.hemi[p];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(g),p++}}}return{setup:l,setupView:c,state:i}}function Eh(o,e){const t=new jv(o,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(h){n.push(h)}function s(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:s}}function Zv(o,e){let t=new WeakMap;function n(r,a=0){let s;return t.has(r)===!1?(s=new Eh(o,e),t.set(r,[s])):a>=t.get(r).length?(s=new Eh(o,e),t.get(r).push(s)):s=t.get(r)[a],s}function i(){t=new WeakMap}return{get:n,dispose:i}}class Kv extends la{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Jv extends la{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new z,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Qv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ey=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ty(o,e,t){let n=new Ad;const i=new Be,r=new Be,a=new Ct,s=new Kv({depthPacking:fg}),l=new Jv,c={},u=t.maxTextureSize,h={0:Un,1:ea,2:hs},f=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:Qv,fragmentShader:ey}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new Vn;_.setAttribute("position",new Jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new Cn(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cd,this.render=function(b,v,T){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const C=o.getRenderTarget(),x=o.getActiveCubeFace(),E=o.getActiveMipmapLevel(),P=o.state;P.setBlending(ki),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let I=0,$=b.length;I<$;I++){const j=b[I],F=j.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);const H=F.getFrameExtents();if(i.multiply(H),r.copy(F.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/H.x),i.x=r.x*H.x,F.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/H.y),i.y=r.y*H.y,F.mapSize.y=r.y)),F.map===null){const V=this.type!==Rs?{minFilter:Zt,magFilter:Zt}:{};F.map=new ti(i.x,i.y,V),F.map.texture.name=j.name+".shadowMap",F.camera.updateProjectionMatrix()}o.setRenderTarget(F.map),o.clear();const O=F.getViewportCount();for(let V=0;V<O;V++){const G=F.getViewport(V);a.set(r.x*G.x,r.y*G.y,r.x*G.z,r.y*G.w),P.viewport(a),F.updateMatrices(j,V),n=F.getFrustum(),S(v,T,F.camera,j,this.type)}F.isPointLightShadow!==!0&&this.type===Rs&&g(F,T),F.needsUpdate=!1}p.needsUpdate=!1,o.setRenderTarget(C,x,E)};function g(b,v){const T=e.update(d);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new ti(i.x,i.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,o.setRenderTarget(b.mapPass),o.clear(),o.renderBufferDirect(v,null,T,f,d,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,o.setRenderTarget(b.map),o.clear(),o.renderBufferDirect(v,null,T,m,d,null)}function y(b,v,T,C,x,E){let P=null;const I=T.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0?P=I:P=T.isPointLight===!0?l:s,o.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0){const $=P.uuid,j=v.uuid;let F=c[$];F===void 0&&(F={},c[$]=F);let H=F[j];H===void 0&&(H=P.clone(),F[j]=H),P=H}return P.visible=v.visible,P.wireframe=v.wireframe,E===Rs?P.side=v.shadowSide!==null?v.shadowSide:v.side:P.side=v.shadowSide!==null?v.shadowSide:h[v.side],P.alphaMap=v.alphaMap,P.alphaTest=v.alphaTest,P.clipShadows=v.clipShadows,P.clippingPlanes=v.clippingPlanes,P.clipIntersection=v.clipIntersection,P.displacementMap=v.displacementMap,P.displacementScale=v.displacementScale,P.displacementBias=v.displacementBias,P.wireframeLinewidth=v.wireframeLinewidth,P.linewidth=v.linewidth,T.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(T.matrixWorld),P.nearDistance=C,P.farDistance=x),P}function S(b,v,T,C,x){if(b.visible===!1)return;if(b.layers.test(v.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===Rs)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,b.matrixWorld);const I=e.update(b),$=b.material;if(Array.isArray($)){const j=I.groups;for(let F=0,H=j.length;F<H;F++){const O=j[F],V=$[O.materialIndex];if(V&&V.visible){const G=y(b,V,C,T.near,T.far,x);o.renderBufferDirect(T,null,I,G,b,O)}}}else if($.visible){const j=y(b,$,C,T.near,T.far,x);o.renderBufferDirect(T,null,I,j,b,null)}}const P=b.children;for(let I=0,$=P.length;I<$;I++)S(P[I],v,T,C,x)}}function ny(o,e,t){const n=t.isWebGL2;function i(){let R=!1;const se=new Ct;let X=null;const he=new Ct(0,0,0,0);return{setMask:function(fe){X!==fe&&!R&&(o.colorMask(fe,fe,fe,fe),X=fe)},setLocked:function(fe){R=fe},setClear:function(fe,Ue,st,je,$t){$t===!0&&(fe*=je,Ue*=je,st*=je),se.set(fe,Ue,st,je),he.equals(se)===!1&&(o.clearColor(fe,Ue,st,je),he.copy(se))},reset:function(){R=!1,X=null,he.set(-1,0,0,0)}}}function r(){let R=!1,se=null,X=null,he=null;return{setTest:function(fe){fe?Ie(2929):be(2929)},setMask:function(fe){se!==fe&&!R&&(o.depthMask(fe),se=fe)},setFunc:function(fe){if(X!==fe){if(fe)switch(fe){case Om:o.depthFunc(512);break;case zm:o.depthFunc(519);break;case Nm:o.depthFunc(513);break;case Kl:o.depthFunc(515);break;case km:o.depthFunc(514);break;case Bm:o.depthFunc(518);break;case Um:o.depthFunc(516);break;case Gm:o.depthFunc(517);break;default:o.depthFunc(515)}else o.depthFunc(515);X=fe}},setLocked:function(fe){R=fe},setClear:function(fe){he!==fe&&(o.clearDepth(fe),he=fe)},reset:function(){R=!1,se=null,X=null,he=null}}}function a(){let R=!1,se=null,X=null,he=null,fe=null,Ue=null,st=null,je=null,$t=null;return{setTest:function(tt){R||(tt?Ie(2960):be(2960))},setMask:function(tt){se!==tt&&!R&&(o.stencilMask(tt),se=tt)},setFunc:function(tt,Oe,K){(X!==tt||he!==Oe||fe!==K)&&(o.stencilFunc(tt,Oe,K),X=tt,he=Oe,fe=K)},setOp:function(tt,Oe,K){(Ue!==tt||st!==Oe||je!==K)&&(o.stencilOp(tt,Oe,K),Ue=tt,st=Oe,je=K)},setLocked:function(tt){R=tt},setClear:function(tt){$t!==tt&&(o.clearStencil(tt),$t=tt)},reset:function(){R=!1,se=null,X=null,he=null,fe=null,Ue=null,st=null,je=null,$t=null}}}const s=new i,l=new r,c=new a,u=new WeakMap,h=new WeakMap;let f={},m={},_=new WeakMap,d=[],p=null,g=!1,y=null,S=null,b=null,v=null,T=null,C=null,x=null,E=!1,P=null,I=null,$=null,j=null,F=null;const H=o.getParameter(35661);let O=!1,V=0;const G=o.getParameter(7938);G.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(G)[1]),O=V>=1):G.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),O=V>=2);let N=null,D={};const ee=o.getParameter(3088),Q=o.getParameter(2978),ne=new Ct().fromArray(ee),ce=new Ct().fromArray(Q);function ye(R,se,X){const he=new Uint8Array(4),fe=o.createTexture();o.bindTexture(R,fe),o.texParameteri(R,10241,9728),o.texParameteri(R,10240,9728);for(let Ue=0;Ue<X;Ue++)o.texImage2D(se+Ue,0,6408,1,1,0,6408,5121,he);return fe}const W={};W[3553]=ye(3553,3553,1),W[34067]=ye(34067,34069,6),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ie(2929),l.setFunc(Kl),He(!1),Y(mu),Ie(2884),Ye(ki);function Ie(R){f[R]!==!0&&(o.enable(R),f[R]=!0)}function be(R){f[R]!==!1&&(o.disable(R),f[R]=!1)}function Pe(R,se){return m[R]!==se?(o.bindFramebuffer(R,se),m[R]=se,n&&(R===36009&&(m[36160]=se),R===36160&&(m[36009]=se)),!0):!1}function ue(R,se){let X=d,he=!1;if(R)if(X=_.get(se),X===void 0&&(X=[],_.set(se,X)),R.isWebGLMultipleRenderTargets){const fe=R.texture;if(X.length!==fe.length||X[0]!==36064){for(let Ue=0,st=fe.length;Ue<st;Ue++)X[Ue]=36064+Ue;X.length=fe.length,he=!0}}else X[0]!==36064&&(X[0]=36064,he=!0);else X[0]!==1029&&(X[0]=1029,he=!0);he&&(t.isWebGL2?o.drawBuffers(X):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(X))}function Ne(R){return p!==R?(o.useProgram(R),p=R,!0):!1}const me={[Hr]:32774,[wm]:32778,[Em]:32779};if(n)me[xu]=32775,me[vu]=32776;else{const R=e.get("EXT_blend_minmax");R!==null&&(me[xu]=R.MIN_EXT,me[vu]=R.MAX_EXT)}const _e={[Tm]:0,[Am]:1,[Cm]:768,[ud]:770,[Fm]:776,[Rm]:774,[Lm]:772,[Dm]:769,[hd]:771,[Im]:775,[Pm]:773};function Ye(R,se,X,he,fe,Ue,st,je){if(R===ki){g===!0&&(be(3042),g=!1);return}if(g===!1&&(Ie(3042),g=!0),R!==Mm){if(R!==y||je!==E){if((S!==Hr||T!==Hr)&&(o.blendEquation(32774),S=Hr,T=Hr),je)switch(R){case es:o.blendFuncSeparate(1,771,1,771);break;case Zl:o.blendFunc(1,1);break;case gu:o.blendFuncSeparate(0,769,0,1);break;case _u:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case es:o.blendFuncSeparate(770,771,1,771);break;case Zl:o.blendFunc(770,1);break;case gu:o.blendFuncSeparate(0,769,0,1);break;case _u:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}b=null,v=null,C=null,x=null,y=R,E=je}return}fe=fe||se,Ue=Ue||X,st=st||he,(se!==S||fe!==T)&&(o.blendEquationSeparate(me[se],me[fe]),S=se,T=fe),(X!==b||he!==v||Ue!==C||st!==x)&&(o.blendFuncSeparate(_e[X],_e[he],_e[Ue],_e[st]),b=X,v=he,C=Ue,x=st),y=R,E=null}function et(R,se){R.side===hs?be(2884):Ie(2884);let X=R.side===Un;se&&(X=!X),He(X),R.blending===es&&R.transparent===!1?Ye(ki):Ye(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),s.setMask(R.colorWrite);const he=R.stencilWrite;c.setTest(he),he&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Ce(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Ie(32926):be(32926)}function He(R){P!==R&&(R?o.frontFace(2304):o.frontFace(2305),P=R)}function Y(R){R!==vm?(Ie(2884),R!==I&&(R===mu?o.cullFace(1029):R===ym?o.cullFace(1028):o.cullFace(1032))):be(2884),I=R}function Qe(R){R!==$&&(O&&o.lineWidth(R),$=R)}function Ce(R,se,X){R?(Ie(32823),(j!==se||F!==X)&&(o.polygonOffset(se,X),j=se,F=X)):be(32823)}function pt(R){R?Ie(3089):be(3089)}function lt(R){R===void 0&&(R=33984+H-1),N!==R&&(o.activeTexture(R),N=R)}function L(R,se){N===null&&lt();let X=D[N];X===void 0&&(X={type:void 0,texture:void 0},D[N]=X),(X.type!==R||X.texture!==se)&&(o.bindTexture(R,se||W[R]),X.type=R,X.texture=se)}function M(){const R=D[N];R!==void 0&&R.type!==void 0&&(o.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function q(){try{o.compressedTexImage2D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ie(){try{o.texSubImage2D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function te(){try{o.texSubImage3D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function oe(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ve(){try{o.texStorage2D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function A(){try{o.texStorage3D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function J(){try{o.texImage2D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function re(){try{o.texImage3D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function de(R){ne.equals(R)===!1&&(o.scissor(R.x,R.y,R.z,R.w),ne.copy(R))}function le(R){ce.equals(R)===!1&&(o.viewport(R.x,R.y,R.z,R.w),ce.copy(R))}function Te(R,se){let X=h.get(se);X===void 0&&(X=new WeakMap,h.set(se,X));let he=X.get(R);he===void 0&&(he=o.getUniformBlockIndex(se,R.name),X.set(R,he))}function ke(R,se){const he=h.get(se).get(R);u.get(R)!==he&&(o.uniformBlockBinding(se,he,R.__bindingPointIndex),u.set(R,he))}function Ae(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),f={},N=null,D={},m={},_=new WeakMap,d=[],p=null,g=!1,y=null,S=null,b=null,v=null,T=null,C=null,x=null,E=!1,P=null,I=null,$=null,j=null,F=null,ne.set(0,0,o.canvas.width,o.canvas.height),ce.set(0,0,o.canvas.width,o.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:Ie,disable:be,bindFramebuffer:Pe,drawBuffers:ue,useProgram:Ne,setBlending:Ye,setMaterial:et,setFlipSided:He,setCullFace:Y,setLineWidth:Qe,setPolygonOffset:Ce,setScissorTest:pt,activeTexture:lt,bindTexture:L,unbindTexture:M,compressedTexImage2D:q,texImage2D:J,texImage3D:re,updateUBOMapping:Te,uniformBlockBinding:ke,texStorage2D:ve,texStorage3D:A,texSubImage2D:ie,texSubImage3D:te,compressedTexSubImage2D:oe,scissor:de,viewport:le,reset:Ae}}function iy(o,e,t,n,i,r,a){const s=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let d;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(L,M){return g?new OffscreenCanvas(L,M):na("canvas")}function S(L,M,q,ie){let te=1;if((L.width>ie||L.height>ie)&&(te=ie/Math.max(L.width,L.height)),te<1||M===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const oe=M?ic:Math.floor,ve=oe(te*L.width),A=oe(te*L.height);d===void 0&&(d=y(ve,A));const J=q?y(ve,A):d;return J.width=ve,J.height=A,J.getContext("2d").drawImage(L,0,0,ve,A),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+ve+"x"+A+")."),J}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function b(L){return Yu(L.width)&&Yu(L.height)}function v(L){return s?!1:L.wrapS!==kn||L.wrapT!==kn||L.minFilter!==Zt&&L.minFilter!==Mn}function T(L,M){return L.generateMipmaps&&M&&L.minFilter!==Zt&&L.minFilter!==Mn}function C(L){o.generateMipmap(L)}function x(L,M,q,ie,te=!1){if(s===!1)return M;if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let oe=M;return M===6403&&(q===5126&&(oe=33326),q===5131&&(oe=33325),q===5121&&(oe=33321)),M===33319&&(q===5126&&(oe=33328),q===5131&&(oe=33327),q===5121&&(oe=33323)),M===6408&&(q===5126&&(oe=34836),q===5131&&(oe=34842),q===5121&&(oe=ie===at&&te===!1?35907:32856),q===32819&&(oe=32854),q===32820&&(oe=32855)),(oe===33325||oe===33326||oe===33327||oe===33328||oe===34842||oe===34836)&&e.get("EXT_color_buffer_float"),oe}function E(L,M,q){return T(L,q)===!0||L.isFramebufferTexture&&L.minFilter!==Zt&&L.minFilter!==Mn?Math.log2(Math.max(M.width,M.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?M.mipmaps.length:1}function P(L){return L===Zt||L===yu||L===bu?9728:9729}function I(L){const M=L.target;M.removeEventListener("dispose",I),j(M),M.isVideoTexture&&_.delete(M)}function $(L){const M=L.target;M.removeEventListener("dispose",$),H(M)}function j(L){const M=n.get(L);if(M.__webglInit===void 0)return;const q=L.source,ie=p.get(q);if(ie){const te=ie[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&F(L),Object.keys(ie).length===0&&p.delete(q)}n.remove(L)}function F(L){const M=n.get(L);o.deleteTexture(M.__webglTexture);const q=L.source,ie=p.get(q);delete ie[M.__cacheKey],a.memory.textures--}function H(L){const M=L.texture,q=n.get(L),ie=n.get(M);if(ie.__webglTexture!==void 0&&(o.deleteTexture(ie.__webglTexture),a.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let te=0;te<6;te++)o.deleteFramebuffer(q.__webglFramebuffer[te]),q.__webglDepthbuffer&&o.deleteRenderbuffer(q.__webglDepthbuffer[te]);else{if(o.deleteFramebuffer(q.__webglFramebuffer),q.__webglDepthbuffer&&o.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&o.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let te=0;te<q.__webglColorRenderbuffer.length;te++)q.__webglColorRenderbuffer[te]&&o.deleteRenderbuffer(q.__webglColorRenderbuffer[te]);q.__webglDepthRenderbuffer&&o.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let te=0,oe=M.length;te<oe;te++){const ve=n.get(M[te]);ve.__webglTexture&&(o.deleteTexture(ve.__webglTexture),a.memory.textures--),n.remove(M[te])}n.remove(M),n.remove(L)}let O=0;function V(){O=0}function G(){const L=O;return L>=l&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l),O+=1,L}function N(L){const M=[];return M.push(L.wrapS),M.push(L.wrapT),M.push(L.magFilter),M.push(L.minFilter),M.push(L.anisotropy),M.push(L.internalFormat),M.push(L.format),M.push(L.type),M.push(L.generateMipmaps),M.push(L.premultiplyAlpha),M.push(L.flipY),M.push(L.unpackAlignment),M.push(L.encoding),M.join()}function D(L,M){const q=n.get(L);if(L.isVideoTexture&&pt(L),L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){const ie=L.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(q,L,M);return}}t.activeTexture(33984+M),t.bindTexture(3553,q.__webglTexture)}function ee(L,M){const q=n.get(L);if(L.version>0&&q.__version!==L.version){be(q,L,M);return}t.activeTexture(33984+M),t.bindTexture(35866,q.__webglTexture)}function Q(L,M){const q=n.get(L);if(L.version>0&&q.__version!==L.version){be(q,L,M);return}t.activeTexture(33984+M),t.bindTexture(32879,q.__webglTexture)}function ne(L,M){const q=n.get(L);if(L.version>0&&q.__version!==L.version){Pe(q,L,M);return}t.activeTexture(33984+M),t.bindTexture(34067,q.__webglTexture)}const ce={[ec]:10497,[kn]:33071,[tc]:33648},ye={[Zt]:9728,[yu]:9984,[bu]:9986,[Mn]:9729,[jm]:9985,[So]:9987};function W(L,M,q){if(q?(o.texParameteri(L,10242,ce[M.wrapS]),o.texParameteri(L,10243,ce[M.wrapT]),(L===32879||L===35866)&&o.texParameteri(L,32882,ce[M.wrapR]),o.texParameteri(L,10240,ye[M.magFilter]),o.texParameteri(L,10241,ye[M.minFilter])):(o.texParameteri(L,10242,33071),o.texParameteri(L,10243,33071),(L===32879||L===35866)&&o.texParameteri(L,32882,33071),(M.wrapS!==kn||M.wrapT!==kn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(L,10240,P(M.magFilter)),o.texParameteri(L,10241,P(M.minFilter)),M.minFilter!==Zt&&M.minFilter!==Mn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(M.type===ir&&e.has("OES_texture_float_linear")===!1||s===!1&&M.type===ta&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(o.texParameterf(L,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function Ie(L,M){let q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,M.addEventListener("dispose",I));const ie=M.source;let te=p.get(ie);te===void 0&&(te={},p.set(ie,te));const oe=N(M);if(oe!==L.__cacheKey){te[oe]===void 0&&(te[oe]={texture:o.createTexture(),usedTimes:0},a.memory.textures++,q=!0),te[oe].usedTimes++;const ve=te[L.__cacheKey];ve!==void 0&&(te[L.__cacheKey].usedTimes--,ve.usedTimes===0&&F(M)),L.__cacheKey=oe,L.__webglTexture=te[oe].texture}return q}function be(L,M,q){let ie=3553;M.isDataArrayTexture&&(ie=35866),M.isData3DTexture&&(ie=32879);const te=Ie(L,M),oe=M.source;if(t.activeTexture(33984+q),t.bindTexture(ie,L.__webglTexture),oe.version!==oe.__currentVersion||te===!0){o.pixelStorei(37440,M.flipY),o.pixelStorei(37441,M.premultiplyAlpha),o.pixelStorei(3317,M.unpackAlignment),o.pixelStorei(37443,0);const ve=v(M)&&b(M.image)===!1;let A=S(M.image,ve,!1,u);A=lt(M,A);const J=b(A)||s,re=r.convert(M.format,M.encoding);let de=r.convert(M.type),le=x(M.internalFormat,re,de,M.encoding,M.isVideoTexture);W(ie,M,J);let Te;const ke=M.mipmaps,Ae=s&&M.isVideoTexture!==!0,R=oe.__currentVersion===void 0||te===!0,se=E(M,A,J);if(M.isDepthTexture)le=6402,s?M.type===ir?le=36012:M.type===nr?le=33190:M.type===ts?le=35056:le=33189:M.type===ir&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===ur&&le===6402&&M.type!==pd&&M.type!==nr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=nr,de=r.convert(M.type)),M.format===ps&&le===6402&&(le=34041,M.type!==ts&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=ts,de=r.convert(M.type))),R&&(Ae?t.texStorage2D(3553,1,le,A.width,A.height):t.texImage2D(3553,0,le,A.width,A.height,0,re,de,null));else if(M.isDataTexture)if(ke.length>0&&J){Ae&&R&&t.texStorage2D(3553,se,le,ke[0].width,ke[0].height);for(let X=0,he=ke.length;X<he;X++)Te=ke[X],Ae?t.texSubImage2D(3553,X,0,0,Te.width,Te.height,re,de,Te.data):t.texImage2D(3553,X,le,Te.width,Te.height,0,re,de,Te.data);M.generateMipmaps=!1}else Ae?(R&&t.texStorage2D(3553,se,le,A.width,A.height),t.texSubImage2D(3553,0,0,0,A.width,A.height,re,de,A.data)):t.texImage2D(3553,0,le,A.width,A.height,0,re,de,A.data);else if(M.isCompressedTexture){Ae&&R&&t.texStorage2D(3553,se,le,ke[0].width,ke[0].height);for(let X=0,he=ke.length;X<he;X++)Te=ke[X],M.format!==qn?re!==null?Ae?t.compressedTexSubImage2D(3553,X,0,0,Te.width,Te.height,re,Te.data):t.compressedTexImage2D(3553,X,le,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ae?t.texSubImage2D(3553,X,0,0,Te.width,Te.height,re,de,Te.data):t.texImage2D(3553,X,le,Te.width,Te.height,0,re,de,Te.data)}else if(M.isDataArrayTexture)Ae?(R&&t.texStorage3D(35866,se,le,A.width,A.height,A.depth),t.texSubImage3D(35866,0,0,0,0,A.width,A.height,A.depth,re,de,A.data)):t.texImage3D(35866,0,le,A.width,A.height,A.depth,0,re,de,A.data);else if(M.isData3DTexture)Ae?(R&&t.texStorage3D(32879,se,le,A.width,A.height,A.depth),t.texSubImage3D(32879,0,0,0,0,A.width,A.height,A.depth,re,de,A.data)):t.texImage3D(32879,0,le,A.width,A.height,A.depth,0,re,de,A.data);else if(M.isFramebufferTexture){if(R)if(Ae)t.texStorage2D(3553,se,le,A.width,A.height);else{let X=A.width,he=A.height;for(let fe=0;fe<se;fe++)t.texImage2D(3553,fe,le,X,he,0,re,de,null),X>>=1,he>>=1}}else if(ke.length>0&&J){Ae&&R&&t.texStorage2D(3553,se,le,ke[0].width,ke[0].height);for(let X=0,he=ke.length;X<he;X++)Te=ke[X],Ae?t.texSubImage2D(3553,X,0,0,re,de,Te):t.texImage2D(3553,X,le,re,de,Te);M.generateMipmaps=!1}else Ae?(R&&t.texStorage2D(3553,se,le,A.width,A.height),t.texSubImage2D(3553,0,0,0,re,de,A)):t.texImage2D(3553,0,le,re,de,A);T(M,J)&&C(ie),oe.__currentVersion=oe.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function Pe(L,M,q){if(M.image.length!==6)return;const ie=Ie(L,M),te=M.source;if(t.activeTexture(33984+q),t.bindTexture(34067,L.__webglTexture),te.version!==te.__currentVersion||ie===!0){o.pixelStorei(37440,M.flipY),o.pixelStorei(37441,M.premultiplyAlpha),o.pixelStorei(3317,M.unpackAlignment),o.pixelStorei(37443,0);const oe=M.isCompressedTexture||M.image[0].isCompressedTexture,ve=M.image[0]&&M.image[0].isDataTexture,A=[];for(let X=0;X<6;X++)!oe&&!ve?A[X]=S(M.image[X],!1,!0,c):A[X]=ve?M.image[X].image:M.image[X],A[X]=lt(M,A[X]);const J=A[0],re=b(J)||s,de=r.convert(M.format,M.encoding),le=r.convert(M.type),Te=x(M.internalFormat,de,le,M.encoding),ke=s&&M.isVideoTexture!==!0,Ae=te.__currentVersion===void 0||ie===!0;let R=E(M,J,re);W(34067,M,re);let se;if(oe){ke&&Ae&&t.texStorage2D(34067,R,Te,J.width,J.height);for(let X=0;X<6;X++){se=A[X].mipmaps;for(let he=0;he<se.length;he++){const fe=se[he];M.format!==qn?de!==null?ke?t.compressedTexSubImage2D(34069+X,he,0,0,fe.width,fe.height,de,fe.data):t.compressedTexImage2D(34069+X,he,Te,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?t.texSubImage2D(34069+X,he,0,0,fe.width,fe.height,de,le,fe.data):t.texImage2D(34069+X,he,Te,fe.width,fe.height,0,de,le,fe.data)}}}else{se=M.mipmaps,ke&&Ae&&(se.length>0&&R++,t.texStorage2D(34067,R,Te,A[0].width,A[0].height));for(let X=0;X<6;X++)if(ve){ke?t.texSubImage2D(34069+X,0,0,0,A[X].width,A[X].height,de,le,A[X].data):t.texImage2D(34069+X,0,Te,A[X].width,A[X].height,0,de,le,A[X].data);for(let he=0;he<se.length;he++){const Ue=se[he].image[X].image;ke?t.texSubImage2D(34069+X,he+1,0,0,Ue.width,Ue.height,de,le,Ue.data):t.texImage2D(34069+X,he+1,Te,Ue.width,Ue.height,0,de,le,Ue.data)}}else{ke?t.texSubImage2D(34069+X,0,0,0,de,le,A[X]):t.texImage2D(34069+X,0,Te,de,le,A[X]);for(let he=0;he<se.length;he++){const fe=se[he];ke?t.texSubImage2D(34069+X,he+1,0,0,de,le,fe.image[X]):t.texImage2D(34069+X,he+1,Te,de,le,fe.image[X])}}}T(M,re)&&C(34067),te.__currentVersion=te.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function ue(L,M,q,ie,te){const oe=r.convert(q.format,q.encoding),ve=r.convert(q.type),A=x(q.internalFormat,oe,ve,q.encoding);n.get(M).__hasExternalTextures||(te===32879||te===35866?t.texImage3D(te,0,A,M.width,M.height,M.depth,0,oe,ve,null):t.texImage2D(te,0,A,M.width,M.height,0,oe,ve,null)),t.bindFramebuffer(36160,L),Ce(M)?f.framebufferTexture2DMultisampleEXT(36160,ie,te,n.get(q).__webglTexture,0,Qe(M)):o.framebufferTexture2D(36160,ie,te,n.get(q).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ne(L,M,q){if(o.bindRenderbuffer(36161,L),M.depthBuffer&&!M.stencilBuffer){let ie=33189;if(q||Ce(M)){const te=M.depthTexture;te&&te.isDepthTexture&&(te.type===ir?ie=36012:te.type===nr&&(ie=33190));const oe=Qe(M);Ce(M)?f.renderbufferStorageMultisampleEXT(36161,oe,ie,M.width,M.height):o.renderbufferStorageMultisample(36161,oe,ie,M.width,M.height)}else o.renderbufferStorage(36161,ie,M.width,M.height);o.framebufferRenderbuffer(36160,36096,36161,L)}else if(M.depthBuffer&&M.stencilBuffer){const ie=Qe(M);q&&Ce(M)===!1?o.renderbufferStorageMultisample(36161,ie,35056,M.width,M.height):Ce(M)?f.renderbufferStorageMultisampleEXT(36161,ie,35056,M.width,M.height):o.renderbufferStorage(36161,34041,M.width,M.height),o.framebufferRenderbuffer(36160,33306,36161,L)}else{const ie=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let te=0;te<ie.length;te++){const oe=ie[te],ve=r.convert(oe.format,oe.encoding),A=r.convert(oe.type),J=x(oe.internalFormat,ve,A,oe.encoding),re=Qe(M);q&&Ce(M)===!1?o.renderbufferStorageMultisample(36161,re,J,M.width,M.height):Ce(M)?f.renderbufferStorageMultisampleEXT(36161,re,J,M.width,M.height):o.renderbufferStorage(36161,J,M.width,M.height)}}o.bindRenderbuffer(36161,null)}function me(L,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,L),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),D(M.depthTexture,0);const ie=n.get(M.depthTexture).__webglTexture,te=Qe(M);if(M.depthTexture.format===ur)Ce(M)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,ie,0,te):o.framebufferTexture2D(36160,36096,3553,ie,0);else if(M.depthTexture.format===ps)Ce(M)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,ie,0,te):o.framebufferTexture2D(36160,33306,3553,ie,0);else throw new Error("Unknown depthTexture format")}function _e(L){const M=n.get(L),q=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!M.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");me(M.__webglFramebuffer,L)}else if(q){M.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(36160,M.__webglFramebuffer[ie]),M.__webglDepthbuffer[ie]=o.createRenderbuffer(),Ne(M.__webglDepthbuffer[ie],L,!1)}else t.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=o.createRenderbuffer(),Ne(M.__webglDepthbuffer,L,!1);t.bindFramebuffer(36160,null)}function Ye(L,M,q){const ie=n.get(L);M!==void 0&&ue(ie.__webglFramebuffer,L,L.texture,36064,3553),q!==void 0&&_e(L)}function et(L){const M=L.texture,q=n.get(L),ie=n.get(M);L.addEventListener("dispose",$),L.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=o.createTexture()),ie.__version=M.version,a.memory.textures++);const te=L.isWebGLCubeRenderTarget===!0,oe=L.isWebGLMultipleRenderTargets===!0,ve=b(L)||s;if(te){q.__webglFramebuffer=[];for(let A=0;A<6;A++)q.__webglFramebuffer[A]=o.createFramebuffer()}else{if(q.__webglFramebuffer=o.createFramebuffer(),oe)if(i.drawBuffers){const A=L.texture;for(let J=0,re=A.length;J<re;J++){const de=n.get(A[J]);de.__webglTexture===void 0&&(de.__webglTexture=o.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&L.samples>0&&Ce(L)===!1){const A=oe?M:[M];q.__webglMultisampledFramebuffer=o.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,q.__webglMultisampledFramebuffer);for(let J=0;J<A.length;J++){const re=A[J];q.__webglColorRenderbuffer[J]=o.createRenderbuffer(),o.bindRenderbuffer(36161,q.__webglColorRenderbuffer[J]);const de=r.convert(re.format,re.encoding),le=r.convert(re.type),Te=x(re.internalFormat,de,le,re.encoding),ke=Qe(L);o.renderbufferStorageMultisample(36161,ke,Te,L.width,L.height),o.framebufferRenderbuffer(36160,36064+J,36161,q.__webglColorRenderbuffer[J])}o.bindRenderbuffer(36161,null),L.depthBuffer&&(q.__webglDepthRenderbuffer=o.createRenderbuffer(),Ne(q.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(36160,null)}}if(te){t.bindTexture(34067,ie.__webglTexture),W(34067,M,ve);for(let A=0;A<6;A++)ue(q.__webglFramebuffer[A],L,M,36064,34069+A);T(M,ve)&&C(34067),t.unbindTexture()}else if(oe){const A=L.texture;for(let J=0,re=A.length;J<re;J++){const de=A[J],le=n.get(de);t.bindTexture(3553,le.__webglTexture),W(3553,de,ve),ue(q.__webglFramebuffer,L,de,36064+J,3553),T(de,ve)&&C(3553)}t.unbindTexture()}else{let A=3553;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(s?A=L.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(A,ie.__webglTexture),W(A,M,ve),ue(q.__webglFramebuffer,L,M,36064,A),T(M,ve)&&C(A),t.unbindTexture()}L.depthBuffer&&_e(L)}function He(L){const M=b(L)||s,q=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let ie=0,te=q.length;ie<te;ie++){const oe=q[ie];if(T(oe,M)){const ve=L.isWebGLCubeRenderTarget?34067:3553,A=n.get(oe).__webglTexture;t.bindTexture(ve,A),C(ve),t.unbindTexture()}}}function Y(L){if(s&&L.samples>0&&Ce(L)===!1){const M=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],q=L.width,ie=L.height;let te=16384;const oe=[],ve=L.stencilBuffer?33306:36096,A=n.get(L),J=L.isWebGLMultipleRenderTargets===!0;if(J)for(let re=0;re<M.length;re++)t.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+re,36161,null),t.bindFramebuffer(36160,A.__webglFramebuffer),o.framebufferTexture2D(36009,36064+re,3553,null,0);t.bindFramebuffer(36008,A.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,A.__webglFramebuffer);for(let re=0;re<M.length;re++){oe.push(36064+re),L.depthBuffer&&oe.push(ve);const de=A.__ignoreDepthValues!==void 0?A.__ignoreDepthValues:!1;if(de===!1&&(L.depthBuffer&&(te|=256),L.stencilBuffer&&(te|=1024)),J&&o.framebufferRenderbuffer(36008,36064,36161,A.__webglColorRenderbuffer[re]),de===!0&&(o.invalidateFramebuffer(36008,[ve]),o.invalidateFramebuffer(36009,[ve])),J){const le=n.get(M[re]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,le,0)}o.blitFramebuffer(0,0,q,ie,0,0,q,ie,te,9728),m&&o.invalidateFramebuffer(36008,oe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),J)for(let re=0;re<M.length;re++){t.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+re,36161,A.__webglColorRenderbuffer[re]);const de=n.get(M[re]).__webglTexture;t.bindFramebuffer(36160,A.__webglFramebuffer),o.framebufferTexture2D(36009,36064+re,3553,de,0)}t.bindFramebuffer(36009,A.__webglMultisampledFramebuffer)}}function Qe(L){return Math.min(h,L.samples)}function Ce(L){const M=n.get(L);return s&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function pt(L){const M=a.render.frame;_.get(L)!==M&&(_.set(L,M),L.update())}function lt(L,M){const q=L.encoding,ie=L.format,te=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===nc||q!==_r&&(q===at?s===!1?e.has("EXT_sRGB")===!0&&ie===qn?(L.format=nc,L.minFilter=Mn,L.generateMipmaps=!1):M=_d.sRGBToLinear(M):(ie!==qn||te!==gr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",q)),M}this.allocateTextureUnit=G,this.resetTextureUnits=V,this.setTexture2D=D,this.setTexture2DArray=ee,this.setTexture3D=Q,this.setTextureCube=ne,this.rebindTextures=Ye,this.setupRenderTarget=et,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=Ce}function ry(o,e,t){const n=t.isWebGL2;function i(r,a=null){let s;if(r===gr)return 5121;if(r===Qm)return 32819;if(r===eg)return 32820;if(r===Zm)return 5120;if(r===Km)return 5122;if(r===pd)return 5123;if(r===Jm)return 5124;if(r===nr)return 5125;if(r===ir)return 5126;if(r===ta)return n?5131:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(r===tg)return 6406;if(r===qn)return 6408;if(r===ig)return 6409;if(r===rg)return 6410;if(r===ur)return 6402;if(r===ps)return 34041;if(r===sg)return 6403;if(r===ng)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===nc)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(r===ag)return 36244;if(r===og)return 33319;if(r===lg)return 33320;if(r===cg)return 36249;if(r===Wo||r===Xo||r===Yo||r===$o)if(a===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===Wo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Yo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===$o)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===Wo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Xo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Yo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===$o)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Su||r===Mu||r===wu||r===Eu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===Su)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Mu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===wu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Eu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ug)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Tu||r===Au)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(r===Tu)return a===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===Au)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Cu||r===Du||r===Lu||r===Pu||r===Ru||r===Iu||r===Fu||r===Ou||r===zu||r===Nu||r===ku||r===Bu||r===Uu||r===Gu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(r===Cu)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Du)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Lu)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Pu)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ru)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Iu)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Fu)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ou)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===zu)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Nu)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ku)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Bu)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Uu)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Gu)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Vu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(r===Vu)return a===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===ts?n?34042:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):o[r]!==void 0?o[r]:null}return{convert:i}}class sy extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Va extends Pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ay={type:"move"};class Sl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Va,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Va,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Va,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const d of e.hand.values()){const p=t.getJointPose(d,n);if(c.joints[d.jointName]===void 0){const y=new Va;y.matrixAutoUpdate=!1,y.visible=!1,c.joints[d.jointName]=y,c.add(y)}const g=c.joints[d.jointName];p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=p.radius),g.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(ay)))}return s!==null&&(s.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}}class oy extends pn{constructor(e,t,n,i,r,a,s,l,c,u){if(u=u!==void 0?u:ur,u!==ur&&u!==ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ur&&(n=nr),n===void 0&&u===ps&&(n=ts),super(null,i,r,a,s,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Zt,this.minFilter=l!==void 0?l:Zt,this.flipY=!1,this.generateMipmaps=!1}}class ly extends yr{constructor(e,t){super();const n=this;let i=null,r=1,a=null,s="local-floor",l=null,c=null,u=null,h=null,f=null,m=null;const _=t.getContextAttributes();let d=null,p=null;const g=[],y=[],S=new Jt;S.layers.enable(1),S.viewport=new Ct;const b=new Jt;b.layers.enable(2),b.viewport=new Ct;const v=[S,b],T=new sy;T.layers.enable(1),T.layers.enable(2);let C=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let D=g[N];return D===void 0&&(D=new Sl,g[N]=D),D.getTargetRaySpace()},this.getControllerGrip=function(N){let D=g[N];return D===void 0&&(D=new Sl,g[N]=D),D.getGripSpace()},this.getHand=function(N){let D=g[N];return D===void 0&&(D=new Sl,g[N]=D),D.getHandSpace()};function E(N){const D=y.indexOf(N.inputSource);if(D===-1)return;const ee=g[D];ee!==void 0&&ee.dispatchEvent({type:N.type,data:N.inputSource})}function P(){i.removeEventListener("select",E),i.removeEventListener("selectstart",E),i.removeEventListener("selectend",E),i.removeEventListener("squeeze",E),i.removeEventListener("squeezestart",E),i.removeEventListener("squeezeend",E),i.removeEventListener("end",P),i.removeEventListener("inputsourceschange",I);for(let N=0;N<g.length;N++){const D=y[N];D!==null&&(y[N]=null,g[N].disconnect(D))}C=null,x=null,e.setRenderTarget(d),f=null,h=null,u=null,i=null,p=null,G.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){r=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){s=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(N){l=N},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(N){if(i=N,i!==null){if(d=e.getRenderTarget(),i.addEventListener("select",E),i.addEventListener("selectstart",E),i.addEventListener("selectend",E),i.addEventListener("squeeze",E),i.addEventListener("squeezestart",E),i.addEventListener("squeezeend",E),i.addEventListener("end",P),i.addEventListener("inputsourceschange",I),_.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const D={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,D),i.updateRenderState({baseLayer:f}),p=new ti(f.framebufferWidth,f.framebufferHeight,{format:qn,type:gr,encoding:e.outputEncoding})}else{let D=null,ee=null,Q=null;_.depth&&(Q=_.stencil?35056:33190,D=_.stencil?ps:ur,ee=_.stencil?ts:nr);const ne={colorFormat:32856,depthFormat:Q,scaleFactor:r};u=new XRWebGLBinding(i,t),h=u.createProjectionLayer(ne),i.updateRenderState({layers:[h]}),p=new ti(h.textureWidth,h.textureHeight,{format:qn,type:gr,depthTexture:new oy(h.textureWidth,h.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,D),stencilBuffer:_.stencil,encoding:e.outputEncoding,samples:_.antialias?4:0});const ce=e.properties.get(p);ce.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await i.requestReferenceSpace(s),G.setContext(i),G.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function I(N){for(let D=0;D<N.removed.length;D++){const ee=N.removed[D],Q=y.indexOf(ee);Q>=0&&(y[Q]=null,g[Q].dispatchEvent({type:"disconnected",data:ee}))}for(let D=0;D<N.added.length;D++){const ee=N.added[D];let Q=y.indexOf(ee);if(Q===-1){for(let ce=0;ce<g.length;ce++)if(ce>=y.length){y.push(ee),Q=ce;break}else if(y[ce]===null){y[ce]=ee,Q=ce;break}if(Q===-1)break}const ne=g[Q];ne&&ne.dispatchEvent({type:"connected",data:ee})}}const $=new z,j=new z;function F(N,D,ee){$.setFromMatrixPosition(D.matrixWorld),j.setFromMatrixPosition(ee.matrixWorld);const Q=$.distanceTo(j),ne=D.projectionMatrix.elements,ce=ee.projectionMatrix.elements,ye=ne[14]/(ne[10]-1),W=ne[14]/(ne[10]+1),Ie=(ne[9]+1)/ne[5],be=(ne[9]-1)/ne[5],Pe=(ne[8]-1)/ne[0],ue=(ce[8]+1)/ce[0],Ne=ye*Pe,me=ye*ue,_e=Q/(-Pe+ue),Ye=_e*-Pe;D.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(Ye),N.translateZ(_e),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const et=ye+_e,He=W+_e,Y=Ne-Ye,Qe=me+(Q-Ye),Ce=Ie*W/He*et,pt=be*W/He*et;N.projectionMatrix.makePerspective(Y,Qe,Ce,pt,et,He)}function H(N,D){D===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(D.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(i===null)return;T.near=b.near=S.near=N.near,T.far=b.far=S.far=N.far,(C!==T.near||x!==T.far)&&(i.updateRenderState({depthNear:T.near,depthFar:T.far}),C=T.near,x=T.far);const D=N.parent,ee=T.cameras;H(T,D);for(let ne=0;ne<ee.length;ne++)H(ee[ne],D);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),N.position.copy(T.position),N.quaternion.copy(T.quaternion),N.scale.copy(T.scale),N.matrix.copy(T.matrix),N.matrixWorld.copy(T.matrixWorld);const Q=N.children;for(let ne=0,ce=Q.length;ne<ce;ne++)Q[ne].updateMatrixWorld(!0);ee.length===2?F(T,S,b):T.projectionMatrix.copy(S.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(N){h!==null&&(h.fixedFoveation=N),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=N)};let O=null;function V(N,D){if(c=D.getViewerPose(l||a),m=D,c!==null){const ee=c.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let Q=!1;ee.length!==T.cameras.length&&(T.cameras.length=0,Q=!0);for(let ne=0;ne<ee.length;ne++){const ce=ee[ne];let ye=null;if(f!==null)ye=f.getViewport(ce);else{const Ie=u.getViewSubImage(h,ce);ye=Ie.viewport,ne===0&&(e.setRenderTargetTextures(p,Ie.colorTexture,h.ignoreDepthValues?void 0:Ie.depthStencilTexture),e.setRenderTarget(p))}let W=v[ne];W===void 0&&(W=new Jt,W.layers.enable(ne),W.viewport=new Ct,v[ne]=W),W.matrix.fromArray(ce.transform.matrix),W.projectionMatrix.fromArray(ce.projectionMatrix),W.viewport.set(ye.x,ye.y,ye.width,ye.height),ne===0&&T.matrix.copy(W.matrix),Q===!0&&T.cameras.push(W)}}for(let ee=0;ee<g.length;ee++){const Q=y[ee],ne=g[ee];Q!==null&&ne!==void 0&&ne.update(Q,D,l||a)}O&&O(N,D),m=null}const G=new Cd;G.setAnimationLoop(V),this.setAnimationLoop=function(N){O=N},this.dispose=function(){}}}function cy(o,e){function t(d,p){d.fogColor.value.copy(p.color),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function n(d,p,g,y,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(d,p):p.isMeshToonMaterial?(i(d,p),u(d,p)):p.isMeshPhongMaterial?(i(d,p),c(d,p)):p.isMeshStandardMaterial?(i(d,p),h(d,p),p.isMeshPhysicalMaterial&&f(d,p,S)):p.isMeshMatcapMaterial?(i(d,p),m(d,p)):p.isMeshDepthMaterial?i(d,p):p.isMeshDistanceMaterial?(i(d,p),_(d,p)):p.isMeshNormalMaterial?i(d,p):p.isLineBasicMaterial?(r(d,p),p.isLineDashedMaterial&&a(d,p)):p.isPointsMaterial?s(d,p,g,y):p.isSpriteMaterial?l(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.bumpMap&&(d.bumpMap.value=p.bumpMap,d.bumpScale.value=p.bumpScale,p.side===Un&&(d.bumpScale.value*=-1)),p.displacementMap&&(d.displacementMap.value=p.displacementMap,d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap),p.normalMap&&(d.normalMap.value=p.normalMap,d.normalScale.value.copy(p.normalScale),p.side===Un&&d.normalScale.value.negate()),p.specularMap&&(d.specularMap.value=p.specularMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const g=e.get(p).envMap;if(g&&(d.envMap.value=g,d.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap){d.lightMap.value=p.lightMap;const b=o.physicallyCorrectLights!==!0?Math.PI:1;d.lightMapIntensity.value=p.lightMapIntensity*b}p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity);let y;p.map?y=p.map:p.specularMap?y=p.specularMap:p.displacementMap?y=p.displacementMap:p.normalMap?y=p.normalMap:p.bumpMap?y=p.bumpMap:p.roughnessMap?y=p.roughnessMap:p.metalnessMap?y=p.metalnessMap:p.alphaMap?y=p.alphaMap:p.emissiveMap?y=p.emissiveMap:p.clearcoatMap?y=p.clearcoatMap:p.clearcoatNormalMap?y=p.clearcoatNormalMap:p.clearcoatRoughnessMap?y=p.clearcoatRoughnessMap:p.iridescenceMap?y=p.iridescenceMap:p.iridescenceThicknessMap?y=p.iridescenceThicknessMap:p.specularIntensityMap?y=p.specularIntensityMap:p.specularColorMap?y=p.specularColorMap:p.transmissionMap?y=p.transmissionMap:p.thicknessMap?y=p.thicknessMap:p.sheenColorMap?y=p.sheenColorMap:p.sheenRoughnessMap&&(y=p.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),d.uvTransform.value.copy(y.matrix));let S;p.aoMap?S=p.aoMap:p.lightMap&&(S=p.lightMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),d.uv2Transform.value.copy(S.matrix))}function r(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity}function a(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function s(d,p,g,y){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*g,d.scale.value=y*.5,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let S;p.map?S=p.map:p.alphaMap&&(S=p.alphaMap),S!==void 0&&(S.matrixAutoUpdate===!0&&S.updateMatrix(),d.uvTransform.value.copy(S.matrix))}function l(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let g;p.map?g=p.map:p.alphaMap&&(g=p.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),d.uvTransform.value.copy(g.matrix))}function c(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function u(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function h(d,p){d.roughness.value=p.roughness,d.metalness.value=p.metalness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function f(d,p,g){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),d.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Un&&d.clearcoatNormalScale.value.negate())),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=g.texture,d.transmissionSamplerSize.value.set(g.width,g.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap)}function m(d,p){p.matcap&&(d.matcap.value=p.matcap)}function _(d,p){d.referencePosition.value.copy(p.referencePosition),d.nearDistance.value=p.nearDistance,d.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function uy(o,e,t,n){let i={},r={},a=[];const s=t.isWebGL2?o.getParameter(35375):0;function l(y,S){const b=S.program;n.uniformBlockBinding(y,b)}function c(y,S){let b=i[y.id];b===void 0&&(_(y),b=u(y),i[y.id]=b,y.addEventListener("dispose",p));const v=S.program;n.updateUBOMapping(y,v);const T=e.render.frame;r[y.id]!==T&&(f(y),r[y.id]=T)}function u(y){const S=h();y.__bindingPointIndex=S;const b=o.createBuffer(),v=y.__size,T=y.usage;return o.bindBuffer(35345,b),o.bufferData(35345,v,T),o.bindBuffer(35345,null),o.bindBufferBase(35345,S,b),b}function h(){for(let y=0;y<s;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const S=i[y.id],b=y.uniforms,v=y.__cache;o.bindBuffer(35345,S);for(let T=0,C=b.length;T<C;T++){const x=b[T];if(m(x,T,v)===!0){const E=x.value,P=x.__offset;typeof E=="number"?(x.__data[0]=E,o.bufferSubData(35345,P,x.__data)):(x.value.isMatrix3?(x.__data[0]=x.value.elements[0],x.__data[1]=x.value.elements[1],x.__data[2]=x.value.elements[2],x.__data[3]=x.value.elements[0],x.__data[4]=x.value.elements[3],x.__data[5]=x.value.elements[4],x.__data[6]=x.value.elements[5],x.__data[7]=x.value.elements[0],x.__data[8]=x.value.elements[6],x.__data[9]=x.value.elements[7],x.__data[10]=x.value.elements[8],x.__data[11]=x.value.elements[0]):E.toArray(x.__data),o.bufferSubData(35345,P,x.__data))}}o.bindBuffer(35345,null)}function m(y,S,b){const v=y.value;if(b[S]===void 0)return typeof v=="number"?b[S]=v:b[S]=v.clone(),!0;if(typeof v=="number"){if(b[S]!==v)return b[S]=v,!0}else{const T=b[S];if(T.equals(v)===!1)return T.copy(v),!0}return!1}function _(y){const S=y.uniforms;let b=0;const v=16;let T=0;for(let C=0,x=S.length;C<x;C++){const E=S[C],P=d(E);if(E.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=b,C>0){T=b%v;const I=v-T;T!==0&&I-P.boundary<0&&(b+=v-T,E.__offset=b)}b+=P.storage}return T=b%v,T>0&&(b+=v-T),y.__size=b,y.__cache={},this}function d(y){const S=y.value,b={boundary:0,storage:0};return typeof S=="number"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),b}function p(y){const S=y.target;S.removeEventListener("dispose",p);const b=a.indexOf(S.__bindingPointIndex);a.splice(b,1),o.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function g(){for(const y in i)o.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:l,update:c,dispose:g}}function hy(){const o=na("canvas");return o.style.display="block",o}function Fd(o={}){this.isWebGLRenderer=!0;const e=o.canvas!==void 0?o.canvas:hy(),t=o.context!==void 0?o.context:null,n=o.depth!==void 0?o.depth:!0,i=o.stencil!==void 0?o.stencil:!0,r=o.antialias!==void 0?o.antialias:!1,a=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,s=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,l=o.powerPreference!==void 0?o.powerPreference:"default",c=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=o.alpha!==void 0?o.alpha:!1;let h=null,f=null;const m=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=_r,this.physicallyCorrectLights=!1,this.toneMapping=_i,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const d=this;let p=!1,g=0,y=0,S=null,b=-1,v=null;const T=new Ct,C=new Ct;let x=null,E=e.width,P=e.height,I=1,$=null,j=null;const F=new Ct(0,0,E,P),H=new Ct(0,0,E,P);let O=!1;const V=new Ad;let G=!1,N=!1,D=null;const ee=new Et,Q=new Be,ne=new z,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ye(){return S===null?I:1}let W=t;function Ie(w,k){for(let U=0;U<w.length;U++){const B=w[U],Z=e.getContext(B,k);if(Z!==null)return Z}return null}try{const w={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:s,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ac}`),e.addEventListener("webglcontextlost",Te,!1),e.addEventListener("webglcontextrestored",ke,!1),e.addEventListener("webglcontextcreationerror",Ae,!1),W===null){const k=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&k.shift(),W=Ie(k,w),W===null)throw Ie(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let be,Pe,ue,Ne,me,_e,Ye,et,He,Y,Qe,Ce,pt,lt,L,M,q,ie,te,oe,ve,A,J,re;function de(){be=new bx(W),Pe=new mx(W,be,o),be.init(Pe),A=new ry(W,be,Pe),ue=new ny(W,be,Pe),Ne=new wx,me=new Vv,_e=new iy(W,be,ue,me,Pe,A,Ne),Ye=new _x(d),et=new yx(d),He=new zg(W,Pe),J=new dx(W,be,He,Pe),Y=new Sx(W,He,Ne,J),Qe=new Cx(W,Y,He,Ne),te=new Ax(W,Pe,_e),M=new gx(me),Ce=new Gv(d,Ye,et,be,Pe,J,M),pt=new cy(d,me),lt=new Wv,L=new Zv(be,Pe),ie=new fx(d,Ye,ue,Qe,u,a),q=new ty(d,Qe,Pe),re=new uy(W,Ne,Pe,ue),oe=new px(W,be,Ne,Pe),ve=new Mx(W,be,Ne,Pe),Ne.programs=Ce.programs,d.capabilities=Pe,d.extensions=be,d.properties=me,d.renderLists=lt,d.shadowMap=q,d.state=ue,d.info=Ne}de();const le=new ly(d,W);this.xr=le,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const w=be.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=be.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(w){w!==void 0&&(I=w,this.setSize(E,P,!1))},this.getSize=function(w){return w.set(E,P)},this.setSize=function(w,k,U){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=w,P=k,e.width=Math.floor(w*I),e.height=Math.floor(k*I),U!==!1&&(e.style.width=w+"px",e.style.height=k+"px"),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(E*I,P*I).floor()},this.setDrawingBufferSize=function(w,k,U){E=w,P=k,I=U,e.width=Math.floor(w*U),e.height=Math.floor(k*U),this.setViewport(0,0,w,k)},this.getCurrentViewport=function(w){return w.copy(T)},this.getViewport=function(w){return w.copy(F)},this.setViewport=function(w,k,U,B){w.isVector4?F.set(w.x,w.y,w.z,w.w):F.set(w,k,U,B),ue.viewport(T.copy(F).multiplyScalar(I).floor())},this.getScissor=function(w){return w.copy(H)},this.setScissor=function(w,k,U,B){w.isVector4?H.set(w.x,w.y,w.z,w.w):H.set(w,k,U,B),ue.scissor(C.copy(H).multiplyScalar(I).floor())},this.getScissorTest=function(){return O},this.setScissorTest=function(w){ue.setScissorTest(O=w)},this.setOpaqueSort=function(w){$=w},this.setTransparentSort=function(w){j=w},this.getClearColor=function(w){return w.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor.apply(ie,arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha.apply(ie,arguments)},this.clear=function(w=!0,k=!0,U=!0){let B=0;w&&(B|=16384),k&&(B|=256),U&&(B|=1024),W.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Te,!1),e.removeEventListener("webglcontextrestored",ke,!1),e.removeEventListener("webglcontextcreationerror",Ae,!1),lt.dispose(),L.dispose(),me.dispose(),Ye.dispose(),et.dispose(),Qe.dispose(),J.dispose(),re.dispose(),Ce.dispose(),le.dispose(),le.removeEventListener("sessionstart",Ue),le.removeEventListener("sessionend",st),D&&(D.dispose(),D=null),je.stop()};function Te(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function ke(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const w=Ne.autoReset,k=q.enabled,U=q.autoUpdate,B=q.needsUpdate,Z=q.type;de(),Ne.autoReset=w,q.enabled=k,q.autoUpdate=U,q.needsUpdate=B,q.type=Z}function Ae(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function R(w){const k=w.target;k.removeEventListener("dispose",R),se(k)}function se(w){X(w),me.remove(w)}function X(w){const k=me.get(w).programs;k!==void 0&&(k.forEach(function(U){Ce.releaseProgram(U)}),w.isShaderMaterial&&Ce.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,U,B,Z,ge){k===null&&(k=ce);const xe=Z.isMesh&&Z.matrixWorld.determinant()<0,Me=mt(w,k,U,B,Z);ue.setMaterial(B,xe);let Fe=U.index;const Ge=U.attributes.position;if(Fe===null){if(Ge===void 0||Ge.count===0)return}else if(Fe.count===0)return;let De=1;B.wireframe===!0&&(Fe=Y.getWireframeAttribute(U),De=2),J.setup(Z,B,Me,U,Fe);let Le,qe=oe;Fe!==null&&(Le=He.get(Fe),qe=ve,qe.setIndex(Le));const Rn=Fe!==null?Fe.count:Ge.count,ni=U.drawRange.start*De,mn=U.drawRange.count*De,gn=ge!==null?ge.start*De:0,Ke=ge!==null?ge.count*De:1/0,br=Math.max(ni,gn),_t=Math.min(Rn,ni+mn,gn+Ke)-1,_n=Math.max(0,_t-br+1);if(_n!==0){if(Z.isMesh)B.wireframe===!0?(ue.setLineWidth(B.wireframeLinewidth*ye()),qe.setMode(1)):qe.setMode(4);else if(Z.isLine){let bi=B.linewidth;bi===void 0&&(bi=1),ue.setLineWidth(bi*ye()),Z.isLineSegments?qe.setMode(1):Z.isLineLoop?qe.setMode(2):qe.setMode(3)}else Z.isPoints?qe.setMode(0):Z.isSprite&&qe.setMode(4);if(Z.isInstancedMesh)qe.renderInstances(br,_n,Z.count);else if(U.isInstancedBufferGeometry){const bi=Math.min(U.instanceCount,U._maxInstanceCount);qe.renderInstances(br,_n,bi)}else qe.render(br,_n)}},this.compile=function(w,k){f=L.get(w),f.init(),_.push(f),w.traverseVisible(function(U){U.isLight&&U.layers.test(k.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights(d.physicallyCorrectLights),w.traverse(function(U){const B=U.material;if(B)if(Array.isArray(B))for(let Z=0;Z<B.length;Z++){const ge=B[Z];Se(ge,w,U)}else Se(B,w,U)}),_.pop(),f=null};let he=null;function fe(w){he&&he(w)}function Ue(){je.stop()}function st(){je.start()}const je=new Cd;je.setAnimationLoop(fe),typeof self<"u"&&je.setContext(self),this.setAnimationLoop=function(w){he=w,le.setAnimationLoop(w),w===null?je.stop():je.start()},le.addEventListener("sessionstart",Ue),le.addEventListener("sessionend",st),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;w.autoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(k),k=le.getCamera()),w.isScene===!0&&w.onBeforeRender(d,w,k,S),f=L.get(w,_.length),f.init(),_.push(f),ee.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),V.setFromProjectionMatrix(ee),N=this.localClippingEnabled,G=M.init(this.clippingPlanes,N,k),h=lt.get(w,m.length),h.init(),m.push(h),$t(w,k,0,d.sortObjects),h.finish(),d.sortObjects===!0&&h.sort($,j),G===!0&&M.beginShadows();const U=f.state.shadowsArray;if(q.render(U,w,k),G===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset(),ie.render(h,w),f.setupLights(d.physicallyCorrectLights),k.isArrayCamera){const B=k.cameras;for(let Z=0,ge=B.length;Z<ge;Z++){const xe=B[Z];tt(h,w,xe,xe.viewport)}}else tt(h,w,k);S!==null&&(_e.updateMultisampleRenderTarget(S),_e.updateRenderTargetMipmap(S)),w.isScene===!0&&w.onAfterRender(d,w,k),J.resetDefaultState(),b=-1,v=null,_.pop(),_.length>0?f=_[_.length-1]:f=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function $t(w,k,U,B){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)U=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||V.intersectsSprite(w)){B&&ne.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ee);const xe=Qe.update(w),Me=w.material;Me.visible&&h.push(w,xe,Me,U,ne.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(w.isSkinnedMesh&&w.skeleton.frame!==Ne.render.frame&&(w.skeleton.update(),w.skeleton.frame=Ne.render.frame),!w.frustumCulled||V.intersectsObject(w))){B&&ne.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ee);const xe=Qe.update(w),Me=w.material;if(Array.isArray(Me)){const Fe=xe.groups;for(let Ge=0,De=Fe.length;Ge<De;Ge++){const Le=Fe[Ge],qe=Me[Le.materialIndex];qe&&qe.visible&&h.push(w,xe,qe,U,ne.z,Le)}}else Me.visible&&h.push(w,xe,Me,U,ne.z,null)}}const ge=w.children;for(let xe=0,Me=ge.length;xe<Me;xe++)$t(ge[xe],k,U,B)}function tt(w,k,U,B){const Z=w.opaque,ge=w.transmissive,xe=w.transparent;f.setupLightsView(U),ge.length>0&&Oe(Z,k,U),B&&ue.viewport(T.copy(B)),Z.length>0&&K(Z,k,U),ge.length>0&&K(ge,k,U),xe.length>0&&K(xe,k,U),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Oe(w,k,U){const B=Pe.isWebGL2;D===null&&(D=new ti(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")?ta:gr,minFilter:So,samples:B&&r===!0?4:0})),d.getDrawingBufferSize(Q),B?D.setSize(Q.x,Q.y):D.setSize(ic(Q.x),ic(Q.y));const Z=d.getRenderTarget();d.setRenderTarget(D),d.clear();const ge=d.toneMapping;d.toneMapping=_i,K(w,k,U),d.toneMapping=ge,_e.updateMultisampleRenderTarget(D),_e.updateRenderTargetMipmap(D),d.setRenderTarget(Z)}function K(w,k,U){const B=k.isScene===!0?k.overrideMaterial:null;for(let Z=0,ge=w.length;Z<ge;Z++){const xe=w[Z],Me=xe.object,Fe=xe.geometry,Ge=B===null?xe.material:B,De=xe.group;Me.layers.test(U.layers)&&we(Me,k,U,Fe,Ge,De)}}function we(w,k,U,B,Z,ge){w.onBeforeRender(d,k,U,B,Z,ge),w.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Z.onBeforeRender(d,k,U,B,w,ge),Z.transparent===!0&&Z.side===hs?(Z.side=Un,Z.needsUpdate=!0,d.renderBufferDirect(U,k,B,Z,w,ge),Z.side=ea,Z.needsUpdate=!0,d.renderBufferDirect(U,k,B,Z,w,ge),Z.side=hs):d.renderBufferDirect(U,k,B,Z,w,ge),w.onAfterRender(d,k,U,B,Z,ge)}function Se(w,k,U){k.isScene!==!0&&(k=ce);const B=me.get(w),Z=f.state.lights,ge=f.state.shadowsArray,xe=Z.state.version,Me=Ce.getParameters(w,Z.state,ge,k,U),Fe=Ce.getProgramCacheKey(Me);let Ge=B.programs;B.environment=w.isMeshStandardMaterial?k.environment:null,B.fog=k.fog,B.envMap=(w.isMeshStandardMaterial?et:Ye).get(w.envMap||B.environment),Ge===void 0&&(w.addEventListener("dispose",R),Ge=new Map,B.programs=Ge);let De=Ge.get(Fe);if(De!==void 0){if(B.currentProgram===De&&B.lightsStateVersion===xe)return Re(w,Me),De}else Me.uniforms=Ce.getUniforms(w),w.onBuild(U,Me,d),w.onBeforeCompile(Me,d),De=Ce.acquireProgram(Me,Fe),Ge.set(Fe,De),B.uniforms=Me.uniforms;const Le=B.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Le.clippingPlanes=M.uniform),Re(w,Me),B.needsLights=ct(w),B.lightsStateVersion=xe,B.needsLights&&(Le.ambientLightColor.value=Z.state.ambient,Le.lightProbe.value=Z.state.probe,Le.directionalLights.value=Z.state.directional,Le.directionalLightShadows.value=Z.state.directionalShadow,Le.spotLights.value=Z.state.spot,Le.spotLightShadows.value=Z.state.spotShadow,Le.rectAreaLights.value=Z.state.rectArea,Le.ltc_1.value=Z.state.rectAreaLTC1,Le.ltc_2.value=Z.state.rectAreaLTC2,Le.pointLights.value=Z.state.point,Le.pointLightShadows.value=Z.state.pointShadow,Le.hemisphereLights.value=Z.state.hemi,Le.directionalShadowMap.value=Z.state.directionalShadowMap,Le.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Le.spotShadowMap.value=Z.state.spotShadowMap,Le.spotShadowMatrix.value=Z.state.spotShadowMatrix,Le.pointShadowMap.value=Z.state.pointShadowMap,Le.pointShadowMatrix.value=Z.state.pointShadowMatrix);const qe=De.getUniforms(),Rn=no.seqWithValue(qe.seq,Le);return B.currentProgram=De,B.uniformsList=Rn,De}function Re(w,k){const U=me.get(w);U.outputEncoding=k.outputEncoding,U.instancing=k.instancing,U.skinning=k.skinning,U.morphTargets=k.morphTargets,U.morphNormals=k.morphNormals,U.morphColors=k.morphColors,U.morphTargetsCount=k.morphTargetsCount,U.numClippingPlanes=k.numClippingPlanes,U.numIntersection=k.numClipIntersection,U.vertexAlphas=k.vertexAlphas,U.vertexTangents=k.vertexTangents,U.toneMapping=k.toneMapping}function mt(w,k,U,B,Z){k.isScene!==!0&&(k=ce),_e.resetTextureUnits();const ge=k.fog,xe=B.isMeshStandardMaterial?k.environment:null,Me=S===null?d.outputEncoding:S.isXRRenderTarget===!0?S.texture.encoding:_r,Fe=(B.isMeshStandardMaterial?et:Ye).get(B.envMap||xe),Ge=B.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,De=!!B.normalMap&&!!U.attributes.tangent,Le=!!U.morphAttributes.position,qe=!!U.morphAttributes.normal,Rn=!!U.morphAttributes.color,ni=B.toneMapped?d.toneMapping:_i,mn=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,gn=mn!==void 0?mn.length:0,Ke=me.get(B),br=f.state.lights;if(G===!0&&(N===!0||w!==v)){const rn=w===v&&B.id===b;M.setState(B,w,rn)}let _t=!1;B.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==br.state.version||Ke.outputEncoding!==Me||Z.isInstancedMesh&&Ke.instancing===!1||!Z.isInstancedMesh&&Ke.instancing===!0||Z.isSkinnedMesh&&Ke.skinning===!1||!Z.isSkinnedMesh&&Ke.skinning===!0||Ke.envMap!==Fe||B.fog===!0&&Ke.fog!==ge||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==M.numPlanes||Ke.numIntersection!==M.numIntersection)||Ke.vertexAlphas!==Ge||Ke.vertexTangents!==De||Ke.morphTargets!==Le||Ke.morphNormals!==qe||Ke.morphColors!==Rn||Ke.toneMapping!==ni||Pe.isWebGL2===!0&&Ke.morphTargetsCount!==gn)&&(_t=!0):(_t=!0,Ke.__version=B.version);let _n=Ke.currentProgram;_t===!0&&(_n=Se(B,k,Z));let bi=!1,vs=!1,To=!1;const Nt=_n.getUniforms(),ys=Ke.uniforms;if(ue.useProgram(_n.program)&&(bi=!0,vs=!0,To=!0),B.id!==b&&(b=B.id,vs=!0),bi||v!==w){if(Nt.setValue(W,"projectionMatrix",w.projectionMatrix),Pe.logarithmicDepthBuffer&&Nt.setValue(W,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),v!==w&&(v=w,vs=!0,To=!0),B.isShaderMaterial||B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshStandardMaterial||B.envMap){const rn=Nt.map.cameraPosition;rn!==void 0&&rn.setValue(W,ne.setFromMatrixPosition(w.matrixWorld))}(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Nt.setValue(W,"isOrthographic",w.isOrthographicCamera===!0),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial||B.isShadowMaterial||Z.isSkinnedMesh)&&Nt.setValue(W,"viewMatrix",w.matrixWorldInverse)}if(Z.isSkinnedMesh){Nt.setOptional(W,Z,"bindMatrix"),Nt.setOptional(W,Z,"bindMatrixInverse");const rn=Z.skeleton;rn&&(Pe.floatVertexTextures?(rn.boneTexture===null&&rn.computeBoneTexture(),Nt.setValue(W,"boneTexture",rn.boneTexture,_e),Nt.setValue(W,"boneTextureSize",rn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ao=U.morphAttributes;if((Ao.position!==void 0||Ao.normal!==void 0||Ao.color!==void 0&&Pe.isWebGL2===!0)&&te.update(Z,U,B,_n),(vs||Ke.receiveShadow!==Z.receiveShadow)&&(Ke.receiveShadow=Z.receiveShadow,Nt.setValue(W,"receiveShadow",Z.receiveShadow)),vs&&(Nt.setValue(W,"toneMappingExposure",d.toneMappingExposure),Ke.needsLights&&ze(ys,To),ge&&B.fog===!0&&pt.refreshFogUniforms(ys,ge),pt.refreshMaterialUniforms(ys,B,I,P,D),no.upload(W,Ke.uniformsList,ys,_e)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(no.upload(W,Ke.uniformsList,ys,_e),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Nt.setValue(W,"center",Z.center),Nt.setValue(W,"modelViewMatrix",Z.modelViewMatrix),Nt.setValue(W,"normalMatrix",Z.normalMatrix),Nt.setValue(W,"modelMatrix",Z.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const rn=B.uniformsGroups;for(let Co=0,Vd=rn.length;Co<Vd;Co++)if(Pe.isWebGL2){const Ic=rn[Co];re.update(Ic,_n),re.bind(Ic,_n)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return _n}function ze(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function ct(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(w,k,U){me.get(w.texture).__webglTexture=k,me.get(w.depthTexture).__webglTexture=U;const B=me.get(w);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=U===void 0,B.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,k){const U=me.get(w);U.__webglFramebuffer=k,U.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(w,k=0,U=0){S=w,g=k,y=U;let B=!0;if(w){const Fe=me.get(w);Fe.__useDefaultFramebuffer!==void 0?(ue.bindFramebuffer(36160,null),B=!1):Fe.__webglFramebuffer===void 0?_e.setupRenderTarget(w):Fe.__hasExternalTextures&&_e.rebindTextures(w,me.get(w.texture).__webglTexture,me.get(w.depthTexture).__webglTexture)}let Z=null,ge=!1,xe=!1;if(w){const Fe=w.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture)&&(xe=!0);const Ge=me.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Z=Ge[k],ge=!0):Pe.isWebGL2&&w.samples>0&&_e.useMultisampledRTT(w)===!1?Z=me.get(w).__webglMultisampledFramebuffer:Z=Ge,T.copy(w.viewport),C.copy(w.scissor),x=w.scissorTest}else T.copy(F).multiplyScalar(I).floor(),C.copy(H).multiplyScalar(I).floor(),x=O;if(ue.bindFramebuffer(36160,Z)&&Pe.drawBuffers&&B&&ue.drawBuffers(w,Z),ue.viewport(T),ue.scissor(C),ue.setScissorTest(x),ge){const Fe=me.get(w.texture);W.framebufferTexture2D(36160,36064,34069+k,Fe.__webglTexture,U)}else if(xe){const Fe=me.get(w.texture),Ge=k||0;W.framebufferTextureLayer(36160,36064,Fe.__webglTexture,U||0,Ge)}b=-1},this.readRenderTargetPixels=function(w,k,U,B,Z,ge,xe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=me.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&xe!==void 0&&(Me=Me[xe]),Me){ue.bindFramebuffer(36160,Me);try{const Fe=w.texture,Ge=Fe.format,De=Fe.type;if(Ge!==qn&&A.convert(Ge)!==W.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Le=De===ta&&(be.has("EXT_color_buffer_half_float")||Pe.isWebGL2&&be.has("EXT_color_buffer_float"));if(De!==gr&&A.convert(De)!==W.getParameter(35738)&&!(De===ir&&(Pe.isWebGL2||be.has("OES_texture_float")||be.has("WEBGL_color_buffer_float")))&&!Le){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-B&&U>=0&&U<=w.height-Z&&W.readPixels(k,U,B,Z,A.convert(Ge),A.convert(De),ge)}finally{const Fe=S!==null?me.get(S).__webglFramebuffer:null;ue.bindFramebuffer(36160,Fe)}}},this.copyFramebufferToTexture=function(w,k,U=0){const B=Math.pow(2,-U),Z=Math.floor(k.image.width*B),ge=Math.floor(k.image.height*B);_e.setTexture2D(k,0),W.copyTexSubImage2D(3553,U,0,0,w.x,w.y,Z,ge),ue.unbindTexture()},this.copyTextureToTexture=function(w,k,U,B=0){const Z=k.image.width,ge=k.image.height,xe=A.convert(U.format),Me=A.convert(U.type);_e.setTexture2D(U,0),W.pixelStorei(37440,U.flipY),W.pixelStorei(37441,U.premultiplyAlpha),W.pixelStorei(3317,U.unpackAlignment),k.isDataTexture?W.texSubImage2D(3553,B,w.x,w.y,Z,ge,xe,Me,k.image.data):k.isCompressedTexture?W.compressedTexSubImage2D(3553,B,w.x,w.y,k.mipmaps[0].width,k.mipmaps[0].height,xe,k.mipmaps[0].data):W.texSubImage2D(3553,B,w.x,w.y,xe,Me,k.image),B===0&&U.generateMipmaps&&W.generateMipmap(3553),ue.unbindTexture()},this.copyTextureToTexture3D=function(w,k,U,B,Z=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ge=w.max.x-w.min.x+1,xe=w.max.y-w.min.y+1,Me=w.max.z-w.min.z+1,Fe=A.convert(B.format),Ge=A.convert(B.type);let De;if(B.isData3DTexture)_e.setTexture3D(B,0),De=32879;else if(B.isDataArrayTexture)_e.setTexture2DArray(B,0),De=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(37440,B.flipY),W.pixelStorei(37441,B.premultiplyAlpha),W.pixelStorei(3317,B.unpackAlignment);const Le=W.getParameter(3314),qe=W.getParameter(32878),Rn=W.getParameter(3316),ni=W.getParameter(3315),mn=W.getParameter(32877),gn=U.isCompressedTexture?U.mipmaps[0]:U.image;W.pixelStorei(3314,gn.width),W.pixelStorei(32878,gn.height),W.pixelStorei(3316,w.min.x),W.pixelStorei(3315,w.min.y),W.pixelStorei(32877,w.min.z),U.isDataTexture||U.isData3DTexture?W.texSubImage3D(De,Z,k.x,k.y,k.z,ge,xe,Me,Fe,Ge,gn.data):U.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(De,Z,k.x,k.y,k.z,ge,xe,Me,Fe,gn.data)):W.texSubImage3D(De,Z,k.x,k.y,k.z,ge,xe,Me,Fe,Ge,gn),W.pixelStorei(3314,Le),W.pixelStorei(32878,qe),W.pixelStorei(3316,Rn),W.pixelStorei(3315,ni),W.pixelStorei(32877,mn),Z===0&&B.generateMipmaps&&W.generateMipmap(De),ue.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?_e.setTextureCube(w,0):w.isData3DTexture?_e.setTexture3D(w,0):w.isDataArrayTexture?_e.setTexture2DArray(w,0):_e.setTexture2D(w,0),ue.unbindTexture()},this.resetState=function(){g=0,y=0,S=null,ue.reset(),J.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class fy extends Fd{}fy.prototype.isWebGL1Renderer=!0;class Od extends Pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class zd extends la{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new rt(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Th=new z,Ah=new z,Ch=new Et,Ml=new yd,Ha=new Mo;class dy extends Pn{constructor(e=new Vn,t=new zd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Th.fromBufferAttribute(t,i-1),Ah.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Th.distanceTo(Ah);e.setAttribute("lineDistance",new Wt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ha.copy(n.boundingSphere),Ha.applyMatrix4(i),Ha.radius+=r,e.ray.intersectsSphere(Ha)===!1)return;Ch.copy(i).invert(),Ml.copy(e.ray).applyMatrix4(Ch);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=new z,u=new z,h=new z,f=new z,m=this.isLineSegments?2:1,_=n.index,p=n.attributes.position;if(_!==null){const g=Math.max(0,a.start),y=Math.min(_.count,a.start+a.count);for(let S=g,b=y-1;S<b;S+=m){const v=_.getX(S),T=_.getX(S+1);if(c.fromBufferAttribute(p,v),u.fromBufferAttribute(p,T),Ml.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const x=e.ray.origin.distanceTo(f);x<e.near||x>e.far||t.push({distance:x,point:h.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,a.start),y=Math.min(p.count,a.start+a.count);for(let S=g,b=y-1;S<b;S+=m){if(c.fromBufferAttribute(p,S),u.fromBufferAttribute(p,S+1),Ml.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(f);T<e.near||T>e.far||t.push({distance:T,point:h.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}}const Dh=new z,Lh=new z;class py extends dy{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Dh.fromBufferAttribute(t,i),Lh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Dh.distanceTo(Lh);e.setAttribute("lineDistance",new Wt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class my extends pn{constructor(e,t,n,i,r,a,s,l,c){super(e,t,n,i,r,a,s,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Ph={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class gy{constructor(e,t,n){const i=this;let r=!1,a=0,s=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){s++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,s),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,s),a===s&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const m=c[h],_=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null}}}const _y=new gy;class Nd{constructor(e){this.manager=e!==void 0?e:_y,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class xy extends Nd{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Ph.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const s=na("img");function l(){u(),Ph.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){s.removeEventListener("load",l,!1),s.removeEventListener("error",c,!1)}return s.addEventListener("load",l,!1),s.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),r.manager.itemStart(e),s.src=e,s}}class kd extends Nd{constructor(e){super(e)}load(e,t,n,i){const r=new pn,a=new xy(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(s){r.image=s,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Bd{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Rh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Rh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Rh(){return(typeof performance>"u"?Date:performance).now()}class Ih{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Kt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class vy extends py{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Vn;i.setAttribute("position",new Wt(t,3)),i.setAttribute("color",new Wt(n,3));const r=new zd({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(e,t,n){const i=new rt,r=this.geometry.attributes.color.array;return i.set(e),i.toArray(r,0),i.toArray(r,3),i.set(t),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ac}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ac);class yy{constructor(e,t,n=1,i=1){ae(this,"mesh");this.element=e,this.material=t,this.widthSegments=n,this.heightSegments=i,this.createMesh(),this.update()}createMesh(){const e=new gs(2,2,this.widthSegments,this.heightSegments);this.mesh=new Cn(e,this.material)}update(){const e=this.element.getBoundingClientRect(),t=e.width/window.innerWidth,n=e.height/window.innerHeight,i=(e.width/2+e.left-window.innerWidth/2)*2,r=(window.innerHeight/2-(e.height/2+e.top))*2,a=i/window.innerWidth,s=r/window.innerHeight;this.mesh.scale.set(t,n,1),this.mesh.position.set(a,s,0)}}class by{constructor(e){ae(this,"texture");ae(this,"canvas");ae(this,"context");ae(this,"textInfo");ae(this,"chars",[]);this.dsp=e,this.init(),this.createCharSet(),this.updateCanvasInfo(),this.draw(),this.createTexture()}init(){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d")}createCharSet(){[...Array(26)].forEach((t,n)=>this.chars.push(String.fromCharCode("a".charCodeAt(0)+n)));const e=this.chars.map(t=>t.toUpperCase());return this.chars.push(...e),[...Array(10)].forEach((t,n)=>this.chars.push(n.toString())),this.chars.push("!","#","$","%","&","*","+",",","-",".","/"),this.chars}updateCanvasInfo(){const e=this.dsp.element.getBoundingClientRect();this.canvas.width=e.width,this.canvas.height=e.height;const t=window.getComputedStyle(this.dsp.element);this.textInfo={text:this.dsp.element.innerText,fontFamily:t.fontFamily,fontWeight:t.fontWeight,fontSize:t.fontSize,color:t.color,lineHeight:t.lineHeight,letterSpacing:t.letterSpacing,textAlign:t.textAlign}}createTexture(){const e=new my(this.canvas);return this.texture=e,e}px2num(e){return e.endsWith("px")?Number.parseFloat(e.replace("px","")):0}randomChar(e,t){if(!t||["+","-"," "].includes(e))return e;const n=Math.floor(Math.random()*this.chars.length);return this.chars[n]}draw(e=!1,t=!1){const n=this.context,{width:i,height:r}=n.canvas,{text:a,color:s,fontFamily:l,fontWeight:c,fontSize:u,letterSpacing:h,lineHeight:f,textAlign:m}=this.textInfo,_=e?this.dsp.element.innerText:a;n.clearRect(0,0,i,r);const d=s.replace(")","").split("(")[1].split(",");n.fillStyle=`rgb(${d[0]}, ${d[1]}, ${d[2]})`,n.textBaseline="middle",n.font=`${c} ${u} ${l}`;const p=this.px2num(u);let g=0;f.endsWith("px")&&(g=(this.px2num(f)-p)/2);const y=this.px2num(h),S=[];let b="";_.split(`
`).forEach(v=>{v.split(" ").forEach((T,C)=>{const x=C===0?T:b+" "+T,E=n.measureText(x).width;i+1<E+y*(x.length-1)?(S.push(b),b=T):b=x}),S.push(b),b=""}),S.forEach((v,T)=>{const C=n.measureText(v).width+y*(v.length-1);let x=0;m==="center"?x=(i-C)/2:m==="end"&&(x=i-C);let E=0;v.split("").forEach(P=>{const I=this.randomChar(P,t);n.fillText(I,E+x,g+p/2+(p+g*2)*T),E+=n.measureText(I).width+y})})}}const Rc=class{constructor(){ae(this,"position",[0,0]);ae(this,"handleMouseMove",e=>{const t=e.clientX/window.innerWidth*2-1,n=-1*(e.clientY/window.innerHeight*2-1);this.position=[t,n]});ae(this,"handleTouchMove",e=>{const{pageX:t,pageY:n}=e.touches[0],i=t/window.innerWidth*2-1,r=-1*(n/window.innerHeight*2-1);this.position=[i,r]});window.addEventListener("mousemove",this.handleMouseMove),window.addEventListener("touchmove",this.handleTouchMove)}static get instance(){return this.mouse2d||(this.mouse2d=new Rc),this.mouse2d}};let ns=Rc;ae(ns,"mouse2d");const Fh={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class Eo{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}const Sy=new _s(-1,1,1,-1,0,1),Lc=new Vn;Lc.setAttribute("position",new Wt([-1,3,0,-1,-1,0,3,-1,0],3));Lc.setAttribute("uv",new Wt([0,2,0,0,2,0],2));class My{constructor(e){this._mesh=new Cn(Lc,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Sy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class go extends Eo{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Gn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=wd.clone(e.uniforms),this.material=new Gn({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new My(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}}class Oh extends Eo{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,s;this.inverse?(a=0,s=1):(a=1,s=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(s),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class wy extends Eo{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class zh{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new Be);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new ti(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],Fh===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),go===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new go(Fh),this.clock=new Bd}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const s=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(s.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(s.EQUAL,1,4294967295)}this.swapBuffers()}Oh!==void 0&&(a instanceof Oh?n=!0:a instanceof wy&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Be);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}}new _s(-1,1,1,-1,0,1);const Ud=new Vn;Ud.setAttribute("position",new Wt([-1,3,0,-1,-1,0,3,-1,0],3));Ud.setAttribute("uv",new Wt([0,2,0,0,2,0],2));class Nh extends Eo{constructor(e,t,n,i,r){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r!==void 0?r:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new rt}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==void 0&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),r=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,r),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=a),e.autoClear=i}}var Ey=`struct Texture {\r
  sampler2D texture;\r
  vec2 uvScale;\r
};

uniform Texture u_contents;\r
varying vec2 v_uv;

vec4 getTexture(Texture data, vec2 uv) {\r
  vec2 scaledUv = (uv - 0.5) * data.uvScale + 0.5;\r
  return texture2D(data.texture, scaledUv);\r
}

void main() {\r
  vec4 tex = getTexture(u_contents, v_uv);\r
  gl_FragColor = tex;\r
}`,Ty=`uniform sampler2D tDiffuse;\r
uniform sampler2D u_simulator;\r
varying vec2 v_uv;

float PI = 3.141592653589793;

void main() {\r
  vec2 uv = v_uv;

  vec4 disp = texture2D(u_simulator, v_uv);\r
  float angle = disp.r * 2.0 * PI;\r
  vec2 dir = vec2(sin(angle), cos(angle));\r
  vec2 distortion = dir * disp.r * 0.05;\r
  uv += distortion;

  vec4 tex = texture2D(tDiffuse, uv);\r
  float a = disp.r * 1.4;

  gl_FragColor = vec4(tex.rgb * a, a);\r
}`,Ay=`uniform sampler2D tDiffuse;\r
uniform sampler2D u_backEffect;\r
uniform sampler2D u_simulator;\r
varying vec2 v_uv;

float PI = 3.141592653589793;

void main() {\r
  vec2 uv = v_uv;

  vec4 disp = texture2D(u_simulator, v_uv);\r
  float angle = disp.r * 2.0 * PI;\r
  vec2 dir = vec2(sin(angle), cos(angle));\r
  vec2 distortion = dir * disp.r * 0.02;\r
  uv += distortion;

  vec4 tex = texture2D(tDiffuse, uv);\r
  tex.rgb += disp.r * 1.4 * tex.a;

  vec4 back = texture2D(u_backEffect, v_uv);\r
  back.rgb *= 1.0 - tex.a;

  vec4 color = tex + back;\r
  gl_FragColor = color;\r
}`,Cy=`uniform sampler2D u_texture;\r
varying vec2 v_uv;

void main() {\r
  vec4 tex = texture2D(u_texture, v_uv);\r
  gl_FragColor = tex;\r
}`,Dy=`varying vec2 v_uv;

void main() {\r
  v_uv = uv;\r
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\r
}`;const Fi={vertex:Dy,bgPlaneFrag:Ey,textPlaneFrag:Cy,effectBackFrag:Ty,effectFrontFrag:Ay};class Ly{constructor(){ae(this,"pass");ae(this,"init",()=>{const e={uniforms:{tDiffuse:{value:null},u_simulator:{value:null},u_progress:{value:0}},vertexShader:Fi.vertex,fragmentShader:Fi.effectBackFrag};this.pass=new go(e)});ae(this,"update",()=>{});this.init()}}class Py{constructor(e){ae(this,"pass");ae(this,"init",()=>{const e={uniforms:{tDiffuse:{value:null},u_backEffect:{value:null},u_simulator:{value:null}},vertexShader:Fi.vertex,fragmentShader:Fi.effectFrontFrag};this.pass=new go(e),this.pass.uniforms.u_backEffect.value=this.backEffectTexture});ae(this,"update",()=>{});this.backEffectTexture=e,this.init()}}const Ry=o=>{const e=o.startsWith("/")?o.substring(1):o;return"/invisible/"+e};class Iy{constructor(e,t,n){ae(this,"renderTarget");ae(this,"scene");ae(this,"camera");ae(this,"HALF_EDGE",1);ae(this,"AMOUNT",100);ae(this,"FREQUENCY",.02);ae(this,"rippleMeshes",[]);ae(this,"mouse",new Be);ae(this,"prevMouse",new Be);ae(this,"currentWave",0);ae(this,"init",()=>{this.renderTarget=new ti(this.width,this.height),this.scene=new Od;const e=this.width/this.height,t=this.HALF_EDGE;this.camera=new _s(-t*e,t*e,t,-t,.01,10),this.camera.position.z=5});ae(this,"createRipples",()=>{const e=new kd().load(Ry("/resources/brush.png")),t=new gs;t.applyMatrix4(new Et().makeScale(.1,.1,1));const n=new Cc({map:e,transparent:!0,blending:Zl,depthTest:!1,depthWrite:!1});[...Array(this.AMOUNT)].forEach(()=>{const i=new Cn(t,n.clone());i.rotation.z=Math.PI*2*Math.random(),i.visible=!1,this.rippleMeshes.push(i)}),this.scene.add(...this.rippleMeshes)});ae(this,"resize",(e,t)=>{const n=e/t;this.camera.left=-this.HALF_EDGE*n,this.camera.right=this.HALF_EDGE*n,this.camera.updateProjectionMatrix(),this.renderTarget.setSize(e,t)});ae(this,"setNewWave",(e,t)=>{const n=this.rippleMeshes[this.currentWave];n.visible=!0,n.position.set(e,t,0),n.scale.set(.2,.2,1),n.material.opacity=.5});ae(this,"trackMousePos",e=>{this.mouse.set(ns.instance.position[0]*e,ns.instance.position[1]);const t=this.mouse.distanceTo(this.prevMouse);this.FREQUENCY<t&&(this.setNewWave(this.mouse.x,this.mouse.y),this.currentWave=(this.currentWave+1)%this.AMOUNT),this.prevMouse.copy(this.mouse)});ae(this,"update",e=>{this.trackMousePos(e),this.gl.setRenderTarget(this.renderTarget),this.gl.render(this.scene,this.camera),this.gl.setRenderTarget(null),this.rippleMeshes.forEach(t=>{if(t.visible){const n=t.material;t.rotation.z+=.02,n.opacity*=.95,t.scale.x=.99*t.scale.x+.3,t.scale.y=t.scale.x,n.opacity<.003&&(t.visible=!1)}})});this.gl=e,this.width=t,this.height=n,this.init(),this.createRipples()}get texture(){return this.renderTarget.texture}}class Fy{constructor(e,t,n,i,r){ae(this,"rippleSimulator");ae(this,"backgroundComposer");ae(this,"composer");ae(this,"backEffect");ae(this,"frontEffect");this.gl=e,this.scene=t,this.camera=n,this.width=i,this.height=r,this.init()}init(){const e=new Iy(this.gl,this.width,this.height),t=new ti(this.width,this.height),n=new zh(this.gl,t);n.renderToScreen=!1,n.addPass(new Nh(this.scene,this.camera));const i=new Ly;i.pass.needsSwap=!1,n.addPass(i.pass);const r=new zh(this.gl);r.addPass(new Nh(this.scene,this.camera));const a=new Py(t.texture);r.addPass(a.pass),this.rippleSimulator=e,this.backgroundComposer=n,this.composer=r,this.backEffect=i,this.frontEffect=a}resize(e,t){this.rippleSimulator.resize(e,t),this.backgroundComposer.setSize(e,t),this.composer.setSize(e,t)}render(e){this.rippleSimulator.update(e),this.backEffect.pass.uniforms.u_simulator.value=this.rippleSimulator.texture,this.frontEffect.pass.uniforms.u_simulator.value=this.rippleSimulator.texture,this.camera.layers.set(Gd),this.backgroundComposer.render(),this.camera.layers.set(jy),this.composer.render()}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class Qn{constructor(e,t,n,i,r="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),Qn.nextNameID=Qn.nextNameID||0,this.$name.id=`lil-gui-name-${++Qn.nextNameID}`,this.$widget=document.createElement(r),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Oy extends Qn{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function sc(o){let e,t;return(e=o.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=o.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=o.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const zy={isPrimitive:!0,match:o=>typeof o=="string",fromHexString:sc,toHexString:sc},ia={isPrimitive:!0,match:o=>typeof o=="number",fromHexString:o=>parseInt(o.substring(1),16),toHexString:o=>"#"+o.toString(16).padStart(6,0)},Ny={isPrimitive:!1,match:Array.isArray,fromHexString(o,e,t=1){const n=ia.fromHexString(o);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([o,e,t],n=1){n=255/n;const i=o*n<<16^e*n<<8^t*n<<0;return ia.toHexString(i)}},ky={isPrimitive:!1,match:o=>Object(o)===o,fromHexString(o,e,t=1){const n=ia.fromHexString(o);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r:o,g:e,b:t},n=1){n=255/n;const i=o*n<<16^e*n<<8^t*n<<0;return ia.toHexString(i)}},By=[zy,ia,Ny,ky];function Uy(o){return By.find(e=>e.match(o))}class Gy extends Qn{constructor(e,t,n,i){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Uy(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=sc(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class wl extends Qn{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Vy extends Qn{constructor(e,t,n,i,r,a){super(e,t,n,"number"),this._initInput(),this.min(i),this.max(r);const s=a!==void 0;this.step(s?a:this._getImplicitStep(),s),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let g=parseFloat(this.$input.value);isNaN(g)||(this._stepExplicit&&(g=this._snap(g)),this.setValue(this._clamp(g)))},t=g=>{const y=parseFloat(this.$input.value);isNaN(y)||(this._snapClampSetValue(y+g),this.$input.value=this.getValue())},n=g=>{g.code==="Enter"&&this.$input.blur(),g.code==="ArrowUp"&&(g.preventDefault(),t(this._step*this._arrowKeyMultiplier(g))),g.code==="ArrowDown"&&(g.preventDefault(),t(this._step*this._arrowKeyMultiplier(g)*-1))},i=g=>{this._inputFocused&&(g.preventDefault(),t(this._step*this._normalizeMouseWheel(g)))};let r=!1,a,s,l,c,u;const h=5,f=g=>{a=g.clientX,s=l=g.clientY,r=!0,c=this.getValue(),u=0,window.addEventListener("mousemove",m),window.addEventListener("mouseup",_)},m=g=>{if(r){const y=g.clientX-a,S=g.clientY-s;Math.abs(S)>h?(g.preventDefault(),this.$input.blur(),r=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(y)>h&&_()}r||(u-=(g.clientY-l)*this._step*this._arrowKeyMultiplier(g),c+u>this._max?u=this._max-c:c+u<this._min&&(u=this._min-c),this._snapClampSetValue(c+u)),l=g.clientY},_=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",m),window.removeEventListener("mouseup",_)},d=()=>{this._inputFocused=!0},p=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",n),this.$input.addEventListener("wheel",i,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",d),this.$input.addEventListener("blur",p)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(g,y,S,b,v)=>(g-y)/(S-y)*(v-b)+b,t=g=>{const y=this.$slider.getBoundingClientRect();let S=e(g,y.left,y.right,this._min,this._max);this._snapClampSetValue(S)},n=g=>{this._setDraggingStyle(!0),t(g.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",r)},i=g=>{t(g.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",r)};let a=!1,s,l;const c=g=>{g.preventDefault(),this._setDraggingStyle(!0),t(g.touches[0].clientX),a=!1},u=g=>{g.touches.length>1||(this._hasScrollBar?(s=g.touches[0].clientX,l=g.touches[0].clientY,a=!0):c(g),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",f))},h=g=>{if(a){const y=g.touches[0].clientX-s,S=g.touches[0].clientY-l;Math.abs(y)>Math.abs(S)?c(g):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",f))}else g.preventDefault(),t(g.touches[0].clientX)},f=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",f)},m=this._callOnFinishChange.bind(this),_=400;let d;const p=g=>{if(Math.abs(g.deltaX)<Math.abs(g.deltaY)&&this._hasScrollBar)return;g.preventDefault();const S=this._normalizeMouseWheel(g)*this._step;this._snapClampSetValue(this.getValue()+S),this.$input.value=this.getValue(),clearTimeout(d),d=setTimeout(m,_)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",p,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Hy extends Qn{constructor(e,t,n,i){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this._names.forEach(r=>{const a=document.createElement("option");a.innerHTML=r,this.$select.appendChild(a)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class Wy extends Qn{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const Xy=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "\u2195";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "\u25BE";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "\u25B8";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "\u2713";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function Yy(o){const e=document.createElement("style");e.innerHTML=o;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let kh=!1;class Pc{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:r="Controls",injectStyles:a=!0,touchStyles:s=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",l=>{(l.code==="Enter"||l.code==="Space")&&(l.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),s&&this.domElement.classList.add("allow-touch-styles"),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),!kh&&a&&(Yy(Xy),kh=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this.domElement.addEventListener("keydown",l=>l.stopPropagation()),this.domElement.addEventListener("keyup",l=>l.stopPropagation())}add(e,t,n,i,r){if(Object(n)===n)return new Hy(this,e,t,n);const a=e[t];switch(typeof a){case"number":return new Vy(this,e,t,n,i,r);case"boolean":return new Oy(this,e,t);case"string":return new Wy(this,e,t);case"function":return new wl(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,a)}addColor(e,t,n=1){return new Gy(this,e,t,n)}addFolder(e){return new Pc({parent:this,title:e})}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof wl||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof wl)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const Bh={type:"change"},El={type:"start"},Uh={type:"end"};class $y extends yr{constructor(e,t){super(),t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Er.ROTATE,MIDDLE:Er.DOLLY,RIGHT:Er.PAN},this.touches={ONE:Tr.ROTATE,TWO:Tr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",lt),this._domElementKeyEvents=A},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Bh),n.update(),r=i.NONE},this.update=function(){const A=new z,J=new xr().setFromUnitVectors(e.up,new z(0,1,0)),re=J.clone().invert(),de=new z,le=new xr,Te=2*Math.PI;return function(){const Ae=n.object.position;A.copy(Ae).sub(n.target),A.applyQuaternion(J),s.setFromVector3(A),n.autoRotate&&r===i.NONE&&E(C()),n.enableDamping?(s.theta+=l.theta*n.dampingFactor,s.phi+=l.phi*n.dampingFactor):(s.theta+=l.theta,s.phi+=l.phi);let R=n.minAzimuthAngle,se=n.maxAzimuthAngle;return isFinite(R)&&isFinite(se)&&(R<-Math.PI?R+=Te:R>Math.PI&&(R-=Te),se<-Math.PI?se+=Te:se>Math.PI&&(se-=Te),R<=se?s.theta=Math.max(R,Math.min(se,s.theta)):s.theta=s.theta>(R+se)/2?Math.max(R,s.theta):Math.min(se,s.theta)),s.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,s.phi)),s.makeSafe(),s.radius*=c,s.radius=Math.max(n.minDistance,Math.min(n.maxDistance,s.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),A.setFromSpherical(s),A.applyQuaternion(re),Ae.copy(n.target).add(A),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||de.distanceToSquared(n.object.position)>a||8*(1-le.dot(n.object.quaternion))>a?(n.dispatchEvent(Bh),de.copy(n.object.position),le.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",q),n.domElement.removeEventListener("pointerdown",Ye),n.domElement.removeEventListener("pointercancel",Y),n.domElement.removeEventListener("wheel",pt),n.domElement.removeEventListener("pointermove",et),n.domElement.removeEventListener("pointerup",He),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",lt)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const a=1e-6,s=new Ih,l=new Ih;let c=1;const u=new z;let h=!1;const f=new Be,m=new Be,_=new Be,d=new Be,p=new Be,g=new Be,y=new Be,S=new Be,b=new Be,v=[],T={};function C(){return 2*Math.PI/60/60*n.autoRotateSpeed}function x(){return Math.pow(.95,n.zoomSpeed)}function E(A){l.theta-=A}function P(A){l.phi-=A}const I=function(){const A=new z;return function(re,de){A.setFromMatrixColumn(de,0),A.multiplyScalar(-re),u.add(A)}}(),$=function(){const A=new z;return function(re,de){n.screenSpacePanning===!0?A.setFromMatrixColumn(de,1):(A.setFromMatrixColumn(de,0),A.crossVectors(n.object.up,A)),A.multiplyScalar(re),u.add(A)}}(),j=function(){const A=new z;return function(re,de){const le=n.domElement;if(n.object.isPerspectiveCamera){const Te=n.object.position;A.copy(Te).sub(n.target);let ke=A.length();ke*=Math.tan(n.object.fov/2*Math.PI/180),I(2*re*ke/le.clientHeight,n.object.matrix),$(2*de*ke/le.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(I(re*(n.object.right-n.object.left)/n.object.zoom/le.clientWidth,n.object.matrix),$(de*(n.object.top-n.object.bottom)/n.object.zoom/le.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function F(A){n.object.isPerspectiveCamera?c/=A:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*A)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function H(A){n.object.isPerspectiveCamera?c*=A:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/A)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function O(A){f.set(A.clientX,A.clientY)}function V(A){y.set(A.clientX,A.clientY)}function G(A){d.set(A.clientX,A.clientY)}function N(A){m.set(A.clientX,A.clientY),_.subVectors(m,f).multiplyScalar(n.rotateSpeed);const J=n.domElement;E(2*Math.PI*_.x/J.clientHeight),P(2*Math.PI*_.y/J.clientHeight),f.copy(m),n.update()}function D(A){S.set(A.clientX,A.clientY),b.subVectors(S,y),b.y>0?F(x()):b.y<0&&H(x()),y.copy(S),n.update()}function ee(A){p.set(A.clientX,A.clientY),g.subVectors(p,d).multiplyScalar(n.panSpeed),j(g.x,g.y),d.copy(p),n.update()}function Q(A){A.deltaY<0?H(x()):A.deltaY>0&&F(x()),n.update()}function ne(A){let J=!1;switch(A.code){case n.keys.UP:j(0,n.keyPanSpeed),J=!0;break;case n.keys.BOTTOM:j(0,-n.keyPanSpeed),J=!0;break;case n.keys.LEFT:j(n.keyPanSpeed,0),J=!0;break;case n.keys.RIGHT:j(-n.keyPanSpeed,0),J=!0;break}J&&(A.preventDefault(),n.update())}function ce(){if(v.length===1)f.set(v[0].pageX,v[0].pageY);else{const A=.5*(v[0].pageX+v[1].pageX),J=.5*(v[0].pageY+v[1].pageY);f.set(A,J)}}function ye(){if(v.length===1)d.set(v[0].pageX,v[0].pageY);else{const A=.5*(v[0].pageX+v[1].pageX),J=.5*(v[0].pageY+v[1].pageY);d.set(A,J)}}function W(){const A=v[0].pageX-v[1].pageX,J=v[0].pageY-v[1].pageY,re=Math.sqrt(A*A+J*J);y.set(0,re)}function Ie(){n.enableZoom&&W(),n.enablePan&&ye()}function be(){n.enableZoom&&W(),n.enableRotate&&ce()}function Pe(A){if(v.length==1)m.set(A.pageX,A.pageY);else{const re=ve(A),de=.5*(A.pageX+re.x),le=.5*(A.pageY+re.y);m.set(de,le)}_.subVectors(m,f).multiplyScalar(n.rotateSpeed);const J=n.domElement;E(2*Math.PI*_.x/J.clientHeight),P(2*Math.PI*_.y/J.clientHeight),f.copy(m)}function ue(A){if(v.length===1)p.set(A.pageX,A.pageY);else{const J=ve(A),re=.5*(A.pageX+J.x),de=.5*(A.pageY+J.y);p.set(re,de)}g.subVectors(p,d).multiplyScalar(n.panSpeed),j(g.x,g.y),d.copy(p)}function Ne(A){const J=ve(A),re=A.pageX-J.x,de=A.pageY-J.y,le=Math.sqrt(re*re+de*de);S.set(0,le),b.set(0,Math.pow(S.y/y.y,n.zoomSpeed)),F(b.y),y.copy(S)}function me(A){n.enableZoom&&Ne(A),n.enablePan&&ue(A)}function _e(A){n.enableZoom&&Ne(A),n.enableRotate&&Pe(A)}function Ye(A){n.enabled!==!1&&(v.length===0&&(n.domElement.setPointerCapture(A.pointerId),n.domElement.addEventListener("pointermove",et),n.domElement.addEventListener("pointerup",He)),ie(A),A.pointerType==="touch"?L(A):Qe(A))}function et(A){n.enabled!==!1&&(A.pointerType==="touch"?M(A):Ce(A))}function He(A){te(A),v.length===0&&(n.domElement.releasePointerCapture(A.pointerId),n.domElement.removeEventListener("pointermove",et),n.domElement.removeEventListener("pointerup",He)),n.dispatchEvent(Uh),r=i.NONE}function Y(A){te(A)}function Qe(A){let J;switch(A.button){case 0:J=n.mouseButtons.LEFT;break;case 1:J=n.mouseButtons.MIDDLE;break;case 2:J=n.mouseButtons.RIGHT;break;default:J=-1}switch(J){case Er.DOLLY:if(n.enableZoom===!1)return;V(A),r=i.DOLLY;break;case Er.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enablePan===!1)return;G(A),r=i.PAN}else{if(n.enableRotate===!1)return;O(A),r=i.ROTATE}break;case Er.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enableRotate===!1)return;O(A),r=i.ROTATE}else{if(n.enablePan===!1)return;G(A),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(El)}function Ce(A){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;N(A);break;case i.DOLLY:if(n.enableZoom===!1)return;D(A);break;case i.PAN:if(n.enablePan===!1)return;ee(A);break}}function pt(A){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(A.preventDefault(),n.dispatchEvent(El),Q(A),n.dispatchEvent(Uh))}function lt(A){n.enabled===!1||n.enablePan===!1||ne(A)}function L(A){switch(oe(A),v.length){case 1:switch(n.touches.ONE){case Tr.ROTATE:if(n.enableRotate===!1)return;ce(),r=i.TOUCH_ROTATE;break;case Tr.PAN:if(n.enablePan===!1)return;ye(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Tr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ie(),r=i.TOUCH_DOLLY_PAN;break;case Tr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;be(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(El)}function M(A){switch(oe(A),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Pe(A),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ue(A),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;me(A),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;_e(A),n.update();break;default:r=i.NONE}}function q(A){n.enabled!==!1&&A.preventDefault()}function ie(A){v.push(A)}function te(A){delete T[A.pointerId];for(let J=0;J<v.length;J++)if(v[J].pointerId==A.pointerId){v.splice(J,1);return}}function oe(A){let J=T[A.pointerId];J===void 0&&(J=new Be,T[A.pointerId]=J),J.set(A.pageX,A.pageY)}function ve(A){const J=A.pointerId===v[0].pointerId?v[1]:v[0];return T[J.pointerId]}n.domElement.addEventListener("contextmenu",q),n.domElement.addEventListener("pointerdown",Ye),n.domElement.addEventListener("pointercancel",Y),n.domElement.addEventListener("wheel",pt,{passive:!1}),this.update()}}var Ws=function(){var o=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(u){u.preventDefault(),n(++o%e.children.length)},!1);function t(u){return e.appendChild(u.dom),u}function n(u){for(var h=0;h<e.children.length;h++)e.children[h].style.display=h===u?"block":"none";o=u}var i=(performance||Date).now(),r=i,a=0,s=t(new Ws.Panel("FPS","#0ff","#002")),l=t(new Ws.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=t(new Ws.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:e,addPanel:t,showPanel:n,begin:function(){i=(performance||Date).now()},end:function(){a++;var u=(performance||Date).now();if(l.update(u-i,200),u>=r+1e3&&(s.update(a*1e3/(u-r),100),r=u,a=0,c)){var h=performance.memory;c.update(h.usedJSHeapSize/1048576,h.jsHeapSizeLimit/1048576)}return u},update:function(){i=this.end()},domElement:e,setMode:n}};Ws.Panel=function(o,e,t){var n=1/0,i=0,r=Math.round,a=r(window.devicePixelRatio||1),s=80*a,l=48*a,c=3*a,u=2*a,h=3*a,f=15*a,m=74*a,_=30*a,d=document.createElement("canvas");d.width=s,d.height=l,d.style.cssText="width:80px;height:48px";var p=d.getContext("2d");return p.font="bold "+9*a+"px Helvetica,Arial,sans-serif",p.textBaseline="top",p.fillStyle=t,p.fillRect(0,0,s,l),p.fillStyle=e,p.fillText(o,c,u),p.fillRect(h,f,m,_),p.fillStyle=t,p.globalAlpha=.9,p.fillRect(h,f,m,_),{dom:d,update:function(g,y){n=Math.min(n,g),i=Math.max(i,g),p.fillStyle=t,p.globalAlpha=1,p.fillRect(0,0,s,f),p.fillStyle=e,p.fillText(r(g)+" "+o+" ("+r(n)+"-"+r(i)+")",c,u),p.drawImage(d,h+a,f,m-a,_,h,f,m-a,_),p.fillRect(h+m-a,f,a,_),p.fillStyle=t,p.globalAlpha=.9,p.fillRect(h+m-a,f,a,r((1-g/y)*_))}}};class qy{constructor(e,t="three-container"){ae(this,"container");ae(this,"renderer");ae(this,"scene");ae(this,"camera");ae(this,"clock");ae(this,"resizeCallback");ae(this,"disposeCallback");ae(this,"_orbitControls");ae(this,"_gui");ae(this,"enableOrbitControlsDamping",!1);ae(this,"animeId");ae(this,"stats");ae(this,"init",()=>{const{width:e,height:t,aspect:n}=this.size;this.renderer=new Fd({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(e,t),this.renderer.shadowMap.enabled=!0,this.renderer.outputEncoding=at,this.container.appendChild(this.renderer.domElement),this.scene=new Od,this.camera=new Jt(50,n,.01,1e3),this.camera.position.set(0,0,5),this.clock=new Bd});ae(this,"setOrbitControls",(e=.1)=>(this._orbitControls||(this._orbitControls=new $y(this.camera,this.renderer.domElement)),typeof e=="number"?(this._orbitControls.enableDamping=!0,this._orbitControls.dampingFactor=e):(this._orbitControls.enableDamping=!1,this._orbitControls.dampingFactor=0),this.enableOrbitControlsDamping=this._orbitControls.enableDamping,this._orbitControls));ae(this,"setPerspectiveCamera",(e,t,n,i)=>{this.camera=new Jt(e,t,n,i)});ae(this,"setOrthographicCamera",(e,t,n,i,r,a)=>{this.camera=new _s(e,t,n,i,r,a)});ae(this,"calcCoveredTextureScale",(e,t,n)=>{const i=n!=null?n:new Be,r=e.image.width/e.image.height;return t<r?i.set(t/r,1):i.set(1,r/t),i});ae(this,"coveredBackgroundTexture",e=>{e.matrixAutoUpdate=!1;const t=this.calcCoveredTextureScale(e,this.size.aspect);return e.matrix.setUvTransform(0,0,t.x,t.y,0,.5,.5),e});ae(this,"loadAssets",async e=>{const t=new kd,n=i=>{const r=i.split(".");return r[r.length-1]};await Promise.all(Object.values(e).map(async i=>{const r=n(i.path);if(["jpg","png","webp"].includes(r)){const a=await t.loadAsync(i.path);a.userData.aspect=a.image.width/a.image.height,i.encoding&&(a.encoding=at),i.flipY!==void 0&&(a.flipY=i.flipY),i.data=a}}))});ae(this,"setAxesHelper",e=>{const t=new vy(e);return this.scene.add(t),t});ae(this,"setStats",()=>{this.stats||(this.stats=Ws(),this.container.appendChild(this.stats.dom))});ae(this,"visibleStats",e=>{this.stats&&(this.stats.dom.style.visibility=e)});ae(this,"addEvents",()=>{window.addEventListener("resize",this.handleResize)});ae(this,"handleResize",()=>{const{width:e,height:t,aspect:n}=this.size;this.resizeCallback&&this.resizeCallback(),this.camera instanceof Jt&&(this.camera.aspect=n,this.camera.updateProjectionMatrix()),this.renderer.setSize(e,t)});ae(this,"animate",e=>{var t;this.animeId=requestAnimationFrame(this.animate.bind(this,e)),this.enableOrbitControlsDamping&&((t=this._orbitControls)==null||t.update()),this.stats&&this.stats.update(),e&&e()});ae(this,"dispose",()=>{this.disposeCallback&&this.disposeCallback(),this.stats&&this.container.removeChild(this.stats.dom),this._gui&&this._gui.destroy(),this.animeId&&cancelAnimationFrame(this.animeId),window.removeEventListener("resize",this.handleResize)});let n;try{if(n=e.querySelector(`.${t}`),!n)throw new Error(`undefind container: ${t}`)}catch(i){throw console.error(i),i}this.container=n,this.init(),this.addEvents()}get gui(){return this._gui||(this._gui=new Pc),this._gui}get size(){const{innerWidth:e,innerHeight:t}=window,n=e/t;return{width:e,height:t,aspect:n}}}const jy=0,Gd=1;class Zy extends qy{constructor(t){super(t);ae(this,"sectionElements");ae(this,"titleElement");ae(this,"paramsHeaderElement");ae(this,"paramsValueElement");ae(this,"fpsElement");ae(this,"mouseElement");ae(this,"backgroundImageElement");ae(this,"title");ae(this,"paramsHeader");ae(this,"paramsValue");ae(this,"sections",[]);ae(this,"bgMaterial");ae(this,"effects");ae(this,"assets",{background:{path:""}});ae(this,"getDomElements",()=>{this.backgroundImageElement=document.querySelector(".background-image"),this.sectionElements=Array.from(document.querySelectorAll(".section")),this.titleElement=document.querySelector(".title"),this.paramsHeaderElement=document.querySelector(".params--heading"),this.paramsValueElement=document.querySelector(".params--value"),this.fpsElement=this.paramsValueElement.querySelector(".fps"),this.mouseElement=this.paramsValueElement.querySelector(".mouse")});ae(this,"setScene",()=>{this.camera=new _s(-1,1,1,-1,.01,10),this.camera.position.z=5});ae(this,"createSyncTextPlane",()=>{this.sections=this.sectionElements.map(t=>{const{domSyncPlane:n,domTextDrawer:i}=this.createDomSyncObject(t);return{domSyncPlane:n,domTextDrawer:i}}),this.title=this.createDomSyncObject(this.titleElement),this.paramsHeader=this.createDomSyncObject(this.paramsHeaderElement),this.paramsValue=this.createDomSyncObject(this.paramsValueElement)});ae(this,"createDomSyncObject",t=>{const n=new Gn({uniforms:{u_texture:{value:null}},vertexShader:Fi.vertex,fragmentShader:Fi.textPlaneFrag,transparent:!0}),i=new yy(t,n),r=new by(i);return n.uniforms.u_texture.value=r.texture,this.scene.add(i.mesh),{domSyncPlane:i,domTextDrawer:r}});ae(this,"createBackgroundPlane",()=>{const t=this.assets.background.data,n=new gs(2,2);this.bgMaterial=new Gn({uniforms:{u_contents:{value:{texture:t,uvScale:this.calcCoveredTextureScale(t,this.size.aspect)}}},vertexShader:Fi.vertex,fragmentShader:Fi.bgPlaneFrag});const i=new Cn(n,this.bgMaterial);i.layers.set(Gd),this.scene.add(i)});ae(this,"setPostProcessing",()=>{this.effects=new Fy(this.renderer,this.scene,this.camera,this.size.width,this.size.height)});ae(this,"setResizeCallback",()=>{this.resizeCallback=()=>{var a;const{width:t,height:n,aspect:i}=this.size;[...this.sections,this.title,this.paramsHeader,this.paramsValue].forEach(s=>{s.domSyncPlane.update(),s.domTextDrawer.updateCanvasInfo(),s.domTextDrawer.draw(),s.domSyncPlane.material.uniforms.u_texture.value=s.domTextDrawer.createTexture()});const r=this.bgMaterial.uniforms.u_contents.value;this.calcCoveredTextureScale(r.texture,i,r.uvScale),(a=this.effects)==null||a.resize(t,n)}});ae(this,"mouseStr",()=>{const[t,n]=ns.instance.position,i=t<0?t.toFixed(3):" "+t.toFixed(3),r=n<0?n.toFixed(3):" "+n.toFixed(3);return i+","+r});ae(this,"i",0);ae(this,"update",()=>{var n;const t=this.clock.getDelta();(n=this.effects)==null||n.render(this.size.aspect),this.paramsValue&&this.i%5===0&&(this.fpsElement.innerText=(1/t).toFixed(3),this.mouseElement.innerText=this.mouseStr(),this.paramsValue.domTextDrawer.draw(!0),this.paramsValue.domSyncPlane.material.uniforms.u_texture.value=this.paramsValue.domTextDrawer.createTexture(),this.i=0),this.i++});this.getDomElements(),this.assets.background.path=this.backgroundImageElement.src,this.loadAssets(this.assets).then(()=>{this.setScene(),this.createSyncTextPlane(),this.createBackgroundPlane(),this.setResizeCallback(),this.setPostProcessing(),this.animate(this.update)})}}Uf.registerPlugin(Ze);class Ky{constructor(){ae(this,"createCanvas",()=>{new Zy(document.querySelector("body"))});this.createCanvas()}}new Ky;
