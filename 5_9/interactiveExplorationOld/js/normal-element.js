webpackJsonp([27],{O7yg:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"\nul[data-v-18c9777e],\nli[data-v-18c9777e] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.block-element[data-v-18c9777e] {\n  width: auto;\n  min-width: 10px;\n  height: auto;\n  min-height: 10px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  border: 0 solid black;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  z-index: 10;\n}\n.block-border[data-v-18c9777e] {\n  border: 1px solid black;\n}\n.block-element .block-img[data-v-18c9777e] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  border: none;\n  margin: 0;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  background: transparent;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.block-counter[data-v-18c9777e] {\n  width: auto;\n  max-width: 100px;\n  position: absolute;\n  right: -20px;\n  bottom: 0px;\n  padding: 5px;\n  color: red;\n  font-size: 16px;\n  z-index: 11;\n}\n.block-content[data-v-18c9777e] {\n  position: absolute;\n  width: 100%;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  word-wrap: break-word;\n  word-break: break-all;\n}\n.block-text-editing[data-v-18c9777e] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  line-height: 100%;\n  border: 1px solid gray;\n  padding: 1px;\n  outline: none;\n}\n.block-menu-edit[data-v-18c9777e] {\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  font-size: 16px;\n  color: #148acf;\n  top: 5px;\n  right: 5px;\n  cursor: auto;\n  z-index: 1;\n}\n.count-item[data-v-18c9777e] {\n  padding: 0 20px;\n  border: 1px solid rgba(0, 0, 0, 0.774);\n  margin: 0 0 -1px 0;\n}\n.error-img[data-v-18c9777e] {\n  width: 45px;\n  height: 45px;\n  position: absolute;\n  right: -10px;\n  bottom: -10px;\n}\n",""])},nRlU:function(t,e,i){var n=i("O7yg");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("68e97f39",n,!0,{})},tfup:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("mvHQ"),r=i.n(n),s=(i("7+uW"),{width:!0,height:!0,top:!0,left:!0,right:!0,bottom:!0,fontSize:!0,lineHeight:!0,borderWidth:!0,padding:!0,borderRadius:!0}),a={zIndex:!0,opacity:!0,src:!0,color:!0,textAlign:!0,borderColor:!0,backgroundColor:!0,backgroundImage:!0,transformOrigin:!0,backgroundRepeat:!0,backgroundPosition:!0,backgroundSize:!0},o={html:!0,fill:!0,viewBox:!0,isCounter:!0,cCount:!0},h=i("R3KO"),d={name:"BlockElement",data:function(){return{params:{type:"block-element",left:0,top:0,width:"auto",height:"auto",opacity:1,transX:0,transY:0,rotate:0,scale:1},showErrorImg:!1,canDisplaySelect:!0,isIncluded:!1,isSelected:!1,isEditing:!1,isAlign:!1,editor:null,wareObj:null,userSelect:!1,cCurCount:0,cObjects:[],children:[],childIndex:-1,parentInstance:void 0}},computed:{styleObj:function(){var t={};for(var e in s)void 0!==this.params[e]&&("number"==typeof this.params[e]?t[e]=this.params[e]+"px":t[e]=this.params[e]);for(var i in a)void 0!==this.params[i]&&(t[i]=this.params[i]);return t.transform="translate("+this.params.transX+"px, "+this.params.transY+"px) rotate("+this.params.rotate+"deg) scale("+this.params.scale+")",t.userSelect=this.userSelect?"inherit":"none",t}},methods:{setParams:function(t){for(var e in t)s[e]||a[e]||o[e]?this.setParam(e,t[e]):"children"===e?this.addChildren(t[e]):this.params[e]=t[e]},setParam:function(t,e){this.params[t]?this.params[t]=e:this.$set(this.params,t,e)},setSectionMode:function(t){var e=this;this.sectionMode=t,"edit"===t?this.params.isCounter&&(this.cCurCount=this.params.cCount,this.cObjects.forEach(function(t){e.$root.editorManager.setSelectedObject({instance:t,type:0}),e.$root.editorManager.delete()}),this.cObjects=[],this.$el.parentElement||(this.nextSibling?this.parentElement.insertBefore(this.$el,this.nextSibling):this.parentElement.appendChild(this.$el))):"display"===t&&this.params.isCounter&&(this.cCurCount=this.params.cCount),this.children&&this.children.forEach(function(e){e.setSectionMode(t)})},addChildren:function(t){var e=this;if(!this.parentInstance){this.params.children||(this.params.children=[]);var i=this.children.length;t.forEach(function(t){if("block-text"===t.type||"block-image"===t.type){var i=e.addChild(t);e.children.push(i)}});for(var n=this.children.length,r=i;r<n;r++)this.params.children.push(this.children[r].params);this.updateChildren()}},addChild:function(t){var e=document.createElement("DIV");this.$el.appendChild(e);var i=this.$root.editorManager.newVueElement("block-element",e);return i.isIncluded=!0,i.parentInstance=this,i.setParams(t),i},removeChild:function(t){this.children.splice(t,1)[0].deleteSelf(),this.params.children.splice(t,1),this.updateChildren()},updateChildren:function(){this.children.forEach(function(t,e){t.childIndex=e})},onClickNothing:function(){},onClickShape:function(t){},onClickImage:function(){},setIsSelected:function(t,e){if(t){if("display"===this.sectionMode){if("block-text"!==this.params.type||this.isEditing||(this.userSelect=!1),"normal"===this.params.wareType)return;if(!this.canDisplaySelect)return;if(this.wareObj&&!this.wareObj.checkSelectedInstance(this))return void(this.params.isCounter&&this.newOneInCounter(e))}else if("edit"===this.sectionMode&&("block-text"===this.params.type&&(this.userSelect=!0),this.wareObj&&this.wareObj.checkSelectedEditInstance&&!this.wareObj.checkSelectedEditInstance(this)))return;if(this.isSelected=t,this.isEditing)return;this.$root.editorManager.setSelectedObject({instance:this,type:0}),this.initDdmrr(),this.checkDragAuto(e)}else this.isSelected=t,this.releaseDdmrr(),this.$root.editorManager.setSelectedObject(null)},initDdmrr:function(){var t=this;if(!this.ddmrr&&!this.isEditing){var e=this.$refs.ddmrrDom,i=e.parentElement;this.parentInstance&&(i=this.parentInstance.parentElement),this.params.keepPrePos||(e.remove(),this.parentElement.appendChild(e));var n={};this.wareObj&&"display"===this.sectionMode?(e.style.filter="drop-shadow(0px 0px 7px #148acf)",n={panelBorder:"1px solid transparent",panelBackgroundColor:"transparent",resize:{key:"resize",enable:!1},rotate:{key:"rotate",enable:!1}},"moveing-rotate"===this.params.wareType&&(n.rotate.enable=!0),this.inCage&&(e.style.filter="")):this.params.ddmrrMode&&(n.resize={key:"resize",enable:!0,preserveAspectRatio:1===this.params.ddmrrMode,anchors:["n","e","s","w","ne","se","nw","sw"]}),n.scale=this.$root.ddmrrScale,this.ddmrr=new DDMRR(e,i,n),this.ddmrrStep=0,this.ddmrr.emitter.on("move_end",function(){t.params.transform=e.style.transform,t.resetTransform(),t.params.transX>t.$root.editorManager.width-t.params.width?t.params.transX=t.$root.editorManager.width-t.params.width:t.params.transX<0&&(t.params.transX=0),t.params.transY>t.$root.editorManager.height-t.params.height?t.params.transY=t.$root.editorManager.height-t.params.height:t.params.transY<0&&(t.params.transY=0),"edit"===t.$root.editorManager.sectionMode&&t.$root.editorManager.alignCanvas([]),t.wareObj&&t.wareObj.ddmrrMoveEnd&&t.wareObj.ddmrrMoveEnd(t),t.ddmrrStep=2}),this.ddmrr.emitter.on("move_going",function(){t.ddmrrStep=1,t.params.transform=e.style.transform,t.resetTransform(),t.locationPos(),t.onMoving(t)}),this.ddmrr.emitter.on("rotate_end",function(){t.params.transform=e.style.transform,t.resetTransform()}),this.ddmrr.emitter.on("resize_end",function(){t.params.width=parseInt(e.style.width.replace("px",""),10),t.params.height=parseInt(e.style.height.replace("px",""),10)})}},resetTransform:function(){var t=this.getTransformMatrix(this.params.transform);if(t){var e=180*Math.acos(t[0])/Math.PI;t[1]<0&&(e=-e),this.params.rotate=e,this.params.transX=t[4],this.params.transY=t[5]}},getTransformMatrix:function(t){var e=t.match(/^matrix\((.+)\)$/);return e?e[1].split(", ").map(function(t){return parseFloat(t)}):null},releaseDdmrr:function(){this.ddmrr&&(this.$refs.ddmrrDom.style.filter="inherit",this.ddmrr.release(),this.ddmrr=null,this.isSelected=!1)},onImageLoad:function(){"auto"===this.params.width&&this.setParam("width",this.$refs.image.clientWidth),"auto"===this.params.height&&this.setParam("height",this.$refs.image.clientHeight)},newOneInCounter:function(t){if(this.params.isCounter&&!(this.cCurCount<=0)){this.cCurCount--;var e=JSON.parse(r()(this.params));e.isCounter=!1,e.keepPrePos=!1;var i=this.$root.editorManager.addBlockElement();i.sectionMode=this.sectionMode,i.setParams(e),this.$root.editorManager.bindWareObj(i),i.isIncluded=!0,i.counter=this,this.cObjects.push(i),i.setIsSelected(!0,t),0===this.cCurCount&&(this.params.preOpacity=void 0===this.params.opacity?1:this.params.opacity,this.setParam("opacity",0))}},destroyCounterCopy:function(t){var e=this;if(this.counter){console.log("destroyCounterCopy()"),0===this.counter.cCurCount&&(this.counter.params.opacity=this.counter.params.preOpacity),this.$root.editorManager.setSelectedObject(null),t||this.counter.cCurCount++;var i=this.counter.cObjects.findIndex(function(t){return t===e});-1!==i&&(this.counter.cObjects.splice(i,1),this.counter=null,this.deleteSelf())}},checkDragAuto:function(t){var e=this;t&&setTimeout(function(){var i=e.$refs.ddmrrDom.getElementsByClassName("drag-panel");if(i&&i[0]){t.touches&&(t=t.touches[0]);var n=document.createEvent("MouseEvents"),r=t.type?t.type:"mousedown";n.initMouseEvent(r,!0,!0,document.defaultView,0,t.screenX,t.screenY,t.clientX,t.clientY,!1,!1,!1,!1,0,null),i[0].dispatchEvent(n)}},0)},setIsEditing:function(){this.isEditing=!this.isEditing,this.setIsSelected(!this.isEditing),console.log("setIsEditing() "+this.isEditing),this.isEditing?(this.$root.editorManager.setSelectedObject({instance:this,type:1}),this.openInlineCKEditor()):(this.$root.editorManager.setSelectedObject({instance:this,type:0}),this.closeCKEditor())},openInlineCKEditor:function(){this.$refs.editDiv&&!this.editor&&(console.log("openInlineCKEditor()"),this.$refs.editDiv.setAttribute("contenteditable","true"),CKEDITOR.disableAutoInline=!0,this.editor=CKEDITOR.inline(this.$refs.editDiv,{height:150,extraPlugins:"colorbutton,justify"}))},closeCKEditor:function(){this.editor&&(this.$refs.editDiv.setAttribute("contenteditable","false"),this.editor.destroy(),this.editor=null,this.params.html=this.$refs.editDiv.innerHTML)},addFontSize:function(t){"block-text"===this.params.type&&(this.params.fontSize||this.setParam("fontSize",14),this.params.fontSize+=t,this.params.fontSize<8?this.params.fontSize=8:this.params.fontSize>100&&(this.params.fontSize=100))},setColor:function(t){"block-text"===this.params.type&&(this.params.color||this.setParam("color","black"),this.params.color=t)},addDepth:function(t){this.params.zIndex||this.setParam("zIndex",10),t?this.params.zIndex+=1:(this.params.zIndex-=1,this.params.zIndex<0&&(this.params.zIndex=0))},setBorder:function(t){this.params.borderWidth||this.setParam("borderWidth",0),t?(this.params.borderWidth=1,this.params.preBorderWidth&&(this.params.borderWidth=this.params.preBorderWidth)):(this.params.preBorderWidth=this.params.borderWidth,this.params.borderWidth=0)},locationPos:function(){var t=this,e=this.params,i=e.left,n=e.top,r=e.width,s=e.height,a=i+e.transX,o=n+e.transY,h=[o,o+s,o+s/2],d=[];[a,a+r,a+r/2].forEach(function(e){Math.floor(e)%t.$root.editorManager.gridSide==0&&d.push({type:"x",value:e})}),h.forEach(function(e){Math.floor(e)%t.$root.editorManager.gridSide==0&&d.push({type:"y",value:e})}),"edit"===this.$root.editorManager.sectionMode&&(d.length>0?(this.isAlign=!0,this.$root.editorManager.alignCanvas(d)):0===d.length&&!0===this.isAlign&&(this.isAlign=!1,this.$root.editorManager.alignCanvas(d)))},transformMatrix:function(t){return(t=t.replace("matrix(","").replace(")","")).split(",").map(function(t){return+t}).slice(4)},setCounterCount:function(t){this.params.cCount=t},deleteSelf:function(){return this.$el.remove(),this.$root=null,this.$destroy(),!this.parentInstance},onMoving:function(t){h.a.whenMoving(t)}},created:function(){this.params.name=this.params.type,this.sectionMode="edit",this.params.wareType="normal",this.params.preRotate=0,this.params.aLevel="0",this.preScale=1},beforeMount:function(){document.oncontextmenu=function(){return!1}},mounted:function(){var t=this;this.parentElement=this.$el.parentElement,this.nextSibling=this.$el.nextSibling,setTimeout(function(){return t.params.id&&t.params.id.startsWith("pigeon")?h.a.whenMount(t):void 0},0),setTimeout(function(){if("rabbit"===t.params.id||"chicken"===t.params.id){var e=document.querySelector("#chickenrabbitcage");e&&(e.style["pointer-events"]="none",e.parentNode.style["pointer-events"]="none",e.parentElement.style["pointer-events"]="none")}},0)},destroyed:function(){this.parentElement=null,this.nextSibling=null,this.children.forEach(function(t){t.$el.remove(),t.$root=null,t.$destroy()}),this.children=null,this.params.children=null,this.parentInstance=null,this.params.id&&this.params.id.startsWith("pigeon")&&h.a.whenDestoryed(this)}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"ddmrrDom",staticClass:"block-element",style:t.styleObj,on:{mousedown:function(e){e.stopPropagation(),t.setIsSelected(!0,e)},touchstart:function(e){e.stopPropagation(),t.setIsSelected(!0,e)},click:function(e){e.stopPropagation(),t.onClickNothing()}}},["block-text"===t.params.type?i("div",{staticStyle:{width:"100%",height:"100%",position:"relative"}},[t.isSelected&&"display"!==t.sectionMode?i("i",{staticClass:"block-menu-edit iconfont",class:[t.isEditing?"icon-edit-saved":"icon-edit-pen"],on:{click:function(e){e.stopPropagation(),t.setIsEditing()}}}):t._e(),t._v(" "),i("div",{ref:"editDiv",class:{"block-text-editing":this.isEditing,"block-content":!0},domProps:{innerHTML:t._s(t.params.html)}})]):"block-image"===t.params.type?i("img",{ref:"image",staticClass:"block-img",attrs:{ondragstart:"return false;",src:t.params.src},on:{mousedown:function(e){t.onClickImage()},load:function(e){t.onImageLoad()}}}):t._e(),t._v(" "),t.params.isCounter?i("div",{staticClass:"block-counter"},[t._v("\n    "+t._s(t.cCurCount)+"\n  ")]):t._e(),t._v(" "),"block-svg"===t.params.type?i("svg",{attrs:{width:"100%",height:"100%",fill:t.params.fill,preserveAspectRatio:"none",viewBox:t.params.viewBox},domProps:{innerHTML:t._s(t.params.html)},on:{mousedown:function(e){t.onClickShape(e)}}}):"block-iframe"===t.params.type?i("div",{staticStyle:{height:"100%"}},[i("iframe",{attrs:{width:"100%",height:"100%",frameborder:"0",src:t.params.src+t.params.html,name:"myFrame"}})]):t._e(),t._v(" "),t.showErrorImg?i("img",{staticClass:"error-img",attrs:{src:"static/images/error.png"}}):t._e()])},staticRenderFns:[]};var l=i("VU/8")(d,c,!1,function(t){i("nRlU")},"data-v-18c9777e",null);e.default=l.exports}});