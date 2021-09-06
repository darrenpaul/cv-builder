import {
  SET_WORK_EXPERIENCE,
  SAVE_WORK_EXPERIENCE,
  SET_EDUCATION_EXPERIENCE,
  SAVE_EDUCATION_EXPERIENCE,
  RESET,
  SAVE_RESET,
} from "./types";

export default {
  [SET_WORK_EXPERIENCE]({ commit }, value) {
    commit(SAVE_WORK_EXPERIENCE, value);
  },

  [SET_EDUCATION_EXPERIENCE]({ commit }, value) {
    commit(SAVE_EDUCATION_EXPERIENCE, value);
  },

  [RESET]({ commit }) {
    commit(SAVE_RESET);
  },
};
