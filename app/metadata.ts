import { Metadata } from "next";

interface MetadataProps {
    title: string;
    description: string;
    url?: string;
    imageUrl?: string;
}

export function generateMetadata({
    title = "How AI‑Powered Fraud Detection Is Revolutionizing Banking Security in Africa",
    description = "AI fraud detection is transforming banking security across Africa—explore real‑time systems, case studies in Ghana, Gambia, South Africa, and best practices.",
    url = "/insights",
    imageUrl = "@/public/assets/images/insights/ai-fraud-detection.jpg",
}: MetadataProps): Metadata {
    const defaultUrl = process.env.WEBAPP_URL || 'https://codersclutch.com/';
    return {
        title: { default: title, template: "%s | How AI‑Powered Fraud Detection Is Revolutionizing Banking Security in Africa" },
        description: description,
        applicationName: "CodersClutch",
        authors: [{ name: "Coders Clutch Team", url: process.env.WEBAPP_URL || 'https://www.codersclutch.com' }],
        generator: "Next.js",
        keywords: ["AI fraud detection", "banking cybersecurity", "fintech fraud prevention", "machine learning in banking", "fraud detection Ghana", "Gambia, South Africa"],
        referrer: "origin",
        creator: "Coders Clutch Team",
        publisher: "Coders Clutch Team",
        robots: "index, follow",
        alternates: {
            canonical: `${defaultUrl}${url}`,
            types: {
                "application/rss+xml": [{ url: "/feed/rss.xml", title: "RSS Feed" }]
            }
        },
        icons: {
            icon: "/icon-192x192.png",
            apple: "/apple-touch-icon.png",
        },
        manifest: "/manifest.json",
        openGraph: {
            type: "website",
            url: process.env.WEBAPP_URL || 'https://www.codersclutch.com',
            title: title,
            description: description,
            siteName: "Coders Clutch",
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: "MediaTranscribe - Transforming media to text",
                }
            ],
        },
        twitter: {
            card: "summary_large_image",
            site: "@CodersClutch",
            creator: "@codersclutch",
            title: title,
            description: description,
            images: "https://www.codersclutch.com/twitter-image.png"
        },
        verification: {
            google: "alskdjfiwoiewoiewoiruwik-g",
            yandex: "32478298029"
        },
        appleWebApp: {
            capable: true,
            title: "Coders Clutch",
            statusBarStyle: "black-translucent",
        },
        formatDetection: {
            telephone: false
        },
        abstract: "AI fraud detection is transforming banking security across Africa—explore real‑time systems, case studies in Ghana, Gambia, South Africa, and best practices",
        archives: ["https://www.codersclutch.com/archives"],
        assets: ["https://www.coderclutch.com/assets"],
        bookmarks: ["https://www.codersclutch.com/bookmarks"],
        category: "AI fraud detection, banking cybersecurity, fintech fraud prevention",
        classification: "AI fraud detection",
        // other: {
        //   "msapplication-TileColor": "#2b5797",
        //   "msapplication-config": "/icons/browserconfig.xml"
        // }
    }
}