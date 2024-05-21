<!-- src/App.vue -->
<template>
  <header>
    <div class="sidebar">
      <img alt="Picture" class="logo" src="src/components/tintin.png" />
      <div class="tin">
        <HelloWorld msg="PADOR F. MILJOHN" />
      </div>
      <nav>
        <RouterLink to="/personal">Personal Information</RouterLink>
        <RouterLink to="/education">Educational Background</RouterLink>
        <RouterLink to="/work">Work Experience</RouterLink>
        <RouterLink to="/portfolio">Portfolio</RouterLink>
        <RouterLink to="/csvreader">Csvreader</RouterLink>
        <RouterLink to="/qrcodereader">QrCodeReader</RouterLink>
        <RouterLink to="/qrcodegenerator">QrCodeGenerator</RouterLink>
        <RouterLink to="/userlist">UserList</RouterLink>
      </nav>
    </div>
    <main>
      <RouterView />
    </main>
  </header>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
</script>

<style scoped>
header {
  display: flex;
  height: 100vh;
  overflow: hidden; /* Ensure the header itself doesn't cause overflow */
}

.sidebar {
  width: 300px;
  background-color: #f8f9fa;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  overflow-y: auto; /* Allow scrolling if content overflows */
  position: relative; /* Ensure sidebar occupies its space */
}

.logo {
  width: 150px;
  height: 150px;
  display: block;
  margin: 0 auto 2rem;
}

.tin {
  text-align: center;
  margin-bottom: 2rem;
}

nav {
  display: flex;
  flex-direction: column;
}

nav a {
  display: block;
  padding: 10px 15px;
  margin: 5px 0; /* Adjust margin for better spacing and fit */
  color: #333;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;
}

nav a.router-link-exact-active {
  background-color: #007bff;
  color: #fff;
}

nav a:hover {
  background-color: #e9ecef;
}

main {
  flex: 1;
  padding: 20px;
  background-color: #fff;
  overflow-y: auto;
}

@media (min-width: 1024px) {
  header {
    flex-direction: row;
  }

  .sidebar {
    position: fixed;
    height: 100vh;
  }

  main {
    margin-left: 300px;
  }
}
</style>
