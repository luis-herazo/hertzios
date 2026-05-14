import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getBlogPosts } from "@/actions/blog";
import AppTitle from "@/components/appTitle";
import DescriptionText from "@/components/descriptionText";

export const metadata: Metadata = {
  title: "Blog | Hertzios",
  description: "Artículos sobre tecnología, desarrollo de software, automatización y tendencias digitales.",
};

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();
  const title = "Nuestro Blog";
  const description = "Explora las últimas tendencias en tecnología, automatización y diseño digital para potenciar tu negocio.";

  return (
    <div className="min-h-screen bg-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <AppTitle Name={title} />
          <div className="max-w-2xl mx-auto mt-4">
            <DescriptionText Name={description} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Link 
              href={`/blog/${post.slug}`} 
              key={post.id}
              className="group relative flex flex-col bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {post.image ? (
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <span className="text-primary font-bold text-xl">Hertzios</span>
                  </div>
                )}
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 bg-primary/90 text-white text-xs font-semibold rounded-full backdrop-blur-md">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="flex-1 p-6 flex flex-col">
                <div className="flex items-center text-xs text-muted-foreground mb-3 space-x-2">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.author}</span>
                </div>
                <h2 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-primary text-sm font-semibold group-hover:translate-x-1 transition-transform duration-300">
                  Leer más
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
