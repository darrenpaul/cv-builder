<template>
  <div class="flex flex-col py-4">
    <div>
      <Title
        :text="title.text"
        :textColor="twTextColor(title.textColor)"
        :textSize="title.textSize"
      />
    </div>
    <template v-for="(item, index) in information" :key="index">
      <InformationText
        :label="item.label"
        :icon="item.icon"
        :text="item.value"
      />
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
        text: "CONTACT",
        textColor: "gray-900",
        textSize: "medium",
      },
    };
  },

  computed: {
    information() {
      return [
        {
          label: { text: "Cellphone" },
          icon: ["fas", "phone-alt"],
          value: { text: this.$store.getters["personalInformation/CELLPHONE"] },
        },
        {
          label: { text: "Email" },
          icon: ["fas", "envelope"],
          value: { text: this.$store.getters["personalInformation/EMAIL"] },
        },
        {
          label: { text: "Website" },
          icon: ["fas", "globe-africa"],
          value: { text: this.$store.getters["personalInformation/WEBSITE"] },
        },
        {
          label: { text: "Linkedin" },
          icon: ["fab", "linkedin"],
          value: { text: this.$store.getters["personalInformation/LINKEDIN"] },
        },
        {
          label: { text: "Github" },
          icon: ["fab", "github"],
          value: { text: this.$store.getters["personalInformation/GITHUB"] },
        },
        {
          label: { text: "Instagram" },
          icon: ["fab", "instagram"],
          value: { text: this.$store.getters["personalInformation/INSTAGRAM"] },
        },
      ];
    },
  },
};
</script>
