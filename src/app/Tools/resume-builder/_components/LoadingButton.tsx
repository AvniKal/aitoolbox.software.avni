import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { ReactNode } from "react";

interface LoadingButtonProps {
  loading: boolean;
  disabled?: boolean;
  className? : string;
  children ?: ReactNode
}

export default function LoadingButton({
  loading,
  disabled,
  className,
  children ,
  ...props
}: LoadingButtonProps) {
  return (
    <Button
      disabled={loading || disabled}
      className={cn("flex items-center gap-2", className)}
      {...props}
    >
      {loading && <Loader2 className="size-5 animate-spin" />}
      {children}
    </Button>
  );
}
