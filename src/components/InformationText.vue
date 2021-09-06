<template>
  <div>
    <label for="">{{ label.text }}</label>

    <p>{{ text.text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: Object,
    },
    text: {
      type: Object,
    },
  },
};
</script>
