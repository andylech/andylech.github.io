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
    "I've been working in .NET since 2011, creating cross-platform .NET mobile apps with Xamarin.Forms and .NET MAUI on Android and iOS for Golf Channel and others since 2015.",
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
    "9 years architecting and building cross-platform .NET apps (Android, iOS) on Xamarin.Forms and .NET MAUI",
    "9 years designing and creating REST APIs, .NET libraries, and NuGet packages for .NET mobile apps",
    "13 years developing with .NET and SQL Server focusing on efficient Data Design and Data Consumption",
    "Presenter on mobile development and API design at Orlando Code Camp and other regional conferences",
    "President of Orlando .NET User Group (ONETUG) and head organizer of Orlando Code Camp"
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
        "Ported iPhone app for insurance investigations from retired Xamarin.Forms SDK to .NET MAUI replacement",
        "Fixed lifecycle, logic, and layout bugs from legacy app and updated .NET MAUI app to .NET 9 and iOS 18"
      ]
    },
    {
      role: "Mobile Developer",
      company: "CoventBridge",
      companylogo: require("./assets/images/coventBridgeLogo.png"),
      date: "October 2020 - January 2024",
      desc: "",
      descBullets: [
        "Created new Xamarin.Forms iPhone app for commercial fraud investigations in the field with SmartPartner",
        "Developed new Xamarin.Forms iPad app for government fraud investigations in the field with UPIC",
        "Architected apps with MVVM backbone, ViewModel navigation, and RxUI for responsiveness and testability",
        "Designed and built new SQL Server DB and designed and built new API in LoopBack for new UPIC app",
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
        "Fixed numerous logic, architecture, and layout bugs in prototype to launch app in Android and iOS stores",
        "Overhauled broken camera library to enable core image-capture logic across a variety of Android devices",
        "Split image analysis into phases using persistent background processes to accommodate app lifecycle events"
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
        "Architected app with MVVM backbone, ViewModel navigation, and messaging service for analytics/reporting",
        "Replaced broken build pipeline and legacy distribution, analytics, and error-reporting with VS App Center",
        "Built dependent libraries to consume and test multiple REST services implementing complex business logic"
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
        "Added barcode scanning and inventory matching logic to speed lookup of inventory items dramatically"
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
        "In charge of Xamarin Insights error-tracking, Android deployments, and Android and iOS store analytics"
      ]
    },
    {
      role: "Programmer/Analyst 4",
      company: "McKesson Technology Solutions",
      companylogo: require("./assets/images/mckessonLogo.jpg"),
      date: "February 2015 – June 2015",
      desc: "",
      descBullets: [
        "Created and maintained complex business rules to predict insurance-company reimbursements to hospitals",
        "Brought backlog of work items down to zero for permanent staff by working open defects and enhancements"
      ]
    },
    {
      role: "Software Engineer 3",
      company: "McKesson Technology Solutions",
      companylogo: require("./assets/images/mckessonLogo.jpg"),
      date: "October 2013 – October 2014",
      desc: "",
      descBullets: [
        "Built ASP.NET MVC site for administering, searching, and reporting on 1.8+ million phone calls in 9 mos",
        "Created multiple Highcharts of volumes and breakdowns with chart-to-page and chart-to-chart drill-downs",
        "Designed a data mart to feed the executive dashboard and summarize millions of calls in under 1 second"
      ]
    },
    {
      role: "C# .NET Developer",
      company: "SeaWorld Parks & Entertainment",
      companylogo: require("./assets/images/seaWorldLogo.png"),
      date: "March 2013 – June 2013",
      desc: "",
      descBullets: [
        "Management of 200+ transactional email templates embedded in SeaWorld's legacy e-commerce application",
        "Created automated conversion to overhaul non-standard templates for running on a 3rd-party email service"
      ]
    },
    {
      role: "Senior Systems Analyst",
      company: "University of Pittsburgh Medical Center",
      companylogo: require("./assets/images/upmcLogo.png"),
      date: "May 2011 – September 2012",
      desc: "",
      descBullets: [
        "Brought a bug-ridden application for tracking Cancer specimens back to life despite missing source code",
        "Developed ASP.NET MVC model for NIH-funding tracker built on top of Entity Framework and SQL Server"
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
    {
      title:
        "The Secret to Mobile is API Design, App Architecture, and Data Handling",
      subtitle: "",
      slides_url: "",
      event_url:
        "https://sessionize.com/s/andy-lech/the-secret-to-mobile-is-api-design-app-architectur/74819"
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
