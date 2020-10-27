module.exports = {

    author: "@kimcoding",
    siteTitle: "Programming Contest",
    siteShortTitle: "CCPC 2020", // Used as logo text in header, footer, and splash screen
    siteDescription: "About CCPC",
    siteUrl: "https://https://ccpc2020.github.io/",
    siteLanguage: "en_US",
    siteIcon: "src/content/favicon.png", // Relative to gatsby-config file

    splashScreen: false, // Set this to true if you want to use the splash screen

    // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
    // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
    mediumRssFeed: "",
    shownArticles: 3,
    
    // There are icons available for the following platforms: 
    // Medium, GitHub, LinkedIn, XING, Behance
    socialMedia: [
        {
            name: "BOJ",
            url: "https://www.acmicpc.net/"
        },
        {
            name: "Startlink",
            url : "https://startlink.io"
        },
        {
            name: "Github",
            url: "https://github.com/CCPC2020/"
        },
    ],
  
    navLinks: {
        menu: [
            {
                name: "About CCPC",
                url: "/#about",
            },
            {
                name: "Info",
                url: "/#info",
            },
            {
                name: "Etc",
                url: "/#etc",
            },
        ],
        button: {
            name: "Contact",
            url: "/#contact",
        }
    },

    footerLinks: [
        {
            name: "Privacy",
            url: "/privacy"
        },
        {
            name: "Imprint",
            url: "/imprint"
        }
    ]
}