webpackJsonp([24],{"7AFz":function(t,i,n){(t.exports=n("FZ+f")(!1)).push([t.i,"\n.container[data-v-a95aa516] {\n  width: 1280px;\n  height: 800px;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.container .canvasBox[data-v-a95aa516] {\n  width: 1172px;\n  height: 378px;\n  margin: 190px 0 0 50px;\n}\n",""])},OmWL:function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s={data:function(){return{ctx:null,params:{name:"block-quadrangle"},movable:!1,relPoints:[],judgePoints:[],rightPoints:[],paintCount:-1,outerX:"",outerY:""}},mounted:function(){var t=this,i=this.$refs.canvas.getContext("2d");this.initPaint(i),this.ctx=i,setTimeout(function(){console.log(t.$refs.canvasBox.getBoundingClientRect()),t.outerX=t.$refs.canvasBox.getBoundingClientRect().x,t.outerY=t.$refs.canvasBox.getBoundingClientRect().y},0)},methods:{initPaint:function(t){for(var i=0;i<=17;i++)for(var n=0;n<=6;n++)t.beginPath(),t.arc(71*i+10,71*n+10,10,0,2*Math.PI),t.fillStyle="#ff0000",t.fill();t.beginPath(),t.moveTo(10,223),t.lineTo(152,81),t.lineTo(365,81),t.strokeStyle="#000",t.lineWidth=5,t.stroke(),t.beginPath(),t.moveTo(436,365),t.lineTo(507,81),t.lineTo(649,81),t.strokeStyle="#000",t.lineWidth=5,t.stroke()},resetParams:function(){this.isParamsExtra=!0},setParams:function(t){this.params=t},startTouch:function(t){t.preventDefault();var i=Math.round(t.touches[0].pageX),n=Math.round(t.touches[0].pageY),s=this.$root.ddmrrScale;i/=s,n/=s,i-=this.outerX/s+50,n-=this.outerY/s+190;var e=71*Math.round(i/71)+10,o=71*Math.round(n/71)+10;this.ctx.beginPath(),this.relPoints.push({sx:e,sy:o}),this.paintCount++},paintLine:function(t){var i=this;t.preventDefault(),this.ctx.clearRect(0,0,1172,378),this.initPaint(this.ctx),this.relPoints.forEach(function(t){i.ctx.beginPath(),i.ctx.moveTo(t.sx,t.sy),i.ctx.lineTo(t.ex,t.ey),i.ctx.strokeStyle="#000",i.ctx.lineWidth=5,i.ctx.stroke()});var n=Math.round(t.touches[0].pageX),s=Math.round(t.touches[0].pageY),e=this.$root.ddmrrScale;n/=e,s/=e,n-=this.outerX/e+50,s-=this.outerY/e+190,this.ctx.moveTo(this.relPoints[this.paintCount].sx,this.relPoints[this.paintCount].sy),this.ctx.lineTo(n,s),this.ctx.strokeStyle="#000",this.ctx.lineWidth=5,this.ctx.lineCap="round",this.ctx.stroke()},lineEnd:function(t){var i=this,n=Math.round(t.changedTouches[0].pageX),s=Math.round(t.changedTouches[0].pageY),e=this.$root.ddmrrScale;n/=e,s/=e,n-=this.outerX/e+50,s-=this.outerY/e+190;var o=this.relPoints[this.paintCount].sx,h=this.relPoints[this.paintCount].sy;if(Math.sqrt((n-o)*(n-o)+(s-h)*(s-h))<40)this.relPoints.splice(this.paintCount,1),this.paintCount--,this.ctx.clearRect(0,0,1172,378),this.initPaint(this.ctx),this.relPoints.forEach(function(t){i.ctx.beginPath(),i.ctx.moveTo(t.sx,t.sy),i.ctx.lineTo(t.ex,t.ey),i.ctx.strokeStyle="#000",i.ctx.lineWidth=5,i.ctx.stroke()});else{var a=71*Math.round(n/71)+10,r=71*Math.round(s/71)+10;this.ctx.clearRect(0,0,1172,378),this.initPaint(this.ctx),this.relPoints.forEach(function(t){i.ctx.beginPath(),i.ctx.moveTo(t.sx,t.sy),i.ctx.lineTo(t.ex,t.ey),i.ctx.strokeStyle="#000",i.ctx.lineWidth=5,i.ctx.stroke()}),this.ctx.moveTo(this.relPoints[this.paintCount].sx,this.relPoints[this.paintCount].sy),this.ctx.lineTo(a,r),this.ctx.strokeStyle="#000",this.ctx.lineWidth=5,this.ctx.lineCap="round",this.ctx.stroke(),this.relPoints[this.paintCount].ex=a,this.relPoints[this.paintCount].ey=r}},startClick:function(t){var i=71*Math.round(t.offsetX/71)+10,n=71*Math.round(t.offsetY/71)+10;this.ctx.beginPath(),this.relPoints.push({sx:i,sy:n}),this.paintCount++,this.movable=!0},paintString:function(t){var i=this;if(t.preventDefault(),this.movable){this.ctx.clearRect(0,0,1172,378),this.initPaint(this.ctx),this.relPoints.forEach(function(t){i.ctx.beginPath(),i.ctx.moveTo(t.sx,t.sy),i.ctx.lineTo(t.ex,t.ey),i.ctx.strokeStyle="#000",i.ctx.lineWidth=5,i.ctx.stroke()});var n=Math.round(t.offsetX),s=Math.round(t.offsetY);this.ctx.moveTo(this.relPoints[this.paintCount].sx,this.relPoints[this.paintCount].sy),this.ctx.lineTo(n,s),this.ctx.strokeStyle="#000",this.ctx.lineWidth=5,this.ctx.lineCap="round",this.ctx.stroke()}},stopPaint:function(t){var i=this,n=71*Math.round(t.offsetX/71)+10,s=71*Math.round(t.offsetY/71)+10,e=Math.round(t.offsetX),o=Math.round(t.offsetY),h=this.relPoints[this.paintCount].sx,a=this.relPoints[this.paintCount].sy;Math.sqrt((e-h)*(e-h)+(o-a)*(o-a))<40?(this.relPoints.splice(this.paintCount,1),this.paintCount--,this.movable=!1,this.ctx.clearRect(0,0,1172,378),this.initPaint(this.ctx),this.relPoints.forEach(function(t){i.ctx.beginPath(),i.ctx.moveTo(t.sx,t.sy),i.ctx.lineTo(t.ex,t.ey),i.ctx.strokeStyle="#000",i.ctx.lineWidth=5,i.ctx.stroke(),i.movable=!1})):(this.ctx.clearRect(0,0,1172,378),this.initPaint(this.ctx),this.relPoints.forEach(function(t){i.ctx.beginPath(),i.ctx.moveTo(t.sx,t.sy),i.ctx.lineTo(t.ex,t.ey),i.ctx.strokeStyle="#000",i.ctx.lineWidth=5,i.ctx.stroke()}),this.ctx.moveTo(this.relPoints[this.paintCount].sx,this.relPoints[this.paintCount].sy),this.ctx.lineTo(n,s),this.ctx.strokeStyle="#000",this.ctx.lineWidth=5,this.ctx.lineCap="round",this.ctx.stroke(),this.relPoints[this.paintCount].ex=n,this.relPoints[this.paintCount].ey=s,this.movable=!1)},submit:function(){var t=this;this.relPoints.forEach(function(i){t.judgePoints.push({jx:i.sx,jy:i.sy})}),this.relPoints.forEach(function(i){t.judgePoints.push({jx:i.ex,jy:i.ey})});var i=this.judgePoints.find(function(t){return 223===t.jx&&223===t.jy}),n=this.judgePoints.find(function(t){return 578===t.jx&&365===t.jy});return i&&n?1:0}}},e={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{ref:"canvasBox",staticClass:"container"},[i("div",{staticClass:"canvasBox"},[i("canvas",{ref:"canvas",attrs:{width:"1172px",height:"378px",id:"canvas"},on:{touchstart:this.startTouch,touchmove:this.paintLine,touchend:this.lineEnd,mousedown:this.startClick,mousemove:this.paintString,mouseup:this.stopPaint}})])])},staticRenderFns:[]};var o=n("VU/8")(s,e,!1,function(t){n("XOnZ")},"data-v-a95aa516",null);i.default=o.exports},XOnZ:function(t,i,n){var s=n("7AFz");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n("rjj0")("2df8b821",s,!0,{})}});