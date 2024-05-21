<template>
  <div class="educational-background">
    <h2>Educational Background</h2>
    <img src="src/components/tintin.png" alt="Profile Picture" class="profile-pic" />
    <ul>
      <li>Bachelor of Science in Computer Science - University of Fakesville</li>
      <li>Master of Information Technology - Faux Institute of Technology</li>
    </ul>
  </div>
</template>

<script>
export default {
  // Add your component logic here
};
</script>

<style scoped>
.educational-background {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.profile-pic {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
  font-size: 18px;
  color: #555;
}

li {
  margin-bottom: 10px;
}
</style>
