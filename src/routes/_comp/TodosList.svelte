<script>
  import { _user, supabase, sleep } from "../../lib/data";
  import Todo from "../../lib/components/Todo.svelte";
  import Loader from "../../lib/data/comp/Loader.svelte";
  import { onMount } from "svelte";

  let ops = { od: "id", asc: false, id: false };
  let todos = [];
  const getAllTodos = async () => {
    let query = supabase.from("todos").select("*");
    if (ops && ops.id) {
      query = query.eq("id", ops.id).single();
    }
    if (ops && ops.od) {
      query = query.order(ops.od, { ascending: ops.asc });
    }
    try {
      let { data, error } = await query;
      if (error) throw error;
      todos = data;
    } catch (err) {
      console.log(err);
    }
  };

  const updateTodo = async (todo) => {
    try {
      const { data, error } = await supabase
        .from("todos")
        .update({ task: todo.task, isComplete: todo.isComplete })
        .eq("id", todo.id);
      await getAllTodos();
    } catch (err) {
      console.log(err);
    }
  };
  const deleteTodo = async (todo) => {
    
    try {
      const { data, error } = await supabase
        .from("todos")
        .delete()
        .eq("id", todo.id);
      await getAllTodos();
    } catch (err) {
      console.log(err);
    }
  };
  let promise;

  onMount(async () => {
    promise = getAllTodos();
  });

  const logOut = async () => {
    let { error } = await supabase.auth.signOut();
    console.log("LOGOUT");
  };
</script>

  {#await promise}
    <Loader />
  {:then value}
  <section class="container">
    <div class="list-group">
      {#each todos as todo}
        <Todo {todo} {updateTodo} {deleteTodo} />
      {:else}
        <Loader />
      {/each}
    </div>
  </section>
{/await}



<style>
  :global(.switch) {
    color: lightskyblue;
    cursor: pointer;
  }

  :global(.switch:hover) {
    text-decoration: underline;
  }
</style>
