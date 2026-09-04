import { MetadataRoute } from "next";
import { EVENT_DETAILS } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `https://${EVENT_DETAILS.domain}/sitemap.xml`,
  };
}
