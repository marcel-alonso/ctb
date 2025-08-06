import Image from 'next/image'
import Link from 'next/link'
import { formatDate } from '@/lib/utils'

export default function PostCard({ post }) {
  const {
    slug,
    frontMatter: { title, excerpt, date, coverImage, category }
  } = post

  return (
    <article className="post-card">
      <Link href={`/blog/${slug}`} className="post-card__link">
        <div className="post-card__image">
          <Image
            src={coverImage}
            alt={title}
            width={400}
            height={250}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="post-card__img"
            loading="lazy"
          />
        </div>
        <div className="post-card__content">
          <div className="post-card__meta">
            <span className="post-card__category">{category}</span>
            <time className="post-card__date">{formatDate(date)}</time>
          </div>
          <h2 className="post-card__title">{title}</h2>
          <p className="post-card__excerpt">{excerpt}</p>
          <span className="post-card__read-more">
            Ler mais
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </Link>
    </article>
  )
}
