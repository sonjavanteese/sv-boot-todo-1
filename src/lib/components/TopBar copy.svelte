<script>
  import Icon from "./Icon.svelte";
  import NwpLogo from "./_NwpLogo.svelte";
  import { isActive } from "@roxi/routify";
  import { _user, supabase } from "../data";
  let loading = false;
  export let icon_size = "28";
  export let brand_size = "36";
  let icon_style = `--fs: ${icon_size}px;`;
  const signOut = async () => {
    try {
      loading = true;
      let { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error) {
      alert(error.message);
    } finally {
      loading = false;
    }
  };
</script>
<nav class="bg-primary navbar navbar-dark navbar-expand shadow-lg">
  <div class="container-fluid">
      <a class="my-0 navbar-brand py-0" href="/">
          <NwpLogo height={brand_size} />
      </a>
      <!-- content hsere -->
      <ul class="ms-auto navbar-nav ps-2 w-auto"> {#if $_user}
      <li class="nav-item px-1">
        <a
          class="nav-link"
          class:active={$isActive("/user")}
          href="/user"
          title="User"
        >
          <Icon name="user" style={icon_style} />
        </a>
      </li>
      <li class="nav-item px-1">
        <a
          class="nav-link"
          class:active={$isActive("/settings")}
          href="/settings"
          title="Settings"
        >
          <Icon name="settings" style={icon_style} />
        </a>
      </li>
      {:else}
      <li class="nav-item px-1">
        <span
          class="nav-link">
          <Icon name="hidden" style={icon_style} />
        </span>
      </li>
    {/if}
  </ul>
<!--   <div class="d-flex align-items-center">
    {#if $_user}
      <button on:click={signOut} class="btn btn-primary my-0" type="button">
        <Icon name="switch" style="--fs: {icon_size}px;" />
      </button>
    {:else}
      <button class="btn btn-primary my-0" disabled type="button">
        <Icon name="hidden" style="--fs: {icon_size}px;" />
      </button>
    {/if}
  </div> -->
</div>
</nav>

<style>
  nav {
    overflow-x: hidden;
  }
</style>
