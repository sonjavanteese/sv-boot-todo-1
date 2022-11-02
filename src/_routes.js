import { wrap } from 'svelte-spa-router/wrap';
import { get } from 'svelte/store';

import { _user } from './lib/data';
import NotFound from './routes/NotFound.svelte';
import Settings from './routes/Settings.svelte';
import SignIn from './routes/SignIn.svelte';
import StartPage from './routes/StartPage.svelte';
import TodosPage from './routes/TodosPage.svelte';
import UserPage from './routes/UserPage.svelte';

// @endindex
const checkAuth = async () => {
  let user = get(_user);
  return user;
}
const routes = {
  "/": wrap({
    component: StartPage,
    userData: { name: "Start Page" },
    props: {
      page: {
        header: "Nwp Studio",
        body: "Todos Application",
        sub: "Web Development and Design! Development Sandbox."
      },
    },
    conditions: [() => checkAuth()],
  }),
  "/login/": SignIn,
  "/settings/*": wrap({
    component: Settings,
    userData: { name: "user" },
    props: {
      page: {
        header: "Nwp Studio",
        body: "User Panel"
      },
    },
    conditions: [() => checkAuth()],
  }),
  "/user/*": wrap({
    component: UserPage,
    userData: { name: "user" },
    props: {
      page: {
        header: "Nwp Studio",
        body: "User Panel"
      },
    },
    conditions: [() => checkAuth()],
  }),
  "/app/todos/*": wrap({
    component: TodosPage,
    userData: { name: "user" },
    props: {
      page: {
        header: "Nwp Studio",
        body: "User Panel"
      },
    },
    conditions: [() => checkAuth()],
  }),
  "*": NotFound,
};

export default routes;