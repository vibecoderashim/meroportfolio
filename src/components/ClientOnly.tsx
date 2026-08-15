import { ReactNode } from "react";
import { useHasMounted } from "@/hooks/useHasMounted";

interface ClientOnlyProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export function ClientOnly({ children, fallback = null }: ClientOnlyProps) {
  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}
