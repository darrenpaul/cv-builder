import {
  TELEPHONE,
  CELLPHONE,
  EMAIL,
  LINKEDIN,
  GITHUB,
  INSTAGRAM,
  WEBSITE,
} from "./types";

export default {
  [TELEPHONE]: (state) => state.telephone,
  [CELLPHONE]: (state) => state.cellphone,
  [EMAIL]: (state) => state.email,
  [LINKEDIN]: (state) => state.linkedin,
  [GITHUB]: (state) => state.github,
  [INSTAGRAM]: (state) => state.instagram,
  [WEBSITE]: (state) => state.website,
};
