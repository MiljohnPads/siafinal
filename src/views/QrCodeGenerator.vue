<template>
  <div class="qr-code-generator">
    <input v-model="textToEncode" placeholder="Enter text to encode" class="input-field" />
    <button @click="generateQrCode" class="generate-button">Generate QR Code</button>
    <div v-if="qrCodeUrl" class="qr-code-container">
      <img :src="qrCodeUrl" alt="Generated QR Code" class="qr-code-image" />
    </div>
  </div>
</template>

<script>
import QRCode from 'qrcode';

export default {
  data() {
    return {
      textToEncode: '',
      qrCodeUrl: ''
    };
  },
  methods: {
    async generateQrCode() {
      try {
        this.qrCodeUrl = await QRCode.toDataURL(this.textToEncode);
      } catch (error) {
        console.error('Error generating QR code:', error);
      }
    }
  }
};
</script>

<style scoped>
.qr-code-generator {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.input-field {
  margin-bottom: 20px;
  padding: 10px;
  width: 300px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.generate-button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.generate-button:hover {
  background-color: #0056b3;
}

.qr-code-container {
  margin-top: 20px;
}

.qr-code-image {
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
