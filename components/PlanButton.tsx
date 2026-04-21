"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface Props {
  planKey: string;
  label: string;
  className: string;
}

export default function PlanButton({ planKey, label, className }: Props) {
  const { data: session } = useSession();
  const router = useRouter();

  function handleClick() {
    if (!session) {
      router.push(`/autentificare?plan=${planKey}`);
    } else {
      router.push(`/plata?plan=${planKey}`);
    }
  }

  return (
    <button onClick={handleClick} className={className}>
      {label}
    </button>
  );
}
