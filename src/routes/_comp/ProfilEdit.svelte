<script>
  import Icon from "../../lib/components/Icon.svelte";
  import Loader from "../../lib/data/comp/Loader.svelte";
  import { _user, supabase, sleep, _settings } from "../../lib/data";
  let loading;
  let promise;
  let username, website, img_url, location;
  let icon_size = "19";
  let icon_style = `--fs: ${icon_size}px;`;
  const updateProfile = async () => {
    try {
      loading = true;
      let uid = $_user.id;
      const updates = {
        id: uid,
        username,
        website,
        img_url,
        location,
        updated_at: new Date().toISOString(),
      };

      let { error } = await supabase.from("profiles").upsert(updates);

      if (error) {
        throw error;
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      loading = false;
    }
  };
  const getProfil = async (id) => {
    try {
      loading = true;
      let { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", id);
      if (error) throw error;

      if (!data.length) generateProfil();
      return data;
    } catch (error) {
      alert(error.message);
    } finally {
      loading = false;
    }
  };
  const signOut = async () => {
    loading = true;
    try {
      let { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error) {
      alert("Error Logout!");
    } finally {
      await sleep(800);
      loading = false;
    }
  };
  $: if ($_user) {
    promise = getProfil($_user.id);
  }
</script>

{#await promise}
  <Loader />
{:then data}
  {#each data as udata}
    <!-- content here -->

    <form class="" on:submit|preventDefault={updateProfile}>
      <div class="input-group mb-2" class:input-group-lg={$_settings.op7}>
        <span class="input-group-text">
          <span>{@html f_user}</span>
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="Username"
          value={udata.username ? udata.username : ""}
          on:change={(e) => {
            un = e.currentTarget.value;
          }}
        />
      </div>
      <div class="input-group mb-2" class:input-group-lg={$_settings.op7}>
        <span class="input-group-text">
          <span>{@html f_url}</span>
        </span>
        <input
          type="url"
          class="form-control"
          placeholder="https://"
          value={udata.website ? udata.website : ""}
          on:change={(e) => {
            uw = e.currentTarget.value;
          }}
        />
      </div>
      <div class="input-group mb-2" class:input-group-lg={$_settings.op7}>
        <span class="input-group-text"><span>{@html f_link}</span></span>
        <input
          type="url"
          class="form-control"
          placeholder="https://"
          value={udata.img_url ? udata.img_url : ""}
          on:change={(e) => {
            ui = e.currentTarget.value;
          }}
        />
      </div>

      <div class="col-12 py-4">
        <div class="d-grid g-2">
          <button type="submit" class="btn btn-primary">Save Setings</button>
        </div>
      </div>
    </form>
  {/each}
{/await}
