// @index(['./**/*.svelte'], (f, _, e) => `// import ${_.pascalCase(f.name)} from '${f.path}${f.ext}';`)
// import EditProfil from './EditProfil.svelte';
// import FetchProfil from './FetchProfil.svelte';
// import SetForm from './SetForm.svelte';
// import TodosAdd from './TodosAdd.svelte';
// import TodosEdit from './TodosEdit.svelte';
// import TodosList from './TodosList.svelte';
// import UserProfil from './UserProfil.svelte';
// @endindex

// @index(['./**/*.svelte'], (f, _, e) => `export { default as ${_.pascalCase(f.name)} } from '${f.path}${f.ext}';`)
export { default as EditProfil } from './EditProfil.svelte';
export { default as FetchProfil } from './FetchProfil.svelte';
export { default as SetForm } from './SetForm.svelte';
export { default as TodosAdd } from './TodosAdd.svelte';
export { default as TodosEdit } from './TodosEdit.svelte';
export { default as TodosList } from './TodosList.svelte';
export { default as UserProfil } from './UserProfil.svelte';
// @endindex
// @index(['./svg/*.js'], (f, _, e) => `export { default as ${f.name} } from '${f.path}';`)
export { default as image1 } from './svg/image1';
// @endindex



