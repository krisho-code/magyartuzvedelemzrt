import { redirect } from "next/navigation";

export default function RootPage() {
  // Always redirect to Hungarian locale for the root URL
  redirect("/hu");
}
