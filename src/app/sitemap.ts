import { MetadataRoute } from "next";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { getBlogPosts } from "@/actions/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://www.hertzios.com";
    const lastModifiedDate = new Date();

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: lastModifiedDate,
            changeFrequency: "monthly",
            priority: 1.0,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: lastModifiedDate,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: lastModifiedDate,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: lastModifiedDate,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: lastModifiedDate,
            changeFrequency: "yearly",
            priority: 0.5,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: lastModifiedDate,
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/budget`,
            lastModified: lastModifiedDate,
            changeFrequency: "yearly",
            priority: 0.5,
        },
        {
            url: `${baseUrl}/privacidad`,
            lastModified: lastModifiedDate,
            changeFrequency: "yearly",
            priority: 0.3,
        },
        {
            url: `${baseUrl}/terminos`,
            lastModified: lastModifiedDate,
            changeFrequency: "yearly",
            priority: 0.3,
        },
    ];

    // Dynamic services
    const servicePages = services.map((service) => ({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified: lastModifiedDate,
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    // Dynamic projects
    const projectPages = projects.map((project) => ({
        url: `${baseUrl}/projects/${project.slug}`,
        lastModified: lastModifiedDate,
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    // Dynamic blog posts
    let blogPages: MetadataRoute.Sitemap = [];
    try {
        const posts = await getBlogPosts();
        if (posts && Array.isArray(posts)) {
            blogPages = posts.map((post) => {
                const postDate = post.created_at ? new Date(post.created_at) : lastModifiedDate;
                return {
                    url: `${baseUrl}/blog/${post.slug}`,
                    lastModified: postDate,
                    changeFrequency: "weekly" as const,
                    priority: 0.7,
                };
            });
        }
    } catch (error) {
        console.error("Error generating sitemap for blog posts:", error);
    }

    return [...staticPages, ...servicePages, ...projectPages, ...blogPages];
}
