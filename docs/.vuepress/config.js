module.exports = {
    title: 'Sigmie',
    description: 'Sigmie Documentation',
    theme: './theme',
    plugins: [
        '@vuepress/pwa',
        {
            serviceWorker: true,
            updatePopup: true
        }
    ],
    head:
        [

            ['link', { rel: 'icon', href: '/logo-elevated.svg' }],
            ['link', { rel: 'mask-icon', href: '/logo-elevated.svg', color: '#3eaf7c' }],
            ['link', { rel: 'manifest', href: '/manifest.json' }],
            ['meta', { name: 'theme-color', content: '#202327' }],
            ['meta', { name: 'viewport', content: 'initial-scale=1, viewport-fit=cover, user-scalable=no' }],

            ['meta', { name: 'msapplication-TileImage', content: '/manifest-icon-192.png' }],
            ['meta', { name: 'msapplication-TileColor', content: '#3eaf7c' }],

            ['link', { rel: 'apple-touch-startup-image', href: '/apple-splash-2048-2732.jpg', media: '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)' }],

            ['link', { rel: 'apple-touch-icon', href: '/apple-icon-180.png' }],
            ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
            ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: '#202327' }],

            ['link', { rel: 'apple-touch-startup-image', href: '/apple-splash-2732-2048.jpg', media: '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)' }],
            ['link', { rel: 'apple-touch-startup-image', href: '/apple-splash-2388-1668.jpg', media: '(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)' }],
            ['link', { rel: 'apple-touch-startup-image', href: '/apple-splash-1536-2048.jpg', media: '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)' }],
            ['link', { rel: 'apple-touch-startup-image', href: '/apple-splash-2048-1536.jpg', media: '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)' }],
            ['link', { rel: 'apple-touch-startup-image', href: '/apple-splash-1668-2224.jpg', media: '(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)' }],
            ['link', { rel: 'apple-touch-startup-image', href: '/apple-splash-2224-1668.jpg', media: '(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)' }],
            ['link', { rel: 'apple-touch-startup-image', href: '/apple-splash-1620-2160.jpg', media: '(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)' }],
            ['link', { rel: 'apple-touch-startup-image', href: '/apple-splash-2160-1620.jpg', media: '(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)' }],
            ['link', { rel: 'apple-touch-startup-image', href: '/apple-splash-1284-2778.jpg', media: '(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)' }],
            ['link', { rel: 'apple-touch-startup-image', href: '/apple-splash-2778-1284.jpg', media: '(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)' }],
            ['link', { rel: 'apple-touch-startup-image', href: '/apple-splash-1170-2532.jpg', media: '(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)' }],
            ['link', { rel: 'apple-touch-startup-image', href: '/apple-splash-2532-1170.jpg', media: '(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)' }],
            ['link', { rel: 'apple-touch-startup-image', href: '/apple-splash-1125-2436.jpg', media: '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)' }],
            ['link', { rel: 'apple-touch-startup-image', href: '/apple-splash-2436-1125.jpg', media: '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)' }],
            ['link', { rel: 'apple-touch-startup-image', href: '/apple-splash-1242-2688.jpg', media: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)' }],
            ['link', { rel: 'apple-touch-startup-image', href: '/apple-splash-2688-1242.jpg', media: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)' }],
            ['link', { rel: 'apple-touch-startup-image', href: '/apple-splash-828-1792.jpg', media: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)' }],
            ['link', { rel: 'apple-touch-startup-image', href: '/apple-splash-1792-828.jpg', media: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)' }],
            ['link', { rel: 'apple-touch-startup-image', href: '/apple-splash-1242-2208.jpg', media: '(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)' }],
            ['link', { rel: 'apple-touch-startup-image', href: '/apple-splash-2208-1242.jpg', media: '(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)' }],
            ['link', { rel: 'apple-touch-startup-image', href: '/apple-splash-750-1334.jpg', media: '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)' }],
            ['link', { rel: 'apple-touch-startup-image', href: '/apple-splash-1334-750.jpg', media: '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)' }],
            ['link', { rel: 'apple-touch-startup-image', href: '/apple-splash-640-1136.jpg', media: '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)' }],
            ['link', { rel: 'apple-touch-startup-image', href: '/apple-splash-1136-640.jpg', media: '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)' }]
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
                    children: prefix("sigmie", [
                        // "getting-started.md",
                        "indices.md",
                        "mappings.md",
                        "settings.md",
                        // "document.md",
                        // "cli.md",
                        // "testing.md",
                        "char-filter.md",
                        // "search.md",
                        // "support.md",
                    ])
                },
                // {
                //     title: 'Application',
                //     path: '/app',
                //     collapsable: false,
                //     sidebarDepth: 0,
                //     children: prefix("app", ["proxy.md", "google.md"])
                // },
                {
                    title: 'Packages',
                    path: '/packages',
                    collapsable: false,
                    sidebarDepth: 0,
                    children: prefix("packages", ["crawler.md", "polledops.md"])
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