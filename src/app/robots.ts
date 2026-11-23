import { MetadataRoute } from "next";
import { portfolioConfig } from "@/data/portfolioData";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${portfolioConfig.siteUrl}/sitemap.xml`,
  };
}
