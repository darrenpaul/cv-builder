<template>
  <div class="flex w-full h-full p-6 divide-x-4 divide-gray-900 divide-solid">
    <SideDetails class="pr-4" />

    <div class="flex flex-col gap-4 pl-4">
      <About />

      <ExperienceList :title="'WORK EXPERIENCE'">
        <WorkExperience
          v-for="(item, index) in workExperience"
          :key="index"
          :experience="item"
        />
      </ExperienceList>

      <!-- <ExperienceList :title="'Education Experience'">
        <EducationExperience
          v-for="(item, index) in educationExperience"
          :key="index"
          :experience="item"
        />
      </ExperienceList> -->
    </div>
  </div>
</template>

<script>
import SideDetails from "@/components/SideDetails.vue";
import About from "@/components/About.vue";
import ExperienceList from "@/components/ExperienceList.vue";
import WorkExperience from "@/components/WorkExperience.vue";
// import EducationExperience from "@/components/EducationExperience.vue";

export default {
  components: {
    SideDetails,
    About,
    ExperienceList,
    WorkExperience,
    // EducationExperience,
  },

  computed: {
    workExperience() {
      return this.$store.getters["experience/WORK_EXPERIENCE"];
    },

    educationExperience() {
      return this.$store.getters["experience/EDUCATION_EXPERIENCE"];
    },
  },
};
</script>

<style></style>
