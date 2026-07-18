import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-sm text-ink placeholder:text-black/35 focus:outline-none focus:ring-2 focus:ring-azul transition",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";

export { Input };
