const getDefaultState = () => {
  return {
    workExperience: [
      {
        startDate: "2019-09",
        endDate: "2020-05",
        company: "Apples Inc",
        position: "worker man",
        duties: [
          "doing some stuff a",
          "doing some stuff b",
          "doing some stuff c",
          "doing some stuff d",
          "doing some stuff e",
          "doing some stuff f",
        ],
        keyAchievement: "made a",
      },
      {
        startDate: "2029-09",
        endDate: "2020-19",
        company: "Pears Inc",
        position: "worker ant",
        duties: [
          "doing some stuff a",
          "doing some stuff b",
          "doing some stuff c",
          "doing some stuff d",
          "doing some stuff e",
          "doing some stuff f",
        ],
        keyAchievement: "made b",
      },
      {
        startDate: "2011-09",
        endDate: "2020-39",
        company: "Grape Inc",
        position: "worker bee",
        duties: [
          "doing some stuff a",
          "doing some stuff b",
          "doing some stuff c",
          "doing some stuff d",
          "doing some stuff e",
          "doing some stuff f",
        ],
        keyAchievement: "made c",
      },
    ],

    educationExperience: [
      {
        completedYear: "2019",
        educationLevel: "BSc in Marketing",
        major: "Major in professional sales",
        university: "University of Marketing",
        courseWork: [
          "selling",
          "buying",
          "management",
          "advance sales selling",
          "cloud base, CRM system",
        ],
      },
    ],
  };
};

export default getDefaultState;
