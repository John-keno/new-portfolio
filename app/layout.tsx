import type { Viewport, Metadata as MetadataType } from "next";
import { Rubik } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

const rubik = Rubik({
	subsets: ["latin"],
	style: ["normal", "italic"],
	display: "swap",
	weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: MetadataType = {
	title: "John Keno Iweh | Portfolio",
	description:
		"Full Stack Web Developer and Software Engineer from Nigeria passionate about crafting responsive interfaces, building scalable backend systems, and developing embedded firmware. As a freelance developer, I deliver tailored, performance-driven software solutions designed to elevate user experience and functionality.",
	keywords: [
		"John Keno Iweh",
		"Software Engineer",
		"Frontend Developer",
		"React Developer",
		"Next.js Developer",
		"Web Designer",
		"Backend Developer",
		"firmware Developer",
		"Portfolio",
	],
	authors: { name: "Ibrahim Memon" },
	creator: "John Keno Iweh",
	publisher: "John Keno Iweh",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://devjohnkeno.com.ng",
		title: "Ibrahim Memon - Software Engineer & UI/UX Designer",
		description:
			"A self-taught UI/UX designer and Software Engineer at WebHR. Creating meaningful and delightful digital products.",
		siteName: "Ibrahim Memon Portfolio",
	},
	twitter: {
		card: "summary_large_image",
		title: "John Keno Iweh | Software Engineer & Firmware Developer",
		description: "A Software Engineer & Firmware Developer",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 5,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${rubik.className} font-sans antialiased`}>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
