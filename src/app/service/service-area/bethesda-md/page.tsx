"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const TARGET = "/service-area/bethesda-md";

export default function BethesdaServiceAreaRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace(TARGET);
  }, [router]);

  return (
    <main>
      <meta httpEquiv="refresh" content={`0; url=${TARGET}`} />
      <section>
        <h1>Redirecting to Bethesda service area</h1>
        <p>
          <Link href={TARGET}>Continue to General Contractor in Bethesda, MD</Link>
        </p>
      </section>
    </main>
  );
}
