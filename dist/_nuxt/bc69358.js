(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{329:function(e,t,r){"use strict";r.r(t);var n=r(2),o=(r(20),r(31),{data:function(){return{loading:!1,sending:!1,formValue:{image:"",hover_image:""},http:"http://127.0.0.1:3333/uploads/",modalImageUrl:"",visible:!1}},methods:{handleView:function(e){this.modalImageUrl=e,this.visible=!0},handleSuccessImage:function(e,t){e="".concat(e),this.formValue.image=e},handleSuccesshover_image:function(e,t){e="".concat(e),this.formValue.hover_image=e},handleRemoveImage:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.formValue.image,e.formValue.image="",t.next=4,e.callApi("post","/app/delete_image",{imageName:r});case 4:t.sent;case 5:case"end":return t.stop()}}),t)})))()},handleRemovehover_image:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.formValue.hover_image,e.formValue.hover_image="",t.next=4,e.callApi("post","/app/delete_image",{imageName:r});case 4:t.sent;case 5:case"end":return t.stop()}}),t)})))()},handleError:function(e,t){this.$Notice.warning({title:"The file format is incorrect",desc:"".concat(t.errors.file.length?t.errors.file[0]:"Something went wrong!")})},handleFormatError:function(e){this.$Notice.warning({title:"The file format is incorrect",desc:"File format of "+e.name+" is incorrect, please select jpg or png."})},handleMaxSize:function(e){this.$Notice.warning({title:"Exceeding file size limit",desc:"File  "+e.name+" is too large, no more than 2M."})},save:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.callApi("put","/app/update_trusted_company",e.formValue);case 3:if(200===(r=t.sent).status||201==r.status)e.loading=!1,e.s("Updated successfully!"),e.$router.push("/trusted_company");else if(422==e.status)for(n in response.data)e.e(response.data[n]);else e.loading=!1,e.swr();case 5:case"end":return t.stop()}}),t)})))()},clearErrorMessages:function(){this.errorMessages={title:"",icon:""}},getDetail:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.callApi("get","/app/get_trusted_company/".concat(e.$route.params.id));case 3:200==(r=t.sent).status?e.formValue=r.data:e.swr(),e.loading=!1;case 6:case"end":return t.stop()}}),t)})))()}},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getDetail();case 2:case"end":return t.stop()}}),t)})))()}}),c=r(26),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("div",[t("Breadcrumb",[t("BreadcrumbItem",{attrs:{to:"/"}},[e._v("Dashboard")]),e._v(" "),t("BreadcrumbItem",{attrs:{to:"/trusted_company"}},[e._v("Trusted Companies")]),e._v(" "),t("BreadcrumbItem",[e._v("Edit Trusted Company")])],1)],1),e._v(" "),t("div",{staticClass:"common-page-card"},[t("Form",[t("Row",{attrs:{gutter:24}},[t("Col",{attrs:{xs:24,sm:24,md:12,lg:12}},[t("h6",{staticClass:"mb-2"},[e._v("Image")]),e._v(" "),e.formValue.image?t("div",{staticClass:"demo-upload-list"},[t("img",{attrs:{src:"".concat(e.http+e.formValue.image)}}),e._v(" "),t("div",{staticClass:"demo-upload-list-cover"},[t("Icon",{attrs:{type:"ios-eye-outline"},nativeOn:{click:function(t){return e.handleView("".concat(e.http+e.formValue.image))}}}),e._v(" "),t("Icon",{attrs:{type:"ios-trash-outline"},nativeOn:{click:function(t){return e.handleRemoveImage.apply(null,arguments)}}})],1)]):e.formValue.image?e._e():t("div",{staticClass:"mt-3 mb-3"},[t("Upload",{ref:"formValueUploads",staticClass:"upload",attrs:{type:"drag",headers:e.crfObj,"on-success":e.handleSuccessImage,format:["jpg","jpeg","png"],"max-size":20048,"on-format-error":e.handleFormatError,"on-exceeded-size":e.handleMaxSize,action:"http://127.0.0.1:3333/app/upload"}},[t("div",{staticClass:"camera-icon"},[t("Icon",{attrs:{type:"ios-camera",size:"20"}}),e._v("\n                Upload Image\n              ")],1)])],1)]),e._v(" "),t("Col",{attrs:{xs:24,sm:24,md:12,lg:12}},[t("h6",{staticClass:"mb-2"},[e._v("Hover Image")]),e._v(" "),e.formValue.hover_image?t("div",{staticClass:"demo-upload-list"},[t("img",{attrs:{src:"".concat(e.http+e.formValue.hover_image)}}),e._v(" "),t("div",{staticClass:"demo-upload-list-cover"},[t("Icon",{attrs:{type:"ios-eye-outline"},nativeOn:{click:function(t){return e.handleView("".concat(e.http+e.formValue.hover_image))}}}),e._v(" "),t("Icon",{attrs:{type:"ios-trash-outline"},nativeOn:{click:function(t){return e.handleRemovehover_image.apply(null,arguments)}}})],1)]):e.formValue.hover_image?e._e():t("div",{staticClass:"mt-3 mb-3"},[t("Upload",{ref:"formValueUploads",staticClass:"upload",attrs:{type:"drag",headers:e.crfObj,"on-success":e.handleSuccesshover_image,format:["jpg","jpeg","png"],"max-size":20048,"on-format-error":e.handleFormatError,"on-exceeded-size":e.handleMaxSize,action:"http://127.0.0.1:3333/app/upload"}},[t("div",{staticClass:"camera-icon"},[t("Icon",{attrs:{type:"ios-camera",size:"20"}}),e._v("\n                Upload Image\n              ")],1)])],1)]),e._v(" "),t("Col",{attrs:{span:"24"}},[t("Button",{staticStyle:{"margin-right":"10px"},attrs:{type:"primary",loading:e.loading},on:{click:e.save}},[e.loading?t("span",[e._v("Please wait...")]):t("span",[e._v("Add")])]),e._v(" "),t("Button",{on:{click:function(t){return e.$router.push("/trusted_company")}}},[e._v("Cancel")])],1)],1)],1)],1),e._v(" "),t("Modal",{attrs:{title:"View Image"},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[e.visible?t("img",{staticStyle:{width:"100%"},attrs:{src:e.modalImageUrl}}):e._e()])],1)}),[],!1,null,null,null);t.default=component.exports}}]);