<script>
  import { _user, _settings, supabase } from "../../lib/data";
  import MobilView from '../../lib/components/MobilView.svelte';
  import FetchProfil from "./FetchProfil.svelte";
  let loading;

  const signOut = async () => {
    try {
      loading = true;
      let { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error) {
      alert(error.message);
    } finally {
      loading = false;
    }
  };
</script>

<MobilView>
  <div class="">
    <FetchProfil bind:loading let:payload>
        <div class="bg-white g-0 row shadow mb-4">
            <div class="align-items-center bg-primary col-sm-4 d-flex flex-column justify-content-center p-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="128" height="128" class="bi bi-gift-fill text-white">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M3.783 2.826L12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976zM12 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm-4.473 5h8.946a4.5 4.5 0 0 0-8.946 0z" />
                    </g>
                </svg>
            </div>
            <div class="col-sm pb-2 ps-4 pe-4 pt-4 text-start">
                <h4>{payload.username}</h4>
                <table class="table">
                    <tbody>
                        <tr>
                            <td scope="row">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                                    <g>
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M2.243 6.854L11.49 1.31a1 1 0 0 1 1.029 0l9.238 5.545a.5.5 0 0 1 .243.429V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.283a.5.5 0 0 1 .243-.429zm16.103 1.39l-6.285 5.439-6.414-5.445-1.294 1.524 7.72 6.555 7.581-6.56-1.308-1.513z" />
                                    </g>
                                </svg>
                            </td>
                            <td><span class="text-wrap">user@email.com</span></td>
                        </tr>
                        <tr>
                            <td scope="row">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                                    <g>
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M10.313 11.566l7.94-7.94 2.121 2.121-1.414 1.414 2.121 2.121-3.535 3.536-2.121-2.121-2.99 2.99a5.002 5.002 0 0 1-7.97 5.849 5 5 0 0 1 5.848-7.97zm-.899 5.848a2 2 0 1 0-2.828-2.828 2 2 0 0 0 2.828 2.828z" />
                                    </g>
                                </svg>
                            </td>
                            <td><span class="text-wrap">123-456-789-0123</span></td>
                        </tr>
                        <tr>
                            <td scope="row">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                                    <g>
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M17.657 14.828l-1.414-1.414L17.657 12A4 4 0 1 0 12 6.343l-1.414 1.414-1.414-1.414 1.414-1.414a6 6 0 0 1 8.485 8.485l-1.414 1.414zm-2.829 2.829l-1.414 1.414a6 6 0 1 1-8.485-8.485l1.414-1.414 1.414 1.414L6.343 12A4 4 0 1 0 12 17.657l1.414-1.414 1.414 1.414zm0-9.9l1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07z" />
                                    </g>
                                </svg></td>
                            <td>
                                <small class="text-wrap"> {payload.website ? payload.website : "https://nwp-cgn.de/"} </small>
                            </td>
                        </tr>
                        <tr>
                            <td scope="row">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22" data-pg-collapsed>
                                    <g>
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M5 11.1l2-2 5.5 5.5 3.5-3.5 3 3V5H5v6.1zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm11.5 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                    </g>
                                </svg> &nbsp; </td>
                            <td>
                                <small class="text-wrap"> {payload.img_url ? payload.img_url : "https://nwp-cgn.de/"} </small>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="d-flex align-items-center py-2">
                        <button on:click={signOut} type="button" class="btn btn-danger btn-md">Logout</button>
                </div>
            </div>
        </div>
    </FetchProfil>
  </div>
</MobilView>

<style>
  tbody {
    overflow-x: hidden;
  }
</style>
