<template>
    <div v-if="showQRCode" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeQRCode">&times;</span>
        <h3>QR Code</h3>
        <img :src="qrCodeData" alt="QR Code" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      qrCodeData: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        showQRCode: true
      };
    },
    methods: {
      closeQRCode() {
        this.showQRCode = false;
      }
    }
  };
  </script>
  
  <style scoped>
  .modal {
    display: block;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 50%;
  }
  
  .close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  
  .close:hover,
  .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
  
  img {
    display: block;
    margin: 0 auto;
  }
  </style>
  