import {
  SET_WORK_SKILLS,
  SAVE_WORK_SKILLS,
  SET_HOBBY_SKILLS,
  SAVE_HOBBY_SKILLS,
  SET_LANGUAGE_SKILLS,
  SAVE_LANGUAGE_SKILLS,
  RESET,
  SAVE_RESET,
} from "./types";

export default {
  [SET_WORK_SKILLS]({ commit }, value) {
    commit(SAVE_WORK_SKILLS, value);
  },

  [SET_HOBBY_SKILLS]({ commit }, value) {
    commit(SAVE_HOBBY_SKILLS, value);
  },

  [SET_LANGUAGE_SKILLS]({ commit }, value) {
    commit(SAVE_LANGUAGE_SKILLS, value);
  },

  [RESET]({ commit }) {
    commit(SAVE_RESET);
  },
};
