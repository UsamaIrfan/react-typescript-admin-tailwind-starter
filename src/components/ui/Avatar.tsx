import cn from 'classnames';

type AvatarProps = {
  className?: string;
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  onClick?: () => void;
};

const Avatar: React.FC<AvatarProps> = ({
  src,
  className,
  alt = 'Avatar',
  ...rest
}) => {
  return (
    <div
      className={cn(
        'relative cursor-pointer w-10 h-10 overflow-hidden rounded-full border border-border-100',
        className,
      )}
      {...rest}
    >
      <img alt={alt} src={src} style={{ objectFit: 'cover' }} />
    </div>
  );
};

export default Avatar;
