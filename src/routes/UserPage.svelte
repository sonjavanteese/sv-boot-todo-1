<script>
  import Profil from "./_comp/Profil.svelte";
 export let name = "User Profil";
</script>

<div class="container-xl py-4">
 <h2>
   {name}
 </h2>
 <Profil></Profil>
</div>
