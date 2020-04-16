module.exports = {
    title: 'Sigmie docs',
    description: 'Sigmie library docs',
    plugins: ['@vuepress/pwa'],
    head:
        [
            [
                "link",
                {
                    href: "https://fonts.googleapis.com/css?family=Montserrat:200,200i,300,300i,400,400i,600,600i,800,800i,900,900i&display=swap",
                    rel: "stylesheet",
                    type: "text/css"
                }
            ],
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
            { text: "GitHub", link: "https://github.com/sigmie/sigmie" }
        ],
        sidebar: [
            {
                title: 'Promises',
                path: '/promises/',
                collapsable: false,
                sidebarDepth: 1,
                children: prefix("promises", [""])
            },
            // {
            //     title: 'Bar',
            //     path: '/promises/',
            //     children: ["promises/one.md", "promises/two.md"]
            // }
        ],
    }
}

function prefix(prefix, children) {
    return children.map(child => `${prefix}/${child}`);
}