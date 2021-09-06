<template>
  <div class="flex flex-col">
    <div class="bg-gray-400">
      <Title
        :text="titleText"
        :textColor="twTextColor(title.textColor)"
        :textSize="title.textSize"
      />
    </div>
    <template v-for="(item, index) in skills" :key="index">
      <InformationText :label="{ text: '' }" :text="item" />
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

  props: {
    titleText: {
      type: String,
    },

    skills: {
      type: Array,
    },
  },

  data() {
    return {
      title: {
        textColor: "red-500",
        textSize: "medium",
      },
    };
  },
};
</script>
