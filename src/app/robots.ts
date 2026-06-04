import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/private/", "/login", "/dashboard"],
        },
        sitemap: "https://www.hertzios.com/sitemap.xml",
    };
}
