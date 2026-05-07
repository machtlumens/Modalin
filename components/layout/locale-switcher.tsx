"use client";
import { useLocale } from "next-intl";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const [pending, start] = useTransition();
  const next = locale === "id" ? "en" : "id";

  function swap() {
    document.cookie = `NEXT_LOCALE=${next}; path=/; max-age=31536000; samesite=lax`;
    start(() => router.refresh());
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={swap}
      disabled={pending}
      aria-label={`Switch language to ${next.toUpperCase()}`}
    >
      {locale.toUpperCase()}
    </Button>
  );
}
