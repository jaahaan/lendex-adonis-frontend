<template>
  <div class="_content">
    <div class="common-page-card my-account">
      <Form>
        <Row :gutter="24">
          <Col span="24" v-if="!isEdit">
            <Button type="primary" @click="isEdit = true">Edit</Button>
          </Col>
          <br />

          <Col span="12">
            <FormItem label="Name" :error="errorMessages.name" :required="true">
              <Input
                type="text"
                placeholder="Name"
                v-model="formValue.name"
                :disabled="!isEdit"
              ></Input>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem
              label="Username"
              :error="errorMessages.username"
              :required="true"
            >
              <Input
                type="text"
                placeholder="User Name"
                v-model="formValue.username"
                :disabled="!isEdit"
              ></Input>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem
              label="Email"
              :error="errorMessages.email"
              :required="true"
            >
              <Input
                type="text"
                placeholder="Email"
                v-model="formValue.email"
                :disabled="!isEdit"
              ></Input>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem
              label="Contact"
              :error="errorMessages.contact"
              :required="true"
            >
              <Input
                type="text"
                placeholder="Contact"
                v-model="formValue.contact"
                :disabled="!isEdit"
              ></Input>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem
              label="Designation"
              :error="errorMessages.designation"
              :required="true"
            >
              <Input
                type="text"
                placeholder="Designation"
                v-model="formValue.designation"
                :disabled="!isEdit"
              ></Input>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="Bio" :error="errorMessages.bio" :required="true">
              <Input
                type="text"
                placeholder="Bio"
                v-model="formValue.bio"
                :disabled="!isEdit"
              ></Input>
            </FormItem>
          </Col>

          <Col span="12">
            <FormItem
              label="Facebook"
              :error="errorMessages.facebook"
              :required="true"
            >
              <Input
                type="text"
                placeholder="Facebook"
                v-model="formValue.facebook"
                :disabled="!isEdit"
              ></Input>
            </FormItem>
          </Col>

          <Col span="12">
            <FormItem
              label="LinkedIn"
              :error="errorMessages.linkedin"
              :required="true"
            >
              <Input
                type="text"
                placeholder="LinkedIn"
                v-model="formValue.linkedin"
                :disabled="!isEdit"
              ></Input>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem
              label="Website"
              :error="errorMessages.website"
              :required="true"
            >
              <Input
                type="text"
                placeholder="Website"
                v-model="formValue.website"
                :disabled="!isEdit"
              ></Input>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem
              label="Video"
              :error="errorMessages.video"
              :required="true"
            >
              <Input
                type="text"
                placeholder="Video"
                v-model="formValue.video"
                :disabled="!isEdit"
              ></Input>
            </FormItem>
          </Col>

          <Col span="24">
            <FormItem label="Resume:">
              <div v-if="isEdit && !formValue.resume">
                <Upload
                  ref="upload"
                  :multiple="false"
                  :show-upload-list="true"
                  :headers="crfObj"
                  :on-success="handleSuccess"
                  :max-size="60048"
                  :format="['pdf', 'docx', 'txt', 'zip']"
                  :on-format-error="handleFormatError"
                  :on-remove="handleRemove"
                  type="drag"
                  action="/app/upload"
                >
                  <div class="profile-main-btn">
                    <i class="fa-solid fa-cloud-arrow-up"></i>
                    Upload Resume
                  </div>
                </Upload>
              </div>
              <div class="attachmentName">
                <div v-if="!formValue.resume">
                  <span v-if="!isEdit">Not Available</span>
                </div>
                <div v-else>
                  <span>{{ formValue.resume }}</span>
                  <Icon
                    v-if="isEdit"
                    type="ios-trash-outline"
                    @click.native="handleRemove"
                  ></Icon>
                </div>
              </div>
            </FormItem>
          </Col>
          <Col span="24">
            <div class="demo-upload-list" v-if="formValue.image">
              <img :src="`${http + formValue.image}`" />
              <div class="demo-upload-list-cover">
                <Icon
                  type="ios-trash-outline"
                  @click.native="handleImageRemove"
                  v-if="isEdit"
                ></Icon>
                <Icon
                  type="ios-eye-outline"
                  @click.native="handleView(`${http + formValue.image}`)"
                ></Icon>
              </div>
            </div>

            <div class="mt-3 mb-3" v-else-if="isEdit && !formValue.image">
              <Upload
                ref="formValueUploads"
                type="drag"
                :headers="crfObj"
                :on-success="handleImgSuccess"
                :format="['jpg', 'jpeg', 'png']"
                :max-size="20048"
                :on-format-error="handleFormatError"
                :on-exceeded-size="handleMaxSize"
                action="http://127.0.0.1:3333/app/upload"
                class="upload"
              >
                <div class="camera-icon">
                  <Icon type="ios-camera" size="20"></Icon>
                  Upload Image
                </div>
              </Upload>
            </div>
          </Col>
          <Col span="24" v-if="isEdit">
            <Button
              type="primary"
              :loading="loading"
              @click="save"
              style="margin-right: 10px"
            >
              <span v-if="!loading">Add</span>
              <span v-else>Please wait...</span>
            </Button>
            <Button @click="isEdit = false">Cancel</Button>
          </Col>
        </Row>
      </Form>
    </div>
    <Modal title="View Image" v-model="visible">
      <img :src="modalImageUrl" v-if="visible" style="width: 100%" />
    </Modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      sending: false,
      isEdit: false,
      editModal: false,
      crfObj: {},
      // crfObj: {
      //     "X-CSRF-TOKEN": document
      //         .querySelector('meta[name="csrf-token"]')
      //         .getAttribute("content"),
      // },

      pattern:
        /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
      // allStore:[],

      formValue: {
        id: "",
        image: "",
        name: "",
        username: "",
        password: "",
        email: "",
        address: "",
        designation: "",
        bio: "",
        resume: "",
        video: "",
        facebook: "",
        website: "",
        linkedin: "",
      },
      errorMessages: {
        name: "",
        image: "",
        username: "",
        password: "",
        email: "",
        contact: "",
      },
      updateValue: {
        id: "",
        old_password: "",
        password: "",
        confirm_password: "",
      },
      updateErrorMessage: {
        old_password: "",
        password: "",
        confirm_password: "",
      },
      http: "http://127.0.0.1:3333/uploads/",
      modalImageUrl: "",
      visible: false,
    };
  },

  methods: {
    handleView(item) {
      this.modalImageUrl = item;
      this.visible = true;
    },
    async handleSuccess(res, file) {
      this.formValue.resume = `${res}`;
    },
    async handleRemove(file, fileList) {
      const res = await this.callApi("post", "/app/delete_image", {
        imageName: this.formValue.resume,
      });
      if (res.status == 200) {
        this.formValue.resume = "";
      }
    },
    handleImgSuccess(res, file) {
      res = `${res}`;
      this.formValue.image = res;
    },
    handleResSuccess(res, file) {
      res = `${res}`;
      this.formValue.resume = res;
    },
    async handleVidSuccess(res, file) {
      this.formValue.video = `${res}`;
    },
    async handleVidRemove(file, fileList) {
      const res = await this.callApi("post", "/app/delete_image", {
        imageName: this.formValue.video,
      });
      if (res.status == 200) {
        this.formValue.video = "";
      }
    },
    handleError(res, file) {
      this.$Notice.warning({
        title: "The file format is incorrect",
        desc: `${
          file.errors.file.length
            ? file.errors.file[0]
            : "Something went wrong!"
        }`,
      });
    },
    handleFormatError(file) {
      this.$Notice.warning({
        title: "The file format is incorrect",
        desc:
          "File format of " +
          file.name +
          " is incorrect, please select jpg or png.",
      });
    },
    handleMaxSize(file) {
      this.$Notice.warning({
        title: "Exceeding file size limit",
        desc: "File  " + file.name + " is too large, no more than 2M.",
      });
    },
    async handleImageRemove() {
      let name;
      name = this.formValue.image;
      this.formValue.image = "";

      // this.$refs.formValueUploads.clearFiles();
      const res = await this.callApi("post", "/app/delete_image", {
        imageName: name,
      });
      // if (res.status != 200) {
      //     this.formValue.image = image;
      //     this.swr();
      // }
    },
    async handleResRemove() {
      let name;

      name = this.formValue.resume;
      this.formValue.resume = "";

      // this.$refs.formValueUploads.clearFiles();
      const res = await this.callApi("post", "/app/delete_image", {
        imageName: name,
      });
    },

    clearErrorMessages() {
      this.updateErrorMessage = {
        old_password: "",
        password: "",
        confirm_password: "",
      };
    },

    async save() {
      let validation = true;
      this.clearErrorMessages();
      if (this.formValue.name.trim() == "") {
        this.errorMessages.name = "Name is Required";
        validation = false;
      }
      if (this.formValue.username.trim() == "") {
        this.errorMessages.username = "Username is Required";
        validation = false;
      }
      if (this.formValue.email.trim() == "") {
        this.errorMessages.email = "Email is Required";
        validation = false;
      }

      if (validation == false) return this.$Message.error("Validation ");
      this.sending = true;
      const response = await this.callApi(
        "post",
        "/app/updateInfo",
        this.formValue
      );
      if (response.status == 200) {
        this.s("Great!", "Info Updated");
        this.isEdit = false;
      } else if (response.status == 402) {
        this.e(response.data.message);
      } else this.swr();
      this.sending = false;
    },
    async getUser() {
      const response = await this.callApi("get", `/app/getUser`);
      if (response.status == 200) {
        this.formValue = response.data;
      } else this.swr();
    },
  },
  async created() {
    this.getUser();
  },
};
</script>
