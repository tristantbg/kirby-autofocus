!function o(a,s,u){function f(e,t){if(!s[e]){if(!a[e]){var n="function"==typeof require&&require;if(!t&&n)return n(e,!0);if(h)return h(e,!0);var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}var r=s[e]={exports:{}};a[e][0].call(r.exports,function(t){return f(a[e][1][t]||t)},r,r.exports,o,a,s,u)}return s[e].exports}for(var h="function"==typeof require&&require,t=0;t<u.length;t++)f(u[t]);return f}({1:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(t){var e=t.options.components["k-files-section"];t.component("k-files-section",{extends:e,watch:{data:{immediate:!1,handler:function(t,e){if(!e.length)return!1;var n=t.filter(function(n,t){return!e.filter(function(t,e){return t.filename==n.filename}).length});if(!n.length)return!1;FileReader&&this.findFocus(n)}}},methods:{findFocus:function(t){var n=this;t.forEach(function(f){var h=n,e=new XMLHttpRequest;e.open("get",f.url),e.responseType="blob",e.onload=function(){var t=new FileReader;t.onload=function(){var a=document.createElement("canvas"),s=a.getContext("2d"),u=new Image;u.onload=function(){var t=u.width,e=u.height;a.width=t,a.height=e,s.drawImage(u,0,0);var n=(0,c.default)(a,{debug:!1}),i=n.x/t,r=n.y/e,o='{"x":'+(i=(Math.round(100*i)/100).toFixed(2))+',"y":'+(r=(Math.round(100*r)/100).toFixed(2))+"}";h.saveFocus(f,o)},u.src=t.result},t.readAsDataURL(e.response)},e.send()})},saveFocus:function(t,e){this.$api.post("autofocus/save-focus",{uri:t.parent,filename:t.filename,coords:e}).then(function(t){console.log(t)}).catch(function(t){console.log(t)})}}})};var i,r=t(4),c=(i=r)&&i.__esModule?i:{default:i}},{4:4}],2:[function(t,e,n){"use strict";var i,r=t(1),o=(i=r)&&i.__esModule?i:{default:i};panel.plugin("sylvainjule/color-palette",{use:[o.default]})},{1:1}],3:[function(t,e,n){"use strict";function i(t){if(!(this instanceof i))return new i(t);if(!t)throw new TypeError("convolution matrix required");this.matrix=t,this.factor(1),this.bias(0)}Object.defineProperty(n,"__esModule",{value:!0}),(n.default=i).prototype.width=function(t){return this.w=t,this},i.prototype.height=function(t){return this.h=t,this},i.prototype.factor=function(t){return this._factor=t,this},i.prototype.bias=function(t){return this._bias=t,this},i.prototype.apply=function(t,e){for(var n=t.data,i=e.data,r=this.w,o=this.h,a=this.matrix,s=a[0].length,u=a.length,f=Math.floor(u/2),h=this._factor,c=this._bias,l=0;l<o-1;l++)for(var d=0;d<r-1;d++){for(var p=4*(l*r+d),v=0,g=0,y=0,w=0;w<s;++w)for(var m=0;m<u;++m){var _=4*((l+(w-f))*r+(d+(m-f)));v+=n[_+0]*a[w][m],g+=n[_+1]*a[w][m],y+=n[_+2]*a[w][m]}i[p+0]=h*v+c,i[p+1]=h*g+c,i[p+2]=h*y+c,i[p+3]=n[p+3]}},i.prototype.canvas=function(t){var e=t.width,n=t.height,i=t.getContext("2d"),r=i.getImageData(0,0,e,n),o=i.createImageData(e,n);this.width(e),this.height(n),this.apply(r,o),i.putImageData(o,0,0)}},{}],4:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(t,e){var n=(e=e||{}).debug,i=t.width,r=t.height,o=t.getContext("2d"),a=o.getImageData(0,0,i,r),s=o.createImageData(i,r);(0,f.default)([[0,-1,0],[-1,4,-1],[0,-1,0]]).width(i).height(r).apply(a,s),n&&(t.width*=2,o.putImageData(s,0,0));var u=function(t,e,n){var i=[],r=e/2,o=n/2;function a(t,e){return t=Math.abs(t-r)/r,e=Math.abs(e-o)/o,1-((t/=2)+(e/=2))}for(var s=0;s<e;++s){for(var u=0;u<n;++u){for(var f=.15*a(s+10,u+10),h=Math.min(e-s,20),c=Math.min(n-u,20),l=0,d=0;d<h;++d)for(var p=0;p<c;++p){var v=4*((u+p)*e+(s+d)),g=t[v+0],y=t[v+1],w=t[v+2],m=g+y+w,_=m/765;l+=_}f+=l/400*.85,i.push(new x.default(s,u,h,c,5*f)),u+=20}s+=20}return i}(s.data,i,r);n&&(h(u,o),o.translate(i,0),o.putImageData(a,i,0),h(u,o));return c(u).midpoint()};var f=i(t(3)),x=i(t(6));function i(t){return t&&t.__esModule?t:{default:t}}function h(t,e){for(var n=0;n<t.length;++n)t[n].draw(e);c(t).drawFocus(e)}function c(t){for(var e,n=t[0],i=1;i<t.length;++i)(e=t[i]).intensity>n.intensity&&(n=e);return n}},{3:3,6:6}],5:[function(t,e,n){"use strict";function i(t,e){this.x=t,this.y=e}Object.defineProperty(n,"__esModule",{value:!0}),(n.default=i).prototype.toString=function(){return"("+this.x+", "+this.y+")"}},{}],6:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=a;var i,r=t(5),o=(i=r)&&i.__esModule?i:{default:i};function a(t,e,n,i,r){this.x=t,this.y=e,this.w=n,this.h=i,this.intensity=r||0}a.prototype.midpoint=function(){return new o.default(this.x+this.w/2,this.y+this.h/2)},a.prototype.draw=function(t){var e=255*this.intensity|0,n=this.w/2*this.intensity;t.save(),t.beginPath(),t.fillStyle="rgba("+e+",0,0, .5)",t.arc(this.x+this.w/2,this.y+this.h/2,n,0,2*Math.PI,!1),t.fill(),t.restore()},a.prototype.drawFocus=function(t){var e=255*this.intensity|0,n=this.w/2*this.intensity;t.save(),t.beginPath(),t.fillStyle="rgba(0,0,"+e+", .5)",t.arc(this.x+this.w/2,this.y+this.h/2,n,0,2*Math.PI,!1),t.fill(),t.restore()}},{5:5}]},{},[2]);