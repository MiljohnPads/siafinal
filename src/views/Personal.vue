<template>
  <div class="personal-container">
    <!-- Image at the top -->
    <img src="src/components/tintin.png" alt="Your Image Alt Text" class="profile-image" />
    <h2>Personal Information</h2>

    <div class="form-container">
      <h3>Add Person</h3>
      <form @submit.prevent="addPerson" class="add-person-form">
        <input v-model="newPerson.username" placeholder="Username" required />
        <input v-model="newPerson.email" placeholder="Email" required />
        <button type="submit">Add</button>
      </form>
    </div>

    <div v-if="qrCode" class="qr-code-container">
      <h3>Generated QR Code</h3>
      <img :src="qrCode" alt="QR Code" class="qr-code-image" />
    </div>

    <div v-if="showMessage" class="message">
      <p>User added successfully!</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import QRCode from 'qrcode';

export default {
  data() {
    return {
      newPerson: {
        username: '',
        email: ''
      },
      qrCode: '',
      showMessage: false
    };
  },
  methods: {
    async addPerson() {
      try {
        // Generate QR code for the person
        this.qrCode = await QRCode.toDataURL(
          `Username: ${this.newPerson.username}, Email: ${this.newPerson.email}`
        );

        // Add person to the database
        await axios.post('http://localhost:3015/users', {
          username: this.newPerson.username,
          email: this.newPerson.email
        });

        // Show message after 3 seconds
        setTimeout(() => {
          this.showMessage = true;
          // Hide message after 2 seconds
          setTimeout(() => {
            this.showMessage = false;
          }, 2000);
        }, 3000);

        // Reset form after 5 seconds
        setTimeout(() => {
          this.resetForm();
        }, 8000);
      } catch (error) {
        console.error('Error adding person:', error);
      }
    },
    resetForm() {
      this.newPerson = {
        username: '',
        email: ''
      };
      this.qrCode = '';
    }
  }
};
</script>

<style scoped>
.personal-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  max-width: 500px;
  margin: 0 auto;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.profile-image {
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
  border-radius: 50%;
  object-fit: cover;
}

h2, h3 {
  font-family: 'Arial', sans-serif;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
}

.form-container {
  width: 100%;
}

.add-person-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.add-person-form input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: calc(100% - 22px);
}

.add-person-form button {
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-person-form button:hover {
  background-color: #0056b3;
}

.qr-code-container {
  text-align: center;
  margin-top: 20px;
}

.qr-code-image {
  margin-top: 10px;
  width: 150px;
  height: 150px;
}

.message {
  background-color: lightgreen;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
  text-align: center;
}
</style>
