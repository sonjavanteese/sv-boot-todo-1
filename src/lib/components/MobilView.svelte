<script>
  export let className = "col col-md-8 col-lg-6";
</script>

<div class="row justify-content-md-center">
  <div class={className}>
    <slot><!-- optional fallback --></slot>
  </div>
</div>
