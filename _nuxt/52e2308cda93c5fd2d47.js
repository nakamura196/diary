(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{424:function(t,e,n){"use strict";n.r(e);n(21),n(22),n(4),n(54),n(40),n(27),n(33);var r=n(23),o=n(30),l=n(31),c=n(25),v=n(19),f=n(18),d=n(57),m=n(78),_=n.n(m);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(v.a)(t);if(e){var o=Object(v.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var k=function(t,e,n,desc){var r,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(o<3?r(l):o>3?r(e,n,l):r(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l},y=function(t){Object(l.a)(n,t);var e=h(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).deleteConfirmFlag=!1,t.tagFormFlag=!1,t.exportFlag=!1,t.snackbar=!1,t.text="",t.timeout=2e3,t.color="",t.smUrl="",t.iaUrl="",t.jsonUrl="",t.uvUrl="",t.tagStr="",t.loading=!1,t.title="マイリスト",t.index=-1,t.getFlag=!1,t.viewers=[{image:"/img/icons/ia.png",url:"http://www.kanzaki.com/works/2016/pub/image-annotator?u=",label:"Image Annotator"},{image:"/img/icons/mirador3.svg",url:"http://mirador.cultural.jp/?manifest=",label:"Mirador 3"},{image:"/img/icons/mirador.png",url:"http://da.dl.itc.u-tokyo.ac.jp/mirador/?manifest=",label:"Mirador 2"},{image:"/img/icons/uv.jpg",url:"http://universalviewer.io/examples/uv/uv.html#?manifest=",label:"Universal Viewer"},{image:"/img/icons/tify-logo.svg",url:"http://tify.sub.uni-goettingen.de/demo.html?manifest=",label:"TIFY"},{image:"/img/icons/icp-logo.svg",url:"http://codh.rois.ac.jp/software/iiif-curation-viewer/demo/?manifest=",label:"Curation Viewer"},{image:"/img/icons/icp-logo.svg",url:"http://codh.rois.ac.jp/kuronet/iiif-curation-viewer/?manifest=",label:"くずし字認識ビューア / Kuzushiji Recognition Viewer"}],t}return Object(o.a)(n,[{key:"mounted",value:function(){this.init()}},{key:"setCurrentManifest",value:function(t){this.selectedManifests=[t["@id"]];var e=[t];if(e&&1===e.length){var n=e[0];n.tags&&(this.tagStr=n.tags.join(", "))}}},{key:"watchTmp",value:function(){this.init()}},{key:"init",value:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.tagStr="";var n=this.$route.query,u=n.u,r=n.tag;if(this.$store.commit("setTag",r),u){var o=this;_.a.get(u).then((function(n){var r=n.data,l=r["@type"];"sc:Manifest"===l?o.collection={"@context":"http://iiif.io/api/presentation/2/context.json","@id":u,"@type":"sc:Collection",vhint:"use-thumb",label:t.getLabel(r.label),manifests:[r]}:"sc:Collection"===l&&(o.collection=r),o.$store.commit("init",e),o.title=o.collection.label,o.getFlag=!0;for(var c=o.collection.manifests,v=[],i=0;i<c.length;i++)v.push(c[i]["@id"]);o.selectedManifests=v})).catch((function(t){console.log({error:t})}))}else{this.title=r||this.$t("my_list")+"",this.getFlag=!1;var l={};if(localStorage.getItem("iiif-pocket-collection"))try{var c=localStorage.getItem("iiif-pocket-collection");l=JSON.parse(c)}catch(t){localStorage.removeItem("iiif-pocket-collection")}this.collection=l,this.$store.commit("init",e)}}},{key:"truncate",value:function(t,e){return t.length<=e?t:t.substr(0,e)+"..."}},{key:"getThumbnail",value:function(t){return t?t["@id"]?t["@id"]:t:"img/icons/noimage.png"}},{key:"getCjFlag",value:function(t){return!(!t.related||!t.related.includes("cultural.jp"))}},{key:"getLabel",value:function(t){if(t){if(Array.isArray(t)){var e=t[0];return e["@value"]?e["@value"]:e}return t}return"No Title"}},{key:"getLicense",value:function(t){return Array.isArray(t)?t.join(", "):t}},{key:"getAttribution",value:function(t){if(Array.isArray(t)){for(var e="",n=t,i=0;i<n.length;i++){var r=n[i];if(r["@value"]){if(r["@language"]&&r["@language"]!==this.$i18n.locale)continue;e+=", "+r["@value"]}else e+=", "+r}return e.slice(2)}return t}},{key:"getViewerUrl",value:function(t){return"https://www.kanzaki.com/works/2016/pub/image-annotator?u="+t["@id"]}},{key:"getCjUrl",value:function(t){return t.related&&t.related.includes("cultural.jp")?t.related:null}},{key:"clear",value:function(){this.selectedManifests=[]}},{key:"checkAll",value:function(){for(var t=this.filteredManifests,e=JSON.parse(JSON.stringify(this.selectedManifests)),i=0;i<t.length;i++){var n=t[i]["@id"];e.includes(n)||e.push(n)}this.selectedManifests=e}},{key:"compare",value:function(){if(0!==this.selectedManifests.length){var t="http://da.dl.itc.u-tokyo.ac.jp/mirador/?manifest="+this.selectedManifests.join(";");window.open(t,"_blank")}else alert("比較対象のアイテムを選択してください。")}},{key:"saveToLS",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=JSON.stringify(t);localStorage.setItem("iiif-pocket-collection",n),this.init(e)}},{key:"trigger",value:function(t){13===t.keyCode&&this.saveTag(this.tagStr,1===this.selectedManifests.length)}},{key:"saveTag",value:function(t,e){t||(t="");for(var n=t.split(",").map((function(t){return t.trim()})),r=this.selectedManifests,o=JSON.parse(JSON.stringify(this.collection)),l=o.manifests,i=l.length-1;i>=0;i--){var c=l[i],v=c["@id"];if(r.includes(v))if(e)c.tags=n;else{var f=[];c.tags&&(f=c.tags);for(var d=0;d<n.length;d++){var m=n[d];f.includes(m)||f.push(m)}c.tags=f}}this.saveToLS(o,!1),this.tagFormFlag=!1,this.snackbar=!0,this.text=this.$t("success_edited")+"",this.color="success"}},{key:"rm",value:function(){for(var t=this.selectedManifests,e=JSON.parse(JSON.stringify(this.collection)),n=e.manifests,i=n.length-1;i>=0;i--){var r=n[i];t.includes(r["@id"])&&n.splice(i,1)}this.saveToLS(e),this.snackbar=!0,this.text=this.$t("success_deleted")+"",this.color="success"}},{key:"dwn",value:function(){for(var t=this,e=JSON.parse(JSON.stringify(this.collection)),n=this.selectedManifests,r=[],i=0;i<e.manifests.length;i++){var o=e.manifests[i]["@id"];n.includes(o)&&r.push(e.manifests[i])}if(e.manifests=r,0===e.manifests.length)return this.loading=!1,void alert("比較対象のアイテムを選択してください。");var l=new XMLHttpRequest;l.onreadystatechange=function(){if(l.readyState===XMLHttpRequest.DONE){var e="https://api.jsonbin.io/b/"+JSON.parse(l.responseText).metadata.id;t.jsonUrl=e,t.iaUrl="http://www.kanzaki.com/works/2016/pub/image-annotator?u="+e,t.smUrl="https://teotihuacan.cs.nii.ac.jp/self-museum/?collection="+e,t.uvUrl="http://universalviewer.io/examples/uv/uv.html#?manifest="+e,t.exportFlag=!0,t.loading=!1}},l.open("POST","https://api.jsonbin.io/v3/b",!0),l.setRequestHeader("Content-Type","application/json"),l.setRequestHeader("X-Master-Key","$2b$10$unmAqqNkGBsCaaOK3d4QEui0i./fZ0INKty90iDOBMHHRoB.ywT.S"),l.setRequestHeader("X-Bin-Private","false"),l.send(JSON.stringify(e))}},{key:"selectedManifests",get:function(){return this.$store.state.selectedManifests},set:function(t){this.$store.commit("setSelectedManifests",t)}},{key:"collection",get:function(){return this.$store.state.collection},set:function(t){this.$store.commit("setCollection",t)}},{key:"filteredManifests",get:function(){return this.$store.state.filteredManifests},set:function(t){this.$store.commit("setFilteredManifests",t)}},{key:"reverseFilteredManifests",get:function(){var t=this.filteredManifests;return t?t.slice().reverse():[]}},{key:"tags",get:function(){return this.$store.state.tags},set:function(t){this.$store.commit("setTags",t)}}]),n}(d.Vue);k([Object(d.Watch)("$route",{deep:!0})],y.prototype,"watchTmp",null);var C=y=k([Object(d.Component)({})],y),w=n(56),F=n(82),S=n.n(F),x=n(180),j=n(172),$=n(94),M=n(169),V=n(408),O=n(401),T=n(390),U=n(166),L=n(164),R=n(141),N=n(167),A=n(168),I=n(105),J=n(53),D=n(92),H=n(170),z=n(409),B=n(63),P=n(392),E=n(393),K=n(427),X=n(64),G=n(420),component=Object(w.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",{staticClass:"my-10",attrs:{id:"container",fluid:""}},[n("v-row",[n("v-col",{attrs:{cols:"12",sm:4}},[n("h1",[t._v(t._s(t.title))])]),t._v(" "),n("v-col",{staticClass:"text-right",attrs:{cols:"12",sm:8}},[t.selectedManifests.length>0?n("v-chip",{staticClass:"ma-1",attrs:{color:"success"}},[t._v(t._s(t.selectedManifests.length)+" "+t._s(t.$t("selected")))]):t._e(),t._v(" "),t._e(),t._v(" "),n("v-btn",{staticClass:"ma-1",on:{click:t.checkAll}},[t._v(t._s(t.$t("check-all")))]),t._v(" "),t._e(),t._v(" "),n("v-btn",{staticClass:"ma-1",on:{click:t.clear}},[t._v(t._s(t.$t("clear")))]),t._v(" "),t._e(),t._v(" "),n("v-btn",{staticClass:"ma-1",attrs:{color:"primary"},on:{click:t.compare}},[t._v(t._s(t.$t("compare")))]),t._v(" "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({staticClass:"ma-1",attrs:{color:"primary",loading:t.loading,disabled:t.loading},on:{click:function(e){t.loading=!0,t.dwn()}}},r),[n("v-icon",[t._v("mdi-export")])],1)]}}])},[t._v(" "),n("span",[t._v(t._s(t.$t("export")))])]),t._v(" "),t._e(),t._v(" "),t.getFlag?t._e():n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({staticClass:"ma-1",attrs:{color:"primary"},on:{click:function(e){t.tagFormFlag=!0}}},r),[n("v-icon",[t._v("mdi-tag-plus")])],1)]}}],null,!1,3168641955)},[t._v(" "),n("span",[t._v(t._s(t.$t("tag-plus")))])]),t._v(" "),(t.getFlag,t._e()),t._v(" "),t.getFlag?t._e():n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({staticClass:"ma-1",attrs:{color:"error"},on:{click:function(e){t.deleteConfirmFlag=!0}}},r),[n("v-icon",[t._v("mdi-delete")])],1)]}}],null,!1,3406679556)},[t._v(" "),n("span",[t._v(t._s(t.$t("delete")))])]),t._v(" "),(t.getFlag,t._e())],1)],1),t._v(" "),t.collection.description?n("v-sheet",{staticClass:"pa-5 my-4",attrs:{color:"grey lighten-3"}},[t._v(t._s(t.collection.description))]):t._e(),t._v(" "),n("v-row",{staticClass:"mt-5"},t._l(t.reverseFilteredManifests,(function(e,r){return n("v-col",{key:"example-"+r,attrs:{cols:12,sm:4,md:3}},[e["@id"]?n("v-card",{attrs:{"no-body":""}},[n("a",{attrs:{href:t.getViewerUrl(e),target:"_blank"}}),t._v(" "),n("v-img",{staticClass:"grey lighten-2",staticStyle:{height:"200px"},attrs:{src:t.getThumbnail(e.thumbnail),contain:""}}),t._v(" "),n("div",{staticClass:"pa-4",staticStyle:{height:"150px","overflow-y":"auto"}},[n("h3",[n("a",{attrs:{href:t.getViewerUrl(e),target:"_blank"}},[t._v(t._s(t.getLabel(e.label)))])]),t._v(" "),e.attribution?n("div",{staticClass:"my-2"},[n("b",[t._v("Attribution: ")]),t._v(t._s(t.truncate(t.getAttribution(e.attribution),30))+"\n            ")]):t._e(),t._v(" "),e.license?n("div",{staticClass:"my-2"},[n("b",[t._v("License: ")]),t._v(t._s(t.getLicense(e.license))+"\n            ")]):t._e()]),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",[n("v-switch",{staticClass:"my-2",attrs:{inset:"","hide-details":"",value:e["@id"]},model:{value:t.selectedManifests,callback:function(e){t.selectedManifests=e},expression:"selectedManifests"}}),t._v(" "),n("v-spacer"),t._v(" "),t.getCjFlag(e)?n("v-btn",{attrs:{depressed:"",href:t.getCjUrl(e),target:"_blank"}},["en"==t.$i18n.locale?n("span",{staticClass:"mr-2"},[t._v("View at ")]):t._e(),t._v(" "),n("img",{attrs:{height:"24px",contain:"",src:"https://cultural.jp/img/icons/favicon-32.png"}}),"ja"==t.$i18n.locale?n("span",{staticClass:"ml-2"},[t._v("\n                で見る")]):t._e()]):t._e(),t._v(" "),n("v-spacer"),t._v(" "),n("v-menu",{attrs:{top:"","offset-y":"","close-on-content-click":!0},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({attrs:{depressed:"",icon:""}},r),[n("v-icon",[t._v("mdi-dots-horizontal")])],1)]}}],null,!0)},[t._v(" "),n("v-list",[n("v-list-item",{attrs:{href:e["@id"],target:"_blank"}},[n("v-list-item-icon",[n("img",{attrs:{height:"24px",src:"https://cultural.jp/img/icons/iiif-logo.svg"}})]),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{staticClass:"mr-2"},[t._v(t._s(t.$t("iiif_manifest")))])],1)],1),t._v(" "),t.getFlag?t._e():n("v-list-item",{on:{click:function(n){t.deleteConfirmFlag=!t.deleteConfirmFlag,t.selectedManifests=[e["@id"]]}}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-delete")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{staticClass:"mr-2"},[t._v(t._s(t.$t("delete")))])],1)],1),t._v(" "),t.getFlag?t._e():n("v-list-item",{on:{click:function(n){t.tagFormFlag=!t.tagFormFlag,t.setCurrentManifest(e)}}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-tag-plus")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{staticClass:"mr-2"},[t._v(t._s(t.$t("tag")))])],1)],1),t._v(" "),t._e()],1)],1)],1)],1):t._e()],1)})),1)],1),t._v(" "),n("v-dialog",{attrs:{persistent:"",width:"500"},model:{value:t.deleteConfirmFlag,callback:function(e){t.deleteConfirmFlag=e},expression:"deleteConfirmFlag"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v(t._s(t.$t("delete_item")))]),t._v(" "),n("v-card-text",[t._v(t._s(t.$t("delete_confirm")))]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{on:{click:function(e){t.deleteConfirmFlag=!1}}},[t._v(t._s(t.$t("cancel")))]),t._v(" "),n("v-btn",{attrs:{color:"error"},on:{click:function(e){t.deleteConfirmFlag=!1,t.rm()}}},[t._v(t._s(t.$t("delete")))])],1)],1)],1),t._v(" "),n("v-dialog",{attrs:{persistent:"",width:"600"},model:{value:t.tagFormFlag,callback:function(e){t.tagFormFlag=e},expression:"tagFormFlag"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v(t._s(t.$t("tag-edit"))),n("v-spacer"),n("v-btn",{attrs:{icon:""},on:{click:function(e){t.tagFormFlag=!1}}},[n("v-icon",[t._v("mdi-close")])],1)],1),t._v(" "),n("v-card-text",[n("v-text-field",{staticClass:"my-2",attrs:{outlined:"",clearable:"","clear-icon":"mdi-close-circle","hide-details":"",label:t.$t("comma")},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.trigger(e)}},scopedSlots:t._u([{key:"append-outer",fn:function(){},proxy:!0}]),model:{value:t.tagStr,callback:function(e){t.tagStr=e},expression:"tagStr"}}),t._v(" "),n("v-btn",{staticClass:"ma-1",attrs:{depressed:"",color:"primary"},on:{click:function(e){return t.saveTag(t.tagStr,1==t.selectedManifests.length)}}},[t._v(t._s(t.$t("save")))]),t._v(" "),n("v-btn",{staticClass:"ma-1",attrs:{depressed:"",color:"error"},on:{click:function(e){return t.saveTag("",!0)}}},[t._v(t._s(t.$t("delete")))])],1)],1)],1),t._v(" "),n("v-dialog",{attrs:{persistent:"",width:"400"},model:{value:t.exportFlag,callback:function(e){t.exportFlag=e},expression:"exportFlag"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v(t._s(t.$t("export"))),n("v-spacer"),n("v-btn",{attrs:{icon:""},on:{click:function(e){t.exportFlag=!1}}},[n("v-icon",[t._v("mdi-close")])],1)],1),t._v(" "),n("v-card-text",{staticClass:"text-center"},[n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[""!=t.jsonUrl?n("v-btn",{attrs:{depressed:"",icon:"",href:t.jsonUrl,target:"_blank"}},[n("img",t._g({staticClass:"ma-2",attrs:{height:"24px",src:"https://cultural.jp/img/icons/iiif-logo.svg"}},r))]):t._e()]}}])},[t._v(" "),n("span",[t._v(t._s(t.$t("iiif_collection")))])]),t._v(" "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[""!=t.iaUrl?n("v-btn",{attrs:{depressed:"",icon:"",href:t.iaUrl,target:"_blank"}},[n("img",t._g({staticClass:"ma-2",attrs:{height:"24px",src:"https://www.kanzaki.com/favicon.ico"}},r))]):t._e()]}}])},[t._v(" "),n("span",[t._v(t._s(t.$t("Image Annotator")))])]),t._v(" "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[""!=t.smUrl?n("v-btn",{staticClass:"ma-1",attrs:{color:"primary",icon:"",href:t.smUrl,target:"_blank"}},[n("img",t._g({staticClass:"ma-2",attrs:{height:"24px",src:"https://teotihuacan.cs.nii.ac.jp/self-museum/favicon.ico"}},r))]):t._e()]}}])},[t._v(" "),n("span",[t._v(t._s(t.$t("self_museum")))])]),t._v(" "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[""!=t.uvUrl?n("v-btn",{attrs:{depressed:"",icon:"",href:t.uvUrl,target:"_blank"}},[n("img",t._g({staticClass:"ma-2",attrs:{height:"24px",src:"https://cultural.jp/img/icons/uv.jpg"}},r))]):t._e()]}}])},[t._v(" "),n("span",[t._v(t._s("Universal Viewer"))])])],1)],1)],1),t._v(" "),n("v-snackbar",{attrs:{timeout:t.timeout,color:t.color},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n    "+t._s(t.text)+"\n\n    "),n("v-btn",{attrs:{icon:""},on:{click:function(e){t.snackbar=!1}}},[n("v-icon",[t._v("mdi-close")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;S()(component,{VBtn:x.a,VCard:j.a,VCardActions:$.a,VCardText:$.b,VCardTitle:$.c,VChip:M.a,VCol:V.a,VContainer:O.a,VDialog:T.a,VDivider:U.a,VIcon:L.a,VImg:R.a,VList:N.a,VListGroup:A.a,VListItem:I.a,VListItemContent:J.a,VListItemIcon:D.a,VListItemTitle:J.b,VMenu:H.a,VRow:z.a,VSheet:B.a,VSnackbar:P.a,VSpacer:E.a,VSwitch:K.a,VTextField:X.a,VTooltip:G.a})}}]);