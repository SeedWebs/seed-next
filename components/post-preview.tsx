import Avatar from './avatar';
import Date from './date';
import CoverImage from './cover-image';
import Link from 'next/link';
import styles from '../styles/PostPreview.module.scss';

export default function PostPreview({ title, coverImage, date, excerpt, author, slug }) {
  return (
    <div className={styles.item}>
      {coverImage && <CoverImage title={title} coverImage={coverImage} slug={slug} />}
      <h2>
        <Link href={`/${slug}`} className='hover:underline' dangerouslySetInnerHTML={{ __html: title }}></Link>
      </h2>
      <Date dateString={date} />
      <div className={styles.excerpt} dangerouslySetInnerHTML={{ __html: excerpt }} />
      <Avatar author={author} />
    </div>
  );
}
