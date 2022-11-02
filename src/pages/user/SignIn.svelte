<script>
  import SvgLogoB from "../SvgLogoB.svelte";

  import { _user, supabase } from "../../lib/data";
  let email, password, loading;
  let header = "Sign In";
  const signIn = async () => {
    loading = true;
    try {
      let { user, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
    } catch (error) {
      alert("Error Login!");
    } finally {
      loading = false;
    }
  };
</script>

{#if !$_user}
  <section>
    <form class="form-signin text-center" on:submit|preventDefault={signIn}>
      <SvgLogoB />
      <h1 class="h3 mb-3 fw-normal">{header}</h1>
      <label for="inputEmail" class="visually-hidden">Email address</label>
      <input
        bind:value={email}
        type="email"
        id="inputEmail"
        class="form-control"
        placeholder="Email address"
        required=""
        autofocus=""
      />
      <label for="inputPassword" class="visually-hidden">Password</label>
      <input
        bind:value={password}
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Password"
        required=""
      />
      <div class="mb-3" />
      <button class="w-100 btn btn-lg btn-primary" type="submit"
        >{!loading ? "Sign in" : "...loading"}</button
      >
      <p class="mt-4 mb-3 text-muted">©nwp-studio</p>
    </form>
  </section>
{:else}
  <slot />
{/if}

<style>
  section {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
</style>
