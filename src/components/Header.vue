<template>
  <header class="flex flex-col items-center gap-4">
    <img
      class="w-32 h-32 rounded-full"
      src="@/assets/images/profile_picture.jpg"
      alt=""
    />

    <div class="block pb-2 border-b-4 border-gray-900 border-solid">
      <Title
        :text="mainTitle.text"
        :textColor="twTextColor(textColor)"
        :textSize="mainTitle.textSize"
      />
      <Title
        :text="subTitle.text"
        :textColor="twTextColor(subTitle.textColor)"
        :textSize="subTitle.textSize"
        :bold="false"
      />
    </div>
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
        textColor: "gray-500",
        textSize: "medium",
      };
    },
  },
};
</script>
