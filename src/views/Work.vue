<template>
  <div class="work-experience">
    <h2>Work Experience</h2>
    <img src="src/components/tintin.png" alt="Profile Picture" class="profile-pic" />
    <ul>
      <li>
        <strong>External System Administrator</strong>
        <br />
        ABC Corporation, Faketown
        <br />
        January 2020 - Present
        <br />
        <ul class="responsibilities">
          <li>Managed and maintained external systems for optimal performance.</li>
          <li>Collaborated with cross-functional teams to implement system enhancements.</li>
          <li>Resolved technical issues and provided support to end-users.</li>
        </ul>
      </li>
      <li>
        <strong>Junior System Administrator</strong>
        <br />
        XYZ Solutions, Imaginary City
        <br />
        June 2018 - December 2019
        <br />
        <ul class="responsibilities">
          <li>Assisted in the administration and troubleshooting of internal systems.</li>
          <li>Implemented security measures to protect sensitive information.</li>
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
.work-experience {
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
  margin-bottom: 20px;
  text-align: left;
}

.responsibilities {
  list-style-type: disc;
  padding-left: 20px;
}

.responsibilities li {
  font-size: 16px;
  color: #666;
  margin-bottom: 5px;
}
</style>
