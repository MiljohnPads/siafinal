<template>
  <div class="container">
    <input type="file" @change="handleFileUpload" class="file-input" />
    <table v-if="csvData.length">
      <thead>
        <tr>
          <th v-for="(header, index) in csvData[0]" :key="index">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in csvData.slice(1)" :key="rowIndex">
          <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
        </tr>
      </tbody>
    </table>
    <div class="button-group">
      <button @click="downloadCSV">Download CSV</button>
      <button v-if="csvData.length" @click="uploadCSV">Upload CSV</button>
    </div>
  </div>
</template>

<script>
import Papa from 'papaparse';
import axios from 'axios';

export default {
  data() {
    return {
      csvData: [],
    };
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        Papa.parse(file, {
          complete: (results) => {
            this.csvData = results.data;
          },
          header: false, // Set to true if the first row contains headers
        });
      }
    },
    async downloadCSV() {
      try {
        const response = await axios.get('http://localhost:3015/users');
        const userData = response.data.map(user => [user.username, user.email]);
        userData.unshift(['Username', 'Email']); // Add headers
        const csv = Papa.unparse(userData);
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8mb4;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'user-data.csv';
        link.click();
      } catch (error) {
        console.error('Error downloading CSV:', error);
      }
    },
    async uploadCSV() {
      try {
        // Convert CSV data back to JSON
        const headers = this.csvData[0];
        const users = this.csvData.slice(1).map(row => {
          let user = {};
          headers.forEach((header, index) => {
            user[header.toLowerCase()] = row[index];
          });
          return user;
        });

        // Send the data back to the server
        await axios.post('http://localhost:3015/upload-users', users);
        alert('Data uploaded successfully!');
      } catch (error) {
        console.error('Error uploading CSV:', error);
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.file-input {
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

th, td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

.button-group {
  display: flex;
  gap: 10px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}
</style>
