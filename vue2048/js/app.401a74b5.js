(function(e){function t(t){for(var n,r,s=t[0],l=t[1],c=t[2],h=0,f=[];h<s.length;h++)r=s[h],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),i()}function i(){for(var e,t=0;t<o.length;t++){for(var i=o[t],n=!0,s=1;s<i.length;s++){var l=i[s];0!==a[l]&&(n=!1)}n&&(o.splice(t--,1),e=r(r.s=i[0]))}return e}var n={},a={app:0},o=[];function r(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=n,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;o.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"034f":function(e,t,i){"use strict";var n=i("85ec"),a=i.n(n);a.a},"29b7":function(e,t,i){"use strict";var n=i("f1fb"),a=i.n(n);a.a},"2df6":function(e,t,i){"use strict";var n=i("81ae"),a=i.n(n);a.a},"536f":function(e,t,i){},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("game-header",{attrs:{score:e.score,bestScore:e.bestScore},on:{sendTableSize:e.getTableSize}}),e.refreshContainer?i("game-container",{attrs:{"table-size":e.tableSize,auto_move_time:e.auto_move_time,auto_move_flag:e.auto_move_flag},on:{updateScores:e.getScores}}):e._e(),i("game-footer",{on:{sendAutoMove:e.autoMove}})],1)},o=[],r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"game-container"},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.gameInfo.over||e.gameInfo.won,expression:"gameInfo.over || gameInfo.won"}],staticClass:"game-message grid-container",class:{"game-won":e.gameInfo.won},style:e.containerHeight+"padding:"+this.cellMargin+"px;"},[i("p",{style:e.tableSize<4?"font-size: 16px;":""},[e._v(e._s(e.gameInfo.over?"Game over!":"You win!"))]),i("div",{staticClass:"lower"},[i("a",{staticClass:"retry-button",class:{"min-font":e.tableSize<4}},[e._v("Try again")])])]),i("div",{staticClass:"tile-container game-container",style:e.containerHeight},[e.refreshContorl?i("div",e._l(e.tileGrid.cells,(function(t,n){return i("div",{key:n,staticStyle:{overflow:"hidden"}},e._l(t,(function(t,n){return i("div",{key:n},[t?i("my-tile",{attrs:{"cell-content":t,cellMargin:e.cellMargin,cellHeight:e.cellHeight}}):e._e()],1)})),0)})),0):e._e(),i("div",{staticClass:"grid-container",style:e.containerHeight+"padding:"+this.cellMargin+"px;"},[i("div",{staticStyle:{overflow:"visible"}},e._l(e.table,(function(t,n){return i("div",{key:n,staticClass:"grid-row"},e._l(t,(function(t,n){return i("my-tile",{key:n,attrs:{"cell-content":t,cellMargin:e.cellMargin,cellHeight:e.cellHeight}})})),1)})),0)])])])},s=[],l=(i("a630"),i("d81d"),i("a9e3"),i("3ca3"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.cellProps?i("div",{class:e.classObject,style:e.tileStyle},[i("div",[e._v(e._s(e.cellProps.value))])]):e._e()}),c=[],u=(i("d3b7"),i("25f0"),{name:"MyTile",props:{cellContent:Object,cellHeight:Number,cellMargin:Number},data:function(){return{classes:"grid-cell",demoText:"<div>&nbsp</div>",cellProps:this.cellContent,pos:"",cellPara:{h:this.cellHeight,m:this.cellMargin},colorTable:["#eee4da","#ede0c8","#f2b179","#f59563","#f67c5f","#f65e3b","#edcf72","#edcc61","#edc850","#edc53f","#edc22e","#ebb914","#d3a612","#bc9410"]}},watch:{},computed:{classObject:function(){var e={zIndex:""==this.cellContent.value,"grid-cell":!0,merged:this.cellContent.mergedFrom&&!0,"tile-new":!this.cellContent.mergedFrom&&!this.cellContent.previousPosition,tile:!0};return e},tileStyle:function(){var e="left:"+((this.cellProps&&this.cellProps.x)*this.cellPara.h+this.cellPara.m)+"px;top:"+((this.cellProps&&this.cellProps.y)*this.cellPara.h+this.cellPara.m)+"px;width:"+(this.cellPara.h-this.cellPara.m)+"px;height:"+(this.cellPara.h-this.cellPara.m)+"px;",t=this.cellProps.value;return t&&(e+="background:"+this.calcBackColor(t)+";color:"+this.calcFontColor(t)+";font-size:"+this.calcFontSize(t.toString().length)+"em;line-height:"+(this.cellPara.h-this.cellPara.m)+"px;"),e}},methods:{calcFontSize:function(e){return e<=2?1:e<=3||e<=3?.82:e<=4?.64:e<=5?.55:e<=7?.42:3/e},calcFontColor:function(e){return e<=4?"":"#f9f6f2"},calcBackColor:function(e){for(var t=this.colorTable.length,i=1;i<=t;i++)if(e<2<<i)return this.colorTable[i-1];return this.colorTable[t-1]}}}),h=u,f=(i("9d44"),i("2877")),v=Object(f["a"])(h,l,c,!1,null,null,null),m=v.exports,d=(i("4160"),i("159b"),i("d4ec")),g=i("bee2"),b=function(){function e(){Object(d["a"])(this,e),this.events={},this.listen()}return Object(g["a"])(e,[{key:"on",value:function(e,t){this.events[e]||(this.events[e]=[]),this.events[e].push(t)}},{key:"emit",value:function(e,t){var i=this.events[e];i&&i.forEach((function(e){e(t)}))}},{key:"listen",value:function(){var e=this,t={38:0,39:1,40:2,37:3,75:0,76:1,74:2,72:3,87:0,68:1,83:2,65:3};document.addEventListener("keydown",(function(i){var n=i.altKey||i.ctrlKey||i.metaKey||i.shiftKey,a=t[i.which];n||(void 0!==a&&(i.preventDefault(),e.emit("move",a)),32===i.which&&e.restart.bind(e)(i))}));var i,n,a=document.getElementsByClassName("retry-button")[0];a.addEventListener("click",this.restart.bind(this)),a.addEventListener("touchend",this.restart.bind(this));var o=document.getElementsByClassName("game-container")[0];o.addEventListener("touchstart",(function(e){e.touches.length>1||(i=e.touches[0].clientX,n=e.touches[0].clientY,e.preventDefault())})),o.addEventListener("touchmove",(function(e){e.preventDefault()})),o.addEventListener("touchend",(function(t){if(!(t.touches.length>0)){var a=t.changedTouches[0].clientX-i,o=Math.abs(a),r=t.changedTouches[0].clientY-n,s=Math.abs(r);Math.max(o,s)>10&&e.emit("move",o>s?a>0?1:3:r>0?2:0)}}))}},{key:"restart",value:function(e){e.preventDefault(),this.emit("restart")}}]),e}(),p=function(){function e(t){Object(d["a"])(this,e),window.fakeStorage={_data:{},setItem:function(e,t){return this._data[e]=String(t)},getItem:function(e){return this._data[e]},removeItem:function(e){return delete this._data[e]},clear:function(){return this._data={}}};var i=!!window.localStorage;this.key="bestScore_"+t,this.storage=i?window.localStorage:window.fakeStorage}return Object(g["a"])(e,[{key:"get",value:function(){return this.storage.getItem(this.key)||0}},{key:"set",value:function(e){this.storage.setItem(this.key,e)}}]),e}(),_=function(){function e(t){Object(d["a"])(this,e),this.size=t,this.cells=[],this.build()}return Object(g["a"])(e,[{key:"build",value:function(){for(var e=0;e<this.size;e++)for(var t=this.cells[e]=[],i=0;i<this.size;i++)t.push(null)}},{key:"randomAvailableCell",value:function(){var e=this.availableCells();if(e.length)return e[Math.floor(Math.random()*e.length)]}},{key:"availableCells",value:function(){var e=[];return this.eachCell((function(t,i,n){n||e.push({x:t,y:i})})),e}},{key:"eachCell",value:function(e){for(var t=0;t<this.size;t++)for(var i=0;i<this.size;i++)e(t,i,this.cells[t][i])}},{key:"cellsAvailable",value:function(){return!!this.availableCells().length}},{key:"cellAvailable",value:function(e){return!this.cellOccupied(e)}},{key:"cellOccupied",value:function(e){return!!this.cellContent(e)}},{key:"cellContent",value:function(e){return this.withinBounds(e)?this.cells[e.x][e.y]:null}},{key:"insertTile",value:function(e){this.cells[e.x][e.y]=e}},{key:"removeTile",value:function(e){this.cells[e.x][e.y]=null}},{key:"withinBounds",value:function(e){return e.x>=0&&e.x<this.size&&e.y>=0&&e.y<this.size}}]),e}(),y=function(){function e(t,i){Object(d["a"])(this,e),this.x=t.x,this.y=t.y,this.value=i||2,this.previousPosition=null,this.mergedFrom=null}return Object(g["a"])(e,[{key:"savePosition",value:function(){this.previousPosition={x:this.x,y:this.y}}},{key:"updatePosition",value:function(e){this.x=e.x,this.y=e.y}}]),e}(),w=function(){function e(t,i,n,a){Object(d["a"])(this,e),this.size=t,this.inputManager=new i,this.scoreManager=new a(t),this.gameVm=n,this.startTiles=2,this.inputManager.on("move",this.move.bind(this)),this.inputManager.on("restart",this.restart.bind(this,n.tileGrid)),this.setup(n.tileGrid)}return Object(g["a"])(e,[{key:"restart",value:function(){document.getElementById("tabeSizeConfirm").click()}},{key:"setup",value:function(e){this.grid=e,this.gameVm.gameInfo.score=0,this.gameVm.gameInfo.over=!1,this.gameVm.gameInfo.won=!1,this.gameVm.gameInfo.bestScore=this.scoreManager.get()||0,this.info=this.gameVm.gameInfo,this.addStartTiles(),this.actuate()}},{key:"addStartTiles",value:function(){for(var e=0;e<this.startTiles;e++)this.addRandomTile()}},{key:"addRandomTile",value:function(){if(this.grid.cellsAvailable()){var e=Math.random()<.9?2:4,t=new y(this.grid.randomAvailableCell(),e);this.grid.insertTile(t)}}},{key:"actuate",value:function(){this.scoreManager.get()<this.info.score&&(this.scoreManager.set(this.info.score),this.info.bestScore=this.info.score),setTimeout(this.gameVm.refreshTable,100)}},{key:"prepareTiles",value:function(){this.grid.eachCell((function(e,t,i){i&&(i.mergedFrom=null,i.savePosition())}))}},{key:"moveTile",value:function(e,t){this.grid.cells[e.x][e.y]=null,this.grid.cells[t.x][t.y]=e,e.updatePosition(t)}},{key:"move",value:function(e){var t=this;if(!this.over&&!this.won){var i,n,a=this.getVector(e),o=this.buildTraversals(a),r=!1;this.prepareTiles(),o.x.forEach((function(e){o.y.forEach((function(o){if(i={x:e,y:o},n=t.grid.cellContent(i),n){var s=t.findFarthestPosition(i,a),l=t.grid.cellContent(s.next);if(l&&l.value===n.value&&!l.mergedFrom){var c=new y(s.next,2*n.value);c.mergedFrom=[n,l],t.grid.insertTile(c),t.grid.removeTile(n),n.updatePosition(s.next),t.info.score+=c.value,c.value===t.gameVm.gameInfo.target&&(t.gameVm.gameInfo.won=!0)}else t.moveTile(n,s.farthest);t.positionsEqual(i,n)||(r=!0)}}))})),r&&(this.addRandomTile(),this.movesAvailable()||(this.gameVm.gameInfo.over=!0),this.actuate())}}},{key:"getVector",value:function(e){var t={0:{x:0,y:-1},1:{x:1,y:0},2:{x:0,y:1},3:{x:-1,y:0}};return t[e]}},{key:"buildTraversals",value:function(e){for(var t={x:[],y:[]},i=0;i<this.size;i++)t.x.push(i),t.y.push(i);return 1===e.x&&(t.x=t.x.reverse()),1===e.y&&(t.y=t.y.reverse()),t}},{key:"findFarthestPosition",value:function(e,t){var i;do{i=e,e={x:i.x+t.x,y:i.y+t.y}}while(this.grid.withinBounds(e)&&this.grid.cellAvailable(e));return{farthest:i,next:e}}},{key:"movesAvailable",value:function(){return this.grid.cellsAvailable()||this.tileMatchesAvailable()}},{key:"tileMatchesAvailable",value:function(){for(var e,t=this,i=0;i<this.size;i++)for(var n=0;n<this.size;n++)if(e=this.grid.cellContent({x:i,y:n}),e)for(var a=0;a<4;a++){var o=t.getVector(a),r={x:i+o.x,y:n+o.y},s=t.grid.cellContent(r);if(s&&s.value===e.value)return!0}return!1}},{key:"positionsEqual",value:function(e,t){return e.x===t.x&&e.y===t.y}}]),e}(),x={name:"GameContainer",components:{MyTile:m},props:{tableSize:Number,auto_move_time:Number,auto_move_flag:Boolean},data:function(){return{containerHeight:"",table:[],tileGrid:[],cellHeight:60,cellMargin:7,refreshContorl:!0,gameInfo:{score:0,bestScore:0,over:!1,won:!1,scoreDiff:0,hasDiff:!1,target:2048}}},watch:{auto_move_flag:function(e){e&&this.start_auto_move()},"gameInfo.score":{handler:function(){this.$emit("updateScores",this.gameInfo)}}},mounted:function(){var e=function(e){var t=-1,i=0;return Array.from({length:e}).map((function(){return t++,i=-1,Array.from({length:e}).map((function(){return i++,{x:t,y:i,value:""}}))}))};this.table=e(this.tableSize),window.gameVue=this,this.containerHeight="height:"+(this.tableSize*this.cellHeight-this.cellMargin)+"px;",this.containerHeight+="width:"+(this.tableSize*this.cellHeight-this.cellMargin)+"px;",this.tileGrid=new _(this.tableSize),this.GM=new w(this.tableSize,b,this,p),this.$emit("updateScores",this.gameInfo),this.gameInfo.target=this.tableSize<=4?2048:this.tableSize<=5?8192:9007199254740992},methods:{refreshTable:function(){var e=this;this.refreshContorl=!1,this.$nextTick((function(){e.refreshContorl=!0}))},auto_move:function(){if(!1!==this.auto_move_flag){var e=Math.floor(4*Math.random());this.GM.move(e);var t=this;setTimeout((function(){t.auto_move()}),this.auto_move_time)}},start_auto_move:function(){this.auto_move_time=this.auto_move_time||500,this.auto_move_flag=!0,this.auto_move()},stop_auto_move:function(){this.auto_move_flag=!1}}},C=x,S=(i("29b7"),Object(f["a"])(C,r,s,!1,null,null,null)),k=S.exports,z=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"heading"},[i("h1",{staticClass:"title"},[e._v(e._s(e.title))]),i("div",{staticClass:"scores-container"},[i("div",{staticClass:"score-container"},[e._v(e._s(e.score)+" "),e.hasDiff?i("div",{staticClass:"score-addition"},[e._v(e._s(e.scoreDiff))]):e._e()]),i("div",{staticClass:"best-container"},[e._v(e._s(e.bestScore))])])]),i("p",{staticClass:"game-intro"},[e._v("Join the numbers and get to the "),i("strong",[e._v(e._s(e.title)+" tile!")])]),i("form",{staticClass:"table-size"},[i("strong",[e._v("Set the table size: ")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model.number",value:e.tableSize,expression:"tableSize",modifiers:{number:!0}}],staticStyle:{"margin-right":"1em"},attrs:{onkeypress:"return event.charCode >= 48 && event.charCode <= 57",size:"6",maxlength:"2"},domProps:{value:e.tableSize},on:{input:function(t){t.target.composing||(e.tableSize=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),i("input",{attrs:{type:"button",value:"Confirm",id:"tabeSizeConfirm"},on:{click:e.sendTableSize}})])])},M=[],T={name:"GameHeader",props:{score:Number,bestScore:Number},data:function(){return{title:"9007199254740992",tableSize:4,scoreDiff:0,hasDiff:!1}},watch:{score:{handler:function(e,t){var i=this,n=e-t;n>0&&(this.hasDiff=!1,this.scoreDiff="+"+n,this.$nextTick((function(){i.hasDiff=!0})))}}},mounted:function(){window.headerVue=this,this.title="2048"},methods:{sendTableSize:function(){this.$emit("sendTableSize",this.tableSize)}}},P=T,O=(i("2df6"),Object(f["a"])(P,z,M,!1,null,null,null)),j=O.exports,I=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"heading"},[i("div",{staticClass:"auto-move-container"},[i("p",[i("strong",[e._v("Move randomly with ")]),i("input",{directives:[{name:"model",rawName:"v-model.number",value:e.auto_move_time,expression:"auto_move_time",modifiers:{number:!0}}],attrs:{type:"text",name:"auto-move-time",value:"",id:"auto-move-input-time",onkeypress:"return event.charCode >= 48 && event.charCode <= 57",size:"6",maxlength:"8"},domProps:{value:e.auto_move_time},on:{input:function(t){t.target.composing||(e.auto_move_time=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),i("strong",[e._v(" ms.")]),i("input",{staticClass:"auto-move-button",staticStyle:{"margin-right":"1em"},attrs:{type:"submit",value:"Run",id:"auto-move-run"},on:{click:function(t){return e.setAutoMove(!0)}}}),i("input",{staticClass:"auto-move-button",attrs:{type:"submit",value:"Stop",id:"auto-move-stop"},on:{click:function(t){return e.setAutoMove(!1)}}})])]),e._m(0),i("hr"),i("p",[i("strong",{staticClass:"important"},[e._v("Note:")]),e._v(" This site is "),i("font",{attrs:{color:"red"}},[i("strong",[e._v("not")])]),e._v(" the official version of 2048. You can play the official version on "),i("a",{attrs:{href:"http://gabrielecirulli.github.io/2048/",target:"_blank"}},[e._v("gabrielecirulli.github.io/2048.")])],1),i("hr"),e._m(1),i("p")])},E=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",{staticClass:"game-explanation"},[i("strong",{staticClass:"important"},[e._v("How to play:")]),e._v(" Use your "),i("strong",[e._v("arrow keys")]),e._v(" to move the tiles. When two tiles with the same number touch, they "),i("strong",[e._v("merge into one!")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v(" Modified by "),i("a",{attrs:{href:"https://github.com/PC-hu",target:"_blank"}},[e._v("hu")]),e._v(". "),i("a",{attrs:{href:"https://www.csie.ntu.edu.tw/~b01902112/9007199254740992/#",target:"_blank"}},[e._v("Original link")]),e._v(". "),i("a",{attrs:{href:"http://cyberzhg.github.io/2048/",target:"_blank"}},[e._v("Another powerful version")]),e._v(". ")])}],A={name:"GameFooter",data:function(){return{auto_move_time:200,auto_move_flag:!1}},watch:{},mounted:function(){window.footerVue=this},methods:{setAutoMove:function(e){this.$emit("sendAutoMove",{auto_move_time:this.auto_move_time,auto_move_flag:e})}}},H=A,$=(i("be88"),Object(f["a"])(H,I,E,!1,null,null,null)),V=$.exports,F={name:"App",components:{GameContainer:k,GameHeader:j,GameFooter:V},data:function(){return{tableSize:4,refreshContainer:!0,auto_move_time:200,auto_move_flag:!1,score:0,bestScore:0}},methods:{getTableSize:function(e){var t=this;this.tableSize=e,this.refreshContainer=!1,this.$nextTick((function(){t.refreshContainer=!0})),this.auto_move_flag=!1},autoMove:function(e){this.auto_move_time=e.auto_move_time,this.auto_move_flag=e.auto_move_flag},getScores:function(e){this.score=e.score,this.bestScore=parseInt(e.bestScore)}}},G=F,D=(i("034f"),Object(f["a"])(G,a,o,!1,null,null,null)),N=D.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(N)}}).$mount("#app")},"81ae":function(e,t,i){},"85ec":function(e,t,i){},"9ba3":function(e,t,i){},"9d44":function(e,t,i){"use strict";var n=i("536f"),a=i.n(n);a.a},be88:function(e,t,i){"use strict";var n=i("9ba3"),a=i.n(n);a.a},f1fb:function(e,t,i){}});
//# sourceMappingURL=app.401a74b5.js.map