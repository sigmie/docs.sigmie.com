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
                    rel: 'icon',
                    href: '/icon.png'
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
            // {
            //     title: 'Foo',
            //     path: '/foo/',
            //     collapsable: true,
            //     sidebarDepth: 0,
            //     children: prefix("foo", ["one.md", "two.md"])
            // },
            '/': [
                // {
                //     title: 'ELASTICSEARCH',
                //     path: '/elasticsearch',
                //     collapsable: true,
                //     sidebarDepth: 0,
                //     children: prefix("elasticsearch", ["clusterhealth.md"])
                // },
                {
                    title: 'APPLICATION',
                    path: '/app',
                    collapsable: true,
                    sidebarDepth: 0,
                    children: prefix("app", ["proxy.md"])
                },
                {
                    title: 'LIBRARY',
                    path: '/library',
                    collapsable: true,
                    sidebarDepth: 0,
                    children: prefix("library", ["sigmie.md"])
                },
                'promises',
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