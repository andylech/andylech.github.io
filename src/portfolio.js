/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// import emoji from "react-easy-emoji";

// Splash Screen

const splashScreen = {
  enabled: false // set false to disable splash screen
};

// Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Andy Lech",
  title: "Hi, I'm Andy Lech",
  subTitle:
    "I've been creating cross-platform .NET mobile apps with Xamarin.Forms and .NET MAUI on Android and iOS for Golf Channel and others since 2015.",
  // Set to empty to hide the button
  // resumeLink: "",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/andy-lech/",
  github: "https://github.com/andylech",
  email: "portfolio@andylech.com",
  // gitlab: "",
  // facebook: "",
  // medium: "",
  // stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  sessionize: "https://sessionize.com/andy-lech",
  display: true // Set true to display this section, defaults to false
};

// Summary Section

// TODO Replace lightning bolt with bullet point when figure out how to insert that emoji
const summarySection = {
  title: "Summary",
  highlightList: [
    "10 years architecting and building .NET mobile apps (Android, iOS) with Xamarin.Forms and .NET MAUI",
    "10 years designing and creating REST APIs, .NET libraries, and NuGet packages for .NET mobile apps",
    "Holds prestigious Microsoft MVP award since August 2025 in Developer Technologies for my work in .NET",
    "Orlando .NET User Group President, Orlando Code Camp organizer, and .NET Foundation committee member",
    "Presenter on mobile development and API design at Orlando Code Camp and other regional conferences"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Skills Section

// TODO See original for content types to add back if figure alternative with .NET logos
const skillsSection = {
  title: "Skills",
  /* Make Sure to include correct Font Awesome class name to view your icon */
  /* https://fontawesome.com/icons?d=gallery */
  skillsList: [],
  display: false // Set false to hide this section, defaults to true
};

// Education Section

// TODO See original for content types to add back
const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: []
};

// Your top 3 proficient stacks/tech experience

// TODO See original for content types to add back
const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  // TODO Rework skillProgress layout to show all skills by years (keep progress bar?)
  experience: []
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Mobile Developer",
      company: "Sedgwick",
      companylogo: require("./assets/images/sedgwick-logo.png"),
      date: "August 2024 - March 2025",
      desc: "",
      descBullets: [
        "Ported broken iPhone app for insurance investigations from retired Xamarin.Forms to current .NET MAUI",
        "Fixed lifecycle, logic, and layout bugs from legacy app and updated .NET MAUI app to .NET 9 and iOS 18",
        "Erased years of technical debt that prevented release by solving core performance and stability issues"
      ]
    },
    {
      role: "Mobile Developer",
      company: "CoventBridge",
      companylogo: require("./assets/images/coventBridgeLogo.png"),
      date: "October 2020 - January 2024",
      desc: "",
      descBullets: [
        "Created new iPhone app in Xamarin.Forms for commercial-fraud investigations on SmartPartner platform",
        "Developed new iPad app in Xamarin.Forms for government-fraud investigations under UPIC program",
        "Architected apps with MVVM backbone, ViewModel navigation, and RxUI for responsiveness and testability",
        "Designed and built new SQL Server DB and designed and built new REST API in LoopBack for new UPIC app",
        "Extended SQL Server DB and ASP.NET Web API backed by Entity Framework for new SmartPartner app"
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "RexPay",
      companylogo: require("./assets/images/rexPayLogo.png"),
      date: "August 2019 - January 2020",
      desc: "",
      descBullets: [
        "Fixed Xamarin.Forms prototype full of logic, architecture, and UI bugs to launch Android and iOS apps",
        "Overhauled defective Android camera library to enable core image-capture functionality across all devices",
        "Created phased image analysis using persistent background processes to accommodate app lifecycle"
      ]
    },
    {
      role: "Lead Mobile Engineer",
      company: "Golf Channel",
      companylogo: require("./assets/images/golfChannelLogo.png"),
      date: "March 2018 – July 2019",
      desc: "",
      descBullets: [
        "Created new Xamarin.Forms app replacing divergent Android and iOS code bases with different tech stacks",
        "Architected app with MVVM backbone, ViewModel navigation, and service for heavy analytics/reporting",
        "Replaced broken build pipeline and legacy distribution, analytics, and error-reporting with VS App Center",
        "Built standalone libraries implementing complex business logic to consume and test multiple REST APIs"
      ]
    },
    {
      role: "Lead Xamarin Developer",
      company: "3cStudios",
      companylogo: require("./assets/images/3cStudiosLogo.png"),
      date: "February 2017 – March 2018",
      desc: "",
      descBullets: [
        "Built new Xamarin.Forms app for iPads to streamline purchasing of school supplies at 3cFreeStore locations",
        "Added barcode scanning and inventory matching logic to speed lookup of inventory items dramatically",
        "Mentored company owner in cross-platform mobile development and consulted on other mobile projects"
      ]
    },
    {
      role: "Software Developer",
      company: "BBA Aviation",
      companylogo: require("./assets/images/bbaAviationLogo.png"),
      date: "August 2015 – May 2017",
      desc: "",
      descBullets: [
        "Developed new Xamarin.Forms app for Signature Loyalty on Android and iOS leading to 4X usage increase",
        "Created new Xamarin.Forms app for project workflow system for Android, iOS, and Windows Phone",
        "Spearheaded Xamarin.Forms for cross-platform mobile development over single-platform frameworks"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

// TODO See original for content types to add back
const bigProjects = {
  title: "Big Projects",
  subtitle: "",
  projects: [],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

// TODO See original for content types to add back
const achievementSection = {
  title: "Achievements And Certifications",
  subtitle: "",
  achievementsCards: [],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

// TODO See original for content types to add back
const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Talks",
  subtitle: "",
  sessionizeProfile: "https://sessionize.com/andy-lech/",
  talks: [
    // {
    //   title:
    //     "Designing APIs for Smart Data Consumption",
    //   subtitle: "",
    //   slides_url: "",
    //   event_url:
    //     "https://sessionize.com/s/andy-lech/designing-apis-for-smart-data-consumption/152121"
    // },
    {
      title: "Build Better Mobile Apps with ReactiveUI",
      subtitle: "",
      slides_url: "https://github.com/andylech/talk-better-apps-reactiveui",
      event_url:
        "https://sessionize.com/s/andy-lech/build-better-mobile-apps-with-reactiveui/101683"
    },
    {
      title: "Find Bugs Faster through ViewModel and API Library Testing",
      subtitle: "",
      slides_url:
        "https://github.com/andylech/talk-testing-viewmodels-and-api-libraries",
      event_url:
        "https://sessionize.com/s/andy-lech/find-bugs-faster-through-viewmodel-and-api-library/145961"
    },
    // {
    //   title:
    //     "Providing Context to API Decisions with Problem Details",
    //   subtitle: "",
    //   slides_url: "",
    //   event_url:
    //     "https://sessionize.com/s/andy-lech/providing-context-to-api-decisions-with-problem-de/101678"
    // },
    {
      title: "What DBAs Don't Know About Mobile Apps and APIs",
      subtitle: "",
      slides_url: "https://github.com/andylech/talk-mobile-and-apis-for-dbas",
      event_url:
        "https://sessionize.com/s/andy-lech/what-dbas-dont-know-about-mobile-apps-and-apis/145960"
    },
    {
      title: "What Web Devs Don't Know About Mobile Apps and APIs",
      subtitle: "",
      slides_url:
        "https://github.com/andylech/talk-mobile-and-apis-for-web-devs",
      event_url:
        "https://sessionize.com/s/andy-lech/what-web-devs-dont-know-about-mobile-apps-and-apis/145959"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

// TODO See original for content types to add back
const podcastSection = {
  title: "Podcast",
  subtitle: "",
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section

// TODO Keep?
const resumeSection = {
  title: "Resume",
  subtitle: "",
  display: false // Set false to hide this section, defaults to true
};

// Contact Section

// TODO Merge with greeting
const contactInfo = {
  title: "Contact Me",
  subtitle: "",
  number: "",
  email_address: ""
};

// Twitter Section

// TODO Keep?
const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  summarySection,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  resumeSection,
  contactInfo,
  twitterDetails,
  isHireable
};
