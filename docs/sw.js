const VERSION = "42194c87f5c8";
const FILES = [
  "./",
  "./LICENSES.txt",
  "./assets/fig-celestial-CTwai7cr.png",
  "./assets/fig-lunar-triangle-Dn-mSGRv.png",
  "./assets/fig-nav-triangle-Dj4HNj9k.png",
  "./assets/horizontal-parallax-D6Qp5dy1.png",
  "./assets/index-CeU6thIi.css",
  "./assets/index-gAhuRGMn.js",
  "./assets/ld-angle-BMwVulJM.png",
  "./assets/ld-cleared-DX1ECyeE.png",
  "./assets/ld-correction-CshbENxU.png",
  "./assets/ld-true-De58NTGT.png",
  "./assets/lroc_color_poles_1k-RRPljFYe.jpg",
  "./assets/parallax-BlPcYSiH.png",
  "./assets/refraction-DPkHywLj.png",
  "./assets/zen-old-mincho-10-400-normal-DdpFfJaG.woff2",
  "./assets/zen-old-mincho-100-400-normal-CQYYYKW8.woff2",
  "./assets/zen-old-mincho-101-400-normal-DDMzrMPS.woff2",
  "./assets/zen-old-mincho-102-400-normal-ClOHf47Q.woff2",
  "./assets/zen-old-mincho-103-400-normal-BHlSd6mf.woff2",
  "./assets/zen-old-mincho-104-400-normal-BJt67Hib.woff2",
  "./assets/zen-old-mincho-105-400-normal-CbrMTuCt.woff2",
  "./assets/zen-old-mincho-106-400-normal-BaRR_LDR.woff2",
  "./assets/zen-old-mincho-107-400-normal-CGwpyjcw.woff2",
  "./assets/zen-old-mincho-108-400-normal-_npzODd8.woff2",
  "./assets/zen-old-mincho-109-400-normal-tRXS_aT5.woff2",
  "./assets/zen-old-mincho-11-400-normal-BwGg10xm.woff2",
  "./assets/zen-old-mincho-110-400-normal-AX0ka-N0.woff2",
  "./assets/zen-old-mincho-111-400-normal-B1gNvAsC.woff2",
  "./assets/zen-old-mincho-112-400-normal-FdYiw7Ah.woff2",
  "./assets/zen-old-mincho-113-400-normal-BD9JfKNq.woff2",
  "./assets/zen-old-mincho-114-400-normal-Dl3ZDu8Z.woff2",
  "./assets/zen-old-mincho-115-400-normal-CzowT6l-.woff2",
  "./assets/zen-old-mincho-116-400-normal-DSG-lgpe.woff2",
  "./assets/zen-old-mincho-117-400-normal-DF_03DjZ.woff2",
  "./assets/zen-old-mincho-118-400-normal-CcmVe2J5.woff2",
  "./assets/zen-old-mincho-119-400-normal-HgH0vyl_.woff2",
  "./assets/zen-old-mincho-12-400-normal-CrAn6fEg.woff2",
  "./assets/zen-old-mincho-13-400-normal-CjOThmlT.woff2",
  "./assets/zen-old-mincho-14-400-normal-hIEUtRqH.woff2",
  "./assets/zen-old-mincho-15-400-normal-DyQxBllL.woff2",
  "./assets/zen-old-mincho-16-400-normal-c0kGm0CV.woff2",
  "./assets/zen-old-mincho-17-400-normal-DJVayOzp.woff2",
  "./assets/zen-old-mincho-18-400-normal-BHrmER5r.woff2",
  "./assets/zen-old-mincho-19-400-normal-BahGht6M.woff2",
  "./assets/zen-old-mincho-20-400-normal-DhkK2cEO.woff2",
  "./assets/zen-old-mincho-21-400-normal-DsayzKl1.woff2",
  "./assets/zen-old-mincho-22-400-normal-DtDJV7x9.woff2",
  "./assets/zen-old-mincho-23-400-normal-BidXvviq.woff2",
  "./assets/zen-old-mincho-24-400-normal-CqPite8V.woff2",
  "./assets/zen-old-mincho-25-400-normal-DxpvBLN5.woff2",
  "./assets/zen-old-mincho-26-400-normal-JM1_wP5Y.woff2",
  "./assets/zen-old-mincho-27-400-normal-fxWeqt75.woff2",
  "./assets/zen-old-mincho-28-400-normal-oqSqqIq5.woff2",
  "./assets/zen-old-mincho-29-400-normal-CwyfqODD.woff2",
  "./assets/zen-old-mincho-3-400-normal-DPzAQxse.woff2",
  "./assets/zen-old-mincho-30-400-normal-BQr8niKR.woff2",
  "./assets/zen-old-mincho-31-400-normal-CCL-2B1z.woff2",
  "./assets/zen-old-mincho-32-400-normal-DnuW-Oj6.woff2",
  "./assets/zen-old-mincho-33-400-normal-D38y31R6.woff2",
  "./assets/zen-old-mincho-34-400-normal-DioZw-F2.woff2",
  "./assets/zen-old-mincho-35-400-normal-ByBEPsel.woff2",
  "./assets/zen-old-mincho-36-400-normal-DZdVJhDz.woff2",
  "./assets/zen-old-mincho-37-400-normal-AlhCK8jr.woff2",
  "./assets/zen-old-mincho-38-400-normal-C6R3oI6W.woff2",
  "./assets/zen-old-mincho-39-400-normal-BhP-CdQ8.woff2",
  "./assets/zen-old-mincho-40-400-normal-ATGmzIPd.woff2",
  "./assets/zen-old-mincho-41-400-normal-CbcPCPNY.woff2",
  "./assets/zen-old-mincho-42-400-normal-BGGzAxDP.woff2",
  "./assets/zen-old-mincho-43-400-normal-N8Cu9QW2.woff2",
  "./assets/zen-old-mincho-44-400-normal-C1AcTBRI.woff2",
  "./assets/zen-old-mincho-45-400-normal-BtP119G0.woff2",
  "./assets/zen-old-mincho-46-400-normal-S3L6Tg53.woff2",
  "./assets/zen-old-mincho-47-400-normal-CXP3SaQQ.woff2",
  "./assets/zen-old-mincho-48-400-normal-Dcd1u36K.woff2",
  "./assets/zen-old-mincho-49-400-normal-DRtoNYLk.woff2",
  "./assets/zen-old-mincho-5-400-normal-C9mz6QR-.woff2",
  "./assets/zen-old-mincho-50-400-normal-DTIB7Cu-.woff2",
  "./assets/zen-old-mincho-51-400-normal-DlJfSp9k.woff2",
  "./assets/zen-old-mincho-52-400-normal-CpFs4Z-k.woff2",
  "./assets/zen-old-mincho-53-400-normal-f9JbIfbC.woff2",
  "./assets/zen-old-mincho-56-400-normal-CQSKkBYm.woff2",
  "./assets/zen-old-mincho-58-400-normal-B36lKYdu.woff2",
  "./assets/zen-old-mincho-59-400-normal-CWqSqn6j.woff2",
  "./assets/zen-old-mincho-6-400-normal-qWJ1OS87.woff2",
  "./assets/zen-old-mincho-60-400-normal-Dr40uu4X.woff2",
  "./assets/zen-old-mincho-61-400-normal-D_UqHZs-.woff2",
  "./assets/zen-old-mincho-62-400-normal-DsGJ6E_i.woff2",
  "./assets/zen-old-mincho-63-400-normal-iZYLts6d.woff2",
  "./assets/zen-old-mincho-64-400-normal-B20dOtHa.woff2",
  "./assets/zen-old-mincho-65-400-normal-BgXv-Ujv.woff2",
  "./assets/zen-old-mincho-66-400-normal-Dn6sEDmo.woff2",
  "./assets/zen-old-mincho-67-400-normal-CVJOQ1bd.woff2",
  "./assets/zen-old-mincho-68-400-normal-BG69Cpa0.woff2",
  "./assets/zen-old-mincho-69-400-normal-DpmZNsnh.woff2",
  "./assets/zen-old-mincho-7-400-normal-DwjaOQxB.woff2",
  "./assets/zen-old-mincho-70-400-normal-CYRUvqoT.woff2",
  "./assets/zen-old-mincho-71-400-normal-CkqZT4lr.woff2",
  "./assets/zen-old-mincho-72-400-normal-DJlMHOvV.woff2",
  "./assets/zen-old-mincho-73-400-normal-DIkWQwfr.woff2",
  "./assets/zen-old-mincho-74-400-normal-DF6Q4uBx.woff2",
  "./assets/zen-old-mincho-75-400-normal-pH7ruSnX.woff2",
  "./assets/zen-old-mincho-76-400-normal-CCR9SNSO.woff2",
  "./assets/zen-old-mincho-77-400-normal-Cg1HvHGe.woff2",
  "./assets/zen-old-mincho-78-400-normal-DBd45xai.woff2",
  "./assets/zen-old-mincho-79-400-normal-D7Yg-1qh.woff2",
  "./assets/zen-old-mincho-8-400-normal-Cty0RA7T.woff2",
  "./assets/zen-old-mincho-80-400-normal-B-1wJ1VC.woff2",
  "./assets/zen-old-mincho-81-400-normal-C_Jo_Y_w.woff2",
  "./assets/zen-old-mincho-82-400-normal-0f7AwjkK.woff2",
  "./assets/zen-old-mincho-83-400-normal-C5TjPTtl.woff2",
  "./assets/zen-old-mincho-84-400-normal-CaMoZ0g2.woff2",
  "./assets/zen-old-mincho-85-400-normal-Bt54dLGz.woff2",
  "./assets/zen-old-mincho-86-400-normal-lD_eHPUe.woff2",
  "./assets/zen-old-mincho-87-400-normal-BKobex6R.woff2",
  "./assets/zen-old-mincho-88-400-normal-BUWE6jtj.woff2",
  "./assets/zen-old-mincho-89-400-normal-CMyqTEKm.woff2",
  "./assets/zen-old-mincho-9-400-normal-DPPVWV7h.woff2",
  "./assets/zen-old-mincho-90-400-normal-CJ9oPPj8.woff2",
  "./assets/zen-old-mincho-91-400-normal-EGAy5D6V.woff2",
  "./assets/zen-old-mincho-92-400-normal-cdJxyktE.woff2",
  "./assets/zen-old-mincho-93-400-normal-B_b0ZLR4.woff2",
  "./assets/zen-old-mincho-94-400-normal-BoEQTeyZ.woff2",
  "./assets/zen-old-mincho-95-400-normal-BVzSI8CJ.woff2",
  "./assets/zen-old-mincho-96-400-normal-DUiLmGd6.woff2",
  "./assets/zen-old-mincho-97-400-normal-jP7mmfTF.woff2",
  "./assets/zen-old-mincho-98-400-normal-CjhczCMq.woff2",
  "./assets/zen-old-mincho-99-400-normal-DE2M0Tlz.woff2",
  "./assets/zen-old-mincho-cyrillic-400-normal-2ZqQ-YxM.woff2",
  "./assets/zen-old-mincho-greek-400-normal-CMpMXT2N.woff2",
  "./assets/zen-old-mincho-latin-400-normal-BaasbhNE.woff2",
  "./credits.html",
  "./icon-180.png",
  "./icon-512.png",
  "./index.html",
  "./manifest.webmanifest",
  "./manual.html",
  "./qr.svg"
];
const PREFIX = 'renko-eyes-';
const CACHE = PREFIX + VERSION;

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(FILES)));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith(PREFIX) && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE);
      const hit = await cache.match(req, { ignoreSearch: true });
      if (hit) return hit;
      try {
        return await fetch(req);
      } catch (e) {
        if (req.mode === 'navigate') {
          const root = await cache.match('./');
          if (root) return root;
        }
        throw e;
      }
    })(),
  );
});
