const getDefaultState = () => {
  return {
    workExperience: [
      {
        startDate: "Jan 2021",
        endDate: "Current",
        company: "The Gemini Solution",
        location: "Cape Town, South Africa",
        position: "Software Engineer",
        stack: [
          "Python",
          "Vue.js",
          "Django",
          "Nuxt.js",
          "AWS",
          "PostgreSQL",
          "Strapi",
          "Git",
        ],
        duties: [
          "Maintaining Carrick Prime the employee portal site (Django front and back)",
          "Maintaining Carrick Concierge the user portal site (Vue.js front and Django back)",
          "Migrating and Rebuilding Carrick Wealth from Gatsby and Wordpress to Nuxt.js and Strapi",
          "Setting up provider loads with Kafka and Confluent",
          "Deploying code to AWS instances",
        ],
        keyAchievement:
          "Carrick Concierge was my first project at The Gemini Solution and I was given a lot of freedom to design and build how I saw fit.",
      },
      {
        startDate: "Sep 2019",
        endDate: "Jan 2021",
        company: "Axis Studios",
        location: "Glasgow, United Kingdom",
        position: "Software Developer",
        stack: [
          "Python",
          "React.js",
          "Flask",
          "AWS",
          "Git",
          "Maya",
          "Houdini",
          "Nuke",
          "Shotgun",
        ],
        duties: [
          "Maintaining Python libraries",
          "Maintaining license management site (Vue.js front and Flask back)",
          "Working with AWS to maintain and deploy ec2 instance for rendering",
          "Maintaining an ongoing production as a Pipeline TD",
        ],
        keyAchievement:
          "I was the Pipeline TD for a Love, Death and Robots episode (Tall Grass, Season 2)",
      },
      {
        startDate: "Set 2018",
        endDate: "Aug 2019",
        company: "Triggerfish Animation",
        location: "Cape Town, South Africa",
        position: "Software Developer",
        stack: [
          "Python",
          "Vue.js",
          "Flask",
          "Git",
          "Maya",
          "Houdini",
          "Nuke",
          "Shotgun",
          "Mongodb",
        ],
        duties: [
          "Maintaining rendering progress site (Vue.js front and Flask back), I was responsible for the front-end",
          "Maintaining an ongoing production as a Pipeline TD",
        ],
      },
      {
        startDate: "Apr 2017",
        endDate: "Oct 2018",
        company: "Sunrise Productions",
        location: "Cape Town, South Africa",
        position: "Software Developer",
        stack: [
          "Python",
          "Vue.js",
          "Electron",
          "Flask",
          "Git",
          "Maya",
          "Houdini",
          "Nuke",
          "Shotgun",
        ],
        duties: [
          "Developing a new pipeline",
          "Deploying work stations",
          "Assisting artists with computer and software related issues",
          "Maintaining license management site (Vue.js front and Flask back)",
        ],
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
