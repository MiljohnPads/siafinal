<!-- src/components/views/QrCodeGenerator.vue -->
<template>
  <div class="qr-code-generator">
    <input type="file" @change="handleFileUpload" accept="image/*" />
    <div v-if="decodedText">
      <p>Decoded Text: {{ decodedText }}</p>
    </div>
  </div>
</template>

<script>
import jsQR from 'jsqr';

export default {
  data() {
    return {
      decodedText: ''
    };
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const img = new Image();
          img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, img.width, img.height);
            const imageData = ctx.getImageData(0, 0, img.width, img.height);
            const code = jsQR(imageData.data, imageData.width, imageData.height);
            if (code) {
              this.decodedText = code.data;
            } else {
              alert('No QR code found.');
            }
          };
          img.src = e.target.result;
        };
        reader.readAsDataURL(file);
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

input {
  margin-bottom: 10px;
  padding: 5px;
  width: 300px;
  font-size: 16px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

img {
  margin-top: 20px;
  border: 1px solid #ddd;
}
</style>
