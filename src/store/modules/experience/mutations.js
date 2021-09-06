import {
  SAVE_WORK_EXPERIENCE,
  SAVE_EDUCATION_EXPERIENCE,
  SAVE_RESET,
} from "./types";
import getDefaultState from "./state";

export default {
  [SAVE_WORK_EXPERIENCE](state, data) {
    state.workExperience = data;
  },

  [SAVE_EDUCATION_EXPERIENCE](state, data) {
    state.educationExperience = data;
  },

  [SAVE_RESET](state) {
    Object.assign(state, getDefaultState());
  },
};
