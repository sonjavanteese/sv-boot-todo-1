<script>
  import { _user } from "../lib/data";
  import Page from "../lib/components/Page.svelte";
  import { image1 } from "./_comp";
  export let page = { header: null, body: null, sub: null };
  let { header, body, sub } = page;
</script>

<Page>
  <section class="flex-grow-1 bg-dark text-light">
    <div class="container-xxl">
      <div class="align-items-center row">
        <div class="col-lg-6 order-lg-last p-0">
          <!-- {@html image1} -->
          <img src="https://nwp-cgn.de/studio/upload/kat11/server/php/files/id_card.png" class="img-fluid" alt="">
        </div>
        <div class="col-lg-6 pb-5 pe-4 pe-sm-5 ps-4 ps-sm-5 pt-5">
          <p class="h6 text-primary text-uppercase fst-italic fw-semibold mb-3">{header ? header : 'The Latest'}</p>
          <h1 class="display-4 fw-bold mb-3">{body ? body : 'The Natural Experience'}</h1>
          <p class="fw-light lead mb-4">{sub ? sub : 'Our ability to feel, act and communicate is indistinguishable from magic.'}</p>
          <a href="#/app/todos/" class="btn btn-primary pb-2 pe-4 ps-4 pt-2"
            >Start Application</a
          >
        </div>
      </div>
    </div>
  </section>
</Page>

<style>
  /*  .add-todo {
    display: flex;
    margin-bottom: 0.5em;
  } */
</style>
