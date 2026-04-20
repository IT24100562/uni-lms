export interface NewsItem {
  id: number;
  title: string;
  date: string;
  summary: string;
  link: string;
}

export const csctNews: NewsItem[] = [
  {
    id: 1,
    title: "THE ASSESSMENT OF THE NATIONAL HEALTH CARE",
    date: "April 11, 2026",
    summary: "A featured analysis article published by the CSCT community.",
    link: "https://csct.edu.lk/index.php/2025/04/01/the-assessment-of-the-national-health-care-system-of-sri-lanka/",
  },
  {
    id: 2,
    title: "Ceremonial Opening of the Live Donor Liver",
    date: "April 11, 2026",
    summary: "Recent event coverage highlighting CSCT engagement initiatives.",
    link: "https://csct.edu.lk/index.php/2025/03/05/ceremonial-opening-of-the-live-donor-liver-transplant-theatre/",
  },
  {
    id: 3,
    title: "RICS Summit 2025",
    date: "April 11, 2026",
    summary: "CSCT participation update from the RICS Summit.",
    link: "https://csct.edu.lk/index.php/2025/02/11/white-minimalist-business-company-newsletter/",
  },
];
