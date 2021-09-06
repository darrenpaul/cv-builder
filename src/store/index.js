import { createStore } from "vuex";

import personalInformationModule from "./modules/personal-information";
import experienceModule from "./modules/experience";
import skillsModule from "./modules/skills";

const state = {};
const actions = {};
const mutations = {};
const getters = {};

const modules = {
  personalInformation: personalInformationModule,
  experience: experienceModule,
  skills: skillsModule,
};

export default createStore({
  state,
  actions,
  mutations,
  getters,
  modules,
});
