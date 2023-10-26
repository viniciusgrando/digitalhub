import Image from 'next/image';
import styles from './Title.module.scss';

const Title = ({ title, thumbnail }) => {
  return (
    <div className={styles.title}>
      {thumbnail && <Image src={thumbnail.url} alt="" width={100} height={100} />}
      <span>{title}</span>
    </div>
  );
};

export default Title;
