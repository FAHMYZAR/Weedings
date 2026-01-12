import { EventDetail } from './types';

export const COUPLE_NAME_GROOM = "Miftah";
export const COUPLE_NAME_BRIDE = "Diah";
export const WEDDING_DATE = "Rabu, 29 Januari 2026";

export const EVENTS: EventDetail[] = [
  {
    title: "Akad Nikah & Resepsi",
    date: "29 Januari 2026",
    time: "08:00 - Selesai",
    location: "Rumah Mempelai Wanita",
    address: "Ds. Gagaan, Gg. Krisna, Kunduran",
    googleMapsUrl: "https://maps.google.com/?q=-7.049036,111.224052",
    entertainment: "Hiburan akan disediakan"
  },
  {
    title: "Resepsi Keluarga",
    date: "3 Februari 2026",
    time: "08:00 - Selesai",
    location: "Rumah Mempelai Pria",
    address: "Ds. Sumberagung, Dk. Sumberjo",
    googleMapsUrl: "https://maps.google.com/?q=-7.027723,111.388412",
    entertainment: "Hiburan Banjar: Hadroh dan Orgen Tunggal"
  }
];

export const MOCK_WISHES = [
  { id: '1', name: 'Keluarga Besar', message: 'Selamat menempuh hidup baru Diah & Miftah! Semoga sakinah mawaddah warahmah.', timestamp: '2 menit yang lalu' },
  { id: '2', name: 'Tetangga', message: 'Barakallahu lakuma wa baraka alaikuma. Semoga langgeng sampai kakek nenek.', timestamp: '1 jam yang lalu' },
  { id: '3', name: 'Teman Kerja', message: 'Happy wedding Diah & Miftah! Semoga menjadi keluarga yang sakinah.', timestamp: '3 jam yang lalu' },
];