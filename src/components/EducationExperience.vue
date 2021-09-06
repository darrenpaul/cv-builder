<template>
  <div class="grid grid-cols-3">
    <div>
      <p>{{ experience.completedYear }}</p>
    </div>
    <div>
      <p>{{ heading }}</p>
      <p>{{ experience.university }}</p>
      <p>Relevant Coursework:</p>
      <ul v-for="(work, index) in experience.courseWork" :key="index">
        <li>{{ work }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    experience: { type: Object, required: true },
  },

  computed: {
    heading() {
      return `${this.experience.educationLevel}, ${this.experience.major}`;
    },
  },
};
</script>
