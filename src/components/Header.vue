<template>
  <header :class="[headerStyle]">
    <Title
      :text="mainTitle.text"
      :textColor="twTextColor(textColor)"
      :textSize="mainTitle.textSize"
    />
    <Title
      :text="subTitle.text"
      :textColor="twTextColor(textColor)"
      :textSize="subTitle.textSize"
    />
  </header>
</template>

<script>
// components
import Title from "@/components/Title.vue";

// mixins
import fullNameMixin from "@/helpers/mixins/fullNameMixin.js";
import textColorMixin from "@/helpers/mixins/textColorMixin.js";
import bgColorMixin from "@/helpers/mixins/bgColorMixin.js";

export default {
  mixins: [fullNameMixin, textColorMixin, bgColorMixin],

  components: { Title },

  data() {
    return {
      firstName: "Darren", // DELETE WHEN STORE READY
      lastName: "Paul", // DELETE WHEN STORE READY
      position: "Software Engineer", // DELETE WHEN STORE READY

      textColor: "gray-900",

      header: {
        bgColor: "green-500",
      },
    };
  },

  computed: {
    mainTitle() {
      return {
        text: this.fullName,
        textColor: this.textColor,
        textSize: "large",
      };
    },

    subTitle() {
      return {
        text: this.position,
        textColor: this.textColor,
        textSize: "medium",
      };
    },

    headerStyle() {
      // const bgColor = this.twBackgroundColor(this.header.bgColor);
      // const padding = "p-12";
      // return `${bgColor} ${padding}`;
      return "";
    },
  },
};
</script>
