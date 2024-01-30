import { createClient } from "@/utils/supabase/test";

export default async function Index() {
  const supabase = createClient();

  const { data } = await supabase.from("data").select();

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <main className="flex-1 flex flex-col gap-6">
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </main>
    </div>
  );
}
