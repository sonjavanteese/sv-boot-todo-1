<script>
  import { _user, _settings } from "../data";
  import url from "../utils/url";
  import Icon from "./Icon.svelte";
  let style = "--fs: 1.5rem;";
</script>


<nav
  class="nav justify-content-end my-2"
  class:nav-tabs={!$_settings.op1}
  class:nav-pills={$_settings.op1}
>
  <a class="nav-link" class:active={$url.hash === "#/"} href="#/">
    <Icon name="start" {style} />
  </a
  >
  <a
    class="nav-link"
    class:active={$url.hash === "#/data"}
    class:disabled={!$_user}
    href="#/data"><Icon name="db" {style} /></a
  >
  <a
    class="nav-link"
    class:active={$url.hash === "#/settings"}
    class:disabled={!$_user}
    href="#/settings"><Icon name="settings" {style} /></a
  >
</nav>
