'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "497320adb6f174a3db17a6a7666cd6a6",
"index.html": "34b6bfdfb9c187134d393e69b7acf237",
"/": "34b6bfdfb9c187134d393e69b7acf237",
"main.dart.js": "b7dccaf334b9f35e307176e86bbd67da",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "044496fc7803ed184f6b86f96e010a7b",
"icons/Icon-192.png": "c6dd11212c862b7002409817f750c98b",
"icons/Icon-maskable-192.png": "c6dd11212c862b7002409817f750c98b",
"icons/Icon-maskable-512.png": "94c00936c876454584b39c67385a7dd6",
"icons/Icon-512.png": "94c00936c876454584b39c67385a7dd6",
"manifest.json": "57e0e27a22e218503d4db4ee856afa0d",
"assets/AssetManifest.json": "196d3fe14cc4580b8b0560d9a9ab2cfc",
"assets/NOTICES": "4e0edb9102e0a101de83d539fa6323ba",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/theme%2520images/ss.png": "0e4378f657dd96fbd9236005a37b4ed2",
"assets/assets/theme%2520images/4.jpg": "e8eb3a058f67311fca9291b244695dba",
"assets/assets/theme%2520images/5.jpg": "1d0853238f6d7a7c203d87c6d8cf5567",
"assets/assets/theme%2520images/2.jpg": "ae0a3dc630ded83ac6b2cd5b7414ad71",
"assets/assets/theme%2520images/3.jpg": "721326c6f36a701e2a917b7772581de1",
"assets/assets/theme%2520images/1.jpg": "be00413ec089549a0479090914b31acf",
"assets/assets/logo.png": "17c581a7cf30ee796fb188454e543649",
"assets/assets/location.png": "b75801c8f729b61d35b9993267559cb7",
"assets/assets/all_sweets/milk_sweets/8.png": "5df527948c2a249e16dae573733e7915",
"assets/assets/all_sweets/milk_sweets/9.png": "9c5a9a4b92383c7f26edce630dc4fd64",
"assets/assets/all_sweets/milk_sweets/14.png": "46469500a00fe0f198cad679eb26f147",
"assets/assets/all_sweets/milk_sweets/15.png": "bc682a7ccbf642272a852e50b48232cc",
"assets/assets/all_sweets/milk_sweets/17.png": "bc1eadc8217842a9781a7f1db087ad1b",
"assets/assets/all_sweets/milk_sweets/16.png": "ceef6c046aceb0b5c4cc914c7b5a360b",
"assets/assets/all_sweets/milk_sweets/12.png": "1b76caaa0f194cec7f6416ce7a655862",
"assets/assets/all_sweets/milk_sweets/13.png": "1ff1ce5669ec9b85f9dcdaba74c1dcc0",
"assets/assets/all_sweets/milk_sweets/11.png": "5fa31773cde60d33575da82cbe1dde5d",
"assets/assets/all_sweets/milk_sweets/10.png": "4f8270fc454b9d7cc86c261ec98b1587",
"assets/assets/all_sweets/milk_sweets/18.png": "bab3ae52d6c0af61eb92fee30b3dc9a8",
"assets/assets/all_sweets/milk_sweets/19.png": "e1fdfd2a13034f5ae7b6506d3a8dcd17",
"assets/assets/all_sweets/milk_sweets/4.png": "57f479cc740e0fc5304d9c8cc32c0c52",
"assets/assets/all_sweets/milk_sweets/5.png": "cce4d514a76e9e498b74b1a0dfccf01c",
"assets/assets/all_sweets/milk_sweets/7.png": "2138fb48a4a46d1a0245520671af1101",
"assets/assets/all_sweets/milk_sweets/6.png": "c8fc6f45af03c6e43efa0e0a5571f1b0",
"assets/assets/all_sweets/milk_sweets/2.png": "c09f92c3c1b3cd61bfb21bbc8d0ffcb4",
"assets/assets/all_sweets/milk_sweets/3.png": "be77ea678b0eadd5d730ea24fc78d0a3",
"assets/assets/all_sweets/milk_sweets/1.png": "42167db91e522dbd6177c628e4b7fa56",
"assets/assets/all_sweets/bengali_sweets/8.png": "f45a067ad897335e56fffcab92051348",
"assets/assets/all_sweets/bengali_sweets/9.png": "90f466a1314cd6814d53f43eae21a293",
"assets/assets/all_sweets/bengali_sweets/14.png": "82d1bca74242455c8327eadd18115f63",
"assets/assets/all_sweets/bengali_sweets/12.png": "ca80e1249ab0308b49fe6a11a251dc08",
"assets/assets/all_sweets/bengali_sweets/13.png": "9c992071efed19e8b3a0f879f1e6661a",
"assets/assets/all_sweets/bengali_sweets/11.png": "5eba77502ad6e2606557962206287496",
"assets/assets/all_sweets/bengali_sweets/10.png": "b1c8111bf11d961f352c1d3904d54e7f",
"assets/assets/all_sweets/bengali_sweets/4.png": "0e9531e1748acac221f415dafdbd1c70",
"assets/assets/all_sweets/bengali_sweets/5.png": "edde872c3e66c610f87e0405900040c2",
"assets/assets/all_sweets/bengali_sweets/7.png": "6ec7d1bb0598454e42594d04c7304ec8",
"assets/assets/all_sweets/bengali_sweets/6.png": "53c8f10b8d0e8624a2ecb782697b1671",
"assets/assets/all_sweets/bengali_sweets/2.png": "181b9986f7ce10bddf7cd4c75a5cbb89",
"assets/assets/all_sweets/bengali_sweets/3.png": "df53e83feb41f3ebf32a1ce8021b39e3",
"assets/assets/all_sweets/bengali_sweets/1.png": "c3925d898cef301b2b024f34f1296349",
"assets/assets/all_sweets/hots/2.png": "7ce68332bbfcd4900d0578315278afa6",
"assets/assets/all_sweets/hots/3.png": "df7134d796f5233cab5172b4c7dacc8f",
"assets/assets/all_sweets/hots/1.png": "6aa5071a619b2e1b9f0f7fc5fbb17ffe",
"assets/assets/all_sweets/non_milk_sweets/8.png": "867c7ae0f9e975b4f29ba95c5c1ea069",
"assets/assets/all_sweets/non_milk_sweets/9.png": "da2413617aea95b722f409f01f521051",
"assets/assets/all_sweets/non_milk_sweets/14.png": "ad81746ffe3fb212d8384b93a5ca9dd9",
"assets/assets/all_sweets/non_milk_sweets/15.png": "3216cd689f75ba47fcaec4f745c9ac3a",
"assets/assets/all_sweets/non_milk_sweets/12.png": "bfc21f117b0a0d1ff64507de72058df9",
"assets/assets/all_sweets/non_milk_sweets/13.png": "2a4f2df7d1ffec4adb7503013847e506",
"assets/assets/all_sweets/non_milk_sweets/11.png": "58b6e884f69a8d72c4026555023ad03e",
"assets/assets/all_sweets/non_milk_sweets/10.png": "88bb9aecb6ce900320cf30d5c43d607f",
"assets/assets/all_sweets/non_milk_sweets/4.png": "d001a9c684c390e9e74b393a34c2e5c5",
"assets/assets/all_sweets/non_milk_sweets/5.png": "48a64f08f79c9237492edca73f5f883e",
"assets/assets/all_sweets/non_milk_sweets/7.png": "089031746647ee8b6173f2c81d35019a",
"assets/assets/all_sweets/non_milk_sweets/6.png": "467dc1b7885078f627e5a85c692bde4b",
"assets/assets/all_sweets/non_milk_sweets/2.png": "aa0691f2e71105ba9a8e02d06271b687",
"assets/assets/all_sweets/non_milk_sweets/3.png": "4ebdfe564ebc5b03660d18683ba10533",
"assets/assets/all_sweets/non_milk_sweets/1.png": "a2183eba58cba923b52d82f8e3bc8c5a",
"assets/assets/all_sweets/mixture/8.png": "d716f3755f8d1bf6dbcbf88929a43822",
"assets/assets/all_sweets/mixture/9.png": "6aba6ae2d4efd601d5a7b603b95d34fa",
"assets/assets/all_sweets/mixture/14.png": "8e42439c5c91dd80e2372038a479b030",
"assets/assets/all_sweets/mixture/12.png": "0ef2420d16d0dc3da86decb493c9c5b4",
"assets/assets/all_sweets/mixture/13.png": "d4868ba0326f92669b94ac7657d88750",
"assets/assets/all_sweets/mixture/11.png": "abed6db30ed519509f5282ad67f1ef5a",
"assets/assets/all_sweets/mixture/10.png": "054795314abbe21d36096c93ca931efb",
"assets/assets/all_sweets/mixture/4.png": "1003a9712dc9a29a677328ca3ca87861",
"assets/assets/all_sweets/mixture/5.png": "751f97222f59332c939b8c02f0235bbe",
"assets/assets/all_sweets/mixture/7.png": "968c07fba8051aa7ffa6863163322844",
"assets/assets/all_sweets/mixture/6.png": "eab983ba38f6855b66061156569f162a",
"assets/assets/all_sweets/mixture/2.png": "192b60b5fef6204d60fe32a8f2f33d89",
"assets/assets/all_sweets/mixture/3.png": "89ebb8b908c94e259394db32854d17a8",
"assets/assets/all_sweets/mixture/1.png": "f9837634678dcae898229d9009cb9199",
"assets/assets/all_sweets/dry_fruit_sweets/4.png": "9e9807e44cf9d0a63eb286e9bc1dd079",
"assets/assets/all_sweets/dry_fruit_sweets/2.png": "b1913e8b81ca80816a61db2f743a5d9c",
"assets/assets/all_sweets/dry_fruit_sweets/3.png": "7fe9fbdbe5543426007f60de9de1786d",
"assets/assets/all_sweets/dry_fruit_sweets/1.png": "4233ec9563b7abfc8ebb987f8b96e1cd",
"assets/assets/all_sweets/fruit_sweets/4.png": "c4c2d807749840ee7a73e2fc5242821d",
"assets/assets/all_sweets/fruit_sweets/2.png": "938838203a379d25097e2fb8e2a54295",
"assets/assets/all_sweets/fruit_sweets/3.png": "0c53586bd70db4746e012072f995e8ef",
"assets/assets/all_sweets/fruit_sweets/1.png": "9fdddaa7e41aa3378b5478394e18b16b",
"assets/assets/all_sweets/sweets/63.png": "663ea4f5147df1228ea2b7586873aad6",
"assets/assets/all_sweets/sweets/62.png": "4f8270fc454b9d7cc86c261ec98b1587",
"assets/assets/all_sweets/sweets/60.png": "ea7bf95ddaaca182902a00c29f6600c5",
"assets/assets/all_sweets/sweets/48.png": "f86aab7ba0ef884ef519f89cfdf2a388",
"assets/assets/all_sweets/sweets/49.png": "c6d61ede8a6f3ca4870f8ae21e211ecb",
"assets/assets/all_sweets/sweets/61.png": "1ee706c3064fc4d0c129fb9bc994eefa",
"assets/assets/all_sweets/sweets/59.png": "4993ce7b9e460c26b93c0cd1726ac8a4",
"assets/assets/all_sweets/sweets/58.png": "2f9991afa35f40366ed3e7e67c41ab44",
"assets/assets/all_sweets/sweets/8.png": "f824e1675ba69b206d36b1a77ff614a6",
"assets/assets/all_sweets/sweets/9.png": "4b7d4d0acdb105f463af35a9d1265cd4",
"assets/assets/all_sweets/sweets/14.png": "033e648e6249b10f33aa68efd5af157b",
"assets/assets/all_sweets/sweets/28.png": "a25eee23edac7a7f7bac51e88f380cbb",
"assets/assets/all_sweets/sweets/29.png": "c0b81385a74ec7a0c563db7952884380",
"assets/assets/all_sweets/sweets/15.png": "9e9f74a4eadf150e7119b8729e1e4db9",
"assets/assets/all_sweets/sweets/17.png": "901d16b115560b06e9ebe0e6afbb560f",
"assets/assets/all_sweets/sweets/16.png": "250397f11ff6dcd3f455fc3a4be4a3ff",
"assets/assets/all_sweets/sweets/12.png": "ba4b7eb59ec97291e20792b61fca288b",
"assets/assets/all_sweets/sweets/13.png": "24d94f92f19f43a893669c81d4f3208f",
"assets/assets/all_sweets/sweets/39.png": "80bd5b51d2719366964162e4ab6ec4f3",
"assets/assets/all_sweets/sweets/11.png": "933fa5b30d52897ecc15e8c1b7ffbd17",
"assets/assets/all_sweets/sweets/10.png": "11074580f84603e32bee4faa29c9dbb4",
"assets/assets/all_sweets/sweets/38.png": "c3d8237c60163590ec73a66c4bfbc702",
"assets/assets/all_sweets/sweets/35.png": "0f1bc65865fbcfcde83ff0109835240e",
"assets/assets/all_sweets/sweets/21.png": "d7e365f8bb48e8a52a7d502625c0961a",
"assets/assets/all_sweets/sweets/20.png": "418a22cb3a639e0783594862fbcc08be",
"assets/assets/all_sweets/sweets/34.png": "8923aa409404007c6a6eb615ea64fa94",
"assets/assets/all_sweets/sweets/22.png": "1325718aa2de3f7b0fb2a73ec0d0d1f6",
"assets/assets/all_sweets/sweets/36.png": "c09f92c3c1b3cd61bfb21bbc8d0ffcb4",
"assets/assets/all_sweets/sweets/37.png": "1392baf33425232f7f93d358a070c2d7",
"assets/assets/all_sweets/sweets/23.png": "b6172dc033314b2720abe46adbf76537",
"assets/assets/all_sweets/sweets/27.png": "391c4ee08ddd66f3e31d8315a8c6ed1d",
"assets/assets/all_sweets/sweets/33.png": "b79f2478f64c92b2df5d9c9543db8430",
"assets/assets/all_sweets/sweets/32.png": "11c5f2313c224fbe848ec0ade39ab0e0",
"assets/assets/all_sweets/sweets/26.png": "2c5de4c980ea2daaa258c2141073bb5b",
"assets/assets/all_sweets/sweets/18.png": "5ad72abc9fd70a13a4480851aa709874",
"assets/assets/all_sweets/sweets/30.png": "e9c1619a6d8fd960b6edca8c165be14f",
"assets/assets/all_sweets/sweets/24.png": "cf00472c96f68722a9cc9b4eccf8b18e",
"assets/assets/all_sweets/sweets/25.png": "6195625d7ec067fac88deb878cad28ed",
"assets/assets/all_sweets/sweets/31.png": "0b81ffe7ef84ce637276d5c5f8188e79",
"assets/assets/all_sweets/sweets/19.png": "65ec3298a0325b6c3b235e1b9424bf43",
"assets/assets/all_sweets/sweets/4.png": "92f18f3a36e8c2ead6a6788fda171a2c",
"assets/assets/all_sweets/sweets/56.png": "a144b7ea667cab9a7182de6439fe7a28",
"assets/assets/all_sweets/sweets/42.png": "42167db91e522dbd6177c628e4b7fa56",
"assets/assets/all_sweets/sweets/43.png": "2138fb48a4a46d1a0245520671af1101",
"assets/assets/all_sweets/sweets/5.png": "b57d521994025948316b322d1a9dad91",
"assets/assets/all_sweets/sweets/57.png": "cce4d514a76e9e498b74b1a0dfccf01c",
"assets/assets/all_sweets/sweets/41.png": "be77ea678b0eadd5d730ea24fc78d0a3",
"assets/assets/all_sweets/sweets/55.png": "ac8e0f399589bbfb3b231a35a831b2b3",
"assets/assets/all_sweets/sweets/7.png": "65880662a8c6ce0e700bae562247096e",
"assets/assets/all_sweets/sweets/54.png": "143a7c35f1d113e3d908578632ddcfc0",
"assets/assets/all_sweets/sweets/6.png": "52b4a52be7fd5bcf2c66b5eead1ef41e",
"assets/assets/all_sweets/sweets/40.png": "c8fc6f45af03c6e43efa0e0a5571f1b0",
"assets/assets/all_sweets/sweets/44.png": "5df527948c2a249e16dae573733e7915",
"assets/assets/all_sweets/sweets/2.png": "9cdfe17e9786e82d4582f9f225cf3e66",
"assets/assets/all_sweets/sweets/50.png": "b1602f8549f8940deca74b870d8a5767",
"assets/assets/all_sweets/sweets/3.png": "52088f874ba472b56beb90cfc390084b",
"assets/assets/all_sweets/sweets/51.png": "dbfbed27a98baf096d76ccb97222a5a7",
"assets/assets/all_sweets/sweets/45.png": "9fdaff4fcd5af431ac2a3e89a640c548",
"assets/assets/all_sweets/sweets/53.png": "57f479cc740e0fc5304d9c8cc32c0c52",
"assets/assets/all_sweets/sweets/1.png": "c53ccd1a9c6f4b534c7c90a6d34413a1",
"assets/assets/all_sweets/sweets/47.png": "388338fd64223a32712b538aa301436f",
"assets/assets/all_sweets/sweets/46.png": "9c5a9a4b92383c7f26edce630dc4fd64",
"assets/assets/all_sweets/sweets/52.png": "0f5b56aed9270accfd74319ec97b3541",
"assets/assets/shop%2520images/boad.jpg": "3896e7890f235d695e2c4d13bb70545e",
"assets/assets/shop%2520images/4.jpg": "31e1fca8f4df036dc73a282773ec9af8",
"assets/assets/shop%2520images/5.jpg": "fb0576e8f421aed32d0e35af8318fc74",
"assets/assets/shop%2520images/6.jpg": "a9f8a6242f7897c5572e2927fa2c2357",
"assets/assets/shop%2520images/2.jpg": "145d3f1c242f9e6bef7bec42a191866a",
"assets/assets/shop%2520images/3.jpg": "4a6b46265c98ac39dacbf678346a9036",
"assets/assets/shop%2520images/1.jpg": "f0bd66dbd10fbcf1d8b83de903dab457",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
  for (var resourceKey of Object.keys(RESOURCES)) {
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
