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
            <h4>Sign In</h4>
            <div class="custom-input__group">
              <i class="custom-input__prepend"><i class="lni lni-phone"></i></i>
              <input
                class="custom-input__field"
                type="text"
                placeholder="Enter You Username"
                v-model="data.uid"
              />
            </div>
            <div class="custom-input__group">
              <i class="custom-input__prepend"
                ><i class="lni lni-envelope"></i
              ></i>
              <input
                class="custom-input__field"
                type="password"
                placeholder="Password"
                v-model="data.password"
              />
            </div>

            <button
              type="submit"
              @click="login"
              :disabled="isLoading"
              :loading="isLoading"
            >
              {{ isLoading ? "Signing In..." : "Sign In" }}
            </button>
            <p>
              Don't have an Account ?
              <nuxt-link to="/signUp">Sign Up</nuxt-link>
            </p>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  components: {},
  data() {
    return {
      checkbox: false,
      isLoading: false,
      isLoggingBlock: true,
      errors: [],
      data: {
        uid: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      if (this.data.uid.trim() == "") return this.e("Username is required");
      if (this.data.password.trim() == "")
        return this.e("Password is required");

      this.isLoading = true;

      const res = await this.callApi("post", "/app/login", this.data);

      if (res.status == 200) {
        console.log(res.data);
        this.$store.dispatch("setAuthInfo", res.data);
        // this.$store.dispatch("setToken", res.data);
        // this.setCookie("token", res.data);
        this.$router.push("/");
        this.s("You are logged In");
        // window.location = "/";
      } else if (res.status == 422) {
        this.e(res.data.errors[0].message);
      } else if (res.status == 401) {
        this.e(res.data);
      } else this.swr();

      this.isLoading = false;
    },
  },
  computed: {
    ...mapGetters({
      callCartOb: "getCallCartOb",
      callWishListOb: "getCallWishListOb",
    }),
  },
  mounted() {
    document.addEventListener("click", this.hideSearchbar);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.hideSearchbar);
  },
};
</script>
