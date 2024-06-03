import { PropsWithChildren } from "react";

export const PageContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen bg-gray-100 container mx-auto p-4">
      {children}
    </div>
  );
};
