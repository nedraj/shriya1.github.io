// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/about/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/about/projects/";
          },
        },{id: "nav-honors-amp-awards",
          title: "Honors &amp; Awards",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/about/awards/";
          },
        },{id: "nav-leadership",
          title: "Leadership",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/about/leadership/";
          },
        },{id: "nav-robotics",
          title: "Robotics",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/about/robotics/";
          },
        },{id: "awards-national-stem-festival-champion",
          title: 'National STEM Festival — Champion',
          description: "",
          section: "Awards",handler: () => {
              window.location.href = "/about/awards/2025-national-stem-festival/";
            },},{id: "competitions-vex-robotics-state-qualifier-amp-awards",
          title: 'VEX Robotics — State Qualifier &amp;amp; Awards',
          description: "",
          section: "Competitions",handler: () => {
              window.location.href = "/about/competitions/2025-vex-states/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/about/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
