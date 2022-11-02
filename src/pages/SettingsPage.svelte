<script>
  import { _settings } from "../lib/data";

  let op1 = false;
  let op2 = false;
  let op3 = false;
  let op4 = false;

  op1 = $_settings.op1;
  op2 = $_settings.op2;
  op3 = $_settings.op3;
  op4 = $_settings.op4;

  $: $_settings = {
    op1: op1,
    op2: op2,
    op3: op3,
    op4: op4,
  };

  let ops = [
    {
      name: "Navbar Design",
      on: "Pills",
      off: "Tabs",
      sub: "Layout",
    },
    {
      name: "Privacy",
      on: "Show",
      off: "Hide",
      sub: "User Avatar",
    },
    {
      name: "Header",
      on: "Show",
      off: "Hide",
      sub: "Top Layout",
    },
    {
      name: "Ntfs",
      on: "Show",
      off: "Hide",
      sub: "Expl. Content",
    },
  ];
</script>

<section class="container">
  <div class="my-3 p-3 bg-white rounded shadow-sm">
    <h6 class="border-bottom pb-2 mb-4">Settings</h6>
<!-- 
    <div class="p-2 mb-1 border">
      <div class="d-flex  align-items-center form-check form-switch">
        <input
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
        />

        <label class="form-check-label ms-2" for="flexSwitchCheckDefault"
          >Default switch checkbox input</label
        >
      </div>
    </div>

    <div class="list-group mx-0 w-auto">
      <label class="list-group-item d-flex gap-2">
        <input
          bind:checked={op1}
          class="form-check-input flex-shrink-0"
          type="checkbox"
          value=""
        />
        <span>
          {ops[0].name}
          <small class="d-block text-muted">
            {op1 ? ops[0].on : ops[0].off} {ops[0].sub}</small
          >
        </span>
      </label>

      <label class="list-group-item d-flex gap-2">
        <input
          bind:checked={op2}
          class="form-check-input flex-shrink-0"
          type="checkbox"
          value=""
        />
        <span>
          {ops[1].name}
          <small class="d-block text-muted">
            {op2 ? ops[1].on : ops[1].off} {ops[1].sub}</small
          >
        </span>
      </label>
      <label class="list-group-item d-flex gap-2">
        <input
          bind:checked={op3}
          class="form-check-input flex-shrink-0"
          type="checkbox"
          value=""
        />
        <span>
          {ops[2].name}
          <small class="d-block text-muted">
            {op3 ? ops[2].on : ops[2].off} {ops[2].sub}</small
          >
        </span>
      </label>
      <label class="list-group-item d-flex gap-2">
        <input
          bind:checked={op4}
          class="form-check-input flex-shrink-0"
          type="checkbox"
          value=""
        />
        <span>
          {ops[3].name}
          <small class="d-block text-muted">
            {op4 ? ops[3].on : ops[3].off} {ops[3].sub}</small
          >
        </span>
      </label>
    </div>
  </div>
  <div class="py-4">
    <div class="text-center">
      <span
        class="badge me-1 rounded-pill text-bg-{$_settings.op1
          ? 'primary'
          : 'secondary'}">Option 1</span
      >
      <span
        class="badge me-1 rounded-pill text-bg-{$_settings.op2
          ? 'primary'
          : 'secondary'}">Option 2</span
      >
      <span
        class="badge me-1 rounded-pill text-bg-{$_settings.op3
          ? 'primary'
          : 'secondary'}">Option 3</span
      >
      <span
        class="badge me-1 rounded-pill text-bg-{$_settings.op4
          ? 'primary'
          : 'secondary'}">Option 4</span
      >
    </div>
  </div>
  <hr class="my-4" /> -->


  <article>
    <div class="g-3 row row-cols-sm-2"> 
      <div>
          <div class="list-group">
              <li class="fw-bold h4 list-group-item">Header</li>
              <label class="list-group-item">
                  <input bind:checked={op1} class="form-check-input me-1" type="checkbox" value=""/>
                  <span class="ms-2">{ops[0].name} {op1 ? ops[0].on : ops[0].off} </span>
              </label>
              <label class="list-group-item">
                <input bind:checked={op2} class="form-check-input me-1" type="checkbox" value=""/>
                <span class="ms-2">{ops[1].name} {op2 ? ops[1].on : ops[1].off} </span>
            </label>
            <label class="list-group-item">
              <input bind:checked={op3} class="form-check-input me-1" type="checkbox" value=""/>
              <span class="ms-2">{ops[2].name} {op3 ? ops[2].on : ops[2].off} </span>
          </label>
          <label class="list-group-item">
            <input bind:checked={op4} class="form-check-input me-1" type="checkbox" value=""/>
            <span class="ms-2">{ops[3].name} {op4 ? ops[3].on : ops[3].off} </span>
        </label>
          </div>         
      </div>
      <div>
          <div class="list-group">
              <li class="fw-bold h4 list-group-item">Header</li>
              <label class="list-group-item">
                  <input class="form-check-input me-1" type="checkbox" value=""/><span class="ms-2">Option</span>
              </label>
              <label class="list-group-item">
                  <input class="form-check-input me-1" type="checkbox" value=""/><span class="ms-2">Option</span>
              </label>
              <label class="list-group-item">
                  <input class="form-check-input me-1" type="checkbox" value=""/><span class="ms-2">Option</span>
              </label>
              <label class="list-group-item">
                  <input class="form-check-input me-1" type="checkbox" value=""/><span class="ms-2">Option</span>
              </label>
          </div>         
      </div>
          
  </div>
  </article>
</section>

<style>
  section {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
</style>
