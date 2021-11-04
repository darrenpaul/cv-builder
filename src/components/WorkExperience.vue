<template>
  <div class="flex flex-col">
    <div class="flex gap-2">
      <p class="text-sm font-bold">{{ company }},</p>
      <p class="text-sm">{{ position }},</p>
      <p class="text-sm">{{ date }}</p>
    </div>

    <div class="block">
      <!-- <p class="pb-2 text-sm">{{ experience.location }}</p> -->

      <ul
        class="pl-8 list-disc"
        v-for="(duty, index) in experience.duties"
        :key="index"
      >
        <li>{{ duty }}</li>
      </ul>

      <div v-if="experience.keyAchievement">
        <p class="pt-2 text-sm font-bold">Key Achievement</p>
        <p class="text-sm">{{ experience.keyAchievement }}</p>
      </div>

      <div class="flex pt-2" v-if="stack">
        <p class="text-sm font-bold">Stack:&nbsp;</p>
        <p class="text-sm">{{ stack }}</p>
      </div>
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
    company() {
      return `${this.experience.company}`;
    },
    position() {
      return `${this.experience.position}`;
    },
    stack() {
      if (this.experience.stack) {
        return this.experience.stack.join(", ");
      }
      return "";
    },
  },
};
</script>
