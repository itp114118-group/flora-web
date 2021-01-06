'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "c613f1f53308de95771f973ef0335bd4",
"assets/assets/fonts/SF_Pro_Text/SFProText-Bold.ttf": "d6079ef01292c4bc84dce33988641530",
"assets/assets/fonts/SF_Pro_Text/SFProText-Medium.ttf": "a260cbc18870da144038776461d9df28",
"assets/assets/fonts/SF_Pro_Text/SFProText-Regular.ttf": "85bd46c1cff02c1d8360cc714b8298fa",
"assets/assets/fonts/SF_Pro_Text/SFProText-Semibold.ttf": "1a131c948d598ecec700d37d168a15b5",
"assets/assets/icons/camera.svg": "9eb2eef4ba2cae5b630edf7798d6ecd8",
"assets/assets/icons/explore.svg": "6e2e7d27b722bf056e4b27053f291506",
"assets/assets/icons/facebook.svg": "a8497c6b01d4c37d801c6fadd116da90",
"assets/assets/icons/filter.svg": "6f0c192822f1b357503fb0b1a6e89551",
"assets/assets/icons/google.svg": "1f53320629b0a6f605e98a13e48240fb",
"assets/assets/icons/home.svg": "a86b0775bfe16f3a2c38d0dacb1c7dff",
"assets/assets/icons/logo.svg": "a54ccd5ecb768bee710ea0ff273b64b6",
"assets/assets/icons/profile_contact.svg": "454eeb5f10cdd1bf42941dd2edbb798f",
"assets/assets/icons/profile_favorite.svg": "22e7ffb4a0b27c03e218ad431bbaff5f",
"assets/assets/icons/profile_fqa.svg": "fd504951a8cb4fc3f5086285538878cd",
"assets/assets/icons/profile_manual.svg": "eb6108e067d9cb3aaa5244f1962559b2",
"assets/assets/icons/profile_settings.svg": "b9f33b5f228a917044505c0ec15aaa55",
"assets/assets/icons/search.svg": "7c9a6f0cb0b819b58e9ed7c5b0717713",
"assets/assets/icons/transparent.svg": "762b8f62bcb2788e7d512a5ed42072ed",
"assets/assets/icons/twitter.svg": "e8d54dd3bd3466fc88043bdd12765875",
"assets/assets/icons/user.svg": "dc368bcf8dd5cb9d7d00a72ea722c87c",
"assets/assets/illustrations/Illustrations_1.svg": "5daa042a5070ae0076f38e928e59f5f7",
"assets/assets/illustrations/Illustrations_2.svg": "44ea43c5260af54399963a77bd283e31",
"assets/assets/illustrations/Illustrations_3.svg": "8c464248dafd7b4c1d6dcc4b3a61bd3c",
"assets/assets/images/card_1.jpg": "483a87ee78f9524b5cbad0f6872c72a5",
"assets/assets/images/card_2.jpg": "dafc98bbd6625797f84de7c408002ea0",
"assets/assets/images/card_3.jpg": "eb0e0c9ab9be524753c5d14bbe6799c4",
"assets/assets/images/card_4.jpg": "b601857714aec0146bc64fa7891cce39",
"assets/assets/images/placeholder_avatar.png": "06ebc68ebc8bf98f18161d7ebd3eacaf",
"assets/assets/images/profile_icon.jpg": "d995d728def36a40a261e36bab9f9bfe",
"assets/assets/images/teamwork.jpg": "317a06576deee88232190bb3f2e04810",
"assets/assets/images/vrilustration.png": "ea7d516fc55aee1afbd7a73fad128a92",
"assets/assets/md/terms_and_conditions.md": "95457427c2f0d8b5f1bafc5c4904d74c",
"assets/FontManifest.json": "0c689a1e3c30ae765c770e1067834fd8",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "6aae7a5975db06b15c50447f39a57503",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/flutter_markdown/assets/logo.png": "67642a0b80f3d50277c44cde8f450e50",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "831eb40a2d76095849ba4aecd4340f19",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a126c025bab9a1b4d8ac5534af76a208",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d80ca32233940ebadc5ae5372ccd67f9",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "58646ad3c5e0476bd444cbaeef85b02f",
"/": "58646ad3c5e0476bd444cbaeef85b02f",
"main.dart.js": "e391668801dde83c402ddbb2095bb385",
"manifest.json": "92cf5ee8800d7d695b25d1e7569419d3",
"version.json": "87a1b749bbe351bce247cc4df1142036"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
