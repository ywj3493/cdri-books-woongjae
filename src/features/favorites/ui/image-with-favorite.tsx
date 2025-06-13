import { FavoriteIconEmpty, FavoriteIconFilled } from "@/shared/ui";

interface ImageWithFavoriteProps
  extends React.HTMLAttributes<HTMLImageElement> {
  isFavorite: boolean;
  onChangeFavorite?: (isFavorite: boolean) => void;
}

export function FavoriteImage({
  isFavorite,
  onChangeFavorite,
  ...props
}: ImageWithFavoriteProps) {
  const toggleFavorite = () => {
    if (onChangeFavorite) {
      onChangeFavorite(!isFavorite);
    }
  };

  return (
    <div>
      <img {...props} />
      {isFavorite ? (
        <FavoriteIconEmpty onClick={toggleFavorite} />
      ) : (
        <FavoriteIconFilled onClick={toggleFavorite} />
      )}
    </div>
  );
}
