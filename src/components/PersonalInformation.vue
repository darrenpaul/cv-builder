<template>
  <div class="flex flex-col">
    <div class="bg-gray-400">
      <Title
        :text="title.text"
        :textColor="twTextColor(title.textColor)"
        :textSize="title.textSize"
      />
    </div>
    <template v-for="(item, index) in information" :key="index">
      <!-- <InformationText :label="item.label" :text="item.value" /> -->
      <InformationText :label="item.label" :text="item.value" />
    </template>
  </div>
</template>

<script>
// components
import InformationText from "@/components/InformationText.vue";
import Title from "@/components/Title.vue";

// mixins
import fullNameMixin from "@/helpers/mixins/fullNameMixin.js";
import textColorMixin from "@/helpers/mixins/textColorMixin.js";
import bgColorMixin from "@/helpers/mixins/bgColorMixin.js";

export default {
  mixins: [fullNameMixin, textColorMixin, bgColorMixin],

  components: { InformationText, Title },

  data() {
    return {
      title: {
        text: "Personal Information",
        textColor: "red-500",
        textSize: "medium",
      },
    };
  },

  computed: {
    information() {
      return [
        {
          label: { text: "Telephone" },
          value: { text: this.$store.getters["personalInformation/TELEPHONE"] },
        },
        {
          label: { text: "Cellphone" },
          value: { text: this.$store.getters["personalInformation/CELLPHONE"] },
        },
        {
          label: { text: "Email" },
          value: { text: this.$store.getters["personalInformation/EMAIL"] },
        },
        {
          label: { text: "Linkedin" },
          value: { text: this.$store.getters["personalInformation/LINKEDIN"] },
        },
        {
          label: { text: "Github" },
          value: { text: this.$store.getters["personalInformation/GITHUB"] },
        },
        {
          label: { text: "Instagram" },
          value: { text: this.$store.getters["personalInformation/INSTAGRAM"] },
        },
        {
          label: { text: "Website" },
          value: { text: this.$store.getters["personalInformation/WEBSITE"] },
        },
      ];
    },
  },
};
</script>
