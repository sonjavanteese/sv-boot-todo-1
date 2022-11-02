<script>
  import SignIn from "./user/SignIn.svelte";
  import Profile from "./user/Profile.svelte";
  import ProfileEdit from "./user/ProfileEdit.svelte";
  import Loader from "../lib/data/comp/Loader.svelte";
  import { _user, supabase } from "../lib/data";
  import { Collapse, Card } from "sveltestrap";
  let isOpen = false;
  let editor, panel, loading, promise;

  const getProfil = async (id) => {
    try {
      loading = true;
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
      console.log("Fetch Profile");
    }
  };

  $: if ($_user) {
    promise = getProfil($_user.id);
  }
</script>

<SignIn>
  <section class="container py-4">
    {#await promise}
      <Loader />
    {:then value}
      <article>
        <Card body class="mb-4">
          <div class="align-items-center row">
            <div
              class="col-lg-6 me-auto pb-3 pt-3 text-center"
            >
              <div bind:this={panel}>
                <Profile bind:isOpen {value} {getProfil} />
              </div>
            </div>
            <div class="col-lg-5 pb-3 pt-3 text-center">
              <a href="#/data" class="btn btn-dark btn-lg me-1">Database</a>
              <a href="#/settings" class="btn btn-lg btn-dark">Settings</a>
            </div>
          </div>
        </Card>
        <Collapse
          {isOpen}
          on:close={() => {
            panel.scrollIntoView({ behavior: "smooth", block: "center" });
          }}
          on:open={() => {
            editor.scrollIntoView({ behavior: "smooth", block: "center" });
          }}
        >
          <Card body>
            <div bind:this={editor}>
              <ProfileEdit bind:isOpen {value} {getProfil} />
            </div>
          </Card>
        </Collapse>
      </article>
    {:catch error}
      <h1>Error</h1>
    {/await}
  </section>
</SignIn>

<style>
  section {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
  h1 {
    font-size: 5rem;
    font-weight: 800;
    text-align: center;
  }
</style>
