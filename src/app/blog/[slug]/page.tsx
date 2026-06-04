import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getBlogPostBySlug } from "@/actions/blog";
import AppTitle from "@/components/appTitle";
import SubscribeForm from "@/components/subscribe-form";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  
  if (!post) return { title: "Post no encontrado" };

  return {
    title: post.title,
    description: post.excerpt.length > 155 ? post.excerpt.slice(0, 152) + "..." : post.excerpt,
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const postDate = post.created_at ? new Date(post.created_at).toISOString() : new Date().toISOString();

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image ? [post.image] : [],
    "datePublished": postDate,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Hertzios",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.hertzios.com/icon.png"
      }
    }
  };

  return (
    <article className="min-h-screen bg-background py-20 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-sm text-primary mb-8 hover:underline group"
        >
          <svg className="mr-2 w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Volver al blog
        </Link>

        <header className="mb-12">
          <div className="mb-6">
            <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/20">
              {post.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center space-x-4 text-muted-foreground">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 border border-primary/20">
                <span className="text-primary font-bold text-sm">{post.author[0]}</span>
              </div>
              <span className="font-medium text-foreground">{post.author}</span>
            </div>
            <span>•</span>
            <time>{post.date}</time>
          </div>
        </header>

        {post.image && (
          <div className="relative aspect-video w-full mb-12 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="prose prose-lg prose-slate dark:prose-invert max-w-none overflow-hidden">
          <div 
            className="text-foreground/90 leading-relaxed space-y-6 break-words"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        <footer className="mt-16 pt-8 border-t border-border">
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4">¿Te ha gustado este artículo?</h3>
            <p className="text-muted-foreground mb-6">
              Suscríbete a nuestro boletín para recibir más contenido como este directamente en tu bandeja de entrada.
            </p>
            <SubscribeForm />
          </div>
        </footer>
      </div>
    </article>
  );
}
