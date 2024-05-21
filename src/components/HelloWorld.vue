<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
     <p> External Systems Administrator </p>
      <a href="https://www.facebook.com/miljohnfernandico.pador?mibextid=ZbWKwL/" target="_blank">fb account</a>.
    </h3>
  </div>
</template>

<style scoped>





h3 {
  font-size: 1.2rem;
}
h1 {
  margin-top: 0%;
}

p {
  margin-top: auto;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
