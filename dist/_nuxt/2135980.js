(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{317:function(e,t,r){"use strict";r.r(t);r(20);var n=r(2),o=(r(31),{data:function(){return{loading:!1,sending:!1,parentMenu:[],formValue:{id:0,type:"",title:"",name:"",path:"",title_id:"",icon:"",is_show:1},errorMessages:{type:"",title:"",name:"",path:"",icon:""}}},methods:{getRoutersAfterUpdate:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.callApi("get","/app/router/autorized/sidebar");case 3:200==(r=t.sent).status&&e.$store.commit("setSideBar",r.data),e.loading=!1;case 6:case"end":return t.stop()}}),t)})))()},addRouter:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=!0,e.clearErrorMessages(),""==e.formValue.type&&(e.errorMessages.type="Type is required!",r=!1),null==e.formValue.title_id&&(e.formValue.title_id=""),""==e.formValue.title.trim()&&(e.errorMessages.title="Title is required!",r=!1),""==e.formValue.name.trim()&&(r=!1,e.errorMessages.name="Name is required!"),"menu"!=e.formValue.type||e.formValue.path||(e.errorMessages.path="Path is required!",r=!1),0!=r){t.next=9;break}return t.abrupt("return",e.$Message.error("Validation Fail!"));case 9:return e.loading=!0,t.next=12,e.callApi("put","/app/update_router",e.formValue);case 12:if(200===(n=t.sent).status||201==n.status)e.loading=!1,e.s("Router Updated successfully!"),e.getRoutersAfterUpdate(),e.$router.push("/routers");else if(422==e.status)for(o in response.data);else e.loading=!1;case 14:case"end":return t.stop()}}),t)})))()},clearErrorMessages:function(){this.errorMessages={type:"",title:"",name:"",path:"",icon:""}},getRouterDetail:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.callApi("get","/app/get_router/".concat(e.$route.params.id));case 3:200==(r=t.sent).status&&(e.changeParentMenu(),e.formValue=r.data),e.loading=!1;case 6:case"end":return t.stop()}}),t)})))()},changeParentMenu:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.callApi("get","/app/getParentMenu");case 2:200==(r=e.sent).status&&(t.parentMenu=r.data);case 4:case"end":return e.stop()}}),e)})))()}},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getRouterDetail();case 2:case"end":return t.stop()}}),t)})))()}}),l=r(26),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("div",[t("Breadcrumb",[t("BreadcrumbItem",{attrs:{to:"/"}},[e._v("Dashboard")]),e._v(" "),t("BreadcrumbItem",{attrs:{to:"/routers"}},[e._v("Routers")]),e._v(" "),t("BreadcrumbItem",[e._v("Add Router")])],1)],1),e._v(" "),t("div",{staticClass:"common-page-card"},[t("Form",[t("Row",{attrs:{gutter:16}},[t("Col",{attrs:{xs:24,sm:24,md:12,lg:12}},[t("FormItem",{attrs:{label:"Parent ID"}},[t("Select",{attrs:{placeholder:"Select Parent Menu",filterable:"",clearable:""},on:{"on-change":e.changeParentMenu},model:{value:e.formValue.title_id,callback:function(t){e.$set(e.formValue,"title_id",t)},expression:"formValue.title_id"}},e._l(e.parentMenu,(function(r,i){return t("Option",{key:i,attrs:{value:r.id}},[e._v(e._s(r.title))])})),1)],1)],1),e._v(" "),t("Col",{attrs:{xs:24,sm:24,md:12,lg:12}},[t("FormItem",{attrs:{error:e.errorMessages.type,required:!0,label:"Type"}},[t("Select",{attrs:{placeholder:"Type"},model:{value:e.formValue.type,callback:function(t){e.$set(e.formValue,"type",t)},expression:"formValue.type"}},[t("Option",{attrs:{value:"submenu"}},[e._v("Submenu")]),e._v(" "),t("Option",{attrs:{value:"menu"}},[e._v("Menu")])],1)],1)],1),e._v(" "),t("Col",{attrs:{xs:24,sm:24,md:12,lg:12}},[t("FormItem",{attrs:{error:e.errorMessages.title,required:!0,label:"Title"}},[t("Input",{attrs:{type:"text",placeholder:"Title"},model:{value:e.formValue.title,callback:function(t){e.$set(e.formValue,"title",t)},expression:"formValue.title"}})],1)],1),e._v(" "),t("Col",{attrs:{xs:24,sm:24,md:12,lg:12}},[t("FormItem",{attrs:{error:e.errorMessages.name,required:!0,label:"Name"}},[t("Input",{attrs:{type:"text",placeholder:"Name"},model:{value:e.formValue.name,callback:function(t){e.$set(e.formValue,"name",t)},expression:"formValue.name"}})],1)],1),e._v(" "),t("Col",{attrs:{xs:24,sm:24,md:12,lg:12}},[t("FormItem",{attrs:{error:e.errorMessages.path,label:"Path"}},[t("Input",{attrs:{placeholder:"Path"},model:{value:e.formValue.path,callback:function(t){e.$set(e.formValue,"path",t)},expression:"formValue.path"}})],1)],1),e._v(" "),t("Col",{attrs:{xs:24,sm:24,md:12,lg:12}},[t("FormItem",{attrs:{label:"Icon"}},[t("Input",{attrs:{placeholder:"Icon"},model:{value:e.formValue.icon,callback:function(t){e.$set(e.formValue,"icon",t)},expression:"formValue.icon"}})],1)],1),e._v(" "),t("Col",{attrs:{xs:24,sm:24,md:12,lg:12}},[t("FormItem",{attrs:{label:"Include In SideMenu : "}},[t("Checkbox",{attrs:{border:"",value:1==e.formValue.is_show},on:{"on-change":function(t){1==e.formValue.is_show?e.formValue.is_show=0:e.formValue.is_show=1}}})],1)],1),e._v(" "),t("Col",{attrs:{span:"24"}},[t("Button",{staticStyle:{"margin-right":"10px"},attrs:{type:"primary",loading:e.loading},on:{click:e.addRouter}},[e.loading?t("span",[e._v("Please wait...")]):t("span",[e._v("Add")])]),e._v(" "),t("Button",{on:{click:function(t){return e.$router.push("/routers")}}},[e._v("Cancel")])],1)],1)],1)],1)])}),[],!1,null,null,null);t.default=component.exports}}]);