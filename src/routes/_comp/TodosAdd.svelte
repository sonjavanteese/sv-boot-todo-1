<script>
  import MobilView from '../../lib/components/MobilView.svelte';
  import {push, pop, replace} from 'svelte-spa-router'
  import { _user, supabase, sleep } from "../../lib/data";
  import { fly } from "svelte/transition";

  let newTask = "";
  let loading = false;
  let delay = 6000;
  let stat = null;

  const todoAdded = async () => {
      stat = 'success';
      newTask = "";
      await sleep(delay);
      stat = null;
  };

  const addNewTodo = async () => {
    loading = true;
    try {
      const { data, error } = await supabase
        .from("todos")
        .insert([{ task: newTask, user_id: $_user.id }]);
        if (error) throw error;
        todoAdded();
    } catch (err) {
      stat = 'error';
      console.log(err);
    } finally {
      loading = false;
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && newTask !== "") {
      addNewTodo();
    }
  };
</script>

<section class="container-fluid">
  <MobilView>
    <header class="py-2 px-2">
      <h4 class="">Add Todo</h4>
      <div class="input-group my-3">
        <input
          bind:value={newTask}
          type="text"
          class="form-control"
          placeholder="add..."
        />
        <button
          on:click={() => addNewTodo()}
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2">{loading ? '.. loading' : 'Add Task'}</button
        >
      </div>
  </header>
  {#key stat}
  <footer out:fly={{duration: 400, x: -300}} in:fly={{duration: 400, delay: 300, x: 300}} class="px-2 py-2"> 
    {#if stat === 'error'}
    <div class="alert alert-danger" role="alert">Theres an <b>Error</b>, sorry for that!
    </div>
    {:else if  stat === 'success'}
    <div class="alert alert-dismissible alert-success" role="alert">
      <strong><em>New Task added!</em></strong> 
      Add another Task or <a href="#/app/todos/" class="alert-link">show all Todos</a>.
    </div>
    {:else}
       <!-- else content here -->
    
    <div class="alert alert-dismissible alert-primary fade show" role="alert">
        <strong>New Todo Task!</strong> You should check in on some of those fields below.
    </div>
    {/if}
  </footer>
{/key}
  </MobilView>
</section>


<svelte:window on:keypress={handleKeyPress} />

<style>
  footer {
    position: relative;
    width: 100%;
  }
  .alert {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
</style>

