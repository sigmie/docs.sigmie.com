/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "cb3e39d3afd8c5359541bdcf174b2769"
  },
  {
    "url": "app/index.html",
    "revision": "4620fd02d614f6df868784675b6ab804"
  },
  {
    "url": "app/proxy.html",
    "revision": "28f2597ae30658fc73a80f309bddc67f"
  },
  {
    "url": "app/settings/account.html",
    "revision": "a6a96db8ea2b5af864d1f6f034a69a5d"
  },
  {
    "url": "app/settings/billing.html",
    "revision": "072009ec58a39927deb81012d5a437d8"
  },
  {
    "url": "app/settings/index.html",
    "revision": "b8c2603f46a8c327cb22d8c7df9c4544"
  },
  {
    "url": "app/settings/projects.html",
    "revision": "7158cbbd86c82a21e68fc46f77d7928a"
  },
  {
    "url": "app/settings/team.html",
    "revision": "e046c875502b138b47be1ee5d1e9b294"
  },
  {
    "url": "apple-icon-180.png",
    "revision": "414cc54d8febcbfb22635bd7efba8e95"
  },
  {
    "url": "apple-splash-1125-2436.jpg",
    "revision": "abe5f48eaa9e687392f8aaf705bb6b78"
  },
  {
    "url": "apple-splash-1136-640.jpg",
    "revision": "02c03dd918684965a308de4d1eff032d"
  },
  {
    "url": "apple-splash-1170-2532.jpg",
    "revision": "9da1949cb66d321c118382185e7da3af"
  },
  {
    "url": "apple-splash-1242-2208.jpg",
    "revision": "16ff1924864924d7e53eefc80b33b83d"
  },
  {
    "url": "apple-splash-1242-2688.jpg",
    "revision": "811139dc131861931d8146343de40635"
  },
  {
    "url": "apple-splash-1284-2778.jpg",
    "revision": "eb35c353f4364e326d970b2d556df734"
  },
  {
    "url": "apple-splash-1334-750.jpg",
    "revision": "1618d4f8b3a784dc61435ca86364d471"
  },
  {
    "url": "apple-splash-1536-2048.jpg",
    "revision": "9436bb4b743fc2e7db0dd40c0ff450ca"
  },
  {
    "url": "apple-splash-1620-2160.jpg",
    "revision": "04ae24704d32ec5191e4f73edbddccef"
  },
  {
    "url": "apple-splash-1668-2224.jpg",
    "revision": "7770963583bc5342e4c557fccf40d8e8"
  },
  {
    "url": "apple-splash-1668-2388.jpg",
    "revision": "cb5ee1158d39282eb788318a9c32cd89"
  },
  {
    "url": "apple-splash-1792-828.jpg",
    "revision": "6bb4a7ca15e3ca06fc3c24fb22c68d45"
  },
  {
    "url": "apple-splash-2048-1536.jpg",
    "revision": "9eb91e97ddda23a30a323f65b8062ad8"
  },
  {
    "url": "apple-splash-2048-2732.jpg",
    "revision": "8375b7fd2afa98b97ba66bd9ceb107bf"
  },
  {
    "url": "apple-splash-2160-1620.jpg",
    "revision": "cf64dae26d1c0ec1f684885604a42ae8"
  },
  {
    "url": "apple-splash-2208-1242.jpg",
    "revision": "3f1f5be740ee2465a89ae8e85d697150"
  },
  {
    "url": "apple-splash-2224-1668.jpg",
    "revision": "e03e6f14e128e2e83173568c087ac7fd"
  },
  {
    "url": "apple-splash-2388-1668.jpg",
    "revision": "31e689da94115316eea11bd7858bc2bc"
  },
  {
    "url": "apple-splash-2436-1125.jpg",
    "revision": "25903632b43d8e2b05d34de6a9b1a4d7"
  },
  {
    "url": "apple-splash-2532-1170.jpg",
    "revision": "1a637e456c271e225ae6b1ace62c778f"
  },
  {
    "url": "apple-splash-2688-1242.jpg",
    "revision": "1473fae605c6821e4d5b1ec1e6c53912"
  },
  {
    "url": "apple-splash-2732-2048.jpg",
    "revision": "31437c0ef2108a8acef6f61c381acd4d"
  },
  {
    "url": "apple-splash-2778-1284.jpg",
    "revision": "1058dd680a24cafcc444e4cf69cc280e"
  },
  {
    "url": "apple-splash-640-1136.jpg",
    "revision": "78c8b658a77bc2cbbce495efa8fe1a90"
  },
  {
    "url": "apple-splash-750-1334.jpg",
    "revision": "414164a874d75fa3249200e2db1bd093"
  },
  {
    "url": "apple-splash-828-1792.jpg",
    "revision": "83ea433df20a289068e9e8dff9197b57"
  },
  {
    "url": "assets/css/0.styles.8e77433c.css",
    "revision": "bc43e201aa62e14a7322b103fbb89740"
  },
  {
    "url": "assets/img/logo-mobile.svg",
    "revision": "1be5ad712a86cb08c59dfafa92c74d25"
  },
  {
    "url": "assets/img/logo.svg",
    "revision": "53a271fe28d315cd99b01eef4689e41e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8b6f59c3.js",
    "revision": "37926049193f2c55af4efc84ca7dc2e9"
  },
  {
    "url": "assets/js/11.488bae60.js",
    "revision": "40b3ff10e7cdf278c222d140772ef6cb"
  },
  {
    "url": "assets/js/12.969ff11c.js",
    "revision": "b2f4151969f58d7d9447fb1242f05977"
  },
  {
    "url": "assets/js/13.9436981a.js",
    "revision": "631dc84bf21dc1c5a043415bc9ac3498"
  },
  {
    "url": "assets/js/14.f054b87f.js",
    "revision": "05d10f41e5ea9607a20f62b6411ac161"
  },
  {
    "url": "assets/js/15.643ae9db.js",
    "revision": "d9b1eacd15df9a42ad6866dc21ab4487"
  },
  {
    "url": "assets/js/16.03539845.js",
    "revision": "24a5ff111f10e48654b5b4e65fbfd72f"
  },
  {
    "url": "assets/js/17.cbe4ba86.js",
    "revision": "acda459ebf4dc505fafd8872a52cbdc6"
  },
  {
    "url": "assets/js/18.7f06b235.js",
    "revision": "109563b4c87e5c718477abcba26eadf4"
  },
  {
    "url": "assets/js/19.fbb1bc67.js",
    "revision": "2ffec69524ee73ef9427360cc5f101c9"
  },
  {
    "url": "assets/js/2.c850045f.js",
    "revision": "0117594fa4813c870958ae6c803989f4"
  },
  {
    "url": "assets/js/20.322bab29.js",
    "revision": "9721490c39f3a1478679ac532fbb5ee4"
  },
  {
    "url": "assets/js/21.98bb3687.js",
    "revision": "e8567c75c6c541c9c2856f824e8d8453"
  },
  {
    "url": "assets/js/22.5715ff0e.js",
    "revision": "55e353a7284e4cd26d1d91fed94385c9"
  },
  {
    "url": "assets/js/23.d790df30.js",
    "revision": "31e32dc88135385abbb3ae39b7899cac"
  },
  {
    "url": "assets/js/24.34cd6576.js",
    "revision": "15a429b375c081cf5020e67c6ece973f"
  },
  {
    "url": "assets/js/25.b79c5cba.js",
    "revision": "8279129803d3ed78f79ccad5fefd145b"
  },
  {
    "url": "assets/js/26.148f1f6c.js",
    "revision": "190c7399826fd19e022519e1adf3988a"
  },
  {
    "url": "assets/js/27.67897213.js",
    "revision": "c629f8a4afe0530d188239b4e398a96e"
  },
  {
    "url": "assets/js/28.3301f05b.js",
    "revision": "9e7419421efda4f13acf0d6067b9d28a"
  },
  {
    "url": "assets/js/29.17fe05ba.js",
    "revision": "992074b269d1c4c66dc50d84d8441cc5"
  },
  {
    "url": "assets/js/3.be28be7f.js",
    "revision": "a1d33fc0b852aba0b86e1c06cfc2f224"
  },
  {
    "url": "assets/js/30.2ea0a2ec.js",
    "revision": "5037d0324e8c1c59c90e7be99c265f3e"
  },
  {
    "url": "assets/js/31.f29f8c35.js",
    "revision": "7118ae2f46ea597236d204456bc198e1"
  },
  {
    "url": "assets/js/32.32209415.js",
    "revision": "494dd9a7dfb597bdae78badb271fae7e"
  },
  {
    "url": "assets/js/33.d654d334.js",
    "revision": "8c77d8495867ce0796a42cb948b2192e"
  },
  {
    "url": "assets/js/34.3fcea545.js",
    "revision": "c1bd466df66db94c2cadd4dd6b573390"
  },
  {
    "url": "assets/js/35.00e73ff4.js",
    "revision": "598adc9c5657b9b239497926944ddf02"
  },
  {
    "url": "assets/js/36.58e4ba8e.js",
    "revision": "a36f7af1e58cfbefc37fc89a3bc7e33a"
  },
  {
    "url": "assets/js/4.b588f8c0.js",
    "revision": "27144c8de7e78b83a0be9152c70c8b11"
  },
  {
    "url": "assets/js/5.ea811525.js",
    "revision": "db8f3921eaa0abd4812a2aa16e777e8e"
  },
  {
    "url": "assets/js/6.76bbe094.js",
    "revision": "e84f5fd3f1f71c5f5a43c799334c8f9d"
  },
  {
    "url": "assets/js/7.11df746f.js",
    "revision": "9b0463b10da9b1741661c3af719c37d6"
  },
  {
    "url": "assets/js/8.5f4880f2.js",
    "revision": "e251ff667d3262edf20562892fc43694"
  },
  {
    "url": "assets/js/9.d21a1125.js",
    "revision": "7117cf9a7ee058264d2ef76629b980bb"
  },
  {
    "url": "assets/js/app.dce75e2d.js",
    "revision": "0efe95c091b67f13126ca1a923f296c4"
  },
  {
    "url": "elasticsearch/clusterhealth.html",
    "revision": "ff89eab3ada91ea8530e3dfcbe447324"
  },
  {
    "url": "elasticsearch/index.html",
    "revision": "6e3f05487f8f77667d407ac04f165f46"
  },
  {
    "url": "icon.png",
    "revision": "1b41717b8e709123563385da6417a01a"
  },
  {
    "url": "index.html",
    "revision": "ffefab1c0e6cbc193ebe81d495d4f35f"
  },
  {
    "url": "logo-elevated.svg",
    "revision": "b7d351cd7bf7bc8bb3065c34bfd4f0bb"
  },
  {
    "url": "logo.png",
    "revision": "b127bd8c67be5bd69c4961e8e120a231"
  },
  {
    "url": "logo.svg",
    "revision": "11d3a3bc3c8a72a24da557860bc93f51"
  },
  {
    "url": "manifest-icon-192.png",
    "revision": "541ab552606493021e49af1076a932a8"
  },
  {
    "url": "manifest-icon-512.png",
    "revision": "d73db9ba7900f523ff6ad3131f65fdf0"
  },
  {
    "url": "packages/crawler.html",
    "revision": "37ecb258a0c9f509a586c79ac60fbfe3"
  },
  {
    "url": "packages/index.html",
    "revision": "627af24f67b1e667784a2ac972b3c754"
  },
  {
    "url": "packages/polledops.html",
    "revision": "8e4fe64363d6fc31347aaac1ca4011aa"
  },
  {
    "url": "sigmie/auth.html",
    "revision": "11e9173b31c5f69060ede5e0c16bdffb"
  },
  {
    "url": "sigmie/char-filter.html",
    "revision": "da9e2a7f04e72b65e6fdb7c6469fde99"
  },
  {
    "url": "sigmie/cli.html",
    "revision": "38f234f80ea32cd2026f568d2908bd86"
  },
  {
    "url": "sigmie/contracts.html",
    "revision": "c17918abb624c505e34e11f1f7c2bb40"
  },
  {
    "url": "sigmie/document.html",
    "revision": "5d4041a0805d979d2e9d52c4e23cb369"
  },
  {
    "url": "sigmie/exceptions.html",
    "revision": "85fb52d74f814371def323f730b1698e"
  },
  {
    "url": "sigmie/getting-started.html",
    "revision": "d590cfc1e7b9adce9f464a3beb5a7a48"
  },
  {
    "url": "sigmie/http.html",
    "revision": "a4275da5f78da72635a9b99d24507d86"
  },
  {
    "url": "sigmie/index.html",
    "revision": "bfa41eba7617ee6c0d721a5285f568a3"
  },
  {
    "url": "sigmie/indices.html",
    "revision": "715816abd9bbc51cd12c2721edf6857a"
  },
  {
    "url": "sigmie/mappings.html",
    "revision": "5121df6f48de819dbc16515d6a6daf78"
  },
  {
    "url": "sigmie/search.html",
    "revision": "68ce9c85b06d42c986f28cf852821267"
  },
  {
    "url": "sigmie/settings.html",
    "revision": "93bb9eadc707d8cafbf61abd7628f64d"
  },
  {
    "url": "sigmie/support.html",
    "revision": "8d20cf976c64f2ea2f498863d7a9f3c8"
  },
  {
    "url": "sigmie/testing.html",
    "revision": "de90a4f8781b15c026213dd18d83b9b1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
