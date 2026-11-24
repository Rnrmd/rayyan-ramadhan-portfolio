export const profile = {
  name: "Rayyan",
  surname: "Ramadhan",
  role: "Educator · Coordinator · Learner",
  description:
    "Memiliki pengalaman dalam pendidikan, koordinasi kegiatan, kepemimpinan, dan pengelolaan tim di lingkungan pondok pesantren",
  email: "kaioliver452@gmail.com",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export const about = [
  "Lulusan Madrasah Aliyah dengan pengalaman lebih dari 2 tahun dalam kegiatan dan organisasi di lingkungan pondok pesantren",
  "Memiliki pengalaman sebagai pengurus, tenaga pendidik, wali kelas, serta koordinator program Marching Band",
  "Terbiasa bekerja dalam tim, berkomunikasi, merencanakan kegiatan, serta memastikan kegiatan berjalan secara tertib dan efektif",
];

export type ExperienceData = {
  year: string;
  tag: string;
  title: string;
  text?: string;
  points?: string[];
};

export const experiences: ExperienceData[] = [
  {
    year: "2022 — 2024",
    tag: "PONDOK PESANTREN",
    title: "Pengurus Pondok Pesantren",
    points: [
      "Aktif sebagai pengurus asrama santri pada 2022–2023",
      "Aktif sebagai pengurus PERMADANI pada 2023–2024",
      "Mengabdi di pondok pesantren sebagai guru",
    ],
  },
  {
    year: "2024 — 2026",
    tag: "PENDIDIKAN",
    title: "Tenaga Pendidik & Wali Kelas",
    text: "Tenaga pendidik dan wali kelas MTs Daarul Mughni",
  },
  {
    year: "2024 — 2026",
    tag: "PROGRAM",
    title: "Koordinator Program Marching Band",
    points: [
      "Merencanakan, mengoordinasikan, dan mengawasi kegiatan Marching Band",
      "Menyusun jadwal latihan dan memastikan kedisiplinan anggota",
      "Memimpin persiapan penampilan dalam acara resmi dan perlombaan",
      "Mengelola perlengkapan dan inventaris Marching Band",
      "Berkoordinasi dengan pimpinan, guru, dan panitia kegiatan",
      "Membina kerja sama tim, jiwa kepemimpinan, dan tanggung jawab anggota",
    ],
  },
];

export const skills = [
  {
    title: "Leadership",
    text: "Pengalaman memimpin dan mengarahkan anggota dalam kegiatan organisasi dan program",
  },
  {
    title: "Team Management",
    text: "Terbiasa bekerja bersama tim serta membangun kerja sama dan tanggung jawab anggota",
  },
  {
    title: "Coordination",
    text: "Berpengalaman merencanakan, mengoordinasikan, dan mengawasi kegiatan",
  },
  {
    title: "Communication",
    text: "Berkomunikasi dengan anggota, guru, pimpinan, dan pihak yang terlibat dalam kegiatan",
  },
  {
    title: "Planning",
    text: "Menyusun jadwal, mempersiapkan kegiatan, serta memastikan kegiatan berjalan sesuai rencana",
  },
  {
    title: "Teaching",
    text: "Pengalaman sebagai tenaga pendidik dan wali kelas di lingkungan MTs",
  },
];

export type TimelineData = {
  year: string;
  title: string;
  text: string;
  future?: boolean;
};

export const timeline: TimelineData[] = [
  { year: "2022", title: "Pengurus Asrama Santri", text: "Mulai aktif dalam kepengurusan asrama santri." },
  { year: "2023", title: "PERMADANI", text: "Melanjutkan pengalaman organisasi sebagai pengurus PERMADANI." },
  {
    year: "2024\n—\n2026",
    title: "Tenaga Pendidik",
    text: "Mulai menjalankan peran sebagai tenaga pendidik dan wali kelas.",
  },
  {
    year: "2024\n—\n2026",
    title: "Koordinator Marching Band",
    text: "Mengelola dan mengoordinasikan program Marching Band Daarul Mughni",
  },
  {
    year: "NOW",
    title: "Keep Learning",
    text: "Terus belajar, mengembangkan kemampuan, dan membuka pengalaman baru",
    future: true,
  },
];
