webpackJsonp([26],{AOuU:function(t,e,i){var n=i("PmR2");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("e6ed0844",n,!0,{})},PmR2:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"\n.circle-area[data-v-4ed9d87f] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 10;\n  border-radius: inherit;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.menus[data-v-4ed9d87f] {\n  position: absolute;\n  top: 50px;\n  right: 200px;\n  font-size: 28px;\n}\n.menus *[data-v-4ed9d87f] {\n  vertical-align: middle;\n  margin-left: 10px;\n}\n.menus button[data-v-4ed9d87f] {\n  padding: 3px 10px;\n}\n",""])},"YJB/":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("Zrlr"),a=i.n(n),s=i("wxAW"),r=i.n(s),o=function(){function t(e,i,n){a()(this,t),this.canvas=null,this.ctx=null,this.width=1280,this.height=800,this.radius=100,this.strokeColor="#000000",this.fillColor1="#148acf",this.fillColor2="#daa520",this.cColor="#ff2222",this.cWidth=3,this.count=32,this.time=0,this.canvas=e,this.setSize(i,n),this.initCtx()}return r()(t,[{key:"setSize",value:function(t,e){t?this.width=t:t=1280,e?this.height=e:e=800;var i=this.canvas;i.setAttribute("width",this.width+"px"),i.setAttribute("height",this.height+"px")}},{key:"initCtx",value:function(){var t=this.canvas.getContext("2d");t.lineJoin="round",t.font="32px Arial",this.ctx=t}},{key:"setCount",value:function(t){!t||t<2?t=2:t>100&&console.log("CircleArea::setCount() is over 100"),this.count=t,this.draw(this.time)}},{key:"getCount",value:function(){return this.count}},{key:"getIsStart",value:function(){return this.isStart}},{key:"start",value:function(t){this.isStart||(this.isStart=!0,this.time=0,this.call=t,this.anime())}},{key:"anime",value:function(){var t=this;this.draw(this.time),this.time+=.003,this.isStart&&requestAnimationFrame(function(){t.anime()})}},{key:"draw",value:function(t){void 0===t||t<0?t=0:t>3.1&&(t=3.1,this.isStart=!1,this.call&&this.call(!1));var e=this.ctx,i=this.width,n=this.height,a=this.radius,s=this.count,r=Math.floor(s/2),o=2*Math.PI/s;if(e.save(),e.clearRect(0,0,i,n),e.translate(3*a+.5,n/2+.5),e.strokeStyle=this.strokeColor,this._drawAxis(e,a),t<1){t=Math.pow(t,4);for(var l=0;l<s;l++)e.save(),e.beginPath(),e.rotate(Math.PI/2-o*l),e.moveTo(0,0),e.arc(0,0,a,-o,0,!1),e.closePath(),e.stroke(),e.fillStyle=l<r?this.fillColor1:this.fillColor2,e.fill(),e.restore();var h=360*a/2,c=t*h,u=2*Math.PI*a/(t*(h-a)+a),f=-c;e.save(),e.lineWidth=this.cWidth,e.strokeStyle=this.cColor,e.beginPath(),e.arc(0,f,c+a,Math.PI/2-u,Math.PI/2,!1),e.stroke(),e.restore()}else if(t<2){t-=1;var v=360*a/2,d=(t=Math.pow(t,4))*v,m=2*Math.PI*a/(t*(v-a)+a)/s/2,C=-d;this._drawCircumference(e,a);for(var P=0;P<s;P++){var p=m+2*m*P,g=d*Math.sin(p),k=d*Math.cos(p);e.save(),e.beginPath(),e.translate(g+0,k+C),e.rotate(o/2),e.moveTo(0,0),e.arc(0,0,a,Math.PI/2-p-o,Math.PI/2-p,!1),e.closePath(),e.stroke(),e.fillStyle=P<r?this.fillColor1:this.fillColor2,e.fill(),e.restore()}}else{(t-=2)>=1.1&&(e.fillText("随着切割扇形的个数逐渐增多",50,-a/2-40),e.fillText("可推导圆的面积S=πr²",80,-a/2),e.fillText("r",-15,a/2+5),e.beginPath(),e.moveTo(-3,0),e.lineTo(3,0),e.stroke()),t<.1?t=0:t-=.1;var x=2*Math.PI*a/s;this._drawCircumference(e,a);var S=0;for(e.fillStyle=this.fillColor1;S<r;S++)e.save(),e.beginPath(),e.translate(x*(S+.5),0),e.rotate(Math.PI/2),e.moveTo(0,0),e.arc(0,0,a,-o/2,o/2,!1),e.closePath(),e.stroke(),e.fill(),e.restore();for(e.save(),e.fillStyle=this.fillColor2,e.translate(x*S,0),t<=.6?e.rotate(-Math.PI*t/.6):(t-=.6,e.rotate(-Math.PI),e.translate(-x/2*t/.4,-a*t/.4));S<s;S++)e.save(),e.beginPath(),e.translate(x*(S-r+.5),0),e.rotate(Math.PI/2),e.moveTo(0,0),e.arc(0,0,a,-o/2,o/2,!1),e.closePath(),e.stroke(),e.fill(),e.restore();e.restore()}e.restore()}},{key:"_drawAxis",value:function(t,e){t.save(),t.beginPath(),t.moveTo(2*-e,e),t.lineTo(7*e,e),t.lineTo(7*e-5,e+5),t.lineTo(7*e,e),t.lineTo(7*e-5,e-5),t.stroke(),t.beginPath(),t.moveTo(0,3*e),t.lineTo(0,3*-e),t.lineTo(-5,3*-e+5),t.lineTo(0,3*-e),t.lineTo(5,3*-e+5),t.stroke(),t.restore()}},{key:"_drawCircumference",value:function(t,e){t.save(),t.lineWidth=this.cWidth,t.strokeStyle=this.cColor,t.beginPath(),t.moveTo(0,e),t.lineTo(2*Math.PI*e,e),t.stroke(),t.fillText("圆周长C=2πr",2*Math.PI*e-80,e+50),t.restore()}},{key:"release",value:function(){this.isStart=!1}}]),t}(),l={name:"CircleArea",data:function(){return{params:{name:"circle-area"},count:10,isStart:!1,circleArea:null}},mounted:function(){this.initCanvas(),window.circleArea=this},methods:{initCanvas:function(){var t=this.$refs.canvas,e=this.$el,i=e.clientWidth,n=e.clientHeight,a=new o(t,i,n);this.circleArea=a,this.onStart()},onCount:function(t){this.circleArea.setCount(this.count)},onStart:function(){var t=this,e=this.circleArea;e.start(function(e){t.isStart=e}),this.count=e.getCount(),this.isStart=e.getIsStart()}},beforeDestroy:function(){this.circleArea&&this.circleArea.release()}},h={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"circle-area"},[i("canvas",{ref:"canvas"}),t._v(" "),i("div",{staticClass:"menus"},[i("span",[t._v("扇形个数："+t._s(t.count))]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.count,expression:"count"}],attrs:{type:"range",step:"2",min:"10",max:"128"},domProps:{value:t.count},on:{change:function(e){t.onCount(e)},__r:function(e){t.count=e.target.value}}}),t._v(" "),i("button",{attrs:{disabled:t.isStart},on:{click:t.onStart}},[t._v("演示")])])])},staticRenderFns:[]};var c=i("VU/8")(l,h,!1,function(t){i("AOuU")},"data-v-4ed9d87f",null);e.default=c.exports}});