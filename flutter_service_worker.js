'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "3bec029dedebdb8696be3057babd83cf",
"assets/assets/audio/10.m4a": "dc854413b832ca1d9cd0dd8c0d7a4e96",
"assets/assets/audio/101.m4a": "7bf0b64c368f7253c471e5bfac249c88",
"assets/assets/audio/103.m4a": "5de717745ab979f00312090e4aa36dbc",
"assets/assets/audio/104.m4a": "7a87065eee0310c3f4676ef2ccd9e1c7",
"assets/assets/audio/105.m4a": "9d19dded6cc22d6960d6dc005195966f",
"assets/assets/audio/106.m4a": "3566877154e5d7029d22b494022623c4",
"assets/assets/audio/107.m4a": "13a1065e2bf9ded6341a91532a746124",
"assets/assets/audio/108.m4a": "acb01b48902cfccac843f22c1a6f58c1",
"assets/assets/audio/109.m4a": "64d13b9811a6c478a18680dad5f4510f",
"assets/assets/audio/112.m4a": "f6a83c6e827cea2d20f080c4ff9d58a1",
"assets/assets/audio/114.m4a": "4aa83dd5b3602e3e3b9286d35960b0d5",
"assets/assets/audio/115.m4a": "fc3d63deda46619c90368d1d889c8d35",
"assets/assets/audio/116.m4a": "e07c17797882619166125e14a80b1197",
"assets/assets/audio/118.m4a": "6bf8366cf182484e9bc354374f0bae24",
"assets/assets/audio/119.m4a": "fe34d8621ca439543ad252053cfd94b4",
"assets/assets/audio/120.m4a": "e51e76c2d3740442bf913dc99e2d45d6",
"assets/assets/audio/124.m4a": "030f899c69e39132bec05e4fe01ee19d",
"assets/assets/audio/125.m4a": "345dfeeebcbddd3cac5270e84a5b20fa",
"assets/assets/audio/126.m4a": "d6af3204ed39b5917b903dd9220c2c78",
"assets/assets/audio/127.m4a": "7e3c19ed0512cc465d5d8115b8d3dc76",
"assets/assets/audio/130.m4a": "ff35e09abd954955cc52b779561ebb9d",
"assets/assets/audio/131.m4a": "3b75900c37162ad7ff634af9046a0f46",
"assets/assets/audio/132.m4a": "34118576f02dd83636398e52705c9ea6",
"assets/assets/audio/133.m4a": "31229826f2b83e3efbaf025cd0f9ff1d",
"assets/assets/audio/138.m4a": "cfadd52d69912bfcf928993ed6fcf45c",
"assets/assets/audio/139.m4a": "35932d5af9520054459abf7cf43f327d",
"assets/assets/audio/141.m4a": "986e98df8f594ce20bea756747e13d73",
"assets/assets/audio/142.m4a": "45ea5b649ce25353772a4de6ec50b158",
"assets/assets/audio/143.m4a": "ce65191b200a96384d22878d9932eff2",
"assets/assets/audio/147%2520redo.m4a": "322f297454b78d217f18abad77f0f943",
"assets/assets/audio/148.m4a": "1e4d2a3d57e5cf355c5105683c469aae",
"assets/assets/audio/149.m4a": "dd88ac0cb6b27a577da32accd3f51a45",
"assets/assets/audio/15.m4a": "1f37a8e9b56b52ba7512693b3dd8341f",
"assets/assets/audio/151.m4a": "5edec4f6c2013dd45f84c09bf4ef5ff8",
"assets/assets/audio/152.m4a": "cb532854adc2385f5ce1e5f69b7eb457",
"assets/assets/audio/153.m4a": "06bcee46ace76b6f7bb2894f70560efb",
"assets/assets/audio/154.m4a": "4c17b5e53d6b6d708219cf1ef3d1ab44",
"assets/assets/audio/156.m4a": "c9686aa0650ca394976e5d2295026637",
"assets/assets/audio/16.mp3": "25b0e223fbe66648dcdb3a45a4c153eb",
"assets/assets/audio/160.m4a": "c8a178a0c4fb905265457c0c1e510be2",
"assets/assets/audio/161.m4a": "f4ba49c1b273e06eaeee68f610409ff8",
"assets/assets/audio/162.m4a": "2ba0ab7a17f30f8e4398d043172b52eb",
"assets/assets/audio/163.m4a": "39981ab637d5227ebf04f84a825c2b55",
"assets/assets/audio/164.m4a": "c111c53e79bda24c45d4207ab1b997c7",
"assets/assets/audio/165.m4a": "e6d71866851d86ad3e72e864401ec0c5",
"assets/assets/audio/168.m4a": "e2aa4d11b6181c1c5909f130de629070",
"assets/assets/audio/169.m4a": "04a218bf3c8aa9418483248ab2cd9f9f",
"assets/assets/audio/17.m4a": "46d4025680225d042a5ffb885f75a6f1",
"assets/assets/audio/170.m4a": "f088541fc5810c47e0d495250936ef3d",
"assets/assets/audio/171.m4a": "91388dd131dc635c65bea9f2b0f65e1c",
"assets/assets/audio/172.m4a": "4c25051164f3ae6c81610233d42c669b",
"assets/assets/audio/173.m4a": "68642c5ae9262c27b8939608dfcf7975",
"assets/assets/audio/174.m4a": "0d21d138e0cfc63f04896cc3ab8a2d4c",
"assets/assets/audio/176.m4a": "f716ba1bdaf43a279c403795dd9c49bc",
"assets/assets/audio/177.m4a": "025012f8a4a7a11b7f5b146ade6a9d30",
"assets/assets/audio/18.m4a": "175611ee9f943051ad343cc19814bf5f",
"assets/assets/audio/182.m4a": "08507f910280bc348f6da0b2ca54c239",
"assets/assets/audio/19.m4a": "acaf12a5c5ba26489b8b997e9613db4b",
"assets/assets/audio/20.m4a": "eb9ba2f37007154739331172c740afca",
"assets/assets/audio/22.m4a": "95e19b21f0e0855835953ad219c8b37e",
"assets/assets/audio/23.m4a": "a26cb9e8f3bb74ac247ec5f8eeddca39",
"assets/assets/audio/24.m4a": "7291c2a23b245ffa6fdca6178c072387",
"assets/assets/audio/25.m4a": "a6a4ce2719ca8eba738fa0bf224903d6",
"assets/assets/audio/3.m4a": "c1fab953987beef301cb653d50337cb6",
"assets/assets/audio/30.m4a": "073024a97049a32a30d6d1c1f070d125",
"assets/assets/audio/31.m4a": "27964c8ade669d1cc51900ca91699400",
"assets/assets/audio/32.m4a": "15679b1c85855f3be2c944bae99033eb",
"assets/assets/audio/33.m4a": "660c1d21cf6545924d3625e673b8f426",
"assets/assets/audio/38.m4a": "c716f6c0465db8fc9dc1bb35d0fafd54",
"assets/assets/audio/39.m4a": "d8d470be926e063b5f40f331116ee194",
"assets/assets/audio/4.mp3": "3b124af00e38641fe568d1ce1d7fc1a6",
"assets/assets/audio/40.m4a": "ac7ffe15fe408e56fb63d94bca56465c",
"assets/assets/audio/48.m4a": "9bbd6702a4990eca2c6c3a21e8ec128f",
"assets/assets/audio/49.m4a": "7ee11fad4dc6a79e6cc602401340aefc",
"assets/assets/audio/51.m4a": "524ec4173c7cc5abf2870f5f8451f9f8",
"assets/assets/audio/52.m4a": "eb22d1da92d55aff3697c3d4a2e6ed0f",
"assets/assets/audio/55.m4a": "49ebc309f5aad307b61c13e9257fa820",
"assets/assets/audio/57.m4a": "2d194d6f6310ed50ff251468a67208e1",
"assets/assets/audio/59.m4a": "50f467864283900c09b12208e336eccf",
"assets/assets/audio/6.m4a": "1c5cadc1d604feffd9828139ed68516b",
"assets/assets/audio/60.m4a": "f261764be98408db5bee092646363447",
"assets/assets/audio/61.m4a": "b021cdc169a38517fd32f1603ccbef4f",
"assets/assets/audio/63.m4a": "d95f48ed7c0ddc9fed0e5824c7138e81",
"assets/assets/audio/64.m4a": "75568b22f84bbf499b3f5983d71295db",
"assets/assets/audio/65.m4a": "51d84d395756ff72a21d9cc0b1f388d2",
"assets/assets/audio/66.m4a": "aaeb778acf7cec9294a416f0a78acbe0",
"assets/assets/audio/67.m4a": "fc80fe75b0ac8a0bf1bf7536f27cdcb1",
"assets/assets/audio/68.m4a": "dd45fa31f6257dc8a5068a54a0b2edd6",
"assets/assets/audio/69.m4a": "388f6579207d996f06e106cb27911842",
"assets/assets/audio/7.m4a": "e868ec84fbf2fd1b95784c146489ee75",
"assets/assets/audio/75.m4a": "8a0a324a538f191fd8babcf6718359c4",
"assets/assets/audio/76.m4a": "3eb421f3709187bdeaa0952527042a62",
"assets/assets/audio/79.m4a": "5b518f1bcf15fff71288edce1da8f221",
"assets/assets/audio/8.m4a": "e537e57dd5fb12c46bb91d90333e198b",
"assets/assets/audio/80.m4a": "42c84c3349a63fb4be3d68e26c1b346e",
"assets/assets/audio/81.m4a": "4599aef6f0282d4f65c08c50e73ffdbb",
"assets/assets/audio/85.m4a": "48a7964e71e900bcaf003ddaa8dbbe7f",
"assets/assets/audio/86.m4a": "4ab8941ebd623d3882681a2e2abfa4bc",
"assets/assets/audio/87.m4a": "96a2d442174b91be3b92549432ec5048",
"assets/assets/audio/88.m4a": "879439edf843cb536490e784a5aaa3dd",
"assets/assets/audio/9.m4a": "8db99d7d53c97e40099ae42c18039e3a",
"assets/assets/audio/93.m4a": "d075d2411ebd4159dedf778dfe8ce521",
"assets/assets/audio/95.m4a": "fad73aaa0531d925cfb1307f25048c42",
"assets/assets/audio/96.m4a": "d9ebdc06df18faf1d7796f7925d7c2fd",
"assets/assets/audio/97.m4a": "fe5cc342c01ff19d6e4067a71791f4da",
"assets/assets/audio/ambience/CALM.mp3": "0ea90398626c592828837561f3a12f9c",
"assets/assets/audio/ambience/DISCO.mp3": "134a73be4807c2710f44f2cc25df2a3b",
"assets/assets/audio/ambience/DISTRESS.mp3": "b0effc3c97ea170f37fe70f61b2fc4ac",
"assets/assets/audio/ambience/END.mp3": "927e1b8c297adb0ded8acd4ff690be56",
"assets/assets/audio/ambience/HOSPITAL.mp3": "8a1cc382193cbbfb7d817b4f777510ce",
"assets/assets/audio/ambience/OFFICE.mp3": "a6dd66dac7d1d4ec829c52e8485122be",
"assets/assets/audio/ambience/OUTSIDE.mp3": "5caa861dce081cf834b0f0ba17291e82",
"assets/assets/audio/ambience/ROMANTIC.mp3": "8d4e1096d99f0414d05a53b0223f54e4",
"assets/assets/audio/ambience/SAD.mp3": "739479790eec1301d1391a6530344fb1",
"assets/assets/audio/ambience/SCAN.mp3": "5bc4fca76df5e945721978604781d53d",
"assets/assets/audio/notifications/ALERT.mp3": "c627a9969ece1439c1bad76c5f14b33b",
"assets/assets/audio/notifications/NOTIFICATION.mp3": "869ca1855cbc41dfd42443896376ff94",
"assets/assets/audio/notifications/SWISH.mp3": "cf6de82bebe2740ada1cc0edde8b0678",
"assets/assets/audio/notifications/TECH.mp3": "d8a23600c7a358ad5cbd419eb682b23b",
"assets/assets/audio/notifications/WARP.mp3": "e1723b236e32dae31530e81a72161160",
"assets/assets/game_assets/main_menu_bg.jpg": "f5bcb6cc29c45b4b3a0efe910623c386",
"assets/assets/game_assets/main_menu_bg_alt.jpg": "3182a45edf9b1b0beb696568409d4926",
"assets/assets/images/1.png": "a77dd316b2abf8f8c4c2923acae2fa05",
"assets/assets/images/10.png": "07fb8f18430ccf101256f6aad53bb1af",
"assets/assets/images/100.mp4": "37d2eb1bb94d0953df1ec438898c3e31",
"assets/assets/images/101.png": "fdf715ad9df84549312ae65451a3d9a5",
"assets/assets/images/102.png": "d56a34f2e4d71a2b98328bd74fa250ec",
"assets/assets/images/103.png": "80704c1688a72d5011ff831cedb86beb",
"assets/assets/images/104.png": "04cc873246917b5d6a4a16a9937f67f1",
"assets/assets/images/105.png": "15555141974fa24a93e8218f1160f529",
"assets/assets/images/106.png": "3220bc28fc1347592a8ad7fb5e35c885",
"assets/assets/images/107.png": "6d8a5b9850c4c10d6fc5a0dd7dc5e3f9",
"assets/assets/images/108.png": "2e47dd52a4eadc76f25d41379950c7ed",
"assets/assets/images/109.png": "f70e9cc2a5eb9dbc026d73f0cc234280",
"assets/assets/images/11.mp4": "817d057b9ab98976e29f79d6af202216",
"assets/assets/images/110.mp4": "89f81eadfc992b87bf9c02ee59e17d50",
"assets/assets/images/111.png": "1d5b6d360468a9b0002335fd844e3c79",
"assets/assets/images/112.png": "02ceaae4febb37d7a87a136ac7cba7f8",
"assets/assets/images/113.png": "8c780e257357befa933ff8ace081021f",
"assets/assets/images/114.png": "cee21472fa2066d65baff89f0a49719f",
"assets/assets/images/115.png": "888e6d81d9c5835a4c6e76b8f048cb44",
"assets/assets/images/116.png": "d75c85fa095ce2390c81b5b611aa3ae8",
"assets/assets/images/117.png": "d0ef19012d673f0335b5f87bd993e376",
"assets/assets/images/118.png": "45da1c72f9f52b5dcbdfdb58c6fe910a",
"assets/assets/images/119.png": "0ec40898912d4f92ca8d824eca37d4f3",
"assets/assets/images/12.png": "ee74f56475f6a7949a06df7f0a0aa814",
"assets/assets/images/120.png": "9bef3c73c3e077ea88c178ce69c128d4",
"assets/assets/images/121.png": "f09e4645990b2929dc0d1217fa04cc78",
"assets/assets/images/122.png": "da84623f59150b3f4832465173035635",
"assets/assets/images/123.mp4": "890d1900b37ae863b820ccd18b393b6c",
"assets/assets/images/124.png": "3f1a0e66f24da4af83d2f6a45e5326f5",
"assets/assets/images/125.png": "d7af7ae799d1730e510352bea1c118ce",
"assets/assets/images/126.png": "24e68cb233831a3ce09c056ce85a5314",
"assets/assets/images/127.png": "b014904d3329a6ae49c80da517a748a1",
"assets/assets/images/128.png": "4ac3b693e9b4065bbb46ef9af6ab8c19",
"assets/assets/images/129.png": "d758ca7f2f37675a28c2e0e5aa658113",
"assets/assets/images/13.png": "db460fb767313a910fdd4439c6374ccd",
"assets/assets/images/130.png": "0a179f336495ff525c53bcf1c9a6376f",
"assets/assets/images/131.png": "2922fcf6e9d34f6e12de937a9bb1cfeb",
"assets/assets/images/132.png": "47c83645a6b4c82a246247ca63771f09",
"assets/assets/images/133.png": "860b0cee0b1aa8dfa19853ed9b167e6e",
"assets/assets/images/134.mp4": "ebabeec45d41415496636f61278fcf12",
"assets/assets/images/135.png": "da84623f59150b3f4832465173035635",
"assets/assets/images/136.png": "f09e4645990b2929dc0d1217fa04cc78",
"assets/assets/images/137.png": "1fba0a476b2dc2c9808676607a4a05f6",
"assets/assets/images/138.png": "8f2d695f2ac5dc5d5b0565fd000de5a5",
"assets/assets/images/139.png": "f4b471a31072c1384a1338e8946e6b92",
"assets/assets/images/14.png": "3481cf94deaf9924839b486b6a93b511",
"assets/assets/images/140.png": "499e65d554fa7130be5c59a86038e33c",
"assets/assets/images/141.png": "147f7d20246a2ce6aa39344b5611da9c",
"assets/assets/images/142.png": "0cf883125600710d59265e36d975b170",
"assets/assets/images/143.png": "750c4d2cf15915d87ac19b8f7f65429c",
"assets/assets/images/144.png": "eb3417dd01f6eb5ba32749a796644b71",
"assets/assets/images/145.png": "da84623f59150b3f4832465173035635",
"assets/assets/images/146.mp4": "890d1900b37ae863b820ccd18b393b6c",
"assets/assets/images/147.png": "6285c7f1611ae2f1c7da17501b930aed",
"assets/assets/images/148.png": "1273409a54fde38d1090727426a406a2",
"assets/assets/images/149.png": "acd5fa8e3e72e075abedd9fed88003fe",
"assets/assets/images/15.png": "d8ccef18c9a6a3aab00e7c78d0e10d90",
"assets/assets/images/150.png": "183aa2835726da9568b7fcbab8759c39",
"assets/assets/images/151.png": "ede1fd1880bfe26af00e725068d33def",
"assets/assets/images/152.png": "78ff2463fb144f34b084696842f96f21",
"assets/assets/images/153.png": "f5bddd47f97af32589bc95baad6dd54e",
"assets/assets/images/154.png": "a8c8a7d9102170c1d05e9adb492b9140",
"assets/assets/images/155.png": "f14fb8858fb8669859c7b85edfd4538b",
"assets/assets/images/156.png": "d24b4016164dc5f41f512f236efcad69",
"assets/assets/images/157.mp4": "09af4aee77060c51939afd1caaa17795",
"assets/assets/images/158.png": "b93fe264c270af1643bbd35af28f8135",
"assets/assets/images/159.png": "de059131d258d1bfb4bece832101181a",
"assets/assets/images/16.png": "20a6d943d535932672bc424e2634b007",
"assets/assets/images/160.png": "b7475a099601cd5d29e83046a46dc602",
"assets/assets/images/161.png": "65feec26897dc2993f2baaa437418851",
"assets/assets/images/162.png": "d9825de03b837857163e98640295d802",
"assets/assets/images/163.png": "4cab4a634c118159a607a110a50b3b35",
"assets/assets/images/164.png": "85ed997b9be8307c9a77dfd3e5866767",
"assets/assets/images/165.png": "d581a234e210d64d56f037080576654e",
"assets/assets/images/166.png": "df1c05617554f8fdf82dd159b057487d",
"assets/assets/images/167.png": "5ee885ef9e0d45d6f21c833e496793a4",
"assets/assets/images/168.png": "65fdf71ecd954f4006c847d590e1dfdb",
"assets/assets/images/169.png": "761ae87a18dd55a951e5234b8b6950e4",
"assets/assets/images/17.png": "a149ea1b37d0f59a1ec7b4ad2d90babd",
"assets/assets/images/170.png": "ded159834149d9e2daa83782dbc281ad",
"assets/assets/images/171.png": "a98ec38138b27e78931c341efaed61ab",
"assets/assets/images/172.png": "999e468fcb6c8634eaeaaee8aadeee21",
"assets/assets/images/173.png": "abe5bfa368480865c52fe76a2f66e943",
"assets/assets/images/174.png": "ca323eded39cd687b5aeee602b122d4e",
"assets/assets/images/175.png": "1d0365e2d3a1f143ecd0ad457232ef53",
"assets/assets/images/176.png": "b6f557b605a7155c0bd348a9ee77395c",
"assets/assets/images/177.png": "b11e6e8ca5dd02c1fe8e62b1dda9a1f2",
"assets/assets/images/178.png": "8649a97df19e9e278745f2ccf82d98a7",
"assets/assets/images/179.mp4": "ebabeec45d41415496636f61278fcf12",
"assets/assets/images/18.png": "925f59206e18c52070eb9796ba95fd5a",
"assets/assets/images/180.png": "25a3be01cae1ff62885a2a0cfaf506a9",
"assets/assets/images/181.png": "f6c36ee4a3b774225900cf36c23bc959",
"assets/assets/images/182.png": "3ad924e7c63caf6b7c9e2494154886b9",
"assets/assets/images/183.png": "d522d699e809d99f5c536057575a46ff",
"assets/assets/images/184.png": "a53dafeda64c2dd48402e3420da146ce",
"assets/assets/images/19.png": "ef24997f7923c7e2dd9c3b4d4383f84a",
"assets/assets/images/2.png": "2fc085e06b9676e80c8091786f64d7e0",
"assets/assets/images/20.png": "80fbc13835656cf14a841d5a9fe67a2f",
"assets/assets/images/21.png": "08f4a198b2ad96c5931a0d5404c10e0f",
"assets/assets/images/22.png": "0e5006d3ad4e3bebad61456f3ad4a111",
"assets/assets/images/23.png": "4f1672d5af9382e6c278f58f590479ec",
"assets/assets/images/24.png": "f12dbf3a7763c251db460a0831a5452a",
"assets/assets/images/25.png": "5a0c8354baee16f974d367dff33d4587",
"assets/assets/images/26.png": "db460fb767313a910fdd4439c6374ccd",
"assets/assets/images/27.png": "ee74f56475f6a7949a06df7f0a0aa814",
"assets/assets/images/28.mp4": "143eb4a795bd9d97ac83532c9ab18036",
"assets/assets/images/29.png": "f55cbd93aec2af09ded0cc6bf1ba8108",
"assets/assets/images/3.png": "6556d513de29f3e85e353508fc9f54bb",
"assets/assets/images/30.png": "fdb7598e7d857001b5beb7bab4492b14",
"assets/assets/images/31.png": "7c9950d23a1c6d32c2236dc9a83e0bf5",
"assets/assets/images/32.png": "f87d258cf6905550adc72aa99df47543",
"assets/assets/images/33.png": "41dc23b0416cf0f87854327458d667e2",
"assets/assets/images/34.png": "a886acacd3e6291d98ff9f93d776e66b",
"assets/assets/images/35.png": "93bbc6efbd5a09c4a9703d82790632da",
"assets/assets/images/36.png": "b7977c11a1a5c07fb8774e23778082e6",
"assets/assets/images/37.png": "a7c9d13fa73a12ee046e4f985dc01a2f",
"assets/assets/images/38.png": "3b469e517363e7adcb466d6c4d2b9924",
"assets/assets/images/39.png": "41f828d7c4e79ad3899337de30490799",
"assets/assets/images/4.png": "b03ac7bd7e4f9459ad2a48cd134d596c",
"assets/assets/images/40.png": "b1cb2c028e8cc5e46b05cb4c560cb910",
"assets/assets/images/41.png": "24c38b908c23169cabd8f445477e1fc4",
"assets/assets/images/42.png": "597b3a6bf1645155aabfe5d6f9a88fd8",
"assets/assets/images/43.png": "b4c515c6aca8cb73b71f6306aeb8428c",
"assets/assets/images/44.mp4": "817d057b9ab98976e29f79d6af202216",
"assets/assets/images/45.png": "cc9eea23ac38faf2e8b07f0e9486002b",
"assets/assets/images/46.png": "6874edcee37163901e2526968d9f0bfa",
"assets/assets/images/47.png": "e73767591dfbca4781d71edaad2fa087",
"assets/assets/images/48.png": "09ce3e125d8ad484d519085fe80fbcd2",
"assets/assets/images/49.png": "4e9663754a0df49ade71285ce309d785",
"assets/assets/images/5.png": "8025777e8de0fb7e0cbdee056fcf4a07",
"assets/assets/images/50.png": "057f95d0dfcaab3f4ee7d77d3cba096f",
"assets/assets/images/51.png": "6e5aed1beaa1e151c1200d03fb926a69",
"assets/assets/images/52.png": "b6234e2f477f8a56b9e20a3a87978422",
"assets/assets/images/53.png": "157827419e72a6dfce9d87ecfbd3b5c7",
"assets/assets/images/54.png": "f93d558ecec7167ac62251ad59d268b9",
"assets/assets/images/55.png": "e009a643c62ce5c510c919c59d1b71e0",
"assets/assets/images/56.png": "81a4e70b188f5527b29db459d4b83e8e",
"assets/assets/images/57.png": "72b70abadf823b4ee1e07a2eb4a28c46",
"assets/assets/images/58.png": "7ac54e51f5ff3ce26b0db42f78300e39",
"assets/assets/images/59.png": "f7d4b1cc437cdcdb2dfe35a6c5975be3",
"assets/assets/images/6.png": "6167e6e0d96dda1cb19614668d7e4f97",
"assets/assets/images/60.png": "d2d275159f435a2ee2769bb5c8d171e2",
"assets/assets/images/61.png": "4093e23f6004a3a12c967e80f20c1375",
"assets/assets/images/62.png": "a0f31a4b009af3316efa9e3e86163fec",
"assets/assets/images/63.png": "bd07ba633cc9d2422e6f8072070058df",
"assets/assets/images/64.png": "2b68f8e9a8525366bbecef7fc2ea7d98",
"assets/assets/images/65.png": "85dfbcf78507feda3a8e34faccd2aad3",
"assets/assets/images/66.png": "0b9574afd095fb29fcbed2f2468c204d",
"assets/assets/images/67.png": "428b3c2cda60468748706f6085fb08c3",
"assets/assets/images/68.png": "6464629bff4f420100ef19786e52dc94",
"assets/assets/images/69.png": "0e7562dd1b5e52b2e8ba79421623851a",
"assets/assets/images/7.png": "2dbd0daee0dd48ce73271485e5683141",
"assets/assets/images/70.png": "6874edcee37163901e2526968d9f0bfa",
"assets/assets/images/71.png": "cc9eea23ac38faf2e8b07f0e9486002b",
"assets/assets/images/72.mp4": "143eb4a795bd9d97ac83532c9ab18036",
"assets/assets/images/73.png": "64892805950bf51edf41e420bc1a31e4",
"assets/assets/images/74.png": "e5c08087826d69ae3ce1df851baedd19",
"assets/assets/images/75.png": "b16d6accfcfefe3cf685623c989a48b5",
"assets/assets/images/76.png": "2325bff4626b573f875fa95b3d08d619",
"assets/assets/images/77.png": "2325bff4626b573f875fa95b3d08d619",
"assets/assets/images/78.png": "5b55d133b7ce07e6937817961e5b6df8",
"assets/assets/images/79.png": "470133b59ee87145f2037d170028d2ae",
"assets/assets/images/8.png": "73c21cfd91fcfcc9561f4a1bef5f5d41",
"assets/assets/images/80.png": "d7a29c10ec02af3757f0ce70d9d62f67",
"assets/assets/images/81.png": "bdc480604ee8718a3fe439cd3e9c5203",
"assets/assets/images/82.png": "c8688a17b0c12d71dd72bf6a2083b584",
"assets/assets/images/83.png": "c228b7a463d1a759e6267112067002e0",
"assets/assets/images/84.png": "3c1aff48e8de5ba38d783910b1bf1334",
"assets/assets/images/85.png": "309a269c0728ba388290c4b41ec33e73",
"assets/assets/images/86.png": "fd970533672fbdacf608c58927251592",
"assets/assets/images/87.png": "332fe5928742d25be120524b87b0cea4",
"assets/assets/images/88.png": "17d172c434e5bcde2b718cc2cba8ad97",
"assets/assets/images/89.mp4": "89f81eadfc992b87bf9c02ee59e17d50",
"assets/assets/images/9.png": "a80cb8a306bf17678ce07b9949bf46db",
"assets/assets/images/90.png": "da84623f59150b3f4832465173035635",
"assets/assets/images/91.png": "f09e4645990b2929dc0d1217fa04cc78",
"assets/assets/images/92.png": "81a4e70b188f5527b29db459d4b83e8e",
"assets/assets/images/93.png": "64bd7726a59cd7dbf3ee011805000f46",
"assets/assets/images/94.png": "583d31bf9a78438ac851e9f35d7b1c13",
"assets/assets/images/95.png": "b0553a9c44fb30cdf18c3829e6aabe74",
"assets/assets/images/96.png": "58018f8af09d9f080301b64aa62c8431",
"assets/assets/images/97.png": "a14a3c3fcc9ba977a2dbc0f8daa364c1",
"assets/assets/images/98.png": "f09e4645990b2929dc0d1217fa04cc78",
"assets/assets/images/99.png": "da84623f59150b3f4832465173035635",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "b6ce1060a0e18c6b72b92b6050d46d6d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "857800e1beee5f433c9800f58dc02b40",
"/": "857800e1beee5f433c9800f58dc02b40",
"main.dart.js": "947f91e523c5a29e2dd535f3c14e0e25",
"manifest.json": "c29c7b81c6371fafbfa7e166ab75faef",
"version.json": "7acee180f642422305fc10889487e6a6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
