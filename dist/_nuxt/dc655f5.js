(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{306:function(e,t,r){"use strict";r.r(t);var n=r(2),o=(r(31),{data:function(){return{loading:!1,sending:!1,formValue:{happyClients:"",projectComplete:"",yearsOfExperience:""}}},methods:{save:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.callApi("post","/app/add_count",e.formValue);case 3:if(201===t.sent.status)e.loading=!1,e.s("Added successfully!"),e.$router.push("/count");else if(422==e.status)for(r in response.data)e.e(response.data[r]);else e.loading=!1,e.swr();case 5:case"end":return t.stop()}}),t)})))()}},created:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}}),l=r(26),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("div",[t("Breadcrumb",[t("BreadcrumbItem",{attrs:{to:"/"}},[e._v("Dashboard")]),e._v(" "),t("BreadcrumbItem",{attrs:{to:"/count"}},[e._v("Counts")]),e._v(" "),t("BreadcrumbItem",[e._v("Add Count")])],1)],1),e._v(" "),t("div",{staticClass:"common-page-card"},[t("Form",{attrs:{"label-position":"top"}},[t("Row",{attrs:{gutter:24}},[t("Col",{attrs:{span:"12"}},[t("FormItem",{attrs:{label:"Happy Clients"}},[t("Input",{attrs:{type:"number"},model:{value:e.formValue.happyClients,callback:function(t){e.$set(e.formValue,"happyClients",t)},expression:"formValue.happyClients"}})],1)],1),e._v(" "),t("Col",{attrs:{span:"12"}},[t("FormItem",{attrs:{label:"Project Complete"}},[t("Input",{attrs:{type:"number"},model:{value:e.formValue.projectComplete,callback:function(t){e.$set(e.formValue,"projectComplete",t)},expression:"formValue.projectComplete"}})],1)],1),e._v(" "),t("Col",{attrs:{span:"12"}},[t("FormItem",{attrs:{label:"Years of Experience"}},[t("Input",{attrs:{type:"number"},model:{value:e.formValue.yearsOfExperience,callback:function(t){e.$set(e.formValue,"yearsOfExperience",t)},expression:"formValue.yearsOfExperience"}})],1)],1),e._v(" "),t("Col",{attrs:{span:"24"}},[t("Button",{staticStyle:{"margin-right":"10px"},attrs:{type:"primary",loading:e.loading},on:{click:e.save}},[e.loading?t("span",[e._v("Please wait...")]):t("span",[e._v("Add")])]),e._v(" "),t("Button",{on:{click:function(t){return e.$router.push("/count")}}},[e._v("Cancel")])],1)],1)],1)],1)])}),[],!1,null,null,null);t.default=component.exports}}]);