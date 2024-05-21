<template>
  <div class="achievements">
    <h2>Achievements</h2>
    <img src="src/components/tintin.png" alt="Profile Picture" class="profile-pic" />
    <ul>
      <li>
        <strong>Employee of the Month</strong>
        <br />
        ABC Corporation, Faketown
        <br />
        March 2021
        <br />
        <ul class="details">
          <li>Recognized for outstanding performance and dedication.</li>
        </ul>
      </li>
      <li>
        <strong>Certified System Administrator</strong>
        <br />
        Imaginary Certification Institute
        <br />
        June 2020
        <br />
        <ul class="details">
          <li>Successfully completed the Certified System Administrator program.</li>
        </ul>
      </li>
      <li>
        <strong>Implemented System Optimization</strong>
        <br />
        XYZ Solutions, Imaginary City
        <br />
        November 2018
        <br />
        <ul class="details">
          <li>Led a project to optimize system performance, resulting in a 20% increase in efficiency.</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // Add your component logic here
};
</script>

<style scoped>
.achievements {
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
  text-align: left;
}

li {
  margin-bottom: 20px;
}

.details {
  list-style-type: disc;
  padding-left: 20px;
  font-size: 16px;
  color: #666;
  margin-top: 5px;
}
</style>
