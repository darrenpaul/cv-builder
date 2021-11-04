<template>
  <div class="flex flex-col gap-4">
    <Title :text="title" :textSize="'medium'" />

    <slot></slot>
  </div>
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

  props: {
    title: { type: String, default: "" },
  },
};
</script>
