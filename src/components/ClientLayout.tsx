'use client';

import { usePathname } from 'next/navigation';
import Newsletter from '@/components/Newsletter';

export default function ClientLayout() {
  const pathname = usePathname();

  // Hide newsletter on thank you page
  const hideNewsletter = pathname === '/thank-you';

  return (
    <Newsletter
      showWorkButtons={false}
      show={!hideNewsletter}
    />
  );
}