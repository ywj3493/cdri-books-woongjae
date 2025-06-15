import { FavoriteIconEmpty, FavoriteIconFilled } from "@/shared/ui";

interface ImageWithFavoriteProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  isFavorite: boolean;
  onChangeFavorite?: (isFavorite: boolean) => void;
}

export function FavoriteImage({
  src: unsafedSrc,
  alt: unsafedAlt,
  isFavorite,
  onChangeFavorite,
  ...props
}: ImageWithFavoriteProps) {
  const toggleFavorite = () => {
    if (onChangeFavorite) {
      onChangeFavorite(!isFavorite);
    }
  };

  const altText = unsafedAlt || "";
  const src = unsafedSrc || "/assets/icon_book.png";

  return (
    <div className="relative inline-block">
      <img {...props} src={src} alt={altText} />
      <div className="absolute top-0 right-0 p-1">
        {isFavorite ? (
          <FavoriteIconFilled
            onClick={toggleFavorite}
            className="w-[100%] h-[100%]"
          />
        ) : (
          <FavoriteIconEmpty
            onClick={toggleFavorite}
            className="w-[100%] h-[100%]"
          />
        )}
      </div>
    </div>
  );
}
