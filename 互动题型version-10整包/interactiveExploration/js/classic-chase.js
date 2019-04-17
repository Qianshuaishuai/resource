webpackJsonp([20],{NOqM:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("bOdI"),s=i.n(a),c=i("JaHG"),n={name:"ClasicChase",data:function(){return{params:{name:"classic-chase",mode:0,vWalk:5,vBike:14,time:0,wTime:0,isShowAnswer:!0},btnSrcs:{begin:"./static/images/math/chase/cha-begin.png",continue:"./static/images/math/chase/continue.png",reset:"./static/images/math/chase/cha-reset.png",check:"./static/images/math/chase/check.png",checked:"./static/images/math/chase/checked.png",confirm:"./static/images/btn-confirm.png"},chaseStep:0,qStrBase:"一队学生去野炊.他们以vWalk千米/时的速度行进,走了wTime分钟的时候,学校要将一个紧急通知传达给队伍.\n通讯员从学校出发,骑自行车以vBike千米/时的速度按原路追去.",pStart:{x:80,y:260},pMiddle:{x:500,y:260},pEnd:{x:1150,y:260},motionUnit:10,cancelAnime:!1}},methods:{setParams:function(t){for(var e in t)t.hasOwnProperty(e)&&void 0!==this.params[e]&&(this.params[e]=t[e]);this.initChase()},setSectionMode:function(t){},onClickChase:function(){var t=this;if(console.log("onClickChase() "+this.chaseStep),this.cGroupWalk)if(0===this.chaseStep){this.cancelAnime=!1,this.chaseStep=-1;var e=this.pMiddle.x-this.pStart.x-this.cWalk.width/2,i=this.getRealTime(this.params.vWalk,e);this.cVBgWalk.set("opacity",1),this.cVWalk.set("opacity",1),this.canvas.renderAll(),this.cGroupWalk.animate("left",this.pMiddle.x-this.cWalk.width/2,{duration:i,abort:function(){return t.cancelAnime},onChange:function(e){var i=e-(t.pStart.x-t.cWalk.width/2),a=Math.floor(i/t.motionUnit);a%=21;var s=t.cWalk.width*a;t.cWalk.set("cropX",s),t.canvas.renderAll()},easing:function(t,e,i,a){return t/a*i+e},onComplete:function(){console.log("animation completed "),t.cancelAnime||(t.chaseStep=2,t.cGroupBike.set("opacity",1),t.cAW1.set("opacity",1),t.cIAW1.set("opacity",1),t.cVBgWalk.set("opacity",0),t.cVWalk.set("opacity",0),t.canvas.renderAll())}})}else if(2===this.chaseStep){this.chaseStep=-3;var a=this.pEnd.x-this.pMiddle.x,s=this.getRealTime(this.params.vWalk,a);this.cVBgWalk.set("opacity",1),this.cVWalk.set("opacity",1),this.cVBgBike.set("opacity",1),this.cVBike.set("opacity",1),this.cGroupWalk.animate("left",this.pEnd.x-40,{duration:s,abort:function(){return t.cancelAnime},onChange:function(e){var i=e-(t.pMiddle.x-t.cWalk.width/2),a=Math.floor(i/t.motionUnit);a%=21;var s=t.cWalk.width*a;t.cWalk.set("cropX",s),t.canvas.requestRenderAll()},onComplete:function(){t.cancelAnime||(t.params.isShowAnswer?t.chaseStep=4:t.chaseStep=-4,t.cAW2.set("opacity",1),t.cIAW2.set("opacity",1),t.cIAB.set("opacity",1),t.cAB.set("opacity",1),t.cVBgWalk.set("opacity",0),t.cVBgBike.set("opacity",0),t.cVWalk.set("opacity",0),t.cVBike.set("opacity",0),t.canvas.requestRenderAll(),console.log("animation completed"))},easing:function(t,e,i,a){return t/a*i+e}}),this.cGroupBike.animate("left",this.pEnd.x-this.cGroupBike.width,{duration:s,abort:function(){return t.cancelAnime},easing:function(t,e,i,a){return t/a*i+e},onComplete:function(){console.log("animation completed")}}),fabric.util.animate({startValue:0,endValue:s/500*360,duration:s,abort:function(){return t.cancelAnime},onChange:function(e){t.cWheel1.set("angle",-e),t.cWheel2.set("angle",-e)},easing:function(t,e,i,a){return t/a*i+e},onComplete:function(){}})}else 4===this.chaseStep?(this.chaseStep=5,this.cIAW1.set("opacity",0),this.cIAW10.set("opacity",1),this.cIAW2.set("opacity",0),this.cIAW20.set("opacity",1),this.cIAB.set("opacity",0),this.cIAB1.set("opacity",1),this.canvas.renderAll()):5===this.chaseStep&&(this.chaseStep=6,this.cIAB1.set("opacity",0),this.cIAB2.set("opacity",1),this.cAnswer.set("opacity",1),this.canvas.requestRenderAll())},resetChase:function(){this.cancelAnime=!0,this.chaseStep=0,this.cWalk.set("cropX",0),this.cGroupWalk.set("left",this.pStart.x-this.cWalk.width/2),this.cGroupBike.set("left",this.pStart.x-this.cBike.width/2),this.cGroupBike.set("opacity",0),this.cAW1.set("opacity",0),this.cIAW1.set("opacity",0),this.cIAW10.set("opacity",0),this.cAW2.set("opacity",0),this.cIAW2.set("opacity",0),this.cIAW20.set("opacity",0),this.cAB.set("opacity",0),this.cIAB.set("opacity",0),this.cIAB1.set("opacity",0),this.cIAB2.set("opacity",0),this.cAnswer.set("opacity",0),this.cVBgWalk.set("opacity",0),this.cVBgBike.set("opacity",0),this.cVWalk.set("opacity",0),this.cVBike.set("opacity",0),this.canvas.requestRenderAll()},getRealTime:function(t,e){var i=5/t;return 1e3*(i*=e/120)},initFabric:function(){var t=this.$refs.canvas;t.width=1280,t.height=800,this.canvas=new fabric.StaticCanvas(t),window.fabricCanvas=this.canvas},initChase:function(){var t=this;this.canvas?this.createChaseBase():setTimeout(function(){t.initChase()},100)},createChase:function(){if(2===this.baseCount)switch(this.params.mode){case 1:case 2:break;default:this.createChase0()}},createChaseBase:function(){var t=this;if(2!==this.baseCount){this.baseCount=0;var e=document.createElement("IMG");e.src="./static/images/math/chase/start.png",e.onload=function(i){t.cPlaceStart=new fabric.Image(e,{fontSize:18,left:t.pStart.x-i.target.width/2,top:t.pStart.y-40}),t.canvas.add(t.cPlaceStart),t.baseCount++,e.onload=null,t.createChase()};var i=document.createElement("IMG");i.src="./static/images/math/chase/end.png",i.onload=function(e){t.cPlaceEnd=new fabric.Image(i,{fontSize:18,left:t.pEnd.x-e.target.width/2,top:t.pEnd.y-40}),t.canvas.add(t.cPlaceEnd),t.baseCount++,i.onload=null,t.createChase()}}},createChase0:function(){var t=this;this.params.time=this.params.wTime*this.params.vWalk/(this.params.vBike-this.params.vWalk),this.pMiddle.x=this.params.wTime/(this.params.wTime+this.params.time)*(this.pEnd.x-this.pStart.x);var e=this.qStrBase.replace("vWalk",this.params.vWalk);if(e=(e=e.replace("wTime",this.params.wTime)).replace("vBike",this.params.vBike),e+="通讯员用多少时间可以追上队伍?",this.cQuestion?this.cQuestion.set("text",e):(this.cQuestion=new fabric.IText(e,{left:20,top:90,storke:"#262626",fill:"#595959",strokeWidth:.5,lineHeight:1.5,padding:10,fontSize:28,fontFamily:"MicrosoftYaHei"}),this.canvas.add(this.cQuestion)),!this.cAW1){var i,a,c=this.createArrowPath(this.pMiddle.x-this.pStart.x,!0);this.cAW1=new fabric.Path(c,{left:this.pStart.x,top:this.pStart.y-30,fill:"transparent",stroke:"#F09A12",strokeWidth:5,opacity:0}),this.canvas.add(this.cAW1);var n="先行走"+this.params.wTime+"分钟＝"+this.params.wTime/60+"小时";this.cIAW1=new fabric.IText(n,(i={top:this.pStart.y-60,fontSize:28,fill:"#595959",strokeWidth:.5,fontFamily:"MicrosoftYaHei",stroke:"#595959"},s()(i,"strokeWidth",.5),s()(i,"opacity",0),i)),this.cIAW1.set("left",this.pStart.x+(this.cAW1.width-this.cIAW1.width)/2),this.canvas.add(this.cIAW1);var o="S学生先＝"+this.params.vWalk+"×"+this.params.wTime/60;this.cIAW10=new fabric.IText(o,(a={top:this.pStart.y-60,fontSize:28,fill:"#595959",strokeWidth:.5,fontFamily:"MicrosoftYaHei",stroke:"#595959"},s()(a,"strokeWidth",.5),s()(a,"opacity",0),s()(a,"styles",{0:{1:{fontSize:16,deltaY:7},2:{fontSize:16,deltaY:7},3:{fontSize:16,deltaY:7}}}),a)),this.cIAW10.set("left",this.pStart.x+(this.cAW1.width-this.cIAW10.width)/2),this.canvas.add(this.cIAW10)}if(!this.cAW2){var r,h,l=this.createArrowPath(this.pEnd.x-this.pMiddle.x,!0);this.cAW2=new fabric.Path(l,{left:this.pMiddle.x,top:this.pMiddle.y-30,opacity:0,fill:"transparent",stroke:"#22ADFD",strokeWidth:5}),this.canvas.add(this.cAW2);this.cIAW2=new fabric.IText("再走x小时",(r={top:this.pStart.y-60,fontSize:28,fill:"#595959",strokeWidth:.5,fontFamily:"MicrosoftYaHei",stroke:"#595959"},s()(r,"strokeWidth",.5),s()(r,"opacity",0),r)),this.cIAW2.set("left",this.cAW2.left+(this.cAW2.width-this.cIAW2.width)/2),this.canvas.add(this.cIAW2);var p="S学生后="+this.params.vWalk+"x";this.cIAW20=new fabric.IText(p,(h={top:this.pStart.y-60,fontSize:28,fill:"#595959",strokeWidth:.5,fontFamily:"MicrosoftYaHei",stroke:"#595959"},s()(h,"strokeWidth",.5),s()(h,"opacity",0),s()(h,"styles",{0:{1:{fontSize:16,deltaY:7},2:{fontSize:16,deltaY:7},3:{fontSize:16,deltaY:7}}}),h)),this.cIAW20.set("left",this.cAW2.left+(this.cAW2.width-this.cIAW20.width)/2),this.canvas.add(this.cIAW20)}if(!this.cAB){var d,f,m,k=this.createArrowPath(this.pEnd.x-this.pStart.x,!1);this.cAB=new fabric.Path(k,{left:this.pStart.x,top:this.pStart.y+200,opacity:0,fill:"transparent",stroke:"#E64C3D",strokeWidth:7}),this.canvas.add(this.cAB);this.cIAB=new fabric.IText("通信员行走路程＝学生行走路程",(d={top:this.pStart.y+230,fontSize:28,fill:"#595959",strokeWidth:.5,fontFamily:"MicrosoftYaHei",stroke:"#595959"},s()(d,"strokeWidth",.5),s()(d,"opacity",0),d)),this.cIAB.set("left",this.cAB.left+(this.cAB.width-this.cIAB.width)/2),this.canvas.add(this.cIAB);var u="S通信员="+this.params.vBike+"x";this.cIAB1=new fabric.IText(u,(f={top:this.pStart.y+230,fontSize:28,fill:"#595959",strokeWidth:.5,fontFamily:"MicrosoftYaHei",stroke:"#595959"},s()(f,"strokeWidth",.5),s()(f,"opacity",0),s()(f,"styles",{0:{1:{fontSize:16,deltaY:7},2:{fontSize:16,deltaY:7},3:{fontSize:16,deltaY:7}}}),f)),this.cIAB1.set("left",this.cAB.left+(this.cAB.width-this.cIAB1.width)/2),this.canvas.add(this.cIAB1);var W="S通信员="+this.params.vBike+"x　　S通信员＝S学生",v=W.indexOf("S通信员＝S学生"),w={0:{1:{fontSize:16,deltaY:7},2:{fontSize:16,deltaY:7},3:{fontSize:16,deltaY:7}}};w[0][v+1]={fontSize:16,deltaY:7},w[0][v+2]={fontSize:16,deltaY:7},w[0][v+3]={fontSize:16,deltaY:7},w[0][v+6]={fontSize:16,deltaY:7},w[0][v+7]={fontSize:16,deltaY:7},this.cIAB2=new fabric.IText(W,(m={top:this.pStart.y+230,fontSize:28,fill:"#595959",strokeWidth:.5,fontFamily:"MicrosoftYaHei",stroke:"#595959"},s()(m,"strokeWidth",.5),s()(m,"opacity",0),s()(m,"styles",w),m)),this.cIAB2.set("left",this.cAB.left+(this.cAB.width-this.cIAB2.width)/2),this.canvas.add(this.cIAB2)}if(!this.cGroupWalk){var A=document.createElement("IMG");A.src="./static/images/math/chase/walk.png",A.onload=function(e){var i=document.createElement("IMG");i.src="./static/images/math/chase/velocity-bg.png",i.onload=function(e){t.cWalk=new fabric.Image(A,{width:133,height:190,cropX:0}),t.cVBgWalk=new fabric.Image(i,{top:180,left:-20,opacity:0});var a=(t.params.vWalk?t.params.vWalk:"?")+"千米/小时";t.cVWalk=new fabric.IText(a,{top:210,fontSize:20,fill:"#595959",storke:"#595959",opacity:0}),t.cVWalk.set("left",t.cVBgWalk.left+(t.cVBgWalk.width-t.cVWalk.width)/2),t.cGroupWalk=new fabric.Group([t.cWalk,t.cVBgWalk,t.cVWalk],{top:t.pStart.y}),t.cGroupWalk.set("left",t.pStart.x-t.cGroupWalk.width/2),t.canvas.add(t.cGroupWalk),i.onload=null},A.onload=null}}if(!this.cGroupBike){var S=document.createElement("IMG");S.src="./static/images/math/chase/biker.png",S.onload=function(e){var i=document.createElement("IMG");i.src="./static/images/math/chase/velocity-bg.png",i.onload=function(e){t.cBike=new fabric.Image(S,{top:20,width:110,height:164}),t.cWheel1=new fabric.Image(S,{top:162,left:7,cropX:124,cropY:105,width:59,height:59,originX:"center",originY:"center"}),t.cWheel2=new fabric.Image(S,{top:162,left:97,cropX:124,cropY:105,width:59,height:59,originX:"center",originY:"center"}),t.cVBgBike=new fabric.Image(i,{top:180,left:-20,opacity:0});var a=(t.params.vBike?t.params.vBike:"?")+"千米/小时";t.cVBike=new fabric.IText(a,{top:210,fontSize:20,fill:"#595959",storke:"#595959",opacity:0}),t.cVBike.set("left",t.cVBgBike.left+(t.cVBgBike.width-t.cVBike.width)/2),t.cGroupBike=new fabric.Group([t.cWheel1,t.cWheel2,t.cBike,t.cVBgBike,t.cVBike],{top:t.pStart.y,opacity:0}),t.cGroupBike.set("left",t.pStart.x-t.cGroupBike.width/2),t.canvas.add(t.cGroupBike),i.onload=null},S.onload=null}}var g="解：设通信员用x小时追上学生队伍\n　　根据题意得：\n　　　　"+this.params.vBike+"x="+this.params.vWalk+"×"+this.params.wTime/60+"\n　　解这个方程得：\n　　　　x="+(this.params.time/60).toFixed(3)+"\n答：通信员用"+(this.params.time/60).toFixed(3)+"小时（即"+this.params.time+"分钟)可以追上学生队伍";this.cAnswer||(console.log(g.indexOf("v自行车")),this.cAnswer=new fabric.IText(g,{left:80,top:550,fill:"black",storke:"black",strokeWidth:.5,padding:10,fontSize:25,fontFamily:"MicrosoftYaHei",opacity:0,lineHeight:1.5}),this.canvas.add(this.cAnswer))},createArrowPath:function(t,e){return e?"M0,10 q0,-10 10,-10 h"+(t/2-20)+" q10,0 10,-10 q0,10 10,10 h"+(t/2-20)+" q10,0 10,10":"M0,0 q0,10 10,10 h"+(t/2-20)+"  q10,0 10,10 q0,-10 10,-10 h"+(t/2-20)+" q10,0 10,-10"}},created:function(){window.classicChase=this},mounted:function(){var t=this;Object(c.a)("static/fabric/fabric.min.js",function(){t.initFabric()})},destroyed:function(){this.cancelAnime=!0}},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"classic-chase"},[i("canvas",{ref:"canvas"}),t._v(" "),t.params.isShowAnswer?t._e():i("div",{staticClass:"chase-answer-set"},[i("img",{attrs:{src:t.params.isShowAnswer?t.btnSrcs.checked:t.btnSrcs.check},on:{click:function(e){e.stopPropagation(),t.params.isShowAnswer=!t.params.isShowAnswer}}}),t._v("不发送答案\n  ")]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.chaseStep>=0&&t.chaseStep<6,expression:"chaseStep >= 0 && chaseStep < 6"}],staticClass:"chase-keep"},[i("img",{directives:[{name:"show",rawName:"v-show",value:t.chaseStep>=0,expression:"chaseStep >= 0"}],attrs:{src:0===t.chaseStep?t.btnSrcs.begin:t.btnSrcs.continue},on:{click:function(e){e.stopPropagation(),t.onClickChase()}}}),t._v(" "),0!==t.chaseStep?i("img",{attrs:{src:t.btnSrcs.reset},on:{click:function(e){e.stopPropagation(),t.resetChase()}}}):t._e()]),t._v(" "),6===t.chaseStep?i("img",{staticClass:"chase-confirm",attrs:{src:t.btnSrcs.confirm},on:{click:function(e){e.stopPropagation(),t.resetChase()}}}):t._e()])},staticRenderFns:[]};var r=i("VU/8")(n,o,!1,function(t){i("U17I")},"data-v-7e11f808",null);e.default=r.exports},U17I:function(t,e,i){var a=i("Up0V");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i("rjj0")("0be23900",a,!0,{})},Up0V:function(t,e,i){var a=i("kxFB");(t.exports=i("FZ+f")(!1)).push([t.i,"\n.classic-chase[data-v-7e11f808] {\r\n  width: 1280px;\r\n  height: 800px;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 10;\r\n  background-image: url("+a(i("l4EZ"))+");\r\n  border-radius: inherit;\n}\n.chase-answer-set[data-v-7e11f808] {\r\n  width: auto;\r\n  position: absolute;\r\n  top: 65%;\r\n  right: 3%;\r\n  line-height: 100%;\r\n  font-size: 24px;\r\n  color: #595959;\n}\n.chase-answer-set img[data-v-7e11f808] {\r\n  vertical-align: middle;\n}\n.chase-keep[data-v-7e11f808] {\r\n  position: absolute;\r\n  top: 70%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, 0%);\r\n          transform: translate(-50%, 0%);\n}\n.chase-confirm[data-v-7e11f808] {\r\n  position: absolute;\r\n  bottom: 60px;\r\n  right: 60px;\n}\r\n",""])},l4EZ:function(t,e,i){t.exports=i.p+"static/img/cha-bg.f12b01a.png"}});