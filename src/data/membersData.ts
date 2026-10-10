export interface MemberRecord {
  no: number;
  name: string;
  npm: string;
  kelas: string;
  departemen: string;
  role: 'Ketua' | 'Wakil' | 'Sekretaris' | 'Bendahara' | 'PJ' | 'Anggota';
}

export interface DepartmentData {
  id: string;
  name: string;
  shortName: string;
  head: string;
  viceHead?: string;
  description: string;
  membersCount: number;
  color: string;
  coordinate: [number, number, number];
  members: MemberRecord[];
}

export const HMPS_MEMBERS: MemberRecord[] = [
  // 1. Pimpinan & BPH
  { no: 1, name: 'STEVEN AL WAHID', npm: '2404057', kelas: 'TPB 5B', departemen: 'BPH (Badan Pengurus Harian)', role: 'Ketua' },
  { no: 2, name: 'M ALZAKY QUSHOYYI', npm: '2404085', kelas: 'TPB 5C', departemen: 'BPH (Badan Pengurus Harian)', role: 'Wakil' },
  { no: 3, name: 'ZARIFAH YULIA FITRIANI', npm: '2404102', kelas: 'TPB 5C', departemen: 'BPH (Badan Pengurus Harian)', role: 'Sekretaris' },
  { no: 4, name: 'NABILA SITORUS', npm: '2504112', kelas: 'TPB 3C', departemen: 'BPH (Badan Pengurus Harian)', role: 'Sekretaris' },
  { no: 5, name: 'GITA RDISTYA CITRA', npm: '2404112', kelas: 'TPB 5C', departemen: 'BPH (Badan Pengurus Harian)', role: 'Bendahara' },
  { no: 6, name: 'ANGGUN INTAN LESTARI', npm: '2504061', kelas: 'TPB 3B', departemen: 'BPH (Badan Pengurus Harian)', role: 'Bendahara' },

  // 2. Departemen PSDM
  { no: 7, name: 'ARJUN DENI OKI PUTRA', npm: '2404029', kelas: 'TPB 5A', departemen: 'Departemen PSDM', role: 'Ketua' },
  { no: 8, name: 'DWI RAHMAWATI', npm: '2404103', kelas: 'TPB 5C', departemen: 'Departemen PSDM', role: 'Wakil' },
  { no: 9, name: 'MUHAMMAD FADHIL ABDURRAHMAN ALKAHFI', npm: '2504053', kelas: 'TPB 3B', departemen: 'Departemen PSDM', role: 'PJ' },
  { no: 10, name: 'FITRIA ANGGARAWATI', npm: '2504014', kelas: 'TPB 3A', departemen: 'Departemen PSDM', role: 'Anggota' },
  { no: 11, name: 'MUHAMMAD HAMDI', npm: '2504100', kelas: 'TPB 3C', departemen: 'Departemen PSDM', role: 'Anggota' },
  { no: 12, name: 'M. NABIL MIFTAHUL RAHMAT', npm: '2404067', kelas: 'TPB 5B', departemen: 'Departemen PSDM', role: 'Anggota' },
  { no: 13, name: 'YESYA SYAVIA GANDAWATI', npm: '2404035', kelas: 'TPB 5A', departemen: 'Departemen PSDM', role: 'Anggota' },
  { no: 14, name: 'MUHAMMAD PAREL ZIKRI', npm: '2504027', kelas: 'TPB 3A', departemen: 'Departemen PSDM', role: 'PJ' },
  { no: 15, name: 'AMANDA JULISKA SARI', npm: '2504106', kelas: 'TPB 3C', departemen: 'Departemen PSDM', role: 'Anggota' },
  { no: 16, name: 'GUSTI KOMANG NGURAH ANGGA WIJAYA', npm: '2504114', kelas: 'TPB 3C', departemen: 'Departemen PSDM', role: 'Anggota' },
  { no: 17, name: 'ARI ANDIKA', npm: '2404004', kelas: 'TPB 5A', departemen: 'Departemen PSDM', role: 'Anggota' },
  { no: 18, name: 'FARREL PERDINAND', npm: '2404089', kelas: 'TPB 5C', departemen: 'Departemen PSDM', role: 'Anggota' },

  // 3. Departemen Humas
  { no: 19, name: 'TOMAS', npm: '2404180', kelas: 'TPB 5C', departemen: 'Departemen Humas', role: 'Ketua' },
  { no: 20, name: 'MUHAMMAD TAUFIQURRAHMAN', npm: '2404034', kelas: 'TPB 5A', departemen: 'Departemen Humas', role: 'Wakil' },
  { no: 21, name: 'REZA YUWANDI', npm: '2504019', kelas: 'TPB 3A', departemen: 'Departemen Humas', role: 'Anggota' },
  { no: 22, name: 'ODY MARWANSYAH', npm: '2504065', kelas: 'TPB 3B', departemen: 'Departemen Humas', role: 'Anggota' },
  { no: 23, name: 'ALIF SAFWAN FAJAR', npm: '2504058', kelas: 'TPB 3B', departemen: 'Departemen Humas', role: 'Anggota' },
  { no: 24, name: 'VINI OKTA SEMERU EFENDI', npm: '2504094', kelas: 'TPB 3C', departemen: 'Departemen Humas', role: 'Anggota' },
  { no: 25, name: 'MUHAMMAD GALUH JEGGY', npm: '2404007', kelas: 'TPB 5A', departemen: 'Departemen Humas', role: 'Anggota' },
  { no: 26, name: 'AMELIA ANGGELA', npm: '2404026', kelas: 'TPB 5A', departemen: 'Departemen Humas', role: 'Anggota' },

  // 4. Departemen Kesenian
  { no: 27, name: 'YONATAN KURNIAWAN', npm: '2404062', kelas: 'TPB 5B', departemen: 'Departemen Kesenian', role: 'Ketua' },
  { no: 28, name: 'RIESTY ANJANI', npm: '2404017', kelas: 'TPB 5A', departemen: 'Departemen Kesenian', role: 'Wakil' },
  { no: 29, name: 'MUHAMMAD RIDWAN HAKIM ABDILLAH', npm: '2404115', kelas: 'TPB 5C', departemen: 'Departemen Kesenian', role: 'Anggota' },
  { no: 30, name: 'RISKHA RAHMADHANI', npm: '2404025', kelas: 'TPB 5A', departemen: 'Departemen Kesenian', role: 'Anggota' },
  { no: 31, name: 'WILDANIA SHAKILA AZHARI', npm: '2504111', kelas: 'TPB 3C', departemen: 'Departemen Kesenian', role: 'Anggota' },
  { no: 32, name: 'LODI AGESTIRA', npm: '2504040', kelas: 'TPB 3A', departemen: 'Departemen Kesenian', role: 'Anggota' },
  { no: 33, name: 'DINDA HARDIANTI', npm: '2504034', kelas: 'TPB 3A', departemen: 'Departemen Kesenian', role: 'Anggota' },
  { no: 34, name: 'REFI MARISKA', npm: '2504021', kelas: 'TPB 3A', departemen: 'Departemen Kesenian', role: 'Anggota' },

  // 5. Departemen Bisnis Kreatif
  { no: 35, name: 'REJA TRISNA DATA', npm: '2404031', kelas: 'TPB 5A', departemen: 'Departemen Bisnis Kreatif', role: 'Ketua' },
  { no: 36, name: 'RISKI HERMAWAN', npm: '2404056', kelas: 'TPB 5B', departemen: 'Departemen Bisnis Kreatif', role: 'Wakil' },
  { no: 37, name: 'RIYAN AL FARINDO', npm: '2404054', kelas: 'TPB 5B', departemen: 'Departemen Bisnis Kreatif', role: 'Anggota' },
  { no: 38, name: 'RIKA ARYANI', npm: '2404024', kelas: 'TPB 5A', departemen: 'Departemen Bisnis Kreatif', role: 'Anggota' },
  { no: 39, name: 'PUTRI KOMALA', npm: '2504082', kelas: 'TPB 3C', departemen: 'Departemen Bisnis Kreatif', role: 'Anggota' },
  { no: 40, name: 'RONY ADI SUSENO', npm: '2504107', kelas: 'TPB 3C', departemen: 'Departemen Bisnis Kreatif', role: 'Anggota' },
  { no: 41, name: 'DODI HERMAWAN', npm: '2504012', kelas: 'TPB 3A', departemen: 'Departemen Bisnis Kreatif', role: 'Anggota' },
  { no: 42, name: 'FAJRI SYAHPUTRA', npm: '2504031', kelas: 'TPB 3A', departemen: 'Departemen Bisnis Kreatif', role: 'Anggota' },

  // 6. Departemen Media Kreatif
  { no: 43, name: 'AHMAD BIMA KUSUMA', npm: '2404008', kelas: 'TPB 5A', departemen: 'Departemen Media Kreatif', role: 'Ketua' },
  { no: 44, name: 'MUHAMMAD ALIF', npm: '2404088', kelas: 'TPB 5C', departemen: 'Departemen Media Kreatif', role: 'Wakil' },
  { no: 45, name: 'SCERLY WINTASARI', npm: '2504054', kelas: 'TPB 3B', departemen: 'Departemen Media Kreatif', role: 'PJ' },
  { no: 46, name: 'NABILAH RATNA DUHITA AZARLAILA HERLAMBANG', npm: '2504074', kelas: 'TPB 3B', departemen: 'Departemen Media Kreatif', role: 'Anggota' },
  { no: 47, name: 'FAREL BASTIAN', npm: '2504042', kelas: 'TPB 3B', departemen: 'Departemen Media Kreatif', role: 'Anggota' },
  { no: 48, name: 'RONI FERDINAND', npm: '2404099', kelas: 'TPB 5C', departemen: 'Departemen Media Kreatif', role: 'Anggota' },
  { no: 49, name: 'GIEO THANAKA', npm: '2404027', kelas: 'TPB 5A', departemen: 'Departemen Media Kreatif', role: 'Anggota' },
  { no: 50, name: 'IRMA', npm: '2504007', kelas: 'TPB 3A', departemen: 'Departemen Media Kreatif', role: 'PJ' },
  { no: 51, name: 'ZAHRA APRILITA', npm: '2504110', kelas: 'TPB 3C', departemen: 'Departemen Media Kreatif', role: 'Anggota' },
  { no: 52, name: 'ARDIAN DUTA FIRMANSYAH', npm: '2504076', kelas: 'TPB 3B', departemen: 'Departemen Media Kreatif', role: 'Anggota' },
  { no: 53, name: 'M SULTAN DINATA', npm: '2404001', kelas: 'TPB 5A', departemen: 'Departemen Media Kreatif', role: 'Anggota' },

  // 7. Departemen Kerohanian
  { no: 54, name: 'MUHAMMAD ABI AL RASYID', npm: '2404014', kelas: 'TPB 5A', departemen: 'Departemen Kerohanian', role: 'Ketua' },
  { no: 55, name: 'ARYA GILANG AL FAISAL', npm: '2404042', kelas: 'TPB 5B', departemen: 'Departemen Kerohanian', role: 'Wakil' },
  { no: 56, name: 'ELVIRA OKTAVIARA', npm: '2404055', kelas: 'TPB 5B', departemen: 'Departemen Kerohanian', role: 'Anggota' },
  { no: 57, name: 'RANTA WINDRI NATA', npm: '2404036', kelas: 'TPB 5A', departemen: 'Departemen Kerohanian', role: 'Anggota' },
  { no: 58, name: 'MUHAMMAD HARIS MULIADI', npm: '2504085', kelas: 'TPB 3C', departemen: 'Departemen Kerohanian', role: 'Anggota' },
  { no: 59, name: 'DEDEN', npm: '2504104', kelas: 'TPB 3C', departemen: 'Departemen Kerohanian', role: 'Anggota' },

  // 8. Departemen Olahraga
  { no: 60, name: 'MUHAMMAD LEDRA SAPUTRA', npm: '2404081', kelas: 'TPB 5C', departemen: 'Departemen Olahraga', role: 'Ketua' },
  { no: 61, name: 'POPI DWI KENZABRINA', npm: '2404052', kelas: 'TPB 5B', departemen: 'Departemen Olahraga', role: 'Wakil' },
  { no: 62, name: 'ERIKA ANGGRAINI', npm: '2404040', kelas: 'TPB 5B', departemen: 'Departemen Olahraga', role: 'Anggota' },
  { no: 63, name: 'IBRAHIM CRISVO', npm: '2404047', kelas: 'TPB 5B', departemen: 'Departemen Olahraga', role: 'Anggota' },
  { no: 64, name: 'DEVA KURNIAWAN', npm: '2404068', kelas: 'TPB 5B', departemen: 'Departemen Olahraga', role: 'Anggota' },
  { no: 65, name: 'FITRI YANI', npm: '2404069', kelas: 'TPB 5B', departemen: 'Departemen Olahraga', role: 'Anggota' },
  { no: 66, name: 'RAFI PUTRA RAMDHANI', npm: '2404005', kelas: 'TPB 5A', departemen: 'Departemen Olahraga', role: 'Anggota' },
  { no: 67, name: 'RIKO AFRIANSYAH', npm: '2404044', kelas: 'TPB 5B', departemen: 'Departemen Olahraga', role: 'Anggota' },
  { no: 68, name: 'ARIL ADITIA', npm: '2504037', kelas: 'TPB 3A', departemen: 'Departemen Olahraga', role: 'Anggota' },
  { no: 69, name: 'NAYLA NAJWA FATIMAH', npm: '2504041', kelas: 'TPB 3B', departemen: 'Departemen Olahraga', role: 'Anggota' },
  { no: 70, name: 'KAKA NURFAUZI', npm: '2504008', kelas: 'TPB 3A', departemen: 'Departemen Olahraga', role: 'Anggota' },
  { no: 71, name: 'DASRI', npm: '2504044', kelas: 'TPB 3B', departemen: 'Departemen Olahraga', role: 'Anggota' },
  { no: 72, name: 'PANDU PIJAYA', npm: '2504091', kelas: 'TPB 3C', departemen: 'Departemen Olahraga', role: 'Anggota' },
  { no: 73, name: 'M.YUDA PUTRA', npm: '2504056', kelas: 'TPB 3B', departemen: 'Departemen Olahraga', role: 'Anggota' },
  { no: 74, name: 'MISS HANNY RAMADANI', npm: '2504055', kelas: 'TPB 3B', departemen: 'Departemen Olahraga', role: 'Anggota' },
  { no: 75, name: 'RAHMAT ALDI AGASI', npm: '2504098', kelas: 'TPB 3C', departemen: 'Departemen Olahraga', role: 'Anggota' },
];

export const DEPARTMENTS_DATA: DepartmentData[] = [
  {
    id: 'bph',
    name: 'Badan Pengurus Harian (BPH)',
    shortName: 'BPH Pimpinan',
    head: 'STEVEN AL WAHID (Ketua)',
    viceHead: 'M ALZAKY QUSHOYYI (Wakil)',
    description: 'Pucuk pimpinan tertinggi organisasi yang bertanggung jawab atas seluruh kebijakan umum, stabilitas kelembagaan, serta koordinasi menyeluruh kepengurusan HMPS MATARATU 2026-2027.',
    membersCount: 6,
    color: '#FACC15',
    coordinate: [0, 0.4, 0],
    members: HMPS_MEMBERS.filter((m) => m.departemen.includes('BPH')),
  },
  {
    id: 'psdm',
    name: 'Departemen Pengembangan Sumber Daya Manusia (PSDM)',
    shortName: 'PSDM & Kaderisasi',
    head: 'ARJUN DENI OKI PUTRA (Ketua)',
    viceHead: 'DWI RAHMAWATI (Wakil)',
    description: 'Menggerakkan kaderisasi berjenjang mahasiswa baru, pembinaan minat dan bakat, kepemimpinan ksatria tambang, dan regenerasi kepengurusan.',
    membersCount: 12,
    color: '#38BDF8',
    coordinate: [2.5, 1.2, 0.8],
    members: HMPS_MEMBERS.filter((m) => m.departemen === 'Departemen PSDM'),
  },
  {
    id: 'humas',
    name: 'Departemen Hubungan Masyarakat (HUMAS)',
    shortName: 'Humas & Eksternal',
    head: 'TOMAS (Ketua)',
    viceHead: 'MUHAMMAD TAUFIQURRAHMAN (Wakil)',
    description: 'Membangun jembatan komunikasi strategis antara organisasi, sivitas akademika Politeknik Akamigas Palembang, ikatan alumni tambang batubara, serta kemitraan industri.',
    membersCount: 8,
    color: '#F97316',
    coordinate: [-2.4, 1.4, -0.6],
    members: HMPS_MEMBERS.filter((m) => m.departemen === 'Departemen Humas'),
  },
  {
    id: 'kesenian',
    name: 'Departemen Kesenian',
    shortName: 'Kesenian',
    head: 'YONATAN KURNIAWAN (Ketua)',
    viceHead: 'RIESTY ANJANI (Wakil)',
    description: 'Wadah aspirasi minat dan ekspresi seni budaya nusantara mahasiswa Teknik Pertambangan Batubara, mempererat kekeluargaan melalui panggung kreativitas.',
    membersCount: 8,
    color: '#EC4899',
    coordinate: [-2.6, -1.2, 0.7],
    members: HMPS_MEMBERS.filter((m) => m.departemen === 'Departemen Kesenian'),
  },
  {
    id: 'bisnis',
    name: 'Departemen Bisnis Kreatif',
    shortName: 'Bisnis Kreatif',
    head: 'REJA TRISNA DATA (Ketua)',
    viceHead: 'RISKI HERMAWAN (Wakil)',
    description: 'Mengembangkan kemandirian finansial organisasi melalui kewirausahaan mahasiswa, merchandise tambang (jaket, kemeja PDH, pin, stiker), dan sponsorship.',
    membersCount: 8,
    color: '#10B981',
    coordinate: [2.6, -1.0, -0.5],
    members: HMPS_MEMBERS.filter((m) => m.departemen === 'Departemen Bisnis Kreatif'),
  },
  {
    id: 'media',
    name: 'Departemen Media Kreatif',
    shortName: 'Media Kreatif',
    head: 'AHMAD BIMA KUSUMA (Ketua)',
    viceHead: 'MUHAMMAD ALIF (Wakil)',
    description: 'Pusat arsitektur visual grafis, publikasi media sosial resmi, liputan ekskursi tambang, dan divisi dokumentasi & publikasi kegiatan HMPS MATARATU.',
    membersCount: 11,
    color: '#A855F7',
    coordinate: [0, -2.4, 0.4],
    members: HMPS_MEMBERS.filter((m) => m.departemen === 'Departemen Media Kreatif'),
  },
  {
    id: 'kerohanian',
    name: 'Departemen Kerohanian',
    shortName: 'Kerohanian',
    head: 'MUHAMMAD ABI AL RASYID (Ketua)',
    viceHead: 'ARYA GILANG AL FAISAL (Wakil)',
    description: 'Menanamkan pondasi moral, etika religi, dan kepedulian sosial guna membentuk karakter ksatria tambang yang berintegritas dan berbudi luhur.',
    membersCount: 6,
    color: '#EAB308',
    coordinate: [-1.8, 0.3, 1.8],
    members: HMPS_MEMBERS.filter((m) => m.departemen === 'Departemen Kerohanian'),
  },
  {
    id: 'olahraga',
    name: 'Departemen Olahraga',
    shortName: 'Olahraga',
    head: 'MUHAMMAD LEDRA SAPUTRA (Ketua)',
    viceHead: 'POPI DWI KENZABRINA (Wakil)',
    description: 'Mewadahi kompetisi dan aktivitas jasmani mahasiswa tambang, menjaga kebugaran fisik calon tenaga ahli lapangan, dan mempererat jiwa korsa melalui olahraga.',
    membersCount: 16,
    color: '#06B6D4',
    coordinate: [1.8, -0.4, -1.8],
    members: HMPS_MEMBERS.filter((m) => m.departemen === 'Departemen Olahraga'),
  },
];
