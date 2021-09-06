import {
  SAVE_WORK_SKILLS,
  SAVE_HOBBY_SKILLS,
  SAVE_LANGUAGE_SKILLS,
  SAVE_RESET,
} from "./types";
import getDefaultState from "./state";

export default {
  [SAVE_WORK_SKILLS](state, data) {
    state.workSkills = data;
  },

  [SAVE_HOBBY_SKILLS](state, data) {
    state.hobbySkills = data;
  },

  [SAVE_LANGUAGE_SKILLS](state, data) {
    state.languageSkills = data;
  },

  [SAVE_RESET](state) {
    Object.assign(state, getDefaultState());
  },
};
