import { MetadataRoute } from "next";
import { EVENT_DETAILS, CORE_SERVICES } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${EVENT_DETAILS.domain}`;
  const now = new Date();

  const staticRoutes = [
    "",
    "/food-africa-2026",
    "/services",
    "/how-it-works",
    "/why-globalize",
    "/about",
    "/faq",
    "/contact",
    "/get-support-plan",
    "/case-study",
    "/privacy-policy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : route === "/food-africa-2026" ? 0.95 : 0.8,
  }));

  const serviceRoutes = CORE_SERVICES.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
