(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{258:function(e,t,n){var content=n(275);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(28).default)("29ad4783",content,!0,{sourceMap:!1})},274:function(e,t,n){"use strict";n(258)},275:function(e,t,n){var l=n(27)(!1);l.push([e.i,"[dir=ltr] .account_details_p[data-v-b014c9f2]{text-align:left}[dir=rtl] .account_details_p[data-v-b014c9f2]{text-align:right}.account_details_p[data-v-b014c9f2]{width:100%;display:inline-block;font-size:16px;font-weight:600}",""]),e.exports=l},299:function(e,t,n){"use strict";n.r(t);n(20);var l=n(2),o=(n(31),n(96),{data:function(){var e=this;return{search:"",viewModal:!1,deleteModal:!1,loading:!1,sending:!1,isCollapsed:!1,UpdateValue:{indexNumber:null,id:null,name:""},columns1:[{title:"Image",slot:"image",width:110},{title:"Project Name",key:"project_name",width:110},{title:"Title",key:"title",minWidth:150},{title:"Subtitle",key:"title",minWidth:150},{title:"Description",slot:"details",minWidth:150},{title:"Action",key:"action",width:200,align:"center",render:function(t,n){return t("div",[t("Button",{props:{type:"warning",size:"small",ghost:!0},style:{marginRight:"5px"},on:{click:function(){e.showEdit(n.index)}}},"Edit"),t("Button",{props:{type:"error",size:"small",ghost:!0},on:{click:function(){e.showRemove(n.index)}}},"Delete")])}}],detailsColum:[{title:"-----",key:"name"},{title:"-----",key:"value"}],detailsItem:{title:"",data:[{name:"Project Name",value:"-----"},{name:"Title",value:"-----"},{name:"Subtitle",value:"-----"},{name:"How To Complete",value:"------"},{name:"Idea Generate",value:"-----"},{name:"Reasearch Sketching",value:"-----"},{name:"Launced Project",value:"------"},{name:"Result Summery",value:"----"},{name:"Description",value:"-----"},{name:"Clients",value:"-----"},{name:"Budget",value:"-----"},{name:"Duration",value:"-----"},{name:"Date",value:"-----"},{name:"Image",value:"-----"}]},data1:[],modalImageUrl:"",visible:!1,http:"http://127.0.0.1:3333/uploads/"}},computed:{rotateIcon:function(){return["menu-icon",this.isCollapsed?"rotate-icon":""]},menuitemClasses:function(){return["menu-item",this.isCollapsed?"collapsed-menu":""]}},methods:{handleView:function(e){this.modalImageUrl=e,this.visible=!0},showEdit:function(e){this.$router.push("/projects/".concat(this.data1[e].id))},showView:function(e){this.detailsItem.data=[],this.detailsItem.title=this.data1[e].type;var t={name:"Project Name",value:this.data1[e].project_name};this.detailsItem.data.push(t),t={name:"Title",value:this.data1[e].title},this.detailsItem.data.push(t),t={name:"Subtitle",value:this.data1[e].subtitle},this.detailsItem.data.push(t),t={name:"How To Complete",value:this.data1[e].how_to_complete},this.detailsItem.data.push(t),t={name:"Idea Generate",value:this.data1[e].idea_generate},this.detailsItem.data.push(t),t={name:"Reasearch Sketching",value:this.data1[e].reasearch_sketching},this.detailsItem.data.push(t),t={name:"Launced Project",value:this.data1[e].launced_project},this.detailsItem.data.push(t),t={name:"Result Summery",value:this.data1[e].result_summery},this.detailsItem.data.push(t),t={name:"Description",value:this.data1[e].description},this.detailsItem.data.push(t),t={name:"Clients",value:this.data1[e].clients},this.detailsItem.data.push(t),t={name:"Budget",value:this.data1[e].budget},this.detailsItem.data.push(t),t={name:"Duration",value:this.data1[e].duration},this.detailsItem.data.push(t),t={name:"Date",value:this.data1[e].date},this.detailsItem.data.push(t),t={name:"Image",value:this.data1[e].image},this.detailsItem.data.push(t),this.viewModal=!0},showRemove:function(e){this.UpdateValue.name=this.data1[e].projectName,this.UpdateValue.id=this.data1[e].id,this.UpdateValue.indexNumber=e,this.deleteModal=!0},handleRemove:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.data1[e.UpdateValue.indexNumber].image,t.next=3,e.callApi("post","/app/delete_image",{imageName:n});case 3:t.sent;case 4:case"end":return t.stop()}}),t)})))()},remove:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.sending=!0,e.handleRemove(),n=e.UpdateValue.id,t.next=5,e.callApi("delete","/app/delete_project/".concat(n));case 5:200==t.sent.status?(e.s("Great!","Removed successfully!"),e.getProjects()):e.e("Oops!","Something went wrong, please try again!"),e.deleteModal=!1,e.sending=!1;case 9:case"end":return t.stop()}}),t)})))()},getProjects:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.callApi("get","/app/get_project?search=".concat(e.search));case 3:200==(n=t.sent).status?e.data1=n.data:e.e("Oops!","Something went wrong, please try again!"),e.loading=!1;case 6:case"end":return t.stop()}}),t)})))()}},created:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getProjects();case 2:case"end":return t.stop()}}),t)})))()}}),r=(n(274),n(26)),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("Breadcrumb",[t("BreadcrumbItem",{attrs:{to:"/"}},[e._v("Dashboard")]),e._v(" "),t("BreadcrumbItem",[e._v("Projects")])],1),e._v(" "),t("Button",{staticClass:"my-3",attrs:{type:"primary"},on:{click:function(t){return e.$router.push("/projects/add_project")}}},[e._v("\n    Add Project")]),e._v(" "),t("Table",{attrs:{border:"",loading:e.loading,columns:e.columns1,data:e.data1},scopedSlots:e._u([{key:"image",fn:function(n){var l=n.index;return[t("div",{staticClass:"demo-upload-list"},[t("img",{attrs:{src:"".concat(e.http+e.data1[l].image)}}),e._v(" "),t("div",{staticClass:"demo-upload-list-cover"},[t("Icon",{attrs:{type:"ios-eye-outline"},nativeOn:{click:function(t){return e.handleView("".concat(e.http+e.data1[l].image))}}})],1)])]}},{key:"details",fn:function(n){var l=n.index;return[t("Button",{attrs:{type:"warning",size:"small",ghost:""},on:{click:function(t){return e.showView(l)}}},[e._v("Show Details")])]}}])},[e._v(" "),e._v(" "),t("template",{slot:"loading"},[t("h4",{staticClass:"table-loading"},[t("i",{staticClass:"ivu-load-loop ivu-icon ivu-icon-ios-loading"}),t("span",{staticStyle:{"margin-left":"10px"}},[e._v("Loading Data...")])])])],2),e._v(" "),t("Modal",{attrs:{width:"360"},model:{value:e.deleteModal,callback:function(t){e.deleteModal=t},expression:"deleteModal"}},[t("p",{staticStyle:{color:"#f60","text-align":"center"},attrs:{slot:"header"},slot:"header"},[t("Icon",{attrs:{type:"close"}}),e._v(" "),t("span",[e._v(" Delete "+e._s(e.UpdateValue.name))])],1),e._v(" "),t("div",[t("div",{staticStyle:{"margin-bottom":"20px"}},[e._v("\n        Are you sure you want delete "+e._s(e.UpdateValue.name)+"\n      ")])]),e._v(" "),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("Button",{attrs:{type:"error",size:"large",long:"",loading:e.sending},on:{click:e.remove}},[e.loading?t("span",[e._v("Deleting...")]):t("span",[e._v("Delete")])])],1)]),e._v(" "),t("Modal",{attrs:{title:e.detailsItem.title,"footer-hide":!0},model:{value:e.viewModal,callback:function(t){e.viewModal=t},expression:"viewModal"}},[t("div",{staticClass:"_item_details"},[t("Table",{attrs:{border:"",columns:e.detailsColum,data:e.detailsItem.data,"show-header":!1}})],1)]),e._v(" "),t("Modal",{attrs:{title:"View Image"},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[e.visible?t("img",{staticStyle:{width:"100%"},attrs:{src:e.modalImageUrl}}):e._e()])],1)}),[],!1,null,"b014c9f2",null);t.default=component.exports}}]);