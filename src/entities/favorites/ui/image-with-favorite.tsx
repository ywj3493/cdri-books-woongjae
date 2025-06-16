import { FavoriteIconEmpty, FavoriteIconFilled } from "@/shared/ui";

interface ImageWithFavoriteProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  isFavorite: boolean;
  isExpanded?: boolean;
  onChangeFavorite?: (isFavorite: boolean) => void;
}

export function FavoriteImage({
  src: unsafeSrc,
  alt: unsafeAlt,
  isFavorite,
  isExpanded = false,
  onChangeFavorite,
  ...props
}: ImageWithFavoriteProps) {
  const toggleFavorite = () => {
    if (onChangeFavorite) {
      onChangeFavorite(!isFavorite);
    }
  };

  const altText = unsafeAlt || "";
  const src = unsafeSrc || "/assets/icon_book.png";

  return (
    <div className="relative inline-block">
      <img {...props} src={src} alt={altText} />
      <div className="absolute top-0 right-0 p-1">
        {isFavorite ? (
          <FavoriteIconFilled
            onClick={toggleFavorite}
            width={isExpanded ? 20 : 13}
            height={isExpanded ? 18 : 13}
          />
        ) : (
          <FavoriteIconEmpty
            onClick={toggleFavorite}
            width={isExpanded ? 20 : 13}
            height={isExpanded ? 18 : 13}
          />
        )}
      </div>
    </div>
  );
}
