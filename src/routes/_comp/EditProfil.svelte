<script>
  import { f_user, f_url, f_link } from "./svg";
  import Loader from "../../lib/data/comp/Loader.svelte";
  import MobilView from "../../lib/components/MobilView.svelte";
  import FetchProfil from "./FetchProfil.svelte";
  import { _user, _settings, supabase } from "../../lib/data";
  let un, uw, ui;
  let loading, promise;

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
  const updateProfile = async () => {
    let su = $_user;
    try {
      loading = true;

      let updates = {
        id: su.id,
        username: un,
        website: uw,
        img_url: ui,
        updated_at: new Date(),
      };
      let { error } = await supabase.from("profiles").upsert(updates, {
        returning: "minimal", // Don't return the value after inserting
      });

      if (error) throw error;
    } catch (error) {
      alert(error.message);
    } finally {
      loading = false;
      promise = getProfil(su.id);
    }
  };
</script>

<MobilView>
  <div class="">
    <FetchProfil bind:promise bind:loading let:payload>
      {#await promise}
        <Loader />
      {:then payload}
        <slot {payload}><!-- optional fallback --></slot>
      {/await}

      <div class="card">
        {#if payload.img_url && payload.img_url !== ""}
          <div class="py-3 border-bottom">
            <img
              src={payload.img_url}
              class="card-img-top mx-auto"
              alt="avatar"
              width="150"
              height="150"
              style="object-fit: contain;"
            />
          </div>
        {/if}

        <div class="card-body plain" class:edit={$_settings.op8}>
          <form class="" on:submit|preventDefault={updateProfile}>
   
            <div class="input-group mb-2" class:input-group-lg={$_settings.op7}>
              <span class="input-group-text">
                <span>{@html f_user}</span>
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="Username"
                value={payload.username ? payload.username : ""}
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
                value={payload.website ? payload.website : ""}
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
                value={payload.img_url ? payload.img_url : ""}
                on:change={(e) => {
                  ui = e.currentTarget.value;
                }}
              />
            </div>

            <div class="col-12 py-4">
              <div class="d-grid g-2">
                <button type="submit" class="btn btn-primary"
                  >Save Setings</button
                >
              </div>
            </div>
          </form>
        </div>
      </div>
    </FetchProfil>
  </div>
 
</MobilView>

<style>
  label {
    font-size: 0.8rem;
  }
  .plain .input-group-text,
  .plain .form-control {
    border-color: #fff;
  }
  .plain.edit .input-group-text,
  .plain.edit .form-control {
    border-color: #dddddd;
  }
</style>
