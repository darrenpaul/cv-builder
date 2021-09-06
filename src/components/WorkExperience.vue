<template>
  <div class="grid grid-cols-3">
    <div>
      <p>{{ date }}</p>
    </div>
    <div>
      <p>{{ heading }}</p>
      <ul v-for="(duty, index) in experience.duties" :key="index">
        <li>{{ duty }}</li>
      </ul>
      <p>Key Achievement</p>
      <p>{{ experience.keyAchievement }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    experience: { type: Object, required: true },
  },

  computed: {
    date() {
      return `${this.experience.startDate} - ${this.experience.endDate}`;
    },
    heading() {
      return `${this.experience.company}, ${this.experience.position}`;
    },
  },
};
</script>
