<script>
  import { _user, _settings, supabase } from "../lib/data";
  import url from "../lib/utils/url";


 
</script>

<div>
    <div class="px-4 py-4">
      <img
        src="https://nwp-cgn.de/studio/upload/kat11/server/php/files/alieness_128.png"
        class="border img-fluid rounded"
        alt="avatar"
        width="100"
        height="100"
      />
    </div>
    <form class="row g-3">
      <!--  <div class="col-md-6">
      <label for="inputEmail4" class="form-label">Email</label>
      <input type="email" class="form-control" id="inputEmail4" />
    </div>
    <div class="col-md-6">
      <label for="uid" class="form-label">UID</label>
      <input type="text" class="form-control" id="uid" />
    </div> -->
      <div class="col-12">
        <label for="inputAddress" class="form-label">Username</label>
        <input
          type="text"
          class="form-control"
          id="inputAddress"
          placeholder="Name"
        />
      </div>
      <div class="col-12">
        <label for="inputAddress2" class="form-label">Website</label>
        <input
          type="text"
          class="form-control"
          id="inputAddress2"
          placeholder="https://"
        />
      </div>
      <div class="col-md-6">
        <label for="inputCity" class="form-label">Avatar Url</label>
        <input
          type="text"
          class="form-control"
          id="inputCity"
          placeholder="https://"
        />
      </div>
      <div class="col-md-6">
        <label for="inputState" class="form-label">State</label>
        <select id="inputState" class="form-select">
          <option selected>Choose...</option>
          <option>...</option>
        </select>
      </div>
      <div class="col-12 p-3" />
      <div class="col-12">
        <button type="submit" class="btn btn-primary">Save Setings</button>
      </div>
    </form>
  </div>



