import {
  SAVE_TELEPHONE,
  SAVE_CELLPHONE,
  SAVE_EMAIL,
  SAVE_LINKEDIN,
  SAVE_GITHUB,
  SAVE_INSTAGRAM,
  SAVE_WEBSITE,
  SAVE_RESET,
} from "./types";
import getDefaultState from "./state";

export default {
  [SAVE_TELEPHONE](state, data) {
    state.telephone = data;
  },

  [SAVE_CELLPHONE](state, data) {
    state.cellphone = data;
  },

  [SAVE_EMAIL](state, data) {
    state.email = data;
  },

  [SAVE_LINKEDIN](state, data) {
    state.linkedin = data;
  },

  [SAVE_GITHUB](state, data) {
    state.github = data;
  },

  [SAVE_INSTAGRAM](state, data) {
    state.instagram = data;
  },

  [SAVE_WEBSITE](state, data) {
    state.website = data;
  },

  [SAVE_RESET](state) {
    Object.assign(state, getDefaultState());
  },
};
