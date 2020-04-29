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
        search: false,
        nav: [
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