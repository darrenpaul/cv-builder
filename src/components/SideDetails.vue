<template>
  <div class="flex flex-col gap-4 min-w-max">
    <Header />
    <div class="divide-y-4 divide-gray-900 divide-solid">
      <PersonalInformation />

      <Skills :titleText="'EXPERTISE'" :skills="workSkills" />

      <Skills :titleText="'HOBBIES'" :skills="hobbySkills" />

      <Skills :titleText="'LANGUAGES'" :skills="languageSkills" />
    </div>
  </div>
</template>

<script>
// components
import Header from "@/components/Header.vue";
import PersonalInformation from "@/components/PersonalInformation.vue";
import Skills from "@/components/Skills.vue";

export default {
  components: { Header, PersonalInformation, Skills },

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
