/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// import emoji from "react-easy-emoji";

// Splash Screen

const splashScreen = {
  enabled: false // set false to disable splash screen
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Andy Lech",
  title: "Hi, I'm Andy Lech",
  subTitle:
    "I've been working in .NET since 2011, creating cross-platform .NET mobile apps with Xamarin.Forms and .NET MAUI on Android and iOS for Golf Channel and others since 2015.",
  // TODO
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/andy-lech/",
  github: "https://github.com/andylech",
  gmail: "portfolio@andylech.com",
  // gitlab: "",
  // facebook: "",
  // medium: "",
  // stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

// TODO Replace lightning bolt with bullet point when figure out how to insert that emoji
const skillsSection = {
  title: "Summary",
  // TODO
  subTitle: "",
  // TODO
  skills: [
    <li>
      <u>9 years</u> architecting and building <u>cross-platform mobile apps</u>{" "}
      (Android, iOS) on{" "}
      <a
        href="https://learn.microsoft.com/en-us/previous-versions/xamarin/xamarin-forms/"
        target="reference"
      >
        Xamarin.Forms
      </a>{" "}
      and{" "}
      <a
        href="https://learn.microsoft.com/en-us/dotnet/maui/"
        target="reference"
      >
        .NET MAUI
      </a>
    </li>,
    <li>
      <u>9 years</u> designing and creating{" "}
      <a
        href="https://github.com/xamarinfiles/library-api-sessionize/"
        target="reference"
      >
        REST APIs
      </a>
      ,{" "}
      <a href="https://github.com/xamarinfiles/" target="reference">
        .NET libraries
      </a>
      , and{" "}
      <a
        href="https://www.nuget.org/profiles/TheXamarinFiles/"
        target="reference"
      >
        NuGet packages
      </a>{" "}
      for <u>.NET mobile apps</u>
    </li>,
    <li>
      <u>13 years</u> overall developing with <u>.NET</u> and <u>SQL Server</u>{" "}
      focusing on efficient <u>Data Design</u> and <u>Data Consumption</u>
    </li>,
    <li>
      <a
        href="https://github.com/xamarinfiles/presentations/"
        target="reference"
      >
        Presenter
      </a>{" "}
      on <u>mobile development</u> and <u>API design</u> at{" "}
      <a href="https://orlandocodecamp.com/speakers/" target="reference">
        Orlando Code Camp
      </a>{" "}
      and other{" "}
      <a href="https://sessionize.com/andy-lech/" target="reference">
        regional conferences
      </a>
    </li>,
    <li>
      President of{" "}
      <a href="https://www.meetup.com/onetug/" target="reference">
        Orlando .NET User Group (ONETUG)
      </a>{" "}
      and head organizer of{" "}
      <a
        href="https://github.com/Orlando-Codecamp/orlandocodecamp.github.io"
        target="reference"
      >
        Orlando Code Camp
      </a>
    </li>
  ],
  // TODO See original for content types to add back if figure alternative with .NET logos
  /* Make Sure to include correct Font Awesome class name to view your icon */
  /* https://fontawesome.com/icons?d=gallery */
  softwareSkills: [],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

// TODO See original for content types to add back
const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: []
};

// Your top 3 proficient stacks/tech experience

// TODO Rework skillProgress layout to show all skills by years (keep progress bar?)
const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      skill: "Skill 1", //Insert stack or technology you have experience in
      progressPercentage: "100%", //Insert relative proficiency in percentage
      years: 13
    },
    {
      skill: "Skill 2",
      progressPercentage: "85%",
      years: 11
    },
    {
      skill: "Skill 3",
      progressPercentage: "70%",
      years: 9
    }
  ],
  // TODO
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Mobile Developer",
      company: "CoventBridge",
      companylogo: require("./assets/images/coventBridgeLogo.jpg"),
      date: "October 2020 - January 2024",
      desc: "",
      descBullets: [
        "Created new Xamarin.Forms app on iPhones for commercial fraud investigations in the field with SmartPartner",
        "Developed new Xamarin.Forms app on iPads for government fraud investigations in the field with UPIC",
        "Architected apps with MVVM backbone, ViewModel navigation, and ReactiveUI for responsiveness and testability",
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
        "Fixed numerous logic, architecture, layout, and crash bugs from prototype while bringing the app to market",
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
        "Created new Xamarin.Forms app replacing divergent Android and iOS code bases having different tech stacks",
        "Architected app with MVVM backbone, ViewModel navigation, and messaging service for analytics and reporting",
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
        "Developed ASP.NET MVC site for administering, searching, and reporting on 1.8+ million phone calls in 9 mos",
        "Made multiple Highcharts of volumes and breakdowns including chart-to-page and chart-to-chart drill-downs",
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
  subtitle: " ",
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

// TODO Not working in the original
const resumeSection = {
  title: "Resume",
  subtitle: "",

  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: "Contact Me",
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
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
