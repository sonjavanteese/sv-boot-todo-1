<script>
import { _user, supabase, navData } from "../lib/data";
import Page from "../lib/components/Page.svelte";
import Router, { link } from "svelte-spa-router";
import active from "svelte-spa-router/active";
import TodosAdd from "./_comp/TodosAdd.svelte";
import TodosEdit from "./_comp/TodosEdit.svelte";
import TodosList from "./_comp/TodosList.svelte";

const prefix = "/app/todos";
const routes = {
    "/edit/": TodosEdit,
    "/add/": TodosAdd,
    "*": TodosList,
};
const tabs = [
    {
        id: "tab1",
        label: "View",
        icon: "list",
        path: "/app/todos/",
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
        label: "Edit",
        icon: "edit",
        path: "/app/todos/edit/",
        disabled: false,
        component: false,
        meta: {
            titel: "Nwp-Studio",
            body: "Edit",
            file: "https://nwp-cgn.de/img/poser/imgA02.png",
        },
    },
    {
        id: "tab3",
        label: "Add",
        icon: "add",
        path: "/app/todos/add/",
        disabled: false,
        component: false,
        meta: {
            titel: "Nwp-Studio",
            body: "Add",
            file: "https://nwp-cgn.de/img/poser/imgA02.png",
        },
    },
];

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
