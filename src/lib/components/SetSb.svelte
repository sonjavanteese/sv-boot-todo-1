<script>
  import { _settings, supabase } from "../data";

  let op1 = false;
  let op2 = false;
  let op3 = false;
  let op4 = false;
  let op5 = false;
  let op6 = false;
  let op7 = false;
  let op8 = false;

  op1 = $_settings.op1;
  op2 = $_settings.op2;
  op3 = $_settings.op3;
  op4 = $_settings.op4;
  op5 = $_settings.op5;
  op6 = $_settings.op6;
  op7 = $_settings.op7;
  op8 = $_settings.op8;

  $: $_settings = {
    op1: op1,
    op2: op2,
    op3: op3,
    op4: op4,
    op5: op5,
    op6: op6,
    op7: op7,
    op8: op8
  };

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

<div class="">
  <div>
    <nav>
      <h4 class="border-bottom mb-0 py-2 px-2 text-muted">Layout</h4>
      <label class="border-bottom form-check form-switch p-2" for="setop1">
        <span class="form-check-label">Option 1</span>
        <input bind:checked={op1} class="form-check-input" type="checkbox" id="setop1" />
      </label>
      <label class="border-bottom form-check form-switch p-2" for="setop2"
        ><span class="form-check-label">Option 2</span>
        <input bind:checked={op2} class="form-check-input" type="checkbox" id="setop2" />
      </label>
      <label class="border-bottom form-check form-switch p-2" for="setop3"
        ><span class="form-check-label">Option 3</span>
        <input bind:checked={op3} class="form-check-input" type="checkbox" id="setop3" />
      </label>
      <label class="border-bottom form-check form-switch p-2" for="setop4">
        <span class="form-check-label">Option 4</span>
        <input bind:checked={op4} class="form-check-input" type="checkbox" id="setop4" />
      </label>
    </nav>
  </div>
  <div>
    <nav>
      <h4 class="border-bottom mb-0 py-2 px-2 text-muted">Privacy</h4>
      <label class="border-bottom form-check form-switch p-2" for="setop5"
        ><span class="form-check-label">Option 5</span>
        <input bind:checked={op5} class="form-check-input" type="checkbox" id="setop5" />
      </label>
      <label class="border-bottom form-check form-switch p-2" for="setop6">
        <span class="form-check-label">Option 6</span>
        <input bind:checked={op6} class="form-check-input" type="checkbox" id="setop6" />
      </label>
      <label class="border-bottom form-check form-switch p-2" for="setop7">
        <span class="form-check-label">Option 7</span>
        <input bind:checked={op7} class="form-check-input" type="checkbox" id="setop7" />
      </label>
      <label class="border-bottom form-check form-switch p-2" for="setop8"
        ><span class="form-check-label">Option 8</span>
        <input bind:checked={op8} class="form-check-input" type="checkbox" id="setop8" />
      </label>
    </nav>
  </div>
</div>

<style>
  main {
    padding-top: 78px;
    height: 100%;
  }
  /*   section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100%;
  } */
</style>
