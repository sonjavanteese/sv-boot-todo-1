<script>
  import { _user, supabase } from "../lib/data";
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


<section>
  <form class="form-signin text-center" on:submit|preventDefault={signIn}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width="72"
      height="72"
      class="mb-4"
    >
      <g>
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          d="M14.256 21.744L12 24l-2.256-2.256C5.31 20.72 2 16.744 2 12 2 6.48 6.48 2 12 2s10 4.48 10 10c0 4.744-3.31 8.72-7.744 9.744zm-8.233-6.328C7.491 17.606 9.695 19 12.16 19c2.464 0 4.669-1.393 6.136-3.584A8.968 8.968 0 0 0 12.16 13a8.968 8.968 0 0 0-6.137 2.416zM12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
        />
      </g>
    </svg>
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

<style>
  .form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  .form-signin .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
  }

  .form-signin .form-control:focus {
    z-index: 2;
  }

  .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  .form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
</style>
