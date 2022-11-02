<script>
  import Loader from "../../lib/data/comp/Loader.svelte";
  import { _user, supabase, sleep } from "../../lib/data";
  export let loading;
  export let promise;

  const getProfil = async (id) => {
    try {
      loading = true;
      await sleep(600);
      let { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", id)
        .single();
      if (error) throw error;
      return data;
    } catch (error) {
      alert(error.message);
    } finally {
      loading = false;
     // console.log("Fetch Profile");
    }
  };

  $: if ($_user) {
    promise = getProfil($_user.id);
  }
</script>

{#await promise}
  <Loader />
{:then payload}
  <slot {payload}><!-- optional fallback --></slot>
{/await}
