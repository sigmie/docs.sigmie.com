module.exports = {
    title: 'Sigmie docs',
    description: 'Sigmie library docs',
    theme: './theme',
    // plugins: ['@vuepress/pwa'],
    head:
        [
            [
                "link",
                {
                    rel: 'manifest',
                    href: '/manifest.json'
                }
            ],
            [
                "link",
                {
                    rel: 'icon', href: '/icon.png'
                }
            ]
        ],
    nextLinks: true,
    prevLinks: false,
    themeConfig: {
        sidebarDepth: 0,
        logo: "/assets/img/logo.svg",
        logoMobile: "/assets/img/logo-mobile.svg",
        search: false,
        nav: [
            { text: "Application", link: "https://app.sigmie.com" },
            { text: "GitHub", link: "https://github.com/sigmie" }
        ],
        sidebar: {
            '/': [
                {
                    title: 'Sigmie',
                    path: '/sigmie',
                    collapsable: false,
                    sidebarDepth: 0,
                    children: prefix("sigmie", ["getting-started.md"])
                },
                {
                    title: 'Application',
                    path: '/app',
                    collapsable: false,
                    sidebarDepth: 0,
                    children: prefix("app", ["proxy.md", "google.md"])
                },
                {
                    title: 'Packages',
                    path: '/packages',
                    collapsable: false,
                    sidebarDepth: 0,
                    children: prefix("packages", ["crawler.md","polledops.md"])
                }
            ],
        },
    },
    postcss: {
        plugins: [
            require("autoprefixer"),
            require("tailwindcss")("./tailwind.config.js")
        ]
    }
}

function prefix(prefix, children) {
    return children.map(child => `${prefix}/${child}`);
}