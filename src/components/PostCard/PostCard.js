import Link from 'next/link';

import { postPathBySlug, sanitizeExcerpt } from 'lib/posts';

import Metadata from 'components/Metadata';

import { FaMapPin } from 'react-icons/fa';
import styles from './PostCard.module.scss';

const PostCard = ({ post, options = {} }) => {
  const { title, excerpt, slug, date, author, categories, isSticky = false } = post;
  const { excludeMetadata = [] } = options;

  const metadata = {};

  if (!excludeMetadata.includes('author')) {
    metadata.author = author;
  }

  if (!excludeMetadata.includes('date')) {
    metadata.date = date;
  }

  if (!excludeMetadata.includes('categories')) {
    metadata.categories = categories;
  }

  return (
    <div className="border-[1px] border-zinc-900 px-12 pb-6 rounded-3xl shadow-md">
      {isSticky && <FaMapPin aria-label="Sticky Post" />}
      <Link href={postPathBySlug(slug)}>
        <h3
          className="text-4xl mb-4 text-slate-200 font-medium"
          dangerouslySetInnerHTML={{
            __html: title,
          }}
        />
      </Link>
      <Metadata className={styles.postCardMetadata} {...metadata} />
      {excerpt && (
        <div
          className="text-md"
          dangerouslySetInnerHTML={{
            __html: sanitizeExcerpt(excerpt),
          }}
        />
      )}
    </div>
  );
};

export default PostCard;
