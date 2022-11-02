<script>
  import { _user } from "../data";
  export let component = null;
</script>

{#if $_user}
  <slot><!-- optional fallback --></slot>
{:else if component}
  <svelte:component this={component} />
{:else}
  <slot name="auth"><!-- optional fallback --></slot>
{/if}
