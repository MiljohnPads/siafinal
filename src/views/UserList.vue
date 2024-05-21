<template>
  <div class="user-list">
    <h2>List of Users</h2>
    <button @click="exportToPDF" class="action-button">Export to PDF</button>
    <ul>
      <li v-for="user in users" :key="user.id">
        <span v-if="!user.editing" class="user-info">
          {{ user.username }} - {{ user.email }}
          <div class="button-group">
            <button @click="editUser(user)" class="edit-button">Edit</button>
            <button @click="deleteUser(user.id)" class="delete-button">Delete</button>
            <button @click="generateQRCode(user)" class="qr-button">Generate QR Code</button>
          </div>
        </span>
        <span v-else class="edit-form">
          <input v-model="user.username" placeholder="Username" class="edit-input">
          <input v-model="user.email" placeholder="Email" class="edit-input">
          <div class="button-group">
            <button @click="updateUser(user)" class="save-button">Save</button>
            <button @click="cancelEdit(user)" class="cancel-button">Cancel</button>
          </div>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import jsPDF from 'jspdf';
import QRCode from 'qrcode';

export default {
  data() {
    return {
      users: []
    };
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await axios.get('http://localhost:3015/users');
        this.users = response.data.map(user => ({ ...user, editing: false }));
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
    editUser(user) {
      user.editing = true;
    },
    async updateUser(user) {
      try {
        await axios.put(`http://localhost:3015/users/${user.id}`, {
          username: user.username,
          email: user.email
        });
        user.editing = false;
        this.fetchUsers();
      } catch (error) {
        console.error('Error updating user:', error);
      }
    },
    cancelEdit(user) {
      user.editing = false;
    },
    async deleteUser(id) {
      try {
        await axios.delete(`http://localhost:3015/users/${id}`);
        this.users = this.users.filter(user => user.id !== id);
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    },
    async exportToPDF() {
      try {
        const pdf = new jsPDF();
        let y = 10;
        const usersPerPage = 7;

        for (let i = 0; i < this.users.length; i++) {
          const user = this.users[i];
          const qrCodeData = await QRCode.toDataURL(`Username: ${user.username}, Email: ${user.email}`);

          pdf.text(`Username: ${user.username} - Email: ${user.email}`, 10, y);
          pdf.addImage(qrCodeData, 'JPEG', 160, y - 5, 30, 30);

          y += 40;

          if ((i + 1) % usersPerPage === 0 && i + 1 !== this.users.length) {
            pdf.addPage();
            y = 10;
          }
        }

        pdf.save('userList.pdf');
      } catch (error) {
        console.error('Error exporting to PDF:', error);
      }
    },
    async generateQRCode(user) {
      try {
        const qrCodeData = await QRCode.toDataURL(`Username: ${user.username}, Email: ${user.email}`);
        const qrCodeImg = document.createElement('img');
        qrCodeImg.src = qrCodeData;
        const qrCodeContainer = document.createElement('div');
        qrCodeContainer.appendChild(qrCodeImg);
        const qrCodeWindow = window.open('', '_blank');
        qrCodeWindow.document.body.appendChild(qrCodeContainer);
      } catch (error) {
        console.error('Error generating QR code:', error);
      }
    }
  }
};
</script>

<style scoped>
.user-list {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h2 {
  margin-bottom: 20px;
  font-size: 24px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 20px;
}

.user-info {
  display: flex;
  align-items: center;
}

.button-group {
  margin-left: auto;
}

.button-group button {
  margin-left: 10px;
}

.edit-input {
  margin-bottom: 10px;
  padding: 5px;
  width: 200px;
  font-size: 14px;
}

.action-button,
.edit-button,
.delete-button,
.qr-button,
.save-button,
.cancel-button {
  padding: 8px 16px;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.action-button {
  margin-bottom: 20px;
  background-color: #007bff;
  color: white;
}

.edit-button:hover {
  background-color: #0056b3;
}

.delete-button:hover {
  background-color: #ff0000;
}

.qr-button:hover {
  background-color: #28a745;
}

.save-button:hover,
.cancel-button:hover {
  background-color: #0056b3;
}
</style>
