<script>
  import MobilView from '../../lib/components/MobilView.svelte';

  import { _user, supabase } from "../../lib/data";
  import { onMount } from "svelte";
  let todos = [];
  let newTask = "";

  onMount(async () => {
    await getAllTodos();
  });

  const getAllTodos = async () => {
    try {
      let { data, error } = await supabase.from("todos").select("*");
      todos = data;
    } catch (err) {
      console.log(err);
    }
  };

  const addNewTodo = async () => {
    try {
      const { data, error } = await supabase
        .from("todos")
        .insert([{ task: newTask, user_id: $_user.id }]);
      await getAllTodos();
      newTask = "";
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

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && newTask !== "") {
      addNewTodo();
    }
  };
</script>

<section class="container-fluid">
  <MobilView>
    <div class="alert alert-secondary" role="alert">
      <h4 class="alert-heading">Edit Todo</h4>
      <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
      <hr />
      <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
  </div>
  



  </MobilView>
</section>