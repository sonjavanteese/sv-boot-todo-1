<script>
  import SvgLogoA from './SvgLogoA.svelte';
  import { _user } from "../data";
  import url from "../utils/url";
import {slide} from 'svelte/transition'
import {cubicOut} from 'svelte/easing'

</script>

      <header
      transition:slide={{duration: 300, easing: cubicOut}}
      class="d-flex align-items-center p-3 my-2 text-white bg-primary rounded shadow-sm"
    >
      <SvgLogoA></SvgLogoA>
      <div class="lh-1">
        <h1 class="h6 mb-0 text-white lh-1">Nwp-Studio</h1>
        {#if $url.hash === "#/settings"}
          <small>Settings</small>
        {:else if $url.hash === "#/data"}
          <small>Database</small>
        {:else}
          <small>User Profile</small>
        {/if}
      </div>
    </header>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  article {
    position: relative;
  }
</style>

