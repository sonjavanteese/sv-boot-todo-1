<script>
import NwpLogo from "./_NwpLogo.svelte";
import { link } from "svelte-spa-router";
import active from "svelte-spa-router/active";
export let tabs = [
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

<nav class="nav nav-tabs justify-content-endx pt-3 ps-2 pe-4 mb-3"> 
  <li class="me-auto nav-item">
    <a href="#/">
      <NwpLogo height="32" />
  </a>
</li>
  {#each tabs as { label, disabled, icon, path }}
    <a href={path} class="nav-link" use:link use:active class:disabled={disabled}>
      {label}
    </a>
  {/each}
</nav>

<style>
:root {
--bs-link-color: #4b5563;
--bs-link-hover-color: #374151;
}
</style>

