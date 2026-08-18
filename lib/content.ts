/**
 * Demo content for the Diana Eva Furniture pitch.
 *
 * ─────────────────────────────────────────────────────────────────────
 * NEEDS CLIENT DATA - everything in this file is placeholder.
 *
 * Product names, prices, discounts, ratings and review counts are
 * invented so the layout matches the retail references (IKEA Indonesia
 * and Informa). None of it is verified against the real company.
 * Strip or replace before this goes anywhere public.
 * ─────────────────────────────────────────────────────────────────────
 */
/*
 * Photography lives in public/ and is referenced by string, which
 * basePath does not rewrite. Prefixing here keeps every image path
 * correct whether the site is served from a domain root or from a
 * project sub-path.
 */
const img = (p: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${p}`;

/*
 * The business name includes the word "Furniture", so it is always
 * written in full. The strapline is lifted from the client's own logo
 * artwork rather than invented.
 *
 * The wordmark itself is drawn in components/brand-mark.tsx, split into
 * the three lines the logo uses.
 */
export const brand = {
  name: "Diana Eva Furniture",
  mark: "DIANA EVA FURNITURE",
  tagline: "Supermarket Spring Bed & Furniture",
  strapline: "Supermarket Spring Bed & Furniture",
  /** Each line is [large initial, remainder]. */
  wordmark: [
    ["D", "IANA"],
    ["E", "VA"],
    ["F", "URNITURE"],
  ] as const,
};

export const utilityLinks = [
  "Inspirasi",
  "Layanan Desain Interior",
  "Lacak Pesanan",
  "Informasi Showroom",
];

export const mainNav = [
  "Furnitur",
  "Ruang Tamu",
  "Kamar Tidur",
  "Ruang Makan",
  "Penyimpanan",
  "Dekorasi",
  "Material",
  "Layanan",
];

export type Slide = {
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  image: string;
};

export const slides: Slide[] = [
  {
    eyebrow: "Koleksi Ruang Tamu",
    title: "Ruang yang tenang, dipakai setiap hari",
    body: "Rangka kayu solid dan dudukan yang tetap nyaman setelah tahun keempat.",
    cta: "Lihat koleksi",
    image: img("/img/hero-living.jpg"),
  },
  {
    eyebrow: "Koleksi Kamar Tidur",
    title: "Pagi dimulai dari kamar yang rapi",
    body: "Penyimpanan yang cukup, sehingga yang berarti selalu punya tempat.",
    cta: "Jelajahi kamar tidur",
    image: img("/img/room-bedroom.jpg"),
  },
  {
    eyebrow: "Koleksi Ruang Makan",
    title: "Meja panjang untuk kumpul yang lama",
    body: "Permukaan kayu yang boleh tergores. Memang dibuat untuk dipakai.",
    cta: "Lihat meja makan",
    image: img("/img/room-dining.jpg"),
  },
];

export const categories = [
  { label: "Sofa", image: img("/img/p-sofa.jpg") },
  { label: "Kursi Berlengan", image: img("/img/p-armchair.jpg") },
  { label: "Meja Makan", image: img("/img/p-dining-table.jpg") },
  { label: "Lemari Pajang", image: img("/img/p-cabinet.jpg") },
  { label: "Meja Kerja", image: img("/img/p-desk.jpg") },
  { label: "Bufet", image: img("/img/p-sideboard.jpg") },
  { label: "Ottoman", image: img("/img/p-ottoman.jpg") },
  { label: "Kursi Santai", image: img("/img/p-lounge-chair.jpg") },
];

export const services = [
  {
    title: "Gratis kirim & rakit",
    body: "[area layanan, butuh konfirmasi klien]",
    icon: "truck" as const,
  },
  {
    title: "Cicilan 0%",
    body: "[tenor & bank, butuh konfirmasi klien]",
    icon: "card" as const,
  },
  {
    title: "Garansi rangka",
    body: "[masa garansi, butuh konfirmasi klien]",
    icon: "shield" as const,
  },
  {
    title: "Konsultasi desain",
    body: "Datang ke showroom atau janji temu daring",
    icon: "chat" as const,
  },
];

export type Product = {
  name: string;
  desc: string;
  was: number | null;
  now: number;
  rating: number;
  reviews: number;
  image: string;
  tag?: string;
  variants?: string;
};

/** NEEDS CLIENT DATA - invented catalogue. */
export const offerTabs: { label: string; items: Product[] }[] = [
  {
    label: "Paling Dicari",
    items: [
      {
        name: "Anjani Sofa 3 Dudukan",
        desc: "Linen, rangka kayu meranti",
        was: 8_999_000,
        now: 6_299_000,
        rating: 4.8,
        reviews: 214,
        image: img("/img/p-sofa.jpg"),
        tag: "Terlaris",
        variants: "3 Var Warna",
      },
      {
        name: "Renjana Kursi Berlengan",
        desc: "Dudukan busa densitas tinggi",
        was: 3_499_000,
        now: 2_199_000,
        rating: 4.9,
        reviews: 132,
        image: img("/img/p-armchair.jpg"),
        variants: "4 Var Warna",
      },
      {
        name: "Larasati Bufet 3 Laci",
        desc: "Veneer jati, 140×45 cm",
        was: 4_299_000,
        now: 3_499_000,
        rating: 4.7,
        reviews: 88,
        image: img("/img/p-sideboard.jpg"),
      },
      {
        name: "Kirana Meja Makan 6 Kursi",
        desc: "Kayu solid, 180×90 cm",
        was: 12_500_000,
        now: 8_750_000,
        rating: 4.8,
        reviews: 61,
        image: img("/img/p-dining-table.jpg"),
        tag: "Set Lengkap",
      },
      {
        name: "Sekar Lemari Pajang Kaca",
        desc: "Rangka kayu, 4 ambalan",
        was: 6_100_000,
        now: 4_575_000,
        rating: 4.6,
        reviews: 47,
        image: img("/img/p-cabinet.jpg"),
      },
    ],
  },
  {
    label: "Baru Tiba",
    items: [
      {
        name: "Wangsa Meja Kerja",
        desc: "Kaki bubut, 120×60 cm",
        was: null,
        now: 2_890_000,
        rating: 5,
        reviews: 12,
        image: img("/img/p-desk.jpg"),
        tag: "Baru",
      },
      {
        name: "Tirta Ottoman Anyam",
        desc: "Rotan alami, dudukan linen",
        was: null,
        now: 1_150_000,
        rating: 4.9,
        reviews: 9,
        image: img("/img/p-ottoman.jpg"),
        tag: "Baru",
      },
      {
        name: "Prana Kursi Santai",
        desc: "Sandaran tinggi, kain bouclé",
        was: null,
        now: 3_950_000,
        rating: 4.8,
        reviews: 17,
        image: img("/img/p-lounge-chair.jpg"),
        tag: "Baru",
        variants: "2 Var Warna",
      },
      {
        name: "Anjani Sofa 2 Dudukan",
        desc: "Versi ringkas untuk ruang kecil",
        was: null,
        now: 4_799_000,
        rating: 4.7,
        reviews: 23,
        image: img("/img/p-sofa.jpg"),
        tag: "Baru",
      },
      {
        name: "Larasati Bufet Rendah",
        desc: "Veneer jati, 160×40 cm",
        was: null,
        now: 3_990_000,
        rating: 4.9,
        reviews: 8,
        image: img("/img/p-sideboard.jpg"),
        tag: "Baru",
      },
    ],
  },
  {
    label: "Turun Harga",
    items: [
      {
        name: "Renjana Kursi Berlengan",
        desc: "Warna terpilih",
        was: 3_499_000,
        now: 1_899_000,
        rating: 4.9,
        reviews: 132,
        image: img("/img/p-armchair.jpg"),
      },
      {
        name: "Kirana Meja Makan 4 Kursi",
        desc: "Kayu solid, 140×80 cm",
        was: 9_200_000,
        now: 5_980_000,
        rating: 4.6,
        reviews: 74,
        image: img("/img/p-dining-table.jpg"),
      },
      {
        name: "Wangsa Meja Kerja",
        desc: "Unit pajangan showroom",
        was: 2_890_000,
        now: 1_734_000,
        rating: 4.8,
        reviews: 12,
        image: img("/img/p-desk.jpg"),
        tag: "Unit Pajangan",
      },
      {
        name: "Sekar Lemari Pajang Kaca",
        desc: "Rangka kayu, 4 ambalan",
        was: 6_100_000,
        now: 3_660_000,
        rating: 4.6,
        reviews: 47,
        image: img("/img/p-cabinet.jpg"),
      },
      {
        name: "Tirta Ottoman Anyam",
        desc: "Rotan alami",
        was: 1_150_000,
        now: 799_000,
        rating: 4.9,
        reviews: 9,
        image: img("/img/p-ottoman.jpg"),
      },
    ],
  },
  {
    label: "Ruang Kecil",
    items: [
      {
        name: "Anjani Sofa 2 Dudukan",
        desc: "Lebar 158 cm, muat di apartemen",
        was: 5_600_000,
        now: 4_799_000,
        rating: 4.7,
        reviews: 23,
        image: img("/img/p-sofa.jpg"),
      },
      {
        name: "Tirta Ottoman Anyam",
        desc: "Bisa jadi meja atau dudukan",
        was: null,
        now: 1_150_000,
        rating: 4.9,
        reviews: 9,
        image: img("/img/p-ottoman.jpg"),
      },
      {
        name: "Wangsa Meja Kerja Ringkas",
        desc: "100×50 cm, kaki bubut",
        was: 2_400_000,
        now: 1_990_000,
        rating: 4.8,
        reviews: 31,
        image: img("/img/p-desk.jpg"),
      },
      {
        name: "Larasati Bufet Rendah",
        desc: "Kedalaman 40 cm",
        was: null,
        now: 3_990_000,
        rating: 4.9,
        reviews: 8,
        image: img("/img/p-sideboard.jpg"),
      },
      {
        name: "Prana Kursi Santai",
        desc: "Tanpa lengan, hemat ruang",
        was: 3_950_000,
        now: 3_160_000,
        rating: 4.8,
        reviews: 17,
        image: img("/img/p-lounge-chair.jpg"),
      },
    ],
  },
];

export const editorial = {
  eyebrow: "Layanan Desain",
  title: "Datang dengan denah, pulang dengan rencana",
  body:
    "Bawa ukuran ruangan Anda ke showroom. Tim kami menyusun tata letak, memilihkan material, dan menghitung kebutuhan dalam satu kali kunjungan.",
  cta: "Buat janji temu",
  image: img("/img/experience.jpg"),
};

export const priceDrop = {
  title: "Turun harga",
  body: "Favoritmu kini lebih terjangkau.",
  hero: {
    name: "Prana Kursi Santai",
    desc: "Sandaran tinggi, kain bouclé, rangka kayu solid",
    was: 3_950_000,
    now: 2_765_000,
    image: img("/img/p-lounge-chair.jpg"),
  },
  side: [
    {
      name: "Tirta Ottoman Anyam",
      was: 1_150_000,
      now: 799_000,
      image: img("/img/p-ottoman.jpg"),
    },
    {
      name: "Wangsa Meja Kerja",
      was: 2_890_000,
      now: 1_734_000,
      image: img("/img/p-desk.jpg"),
    },
  ],
};

export const rooms = [
  { label: "Ruang Tamu", count: "218 produk", image: img("/img/room-living.jpg") },
  { label: "Kamar Tidur", count: "164 produk", image: img("/img/room-bedroom.jpg") },
  { label: "Ruang Makan", count: "132 produk", image: img("/img/room-dining.jpg") },
  { label: "Penyimpanan", count: "97 produk", image: img("/img/room-storage.jpg") },
  { label: "Ruang Kerja", count: "88 produk", image: img("/img/room-workspace.jpg") },
  { label: "Dekorasi", count: "245 produk", image: img("/img/room-decor.jpg") },
];

export const styles = [
  {
    label: "Japandi Hangat",
    body: "Kayu terang, garis lurus, dan tekstil bertekstur kasar.",
    image: img("/img/room-living.jpg"),
    picks: [img("/img/p-sofa.jpg"), img("/img/p-ottoman.jpg"), img("/img/p-desk.jpg"), img("/img/mat-oak.jpg")],
  },
  {
    label: "Modern Minimalis",
    body: "Palet netral, permukaan bersih, tanpa ornamen.",
    image: img("/img/room-workspace.jpg"),
    picks: [img("/img/p-desk.jpg"), img("/img/p-cabinet.jpg"), img("/img/p-lounge-chair.jpg"), img("/img/mat-linen.jpg")],
  },
  {
    label: "Kayu Gelap",
    body: "Jati tua, kuningan, dan kain bertone dalam.",
    image: img("/img/room-dining.jpg"),
    picks: [img("/img/p-dining-table.jpg"), img("/img/p-sideboard.jpg"), img("/img/p-armchair.jpg"), img("/img/mat-walnut.jpg")],
  },
  {
    label: "Tenang & Terang",
    body: "Putih tulang, linen, dan cahaya yang dibiarkan masuk.",
    image: img("/img/room-bedroom.jpg"),
    picks: [img("/img/p-armchair.jpg"), img("/img/p-sofa.jpg"), img("/img/p-ottoman.jpg"), img("/img/mat-weave.jpg")],
  },
];

export const materials = [
  {
    label: "Jati Solid",
    body: "Dikeringkan oven hingga kadar air 12%.",
    image: img("/img/mat-oak.jpg"),
  },
  {
    label: "Walnut",
    body: "Serat gelap, difinis minyak alami.",
    image: img("/img/mat-walnut.jpg"),
  },
  {
    label: "Linen",
    body: "Tenun rapat, tahan gesek harian.",
    image: img("/img/mat-linen.jpg"),
  },
  {
    label: "Bouclé",
    body: "Bertekstur, lembut, mudah dibersihkan.",
    image: img("/img/mat-weave.jpg"),
  },
];

export const showroom = {
  eyebrow: "Kunjungi",
  title: "Duduki dulu sebelum memutuskan",
  body:
    "Semua koleksi dipajang lengkap, sehingga Anda bisa menguji dudukan, membuka laci, dan melihat serat kayunya langsung.",
  image: img("/img/showroom.jpg"),
  // NEEDS CLIENT DATA - placeholders stay visible on purpose.
  details: [
    { label: "Alamat", value: "[alamat showroom]" },
    { label: "Jam buka", value: "[jam operasional]" },
    { label: "Telepon", value: "[nomor telepon]" },
  ],
};

export const footerColumns = [
  {
    title: "Layanan Konsumen",
    links: ["Pusat Bantuan", "Cara Pemesanan", "Pengiriman & Perakitan", "Pengembalian", "Garansi"],
  },
  {
    title: "Tentang Diana Eva Furniture",
    links: ["Profil Perusahaan", "Showroom", "Karier", "Blog", "Katalog Digital"],
  },
  {
    title: "Belanja",
    links: ["Semua Produk", "Koleksi Terbaru", "Turun Harga", "Kartu Hadiah", "Solusi Bisnis"],
  },
];

export function rupiah(n: number) {
  return "Rp" + n.toLocaleString("id-ID");
}

export function discount(was: number, now: number) {
  return Math.round(((was - now) / was) * 100);
}
