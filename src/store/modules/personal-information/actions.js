import {
  SET_TELEPHONE,
  SAVE_TELEPHONE,
  SET_CELLPHONE,
  SAVE_CELLPHONE,
  SET_EMAIL,
  SAVE_EMAIL,
  SET_LINKEDIN,
  SAVE_LINKEDIN,
  SET_GITHUB,
  SAVE_GITHUB,
  SET_INSTAGRAM,
  SAVE_INSTAGRAM,
  SET_WEBSITE,
  SAVE_WEBSITE,
  RESET,
  SAVE_RESET,
} from "./types";

export default {
  [SET_TELEPHONE]({ commit }, value) {
    commit(SAVE_TELEPHONE, value);
  },

  [SET_CELLPHONE]({ commit }, value) {
    commit(SAVE_CELLPHONE, value);
  },

  [SET_EMAIL]({ commit }, value) {
    commit(SAVE_EMAIL, value);
  },

  [SET_LINKEDIN]({ commit }, value) {
    commit(SAVE_LINKEDIN, value);
  },

  [SET_GITHUB]({ commit }, value) {
    commit(SAVE_GITHUB, value);
  },

  [SET_INSTAGRAM]({ commit }, value) {
    commit(SAVE_INSTAGRAM, value);
  },

  [SET_WEBSITE]({ commit }, value) {
    commit(SAVE_WEBSITE, value);
  },

  [RESET]({ commit }) {
    commit(SAVE_RESET);
  },
};
