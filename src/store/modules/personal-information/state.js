const getDefaultState = () => {
  return {
    cellphone: { value: "+27 790 498 470", type: "mobile" },
    email: { value: "drobertpaul@gmail.com", type: "email" },
    linkedin: {
      value: "darren-paul-16765ab2",
      type: "link",
      url: "https://www.linkedin.com/in/darren-paul-16765ab2/",
    },
    github: {
      value: "github.com/darrenpaul",
      type: "link",
      url: "https://github.com/darrenpaul",
    },
    instagram: {
      value: "instagram.com/darrenrpaul",
      type: "link",
      url: "https://www.instagram.com/darrenrpaul/",
    },
    website: {
      value: "darrenpaul.net",
      type: "link",
      url: "https://www.darrenpaul.net/projects",
    },
  };
};

export default getDefaultState;
