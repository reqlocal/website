import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — reqlocal",
  description: "Community, Team, and Enterprise options around the open-source reqlocal package.",
};

export default function PricingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
