<script>
  export let open = false;
  export let name = "nwp-app";
  const toggle = () => (open = !open);
</script>
<nav class="bg-white navbar navbar-light py-3 fixed-top text-uppercase shadow" data-pg-collapsed> 
  <div class="container px-0 px-lg-3"> 
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown-8" aria-controls="navbarNavDropdown-8" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> 
      </button>         <a class="fw-bold m-0 navbar-brand text-primary" href="#">Logo</a> 
      <button class="btn btn-outline-primary border-0 py-2" type="button" aria-label="search"> 
          <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"> 
              <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"/> 
          </svg>             
      </button>         
      <div class="collapse navbar-collapse  text-center" id="navbarNavDropdown-8"> 
          <ul class="navbar-nav"> 
              <li class="nav-item"> <a class="nav-link" aria-current="page" href="index.html">Home</a> 
              </li>                 
              <li class="nav-item"> <a class="nav-link" href="about.html">About</a> 
              </li>                 
              <li class="nav-item"> <a class="nav-link" href="data.html">Data</a> 
              </li>                 
              <li class="nav-item"> <a class="active nav-link" href="db.html">Archiv</a> 
              </li>                 
              <li class="nav-item"> <a class="nav-link" href="settings.html">Settings</a> 
              </li>                 
              <li class="nav-item"> <a class="nav-link" href="login.html">User</a> 
              </li>                 
          </ul>             
      </div>         
  </div>     
</nav>