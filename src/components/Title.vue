<template>
  <div class="block">
    <h1 :class="[textColor, twTextSize]">{{ text }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    text: { type: String, default: "" },
    textColor: { type: String, default: "" },
    textSize: { type: String, default: "large" },
  },

  computed: {
    twTextSize() {
      let size = "text-3xl";

      if (this.textSize === "medium") {
        size = "text-xl";
      }
      return size;
    },
  },
};
</script>
