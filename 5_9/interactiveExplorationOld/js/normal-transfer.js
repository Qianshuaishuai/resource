webpackJsonp([13],{"93G0":function(t,i,e){var s=e("X+1B");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e("rjj0")("28aa3eb1",s,!0,{})},WzZF:function(t,i,e){var s=e("buXR");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e("rjj0")("41d76706",s,!0,{})},"X+1B":function(t,i,e){(t.exports=e("FZ+f")(!1)).push([t.i,"\n.bot-toolbar .el-switch {\n  height: 50px;\n}\n.bot-toolbar .el-switch .el-switch__core {\n  height: 50px;\n  border-radius: 34px;\n}\n.bot-toolbar .el-switch .el-switch__core::after {\n  width: 48px;\n  height: 48px;\n  top: 0;\n}\n.bot-toolbar .el-switch.is-checked .el-switch__core::after {\n  margin-left: -48px;\n}\n",""])},buXR:function(t,i,e){(t.exports=e("FZ+f")(!1)).push([t.i,'.el-switch{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;font-size:14px;line-height:20px;height:20px;vertical-align:middle}.el-switch.is-disabled .el-switch__core,.el-switch.is-disabled .el-switch__label{cursor:not-allowed}.el-switch__core,.el-switch__label{display:inline-block;cursor:pointer;vertical-align:middle}.el-switch__label{-webkit-transition:.2s;transition:.2s;height:20px;font-size:14px;font-weight:500;color:#303133}.el-switch__label.is-active{color:#409EFF}.el-switch__label--left{margin-right:10px}.el-switch__label--right{margin-left:10px}.el-switch__label *{line-height:1;font-size:14px;display:inline-block}.el-switch__input{position:absolute;width:0;height:0;opacity:0;margin:0}.el-switch__input:focus~.el-switch__core{outline:#409EFF solid 1px}.el-switch__core{margin:0;position:relative;width:40px;height:20px;border:1px solid #dcdfe6;outline:0;border-radius:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:#dcdfe6;-webkit-transition:border-color .3s,background-color .3s;transition:border-color .3s,background-color .3s}.el-switch__core:after{content:"";position:absolute;top:1px;left:1px;border-radius:100%;-webkit-transition:all .3s;transition:all .3s;width:16px;height:16px;background-color:#fff}.el-switch.is-checked .el-switch__core{border-color:#409EFF;background-color:#409EFF}.el-switch.is-checked .el-switch__core::after{left:100%;margin-left:-17px}.el-switch.is-disabled{opacity:.6}.el-switch--wide .el-switch__label.el-switch__label--left span{left:10px}.el-switch--wide .el-switch__label.el-switch__label--right span{right:10px}.el-switch .label-fade-enter,.el-switch .label-fade-leave-active{opacity:0}',""])},cCLx:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});e("WzZF"),e("+BTi");var s=e("wxbk"),n={components:{"el-switch":e.n(s).a},data:function(){return{params:{name:"block-transfer"},gridWidth:925,gridHeight:555,gridSide:37,switchWidth:90,chooseVertex:!1,undo:!1,redo:!1,btnSrcs:{undo:"./static/images/transfer/transfer-undo.png",undoS:"./static/images/transfer/transfer-undo-checked.png",redo:"./static/images/transfer/transfer-redo.png",redoS:"./static/images/transfer/transfer-redo-checked.png"},unredos:[],curDataIndex:-1,datas:{graph:{left:0,top:0},graphCopy:{left:0,top:0},tip:{direction:"",value:0,left:0,top:0},canvas:""},reset:"reset",directionUrl:"static/images/transfer/direction.png",type:-1,multiCell:!1,showCell:!0,tipShow:!1,tipLeft:0,tipTop:0,graphType:"",preDirection:"",directionTip:"",moveStep:0,v:!1,left:0,top:0,width:0,height:0,points:[],moveSelect:!1,tx:0,ty:0,x:0,y:0,pLeft:0,pTop:0,downLeft:0,downTop:0,outerX:0,outerY:0,lozenges:[[79,0],[154,112],[79,224],[4,112]],arrows:[[79,0],[154,75],[114,75],[114,158],[39,158],[39,75],[3,76]],tLeft:0,tTop:0,log:"",testX:0,testY:0,moveQueue:[],canMove:!0,moveInternal:null,isShowOperaTip:!1,operaTipTimeout:null}},methods:{setParams:function(){},initCanvas:function(){var t=this.$refs.canvas.getContext("2d");t.strokeStyle="#595959",t.clearRect(0,0,this.gridWidth,this.gridHeight);var i=this.gridWidth/this.gridSide,e=this.gridHeight/this.gridSide;t.beginPath(),t.lineWidth=1;for(var s=1;s<i;s++)t.moveTo(s*this.gridSide,0),t.lineTo(s*this.gridSide,this.gridHeight);for(var n=1;n<e;n++)t.moveTo(0,n*this.gridSide),t.lineTo(this.gridWidth,n*this.gridSide);t.closePath(),t.stroke(),t.beginPath(),t.lineWidth=2,t.moveTo(1,1),t.lineTo(this.gridWidth,1),t.lineTo(this.gridWidth,this.gridHeight),t.lineTo(1,this.gridHeight),t.closePath(),t.stroke()},checkSwitch:function(){this.multiCell&&!this.canMove&&this.showOperaTip()},showOperaTip:function(){var t=this;console.log("showOperaTip"),this.isShowOperaTip=!0,this.operaTipTimeout&&clearTimeout(this.operaTipTimeout),this.operaTipTimeout=setTimeout(function(){t.isShowOperaTip=!1},1e3)},selectType:function(t){var i=this;switch(this.type=t,this.curDataIndex=-1,this.tipShow=!1,this.$refs.tipText.style.cssText=";opacity:0;",this.tipLeft=0,this.tipTop=0,this.initCanvas(),this.moveQueue=[],clearInterval(this.moveInternal),t){case 0:this.left=this.pLeft=10*this.gridSide,this.top=this.pTop=4*this.gridSide,this.width=4*this.gridSide,this.height=6*this.gridSide;break;case 1:this.left=this.pLeft=10*this.gridSide,this.top=this.pTop=6*this.gridSide,this.width=4*this.gridSide,this.height=4*this.gridSide,this.tLeft=629,this.tTop=222;break;case 2:this.left=this.pLeft=10*this.gridSide,this.top=this.pTop=2*this.gridSide,this.width=4*this.gridSide,this.height=4*this.gridSide,this.tLeft=370,this.tTop=332;break;case 3:this.left=this.pLeft=16*this.gridSide,this.top=this.pTop=6*this.gridSide,this.width=4*this.gridSide,this.height=4*this.gridSide,this.tLeft=259,this.tTop=111}this.writeData(),this.$nextTick(function(){i.$refs.graph.style.cssText=";left:"+i.left+"px;top:"+i.top+"px;opacity:1;",i.$refs.graphCopy.style.cssText=";left:"+i.pLeft+"px;top:"+i.pTop+"px;opacity:1;",i.$refs.graphTarget&&(i.$refs.graphTarget.style.cssText=";left:"+i.tLeft+"px;top:"+i.tTop+"px;opacity:1")})},changeSingle:function(){this.preDirection=""},moveClick:function(t,i){var e=this;if(console.log(i),-1!==this.type){if(this.multiCell){this.moveQueue=[],clearInterval(this.moveInternal);var s=1,n=void 0;switch(i){case"top":n=Math.round(this.top/this.gridSide);break;case"right":n=Math.round((this.gridWidth-this.left-this.width)/this.gridSide);break;case"bot":n=Math.round((this.gridHeight-this.top-this.height)/this.gridSide);break;case"left":n=Math.round(this.left/this.gridSide)}console.log("格数："+n),this.moveQueue.unshift(i),this.moveInternal=setInterval(function(){s<n?(e.moveQueue.unshift(i),s++):s===n&&(clearInterval(e.moveInternal),e.moveInternal=null)},600)}else this.canMove&&this.moveQueue.unshift(i);this.canMove&&this.move()}},move:function(){var t=this;this.canMove=!1,this.$refs.singlemulti.setAttribute("disabled","disabled");var i=this.moveQueue.pop(),e=this.$refs.graph,s=this.$refs.graphCopy,n=this.$refs.canvas.getContext("2d");switch(this.preDirection!==i&&(this.pLeft=this.left,this.pTop=this.top,this.preDirection=i,this.moveStep=0,this.x=0,this.y=0),this.tipShow=!0,i){case"top":if(this.top<=0)return;this.directionTip="上",this.y--,this.top-=37,this.tipLeft=this.left+this.width+this.gridSide,this.tipTop=this.top;break;case"right":if(this.left+this.width>=this.gridWidth)return;this.directionTip="右",this.x++,this.left+=37,this.tipLeft=this.left,this.tipTop=this.top-2*this.gridSide;break;case"bot":if(this.top+this.height>=this.gridHeight)return;this.directionTip="下",this.y++,this.top+=37,this.tipLeft=this.left+this.width+this.gridSide,this.tipTop=this.top;break;case"left":if(this.left<=0)return;this.directionTip="左",this.x--,this.left-=37,this.tipLeft=this.left,this.tipTop=this.top-2*this.gridSide}this.moveStep++,s.style.cssText+=";left:"+this.pLeft+"px;top:"+this.pTop+"px;opacity:1;",n.beginPath(),n.fillStyle="rgba(142, 208, 249, 0.5)",setTimeout(function(){var s=t.$refs.tipText;"top"===i||"bot"===i?(t.v=!0,e.style.cssText+=";left:"+t.left+"px;top:"+t.top+"px;transition:top linear .6s;",n.fillRect(t.left,1,t.width,t.gridHeight)):"right"!==i&&"left"!==i||(t.v=!1,e.style.cssText+=";left:"+t.left+"px;top:"+t.top+"px;transition:left linear .6s;",n.fillRect(1,t.top,t.gridWidth,t.height)),s.style.cssText+=";transform:translate("+t.tipLeft+"px,"+t.tipTop+"px);opacity:1;"},0),setTimeout(function(){t.initCanvas(),t.moveQueue.length>0?t.move():(t.canMove=!0,t.writeData(),t.$refs.singlemulti.removeAttribute("disabled"))},600)},writeData:function(){console.log(this.left,this.top),this.curDataIndex++,this.unredos.push({graph:{left:this.left,top:this.top},graphCopy:{left:this.pLeft,top:this.pTop},graphTarget:{left:this.tLeft,top:this.tTop},tip:{direction:this.directionTip,value:this.moveStep,left:this.tipLeft,top:this.tipTop}}),this.curDataIndex>0&&(this.undo=!0,this.reset="reset-checked")},mousedown:function(t){console.log("mousedown"),this.moveStart(t.clientX,t.clientY)},moveStart:function(t,i){this.moveSelect=!0,this.directionTip="",this.points.push({x:t,y:i}),this.downLeft=this.left,this.downTop=this.top},mouseup:function(){this.moveSelect&&(this.moveSelect=!1,this.points=[],console.log("mouseup"),"右"===this.directionTip?(this.tx=this.moveStep*this.gridSide,this.left+=this.tx):"左"===this.directionTip?(this.tx=-this.moveStep*this.gridSide,this.left+=this.tx):"上"===this.directionTip?(this.ty=-this.moveStep*this.gridSide,this.top+=this.ty):"下"===this.directionTip&&(this.ty=this.moveStep*this.gridSide,this.top+=this.ty),this.left=this.left<0?0:this.left,this.left=this.left>this.gridWidth-this.width?this.gridWidth-this.width:this.left,this.top=this.top<0?0:this.top,this.top=this.top>this.gridHeight-this.height?this.gridHeight-this.height:this.top,this.$refs.graph.style.cssText="left:"+this.left+"px;top:"+this.top+"px;opacity:1;",this.writeData(),this.initCanvas())},mousemove:function(t){this.moving(t)},moving:function(t){var i=this;if(this.moveSelect){this.initCanvas();var e=this.$refs.canvas.getContext("2d");if(this.points.length<5)return void this.points.push({x:t.clientX,y:t.clientY});this.pLeft=this.downLeft,this.pTop=this.downTop,this.$refs.graphCopy.style.cssText+=";left:"+this.pLeft+"px;top:"+this.pTop+"px;opacity:1;";var s=Math.abs(this.points[4].x-this.points[0].x),n=Math.abs(this.points[4].y-this.points[0].y);if(this.v=s<n,this.v){if(this.tx=0,this.ty=t.clientY-this.points[0].y,this.ty>this.gridSide/2){if(this.top+this.ty+this.height>this.gridHeight)return;this.tipShow=!0,this.directionTip="下",this.moveStep=Math.round(this.ty/this.gridSide)}else if(this.ty<-this.gridSide/2){if(this.top+this.ty<=0)return;this.tipShow=!0,this.directionTip="上",this.moveStep=-Math.round(this.ty/this.gridSide)}e.beginPath(),e.fillStyle="rgba(142, 208, 249, 0.5)",e.fillRect(this.left,1,this.width,this.gridHeight),this.$refs.graph.style.cssText+=";transform:translateY("+this.ty+"px);",setTimeout(function(){i.tipLeft=i.left+i.width+i.gridSide,i.tipTop=i.top,i.$refs.tipText.style.cssText+=";transform:translate("+i.tipLeft+"px,"+i.tipTop+"px);opacity:1;"},0)}else{if(this.tx=t.clientX-this.points[0].x,this.ty=0,this.tx>this.gridSide/2){if(this.left+this.tx+this.width>this.gridWidth)return;this.tipShow=!0,this.directionTip="右",this.moveStep=Math.round(this.tx/this.gridSide)}else if(this.tx<-this.gridSide/2){if(this.left+this.tx<=0)return;this.tipShow=!0,this.directionTip="左",this.moveStep=-Math.round(this.tx/this.gridSide)}e.beginPath(),e.fillStyle="rgba(142, 208, 249, 0.5)",e.fillRect(1,this.top,this.gridWidth,this.height),this.$refs.graph.style.cssText+=";transform:translateX("+this.tx+"px);",setTimeout(function(){i.tipLeft=i.left,i.tipTop=i.top-2*i.gridSide,i.$refs.tipText.style.cssText+=";transform:translate("+i.tipLeft+"px,"+i.tipTop+"px);opacity:1;"},0)}}},mobileDragStart:function(t){t.preventDefault(),console.log("mobileDragStart"),this.moveStart(t.touches[0].clientX,t.touches[0].clientY)},mobileDragMove:function(t){t.preventDefault(),console.log("mobileDragMove"),this.moving(t.touches[0])},mobileDragEnd:function(t){t.preventDefault(),console.log("mobileDragEnd"),this.mouseup()},showData:function(t){this.$refs.graph.style.cssText=";left:"+t.graph.left+"px;top:"+t.graph.top+"px;opacity:1;",this.$refs.graphCopy.style.cssText=";left:"+t.graphCopy.left+"px;top:"+t.graphCopy.top+"px;opacity:1;",this.directionTip=t.tip.direction,this.directionTip?(this.tipShow=!0,this.moveStep=t.tip.value,"右"===this.directionTip||"左"===this.directionTip?this.v=!1:"上"!==this.directionTip&&"下"!==this.directionTip||(this.v=!0),this.$refs.tipText.style.cssText=";left:"+t.tip.left+"px;top:"+t.tip.top+"px;opacity:1;"):this.tipShow=!1},undoing:function(){if(!this.multiCell||this.canMove){if(this.undo){console.log("undo"),this.curDataIndex--,this.x=0,this.y=0,this.moveStep=0;var t=this.unredos[this.curDataIndex];0===this.curDataIndex?(this.undo=!1,this.reset="reset"):(this.undo=!0,this.reset="reset-checked"),this.curDataIndex<this.unredos.length?this.redo=!0:this.redo=!1,this.showData(t)}}else this.showOperaTip()},redoing:function(){if(!this.multiCell||this.canMove){if(this.redo){console.log("redo"),this.curDataIndex++;var t=this.unredos[this.curDataIndex];this.curDataIndex===this.unredos.length-1?this.redo=!1:this.redo=!0,this.curDataIndex>0?(this.undo=!0,this.reset="reset-checked"):(this.undo=!1,this.reset="reset"),this.showData(t)}}else this.showOperaTip()},reseting:function(){!this.multiCell||this.canMove?"reset-checked"===this.reset&&(this.reset="reset",this.undo=!1,this.redo=!1,this.curDataIndex=-1,this.selectType(this.type),this.tipShow=!1,this.graphType="",this.preDirection="",this.directionTip="",this.moveStep=0,this.v=!1,this.moveSelect=!1,this.downLeft=0,this.downTop=0,this.initCanvas(),this.moveQueue=[],clearInterval(this.moveInternal)):this.showOperaTip()}},mounted:function(){var t=this;this.$root.editorManager.setSubmitShow(!1),this.initCanvas(),setTimeout(function(){t.outerX=t.$refs.graphics.getBoundingClientRect().left,t.outerY=t.$refs.graphics.getBoundingClientRect().top},0)}},o={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"transfer"},[e("canvas",{ref:"canvas",staticClass:"canvas",attrs:{width:"930",height:"560"}}),t._v(" "),e("div",{ref:"graphics",staticClass:"graphics",on:{mousemove:t.mousemove,touchmove:t.mobileDragMove,mouseup:t.mouseup}},[0===t.type?e("div",[e("svg",{ref:"graphCopy",staticClass:"lozenge dotted-line",attrs:{viewBox:"0 0 40 60"}},[e("polygon",{attrs:{points:"0,30 20,0 40,30 20,60","stroke-width":"2","vector-effect":"non-scaling-stroke",stroke:"white"}})]),t._v(" "),e("svg",{ref:"graph",staticClass:"lozenge",attrs:{viewBox:"0 0 40 60"}},[e("polygon",{attrs:{points:"0,30 20,0 40,30 20,60","stroke-width":"2","vector-effect":"non-scaling-stroke",stroke:"gray",fill:"rgba(0, 183, 238, 0.5)"},on:{mousedown:t.mousedown,touchstart:t.mobileDragStart,touchend:t.mobileDragEnd}})])]):t._e(),t._v(" "),t.type>0?e("div",[e("svg",{ref:"graphCopy",staticClass:"arrow dotted-line",attrs:{viewBox:"0 0 40 40",preserveAspectRatio:"none"}},[e("polygon",{attrs:{points:"20,0 40,20 30,20 30,40 10,40 10,20 0,20","stroke-width":"2","vector-effect":"non-scaling-stroke",stroke:"white"}})]),t._v(" "),e("svg",{ref:"graph",staticClass:"arrow",attrs:{viewBox:"0 0 40 40",preserveAspectRatio:"none"}},[e("polygon",{attrs:{points:"20,0 40,20 30,20 30,40 10,40 10,20 0,20","stroke-width":"2","vector-effect":"non-scaling-stroke",stroke:"gray",fill:"rgba(0, 183, 238, 0.5)"},on:{mousedown:t.mousedown,touchstart:t.mobileDragStart,touchend:t.mobileDragEnd}})]),t._v(" "),e("svg",{ref:"graphTarget",staticClass:"arrow yellow-line",attrs:{viewBox:"0 0 40 40",preserveAspectRatio:"none"}},[e("polygon",{attrs:{points:"20,0 40,20 30,20 30,40 10,40 10,20 0,20","stroke-width":"2","vector-effect":"non-scaling-stroke",stroke:"rgba(221, 153, 5, 1)"}})])]):t._e(),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.showCell&&t.tipShow,expression:"showCell&&tipShow"}],ref:"tipText",class:[t.v?"v-tip-text":"h-tip-text"]},[t._v("\n            向\n            "),e("span",[t._v(t._s(t.directionTip))]),t._v("\n            平移\n            "),e("span",[t._v(t._s(t.moveStep))]),t._v("格\n        ")])]),t._v(" "),e("div",{staticClass:"side-toobar"},[e("img",{attrs:{src:"static/images/transfer/"+(0===t.type?"lozenge1":"lozenge")+".png"},on:{click:function(i){i.stopPropagation(),t.selectType(0)}}}),t._v(" "),e("img",{attrs:{src:"static/images/transfer/"+(1===t.type?"arrow11":"arrow1")+".png"},on:{click:function(i){i.stopPropagation(),t.selectType(1)}}}),t._v(" "),e("img",{attrs:{src:"static/images/transfer/"+(2===t.type?"arrow22":"arrow2")+".png"},on:{click:function(i){i.stopPropagation(),t.selectType(2)}}}),t._v(" "),e("img",{attrs:{src:"static/images/transfer/"+(3===t.type?"arrow33":"arrow3")+".png"},on:{click:function(i){i.stopPropagation(),t.selectType(3)}}}),t._v(" "),e("div",{staticStyle:{position:"relative",width:"210px",height:"210px"}},[e("img",{staticStyle:{margin:"20px auto 0",display:"block"},attrs:{src:t.directionUrl}}),t._v(" "),e("img",{staticStyle:{margin:"7px auto 0",display:"block",transform:"rotate(90deg)",position:"absolute",left:"99px",top:"57px"},attrs:{src:t.directionUrl}}),t._v(" "),e("img",{staticStyle:{margin:"7px auto 0",display:"block",transform:"rotate(180deg)",position:"absolute",left:"35px",top:"120px"},attrs:{src:t.directionUrl}}),t._v(" "),e("img",{staticStyle:{margin:"7px auto 0",display:"block",transform:"rotate(270deg)",position:"absolute",left:"-27px",top:"56px"},attrs:{src:t.directionUrl}})]),t._v(" "),e("svg",{staticStyle:{position:"absolute",left:"5px",top:"388px",width:"200px",height:"210px",opacity:"0"}},[e("path",{attrs:{id:"ring",fill:"transparent",transform:"translate(100,100) rotate(-45)",d:"M 0 0 v -100 A 100 100 0 0 1 100 0.00 z"},on:{click:function(i){i.stopPropagation(),t.moveClick(i,"top")}}}),t._v(" "),e("path",{attrs:{id:"ring",fill:"transparent",transform:"translate(100,100) rotate(45)",d:"M 0 0 v -100 A 100 100 0 0 1 100 0.00 z"},on:{click:function(i){i.stopPropagation(),t.moveClick(i,"right")}}}),t._v(" "),e("path",{attrs:{id:"ring",fill:"transparent",transform:"translate(100,100) rotate(135)",d:"M 0 0 v -100 A 100 100 0 0 1 100 0.00 z"},on:{click:function(i){i.stopPropagation(),t.moveClick(i,"bot")}}}),t._v(" "),e("path",{attrs:{id:"ring",fill:"transparent",transform:"translate(100,100) rotate(-135)",d:"M 0 0 v -100 A 100 100 0 0 1 100 0.00 z"},on:{click:function(i){i.stopPropagation(),t.moveClick(i,"left")}}}),t._v(" "),e("circle",{attrs:{cx:"100",cy:"100",r:"42",fill:"#b7cbd9"}})]),t._v(" "),e("div",{staticClass:"switch-containers"},[e("div",{staticClass:"switch",on:{click:t.checkSwitch}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.multiCell,expression:"multiCell"}],ref:"singlemulti",staticClass:"switch-box",attrs:{type:"checkbox",id:"onoffswitch"},domProps:{checked:Array.isArray(t.multiCell)?t._i(t.multiCell,null)>-1:t.multiCell},on:{change:[function(i){var e=t.multiCell,s=i.target,n=!!s.checked;if(Array.isArray(e)){var o=t._i(e,null);s.checked?o<0&&(t.multiCell=e.concat([null])):o>-1&&(t.multiCell=e.slice(0,o).concat(e.slice(o+1)))}else t.multiCell=n},t.changeSingle]}}),t._v(" "),t._m(0)])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowOperaTip,expression:"isShowOperaTip"}],staticClass:"operation-tip"},[t._v("\n            请等移动停止\n        ")])]),t._v(" "),e("div",{staticClass:"bot-toolbar"},[e("img",{staticStyle:{"margin-left":"87px"},attrs:{src:t.undo?t.btnSrcs.undoS:t.btnSrcs.undo},on:{click:function(i){return i.stopPropagation(),t.undoing(i)}}}),t._v(" "),e("img",{staticStyle:{"margin-left":"87px"},attrs:{src:t.redo?t.btnSrcs.redoS:t.btnSrcs.redo},on:{click:function(i){return i.stopPropagation(),t.redoing(i)}}}),t._v(" "),e("img",{staticStyle:{"margin-left":"87px"},attrs:{src:"static/images/transfer/transfer-"+t.reset+".png"},on:{click:function(i){return i.stopPropagation(),t.reseting(i)}}}),t._v(" "),e("el-switch",{staticStyle:{margin:"-50px 0 0 87px"},attrs:{"active-color":"#00b7ee","inactive-color":"#dcdfe6",width:t.switchWidth},model:{value:t.showCell,callback:function(i){t.showCell=i},expression:"showCell"}}),t._v(" "),t._m(1)],1)])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("label",{staticClass:"switch-label",attrs:{for:"onoffswitch"}},[i("span",{staticClass:"switch-inner",attrs:{"data-on":"连续","data-off":"单格"}}),this._v(" "),i("span",{staticClass:"switcher"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("p",{staticClass:"tool-tip"},[i("span",{staticStyle:{display:"incline-block","margin-left":"90px"}},[this._v("撤销")]),this._v(" "),i("span",{staticStyle:{display:"incline-block","margin-left":"95px"}},[this._v("恢复")]),this._v(" "),i("span",{staticStyle:{display:"incline-block","margin-left":"95px"}},[this._v("重置")]),this._v(" "),i("span",{staticStyle:{display:"incline-block","margin-left":"75px"}},[this._v("显示格数")])])}]};var a=e("VU/8")(n,o,!1,function(t){e("syhy"),e("93G0")},"data-v-931f0354",null);i.default=a.exports},syhy:function(t,i,e){var s=e("weyJ");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e("rjj0")("9acfcfe6",s,!0,{})},weyJ:function(t,i,e){(t.exports=e("FZ+f")(!1)).push([t.i,"\ncanvas[data-v-931f0354] {\n  position: absolute;\n  width: 930px;\n  height: 560px;\n  left: 83px;\n  top: 77px;\n  pointer-events: none；;\n}\n.transfer[data-v-931f0354] {\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  position: absolute;\n  background-color: #b7cbd9;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border-radius: inherit;\n}\n.bot-toolbar[data-v-931f0354] {\n  position: absolute;\n  left: 130px;\n  bottom: 16px;\n  height: 115px;\n}\n.tool-tip[data-v-931f0354] {\n  font-family: 'MicrosoftYaHei';\n  font-size: 28px;\n  color: #595959;\n}\n.operation-tip[data-v-931f0354] {\n  position: absolute;\n  top: 450px;\n  color: #bb8d2a;\n  font-family: 'Microsoft YaHei';\n  font-size: 32px;\n}\n.side-toobar[data-v-931f0354] {\n  position: absolute;\n  left: 1040px;\n  top: 80px;\n  width: 205px;\n}\n.side-toobar > img[data-v-931f0354] {\n  margin: 0 auto 7px;\n  display: block;\n}\n.single[data-v-931f0354] {\n  margin: 5px 0 0 75px;\n}\n.graphics[data-v-931f0354] {\n  position: absolute;\n  width: 930px;\n  height: 560px;\n  left: 83px;\n  top: 77px;\n}\n.lozenge[data-v-931f0354] {\n  position: absolute;\n  width: 148px;\n  height: 222px;\n  opacity: 0;\n  pointer-events: none;\n}\n.lozenge polygon[data-v-931f0354] {\n  pointer-events: auto;\n}\n.lozenge circle[data-v-931f0354] {\n  pointer-events: auto;\n  opacity: 0;\n}\n.dotted-line[data-v-931f0354] {\n  fill: transparent;\n  pointer-events: auto;\n}\n.dotted-line polygon[data-v-931f0354] {\n  stroke-dasharray: 10 6;\n}\n.arrow[data-v-931f0354] {\n  position: absolute;\n  width: 148px;\n  height: 148px;\n  opacity: 0;\n  pointer-events: none;\n}\n.arrow polygon[data-v-931f0354] {\n  pointer-events: auto;\n}\n.arrow circle[data-v-931f0354] {\n  pointer-events: auto;\n}\n.yellow-line[data-v-931f0354] {\n  fill: transparent;\n  pointer-events: auto;\n}\n.yellow-line polygon[data-v-931f0354] {\n  stroke-dasharray: 10 6;\n}\n.v-tip-text[data-v-931f0354] {\n  position: absolute;\n  font-family: 'MicrosoftYaHei';\n  font-size: 32px;\n  color: #262626;\n  width: 32px;\n  word-wrap: break-word;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  opacity: 0;\n}\n.v-tip-text span[data-v-931f0354] {\n  display: inline-block;\n  width: 100%;\n  text-align: center;\n  color: green;\n}\n.h-tip-text[data-v-931f0354] {\n  position: absolute;\n  font-family: 'Microsoft YaHei';\n  font-size: 32px;\n  color: #262626;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  opacity: 0;\n}\n.h-tip-text span[data-v-931f0354] {\n  color: green;\n}\n.switch-containers[data-v-931f0354] {\n  display: inline-block;\n  width: 100%;\n}\n.switch[data-v-931f0354] {\n  position: relative;\n  width: 118px;\n  height: 50px;\n  margin: 0 0 0 42px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  float: left;\n}\n.switch-box[data-v-931f0354] {\n  display: none;\n}\n.switch-label[data-v-931f0354] {\n  display: block;\n  overflow: hidden;\n  height: 50px;\n  border-radius: 50px;\n}\n.switch-inner[data-v-931f0354] {\n  display: block;\n  width: 200%;\n  margin-left: -100%;\n  -webkit-transition: margin 0.3s ease-in;\n  transition: margin 0.3s ease-in;\n}\n.switch-inner[data-v-931f0354]::before,\n.switch-inner[data-v-931f0354]::after {\n  display: block;\n  float: right;\n  width: 50%;\n  height: 50px;\n  padding: 0;\n  line-height: 50px;\n  font-size: 20px;\n  color: white;\n  font-family: Trebuchet, Arial, sans-serif;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.switch-inner[data-v-931f0354]::after {\n  content: attr(data-on);\n  background: #00b7ee;\n  color: #fff;\n  padding-left: 20px;\n}\n.switch-inner[data-v-931f0354]::before {\n  content: attr(data-off);\n  background: #dcdfe6;\n  color: #999;\n  text-align: right;\n  padding-right: 20px;\n}\n.switch .switcher[data-v-931f0354] {\n  position: absolute;\n  display: block;\n  width: 46px;\n  height: 46px;\n  margin: 4px;\n  background: #ffffff;\n  top: -3px;\n  bottom: 2px;\n  right: 66px;\n  border: 1px solid #dcdfe6;\n  border-radius: 25px;\n  -webkit-transition: all 0.3s ease-in;\n  transition: all 0.3s ease-in;\n}\n.switch .switch-box:checked + .switch-label .switch-inner[data-v-931f0354] {\n  margin-left: 0;\n}\n.switch .switch-box:checked + .switch-label .switcher[data-v-931f0354] {\n  right: -3px;\n}\n",""])},wxbk:function(t,i,e){t.exports=function(t){var i={};function e(s){if(i[s])return i[s].exports;var n=i[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,e),n.l=!0,n.exports}return e.m=t,e.c=i,e.d=function(t,i,s){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:s})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},e.p="/dist/",e(e.s=153)}({0:function(t,i){t.exports=function(t,i,e,s,n,o){var a,r=t=t||{},h=typeof t.default;"object"!==h&&"function"!==h||(a=t,r=t.default);var l,c="function"==typeof r?r.options:r;if(i&&(c.render=i.render,c.staticRenderFns=i.staticRenderFns,c._compiled=!0),e&&(c.functional=!0),n&&(c._scopeId=n),o?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=l):s&&(l=s),l){var p=c.functional,d=p?c.render:c.beforeCreate;p?(c._injectStyles=l,c.render=function(t,i){return l.call(i),d(t,i)}):c.beforeCreate=d?[].concat(d,l):[l]}return{esModule:a,exports:r,options:c}}},153:function(t,i,e){t.exports=e(154)},154:function(t,i,e){"use strict";i.__esModule=!0;var s,n=e(155),o=(s=n)&&s.__esModule?s:{default:s};o.default.install=function(t){t.component(o.default.name,o.default)},i.default=o.default},155:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e(156),n=e.n(s),o=e(157),a=e(0)(n.a,o.a,!1,null,null,null);i.default=a.exports},156:function(t,i,e){"use strict";i.__esModule=!0;var s=o(e(19)),n=o(e(8));function o(t){return t&&t.__esModule?t:{default:t}}i.default={name:"ElSwitch",mixins:[(0,s.default)("input"),n.default],inject:{elForm:{default:""}},props:{value:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},width:{type:Number,default:40},activeIconClass:{type:String,default:""},inactiveIconClass:{type:String,default:""},activeText:String,inactiveText:String,activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},name:{type:String,default:""},id:String},data:function(){return{coreWidth:this.width}},created:function(){~[this.activeValue,this.inactiveValue].indexOf(this.value)||this.$emit("input",this.inactiveValue)},computed:{checked:function(){return this.value===this.activeValue},switchDisabled:function(){return this.disabled||(this.elForm||{}).disabled}},watch:{checked:function(){this.$refs.input.checked=this.checked,(this.activeColor||this.inactiveColor)&&this.setBackgroundColor()}},methods:{handleChange:function(t){var i=this;this.$emit("input",this.checked?this.inactiveValue:this.activeValue),this.$emit("change",this.checked?this.inactiveValue:this.activeValue),this.$nextTick(function(){i.$refs.input.checked=i.checked})},setBackgroundColor:function(){var t=this.checked?this.activeColor:this.inactiveColor;this.$refs.core.style.borderColor=t,this.$refs.core.style.backgroundColor=t},switchValue:function(){!this.switchDisabled&&this.handleChange()},getMigratingConfig:function(){return{props:{"on-color":"on-color is renamed to active-color.","off-color":"off-color is renamed to inactive-color.","on-text":"on-text is renamed to active-text.","off-text":"off-text is renamed to inactive-text.","on-value":"on-value is renamed to active-value.","off-value":"off-value is renamed to inactive-value.","on-icon-class":"on-icon-class is renamed to active-icon-class.","off-icon-class":"off-icon-class is renamed to inactive-icon-class."}}}},mounted:function(){this.coreWidth=this.width||40,(this.activeColor||this.inactiveColor)&&this.setBackgroundColor(),this.$refs.input.checked=this.checked}}},157:function(t,i,e){"use strict";var s={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"el-switch",class:{"is-disabled":t.switchDisabled,"is-checked":t.checked},attrs:{role:"switch","aria-checked":t.checked,"aria-disabled":t.switchDisabled},on:{click:t.switchValue}},[e("input",{ref:"input",staticClass:"el-switch__input",attrs:{type:"checkbox",id:t.id,name:t.name,"true-value":t.activeValue,"false-value":t.inactiveValue,disabled:t.switchDisabled},on:{change:t.handleChange,keydown:function(i){if(!("button"in i)&&t._k(i.keyCode,"enter",13,i.key))return null;t.switchValue(i)}}}),t.inactiveIconClass||t.inactiveText?e("span",{class:["el-switch__label","el-switch__label--left",t.checked?"":"is-active"]},[t.inactiveIconClass?e("i",{class:[t.inactiveIconClass]}):t._e(),!t.inactiveIconClass&&t.inactiveText?e("span",{attrs:{"aria-hidden":t.checked}},[t._v(t._s(t.inactiveText))]):t._e()]):t._e(),e("span",{ref:"core",staticClass:"el-switch__core",style:{width:t.coreWidth+"px"}}),t.activeIconClass||t.activeText?e("span",{class:["el-switch__label","el-switch__label--right",t.checked?"is-active":""]},[t.activeIconClass?e("i",{class:[t.activeIconClass]}):t._e(),!t.activeIconClass&&t.activeText?e("span",{attrs:{"aria-hidden":!t.checked}},[t._v(t._s(t.activeText))]):t._e()]):t._e()])},staticRenderFns:[]};i.a=s},19:function(t,i){t.exports=e("1oZe")},8:function(t,i){t.exports=e("aW5l")}})}});