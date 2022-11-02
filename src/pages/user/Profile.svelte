<script>
  import SvgLogout from "../SvgLogout.svelte";
  import SvgEdit from "../SvgEdit.svelte";
  import SvgMail from "../SvgMail.svelte";
  import SvgProfile from "../SvgProfile.svelte";
  import Icon from "../../lib/components/Icon.svelte";

  import { _user, supabase, _settings } from "../../lib/data";

  export let value;
  export let getProfil;
  export let isOpen;

  let loading = false;
  let uimg = value.img_url ? value.img_url : null;
  let uname = value.username ? value.username : "Username";
  let umail = $_user.email ? $_user.email : "Email";

  let style = "--fs: 1rem;";
  let slogo = "--fs: 120px;";

  const signOut = async () => {
    try {
      let { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error) {
      alert(error.message);
    } finally {
      loading = false;
    }
  };
</script>

<div class="py-3">
  <div class="text-center p-3">
    <header class="mb-4">
      {#if $_settings.op2}
        <img
          src={uimg}
          alt="avatar"
          style="max-height: 160px;"
          class="p-1 borderx rounded img-fluid"
        />
      {:else}
        <Icon name="html" style={slogo} />
      {/if}
    </header>
    <article>
      <h3 class="fw-bold h3 mb-1 text-capitalize">
        {uname}
      </h3>
      <h4 class="fw-light h4 mb-4">
        {umail}
      </h4>

      <div class="d-inline-flex flex-wrap">
        <button
          title="User"
          class="border-0 btn btn-dark btn-md lh-1 mx-1 p-3 rounded-circle"
        >
          <Icon name="mail" {style} />
        </button>
        <button
          title="Edit"
          on:click={() => (isOpen = !isOpen)}
          class="border-0 btn btn-dark btn-md lh-1 mx-1 p-3 rounded-circle"
        >
          <Icon name="edit" {style} />
        </button>
        <button
          on:click={signOut}
          title="Logout"
          class="border-0 btn btn-danger btn-md lh-1 mx-1 p-3 rounded-circle"
        >
          <Icon name="close" {style} />
        </button>
      </div>
    </article>
  </div>
</div>
