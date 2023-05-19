<template>
  <div>
    <section class="signIn-section pt-50 pb-50">
      <div class="signIn-section--card">
        <!-- <div class="signIn-section--card-logo">
          <nuxt-link to="/">
            <img src="/assets/img/brand.png" alt="Brand" />
          </nuxt-link>
        </div> -->
        <div class="signIn-section--card-input">
          <form v-on:submit.prevent>
            <h4>Sign Up</h4>
            <label class="form-header">Full Name</label>
            <div class="custom-input__group">
              <i class="custom-input__prepend"><i class="lni lni-user"></i></i>
              <input
                type="text"
                placeholder="Full Name"
                class="custom-input__field"
                v-model="data.name"
              />
            </div>

            <label class="form-header">Email</label>
            <div class="custom-input__group">
              <i class="custom-input__prepend"
                ><i class="lni lni-envelope"></i
              ></i>
              <input
                type="email"
                placeholder="Email"
                class="custom-input__field"
                v-model="data.email"
              />
            </div>

            <label class="form-header">Password</label>
            <div class="custom-input__group">
              <i class="custom-input__prepend"
                ><i class="lni lni-lock-alt"></i
              ></i>
              <input
                type="password"
                placeholder="Password"
                class="custom-input__field"
                v-model="data.password"
              />
            </div>
            <label class="form-header">Confirm Password</label>
            <div class="custom-input__group">
              <i class="custom-input__prepend"
                ><i class="lni lni-lock-alt"></i
              ></i>
              <input
                type="password"
                placeholder="Confirm Password"
                class="custom-input__field"
                v-model="data.password_confirmation"
              />
            </div>

            <button
              type="submit"
              @click="register"
              :disabled="isLoading"
              :loading="isLoading"
            >
              {{ isLoading ? "Signing Up..." : "Sign Up" }}
            </button>

            <p>
              Already have an account ?
              <nuxt-link to="/signIn">Sign In </nuxt-link>
            </p>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<

<script>
export default {
  components: {},
  data() {
    return {
      data: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
      isLoading: false,
      errors: [],
      authInfo: "",
    };
  },

  methods: {
    async register() {
      // if (this.name == "" || this.name.trim() == "")
      //   return this.e("First Name is required!");
      // if (this.lastName == "" || this.lastName.trim() == "")
      //   return this.e("Last Name is required!");
      // if (this.data.email == "" || this.data.email.trim() == "")
      //   return this.e("Email is required!");

      // if (this.data.contact == "" || this.data.contact.trim() == "")
      //   return this.e("Phone Number is required!");
      // if (this.data.contact.length !== 11)
      //   return this.e("Phone Number digit is not 11 !");
      // if (this.data.password.trim() == "")
      //   return this.e("Password is required");
      // if (this.data.password.trim() !== this.data.password_confirmation.trim())
      //   return this.e("Confirm Password Mismatch!!");
      // if (this.$refs.selected.checked == false) {
      //   return this.e("You have to accept our terms and conditions");
      // }

      let formValue = {
        name: this.data.name,
        email: this.data.email,
        contact: this.data.contact,
        password: this.data.password,
        password_confirmation: this.data.password_confirmation,
      };
      this.isLoading = true;

      const res = await this.callApi("post", "/app/register", formValue);

      if (res.status == 200) {
        // let emailPassword = {
        //   contact: this.data.contact,
        //   password: this.data.password,
        // };
        // this.$store.commit("setUnauthorizedCredential", emailPassword);
        // this.s(
        //   "Registration successful! A One-Time Password (OTP) has been sent to your registered mobile number."
        // );
        // // if(this.$route.query.callback) return this.$router.push(this.$route.query.callback)
        // this.$router.push(
        //   `/account-activation?callback=${
        //     this.$route.query.callback ? this.$route.query.callback : ""
        //   }`
        // );
        this.$router.push("/");
      } else if (res.status == 422) {
        this.e(res.data.errors[0].message);
      }
      // else if (res.status == 400) {
      //   for (let d of res.data) {
      //     this.e(d.msg);
      //   }
      // } else if (res.status == 401) {
      //   this.e(res.data.msg);
      // }
      else {
        this.swr();
      }
      this.isLoading = false;
    },
  },
};
</script>
