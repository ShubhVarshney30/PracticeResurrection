import { Suspense } from 'react';
import { ErrorCard } from '@/components/auth/error-card';

export default function AuthErrorPage() {
  return (
    <Suspense fallback={<p className="text-center p-4">Loading...</p>}>
      <ErrorCard />
    </Suspense>
  );
}














