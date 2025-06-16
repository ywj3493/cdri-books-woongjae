import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/shared/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg cursor-pointer gap-2 whitespace-nowrap",
  {
    variants: {
      variant: {
        primary: "bg-cdri-primary text-cdri-white w-[115px] py-3",
        secondary:
          "bg-cdri-light-gray text-cdri-caption text-cdri-text-secondary w-[115px] py-3",
        outline:
          "bg-cdri-white text-cdri-text-subtitle border border-cdri-gray",
      },
      defaultVariants: {
        variant: "primary",
      },
    },
  },
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({
  variant,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant: variant }), className)}
      {...props}
    >
      {children}
    </button>
  );
}
