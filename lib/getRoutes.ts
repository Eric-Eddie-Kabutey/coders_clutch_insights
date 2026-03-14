import fs from "fs";
import path from "path";

export type SiteMapItem = {
  id: string;
  url: string;
  no_images: string;
  last_modified: string;
};

function formatDate(date: Date) {
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

export function getRoutes(): SiteMapItem[] {
  const appDir = path.join(process.cwd(), "app");
  const urls: SiteMapItem[] = [];

  function walkDir(dir: string, base = "") {
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        walkDir(fullPath, path.join(base, file));
      } else if (/page\.(js|jsx|ts|tsx)$/.test(file)) {
        // Skip dynamic routes with []
        if (/\[.*\]/.test(base)) return;

        let route = base.replace(/\([^)]*\)/g, "");

        route = route.replace(/\\/g, "/").replace(/\/+/g, "/");

        const fullUrl =
          `${process.env.NEXT_PUBLIC_MAIN_SITE_URL || "https://codersclutch.com"}` + (route === "" ? "/" : route);

        urls.push({
          id: fullUrl,
          url: fullUrl,
          no_images: "0",
          last_modified: formatDate(stat.mtime), // last modified time of file
        });
      }
    });
  }

  walkDir(appDir);
  return urls;
}
