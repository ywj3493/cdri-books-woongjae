import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/shared/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center px-5 py-[13px] rounded-lg cursor-pointer",
  {
    variants: {
      variant: {
        primary: "bg-cdri-primary text-cdri-white",
        secondary:
          "bg-cdri-light-gray text-cdri-caption text-cdri-text-secondary",
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
