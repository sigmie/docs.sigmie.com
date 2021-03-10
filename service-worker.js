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
    "revision": "757f0b0e660c38d14d08e55facaece5a"
  },
  {
    "url": "app/cluster.html",
    "revision": "4c7fc9699847663b7dfad6d45dfa4b28"
  },
  {
    "url": "app/google.html",
    "revision": "840dd2a306fd9499c8e74682715d4332"
  },
  {
    "url": "app/index.html",
    "revision": "674c8577335042b783d1cd420187460b"
  },
  {
    "url": "app/proxy.html",
    "revision": "5da42aaf00f8dd47c809679ca3d8d7db"
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
    "url": "assets/css/0.styles.007f7d1f.css",
    "revision": "4cc13578e85ef7d1a6364016fc2bf01a"
  },
  {
    "url": "assets/img/logo-mobile.svg",
    "revision": "c191a3a640ded61f493cf1c86c962835"
  },
  {
    "url": "assets/img/logo.svg",
    "revision": "ce972f6257a74b613a2fab79df84cab9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.fad4c11c.js",
    "revision": "54d54fd3d69a801f9f37d44f0a52ae80"
  },
  {
    "url": "assets/js/11.ca165642.js",
    "revision": "d4b179ea0cc130e374c869e57b1441af"
  },
  {
    "url": "assets/js/12.2c68e927.js",
    "revision": "271f86efaba4e8ec6cc9b828b5365ec1"
  },
  {
    "url": "assets/js/13.319fcb83.js",
    "revision": "07c56c935ebcfa640951b6ef7a4327c1"
  },
  {
    "url": "assets/js/14.a3429341.js",
    "revision": "404ce8771b95ab6dd9e0e31c931e36e4"
  },
  {
    "url": "assets/js/15.dfc65250.js",
    "revision": "a49fffe97631cc63cc326eea9bf64859"
  },
  {
    "url": "assets/js/16.d38d67d0.js",
    "revision": "64b683fa2bdd85bc494001f77c8ea7bc"
  },
  {
    "url": "assets/js/17.548de372.js",
    "revision": "ff625ef33228eb1a34e51feb35196c29"
  },
  {
    "url": "assets/js/18.8b175e93.js",
    "revision": "2ea8922f79bec451b420e10ce448bcaf"
  },
  {
    "url": "assets/js/19.b6471c6e.js",
    "revision": "980c0118e4b94cf35490bf02a5cea816"
  },
  {
    "url": "assets/js/2.f0e16a71.js",
    "revision": "1c6669ee66d34703927f845e91fa49d2"
  },
  {
    "url": "assets/js/20.be80a44f.js",
    "revision": "87dc3d4ecab4973769c5f76197d1fced"
  },
  {
    "url": "assets/js/21.5939cadd.js",
    "revision": "5bf8175f25ee4cae43d58afb7fc4d107"
  },
  {
    "url": "assets/js/22.4af11b57.js",
    "revision": "05a2e24ac8fe1688be63520bf7f0aa3d"
  },
  {
    "url": "assets/js/23.37c03967.js",
    "revision": "33a4fe14622d03df662a09828919c6c1"
  },
  {
    "url": "assets/js/24.9326a2ad.js",
    "revision": "12407241f579be35a96acb6b74010dd6"
  },
  {
    "url": "assets/js/25.7c9b6001.js",
    "revision": "1eac2bc93db689766644cd677c79bdb0"
  },
  {
    "url": "assets/js/26.255bf889.js",
    "revision": "4c546c0f3eb07e4edadd8c48f961c473"
  },
  {
    "url": "assets/js/27.c8abd64b.js",
    "revision": "e7c7da3431da8440317378b7c9fa0d26"
  },
  {
    "url": "assets/js/3.e4a5fb3d.js",
    "revision": "64018c81e976a4eb208c5767e07c0f10"
  },
  {
    "url": "assets/js/4.c6843c60.js",
    "revision": "9e86a63f29965890c7517b7bf6eca036"
  },
  {
    "url": "assets/js/5.6568bc8f.js",
    "revision": "01df25006cf1c6fb11539039b46deff4"
  },
  {
    "url": "assets/js/6.f47491da.js",
    "revision": "d5409e8a11c5f44791cdb41bbb181128"
  },
  {
    "url": "assets/js/7.cd614340.js",
    "revision": "e005dd91afd0fd804e45ba4ab08c9250"
  },
  {
    "url": "assets/js/8.f9e666b0.js",
    "revision": "95dfe0fdd6d3b3988467468d61575245"
  },
  {
    "url": "assets/js/9.356f4dc2.js",
    "revision": "b2fbe6ce548e55b1c57419c26bd82705"
  },
  {
    "url": "assets/js/app.76b4c036.js",
    "revision": "90523ee20630a2a376152890c7e6ccb3"
  },
  {
    "url": "elasticsearch/clusterhealth.html",
    "revision": "969b283bb0f1bf3d1e8c221a8e80c607"
  },
  {
    "url": "elasticsearch/index.html",
    "revision": "019d7ceeb6b95e230b60baafa6f68a97"
  },
  {
    "url": "icon.png",
    "revision": "1b41717b8e709123563385da6417a01a"
  },
  {
    "url": "index.html",
    "revision": "13303bd1a85b44851277bf504bce098a"
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
    "revision": "2f668b66a785d2ca72e682dc0f162d2b"
  },
  {
    "url": "packages/index.html",
    "revision": "eb5f191b35ce3cf01582023e7903335b"
  },
  {
    "url": "packages/polledops.html",
    "revision": "6fb000a78618862c48f8ef258c8618e7"
  },
  {
    "url": "sigmie/auth.html",
    "revision": "6399ea6338b2eb848d120d0e444a55a4"
  },
  {
    "url": "sigmie/cli.html",
    "revision": "0edbd9ae61a1b1e7453cb2dfd26ab11b"
  },
  {
    "url": "sigmie/contracts.html",
    "revision": "461c1d16f14174096574896231fdc95d"
  },
  {
    "url": "sigmie/exceptions.html",
    "revision": "0efac9c33f08d5a3084592a70afce595"
  },
  {
    "url": "sigmie/getting-started.html",
    "revision": "94e28c733f6579f42b95ad5919309115"
  },
  {
    "url": "sigmie/http.html",
    "revision": "ec74f445799d5a67132e1625468cfda3"
  },
  {
    "url": "sigmie/index.html",
    "revision": "6252f9a95a0cab47407cb8ed12fe4aac"
  },
  {
    "url": "sigmie/mappings.html",
    "revision": "c7a57b7559464e99161a10f79ac797c1"
  },
  {
    "url": "sigmie/search.html",
    "revision": "454e1f970ed0e93c42d655cd775b0f86"
  },
  {
    "url": "sigmie/support.html",
    "revision": "a87998ccc99b6a0a4718554d1f2b3feb"
  },
  {
    "url": "sigmie/testing.html",
    "revision": "98abac73ddcd0f3bbe05003dcd8e74aa"
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
