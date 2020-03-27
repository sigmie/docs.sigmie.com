module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    sidebar: {
        // "/1.0/": require("./1.0"),
    },
    themeConfig: {
        // logo: "/assets/img/logo.svg",
        displayAllHeaders: true,
        sidebarDepth: 2,
        nav: [
            { text: "Home", link: "https://nova.laravel.com" },
            {
                text: "Version",
                link: "/",
                items: [{ text: "1.0", link: "/1.0/" }]
            }
        ],
    }
}