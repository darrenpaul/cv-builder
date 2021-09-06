import { WORK_SKILLS, HOBBY_SKILLS, LANGUAGE_SKILLS } from "./types";

export default {
  [WORK_SKILLS]: (state) => state.workSkills,
  [HOBBY_SKILLS]: (state) => state.hobbySkills,
  [LANGUAGE_SKILLS]: (state) => state.languageSkills,
};
