<script>
import { _user, supabase } from "../lib/data";
import Page from "../lib/components/Page.svelte";
import Router, { link } from "svelte-spa-router";
import active from "svelte-spa-router/active";
import UserProfil from "./_comp/UserProfil.svelte";
import EditProfil from "./_comp/EditProfil.svelte";

const prefix = "/user";
const routes = {
    "/edit/": EditProfil,
    "*": UserProfil,
};
const tabs = [
    {
        id: "tab1",
        label: "Profil",
        icon: "list",
        path: "/user/",
        disabled: false,
        component: false,
        meta: {
            titel: "Nwp-Studio",
            body: "List View",
            file: "https://nwp-cgn.de/img/poser/imgA02.png",
        },
    },
    {
        id: "tab2",
        label: "Edit Profil",
        icon: "edit",
        path: "/user/edit/",
        disabled: false,
        component: false,
        meta: {
            titel: "Nwp-Studio",
            body: "Edit",
            file: "https://nwp-cgn.de/img/poser/imgA02.png",
        },
    },
];
let loading;

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

<Page>
<nav class="nav nav-tabs justify-content-end pt-3 px-3 px-md-5 mb-3"> 
  {#each tabs as { label, disabled, icon, path }}
    <a href={path} class="nav-link" use:link use:active class:disabled={disabled}>
      {label}
    </a>
  {/each}
</nav>

<div class="flex-grow-1">
  <Router {routes} {prefix} />
</div>
</Page>
