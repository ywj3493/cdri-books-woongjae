export function Image({ ...props }: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <div>
      <img {...props} />
    </div>
  );
}
