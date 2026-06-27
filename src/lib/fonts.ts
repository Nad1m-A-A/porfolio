import { League_Spartan, Cairo, Pinyon_Script } from "next/font/google";

export const appFont = League_Spartan({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const logoFont = Pinyon_Script({
    subsets: ["latin"],
    weight: ["400"],
});

export const arabicFont = Cairo({
    subsets: ["arabic"],
    weight: ["400", "500", "600", "700"],
});