import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import style from '@/src/components/ProjectItem/style';

type TProjectItem = {
  name: string;
  imageUrl: string;
  url?: string;
};

const ProjectItem: FC<TProjectItem> = (props) => {
  const { name, imageUrl, url } = props;

  if (url) {
    return (
      <Link href={url} target="_blank" css={style.itemContainer}>
        <Image
          src={imageUrl}
          width={476}
          height={270}
          alt={`${name} Project Image`}
          css={style.image}
        />
        <p css={style.description}>{name}</p>
      </Link>
    );
  }

  return (
    <div css={style.itemContainer}>
      <Image
        src={imageUrl}
        width={476}
        height={270}
        alt={`${name} Project Image`}
        css={style.image}
      />
      <p css={style.description}>{name}</p>
    </div>
  );
};

export default ProjectItem;
