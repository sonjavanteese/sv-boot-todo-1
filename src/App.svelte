<script>
  import { onMount } from "svelte";
  import Router from "svelte-spa-router";
  import { push, location } from "svelte-spa-router";
  import routes from "./_routes";
  import TopBar from "./lib/components/TopBar.svelte";
  import Iconlib from "./lib/components/Iconlib.svelte";
  import { _user, _settings, supabase, sleep } from "./lib/data";
  let open;
  const changeAuth = async (user = null, delay = 2000) => {
    // console.log("changeAuth to ", user ? true : false);
    await sleep(delay);
    if (user) {
      _user.set(user);
      push("/");
    } else {
      _user.set(null);
    }
  };

  onMount(async () => {
    const {
      data: { supauser },
    } = await supabase.auth.getUser();
    _user.set(supauser);
  });

  supabase.auth.onAuthStateChange((event, session) => {
    if (event == "SIGNED_IN") {
      changeAuth(session.user);
    } else {
      changeAuth(null);
    }
  });
  const conditionsFailed = (event) => {
    console.error("Conditions Failed !! Sign In");
    console.log("Auth Error", event);
    push("/login");
  };

  $: if (!$_user) {
    push("/login");
  }
</script>

<Iconlib />

<TopBar />

<main class="flex-grow-1">
  <Router {routes} on:conditionsFailed={conditionsFailed} />
</main>

<footer class="bg-light border-top mt-auto">
  <div class="container pb-1 pt-1 text-center text-muted">
      <span>Paragraph</span>
  </div>
</footer>
