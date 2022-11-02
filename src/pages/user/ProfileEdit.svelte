<script>
  import { _user, supabase } from "../../lib/data";
  export let value;
  export let getProfil;
  export let isOpen;
  let un = value.username ? value.username : "";
  let ws = value.website ? value.website : "";
  let uimg = value.img_url ? value.img_url : "";
  let loading = false;
  let edited = false;
  let imgh = 80;
  async function updateProfile() {
    let suser = $_user;
    try {
      loading = true;

      let updates = {
        id: suser.id,
        username: un,
        website: ws,
        img_url: uimg,
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
      edited = false;
      getProfil(suser.id);
    }
  }
</script>

<article class="py-4">
  <header>
    <h2 class="h2 fw-bold text-center mb-4">Edit Profile</h2>
  </header>

  <form on:submit|preventDefault={updateProfile}>
    <div class="row g-3">
      <div class="col-12">
        <input
          type="email"
          class="form-control bg-light text-secondary"
          readonly="readonly"
          value={$_user.email ? $_user.email : ""}
          id="email"
        />
      </div>
      <div class="col-sm-6">
        <label for="dd1" class="form-label">Username</label>
        <input
          id="dd1"
          type="text"
          class="form-control"
          placeholder="Username"
          bind:value={un}
          on:change={() => {
            edited = true;
          }}
        />
      </div>
      <div class="col-sm-6">
        <label for="dd2" class="form-label">Website</label>
        <input
          id="dd2"
          type="url"
          class="form-control"
          placeholder="Website"
          bind:value={ws}
          on:change={() => {
            edited = true;
          }}
        />
      </div>

      <div class="col-auto">
        {#if uimg}
          <img
            src={uimg}
            alt="avatar"
            style="max-height: {imgh}px;"
            class="p-1 border rounded img-fluid"
          />
        {/if}
      </div>
      <div
        class="col col-img"
        style="display: flex; align-items: center; height: {imgh}px;"
      >
<div class="d-flex flex-column w-100">
   <label for="dd3" class="form-label ms-1">Avatar</label>
      <input
        id="dd3"
          type="url"
          class="form-control"
          placeholder="https://"
          bind:value={uimg}
          on:change={() => {
            edited = true;
          }}
        />
</div>
     

      </div>
      <div class="col-12 pt-4">
        <button
          type="submit"
          class="btn {edited ? 'btn-primary' : 'btn-secondary'} d-block w-100"
          disabled={!edited}>{!loading ? "Submit" : "...loading"}</button
        >
      </div>
    </div>
  </form>
  <div class="d-grid py-2 gap-2">
    <button
      class="btn btn-danger"
      on:click={() => (isOpen = !isOpen)}
      type="button">Close</button
    >
  </div>
</article>

<style>
  article {
    width: 100%;
    max-width: 580px;
    margin: 0 auto;
  }
  
</style>
