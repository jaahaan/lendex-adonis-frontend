import iView from "iview";
import locale from "iview/dist/locale/en-US"; // Change locale, check node_modules/iview/dist/locale
import Vue from "vue";
import { mapGetters } from "vuex";

Vue.use(iView, {
  locale,
});

// mixins for using common methods

Vue.mixin({
  filters: {
    toFixedNum(num) {
      if (num) return num.toFixed(2);
      return 0;
    },
    fixedPaymentType(value) {
      if (value == "sslcommerz") return "SSL Commerz Secure Payment";
      else return value;
    },
    disountPrice(item) {
      let price = parseInt(item.sellingPrice);
      price = price - (parseInt(item.discount) * price) / 100;
      return price;
    },
    dateFixed(cd) {
      let d = new Date(cd);
      let monthNumber = d.getMonth() + 1;
      monthNumber = ("0" + monthNumber).slice(-2);
      let dayNumber = d.getDate();
      dayNumber = ("0" + dayNumber).slice(-2);
      let today = `${dayNumber}-${monthNumber}-${d.getFullYear()}`;
      return today;
    },
  },
  computed: {
    ...mapGetters({
      cartItem: "getCartItem",
      order: "order",
      callCartOb: "getCallCartOb",
      callWishListOb: "getCallWishListOb",
    }),
  },
  methods: {
    i(msg, i = "Hey!") {
      this.$Notice.info({
        title: i,
        desc: msg,
      });
    },
    s(msg, i = "Great!") {
      this.$Notice.success({
        title: i,
        desc: msg,
      });
    },
    w(msg, i = "Hi!") {
      this.$Notice.warning({
        title: i,
        desc: msg,
      });
    },
    e(msg, i = "Oops!") {
      this.$Notice.error({
        title: i,
        desc: msg,
      });
    },
    swr() {
      this.$Notice.error({
        title: "Oops",
        desc: "Something went wrong, please try again later",
      });
    },
  },
});
