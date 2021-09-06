<template>
  <div class="flex flex-col">
    <PersonalInformation />
    <Skills :titleText="'Work Skills'" :skills="workSkills" />

    <Skills :titleText="'Hobby Skills'" :skills="hobbySkills" />

    <Skills :titleText="'language Skills'" :skills="languageSkills" />
  </div>
</template>

<script>
// components
import PersonalInformation from "@/components/PersonalInformation.vue";
import Skills from "@/components/Skills.vue";

export default {
  components: { PersonalInformation, Skills },

  computed: {
    workSkills() {
      console.log(this.$store.getters["skills/WORK_SKILLS"]);
      return this.$store.getters["skills/WORK_SKILLS"];
    },

    hobbySkills() {
      return this.$store.getters["skills/HOBBY_SKILLS"];
    },

    languageSkills() {
      return this.$store.getters["skills/LANGUAGE_SKILLS"];
    },
  },
};
</script>
