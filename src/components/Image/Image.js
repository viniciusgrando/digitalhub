import Image from 'next/image';
import styles from './Image.module.scss';

const MyImage = ({ children, src, alt = '', srcSet, dangerouslySetInnerHTML }) => (
  <figure className={styles.image}>
    <div className={styles.featuredImageImg}>
      <Image width={1500} height={600} src={src} alt={alt} srcSet={srcSet} />
    </div>
    {children && <figcaption>{children}</figcaption>}
    {dangerouslySetInnerHTML && (
      <figcaption
        dangerouslySetInnerHTML={{
          __html: dangerouslySetInnerHTML,
        }}
      />
    )}
  </figure>
);

export default MyImage;
