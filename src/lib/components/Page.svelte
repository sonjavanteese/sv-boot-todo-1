<script>
 
  // import { createEventDispatcher } from "svelte";
  // const dispatch = createEventDispatcher();
  export let center = false;
  export let sm = false;
  export let md = false;
  export let lg = false;
</script>

<section
  class="page-container"
  class:centered={center}
>
  {#if sm || md || lg}
    <div class="page" class:sm class:md>
      <slot><!-- optional fallback --></slot>
    </div>
  {:else}
    <slot><!-- optional fallback --></slot>
  {/if}
</section>

<style global>
  .page-container {
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
  }

  .page-container.centered {
    align-items: center;
    justify-content: center;
  }

  .page {
    width: 100%;
  }

  .page.sm {
    max-width: 480px;
    margin-left: auto;
    margin-right: auto;
  }

  .page.md {
    max-width: 680px;
    margin-left: auto;
    margin-right: auto;
  }
  .page.lg {
    max-width: 960px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
