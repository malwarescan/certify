import { redirect } from "next/navigation";

export default function ProductIdRedirect({
  params,
}: {
  params: { id: string };
}) {
  redirect(`/record/${params.id}`);
}
