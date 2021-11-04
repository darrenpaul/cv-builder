<template>
  <div class="block">
    <h1 :class="['break-normal', isBold, textColor, twTextSize]">
      {{ text }}
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    text: { type: String, default: "" },
    textColor: { type: String, default: "" },
    textSize: { type: String, default: "large" },
    bold: { type: Boolean, default: true },
  },

  computed: {
    twTextSize() {
      let size = "text-lg";

      if (this.textSize === "medium") {
        size = "text-base";
      }

      if (this.textSize === "huge") {
        size = "text-xl";
      }

      return size;
    },

    isBold() {
      if (this.bold === false) {
        return "font-normal";
      }
      return "font-bold";
    },
  },
};
</script>
