<template>
  <div class="flex items-center gap-4">
    <font-awesome-icon :icon="icon" />
    <a class="text-sm" v-if="text.text.type === 'link'" :href="text.text.url">{{
      text.text.value
    }}</a>
    <p class="text-sm" v-else>{{ text.text.value }}</p>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: Object,
    },
    icon: {
      type: String,
    },
    text: {
      type: Object,
    },
  },
};
</script>
