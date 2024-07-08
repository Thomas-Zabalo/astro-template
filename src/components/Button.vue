<template>
    <button @click="onClick">Click me</button>
  </template>
  
  <script>
  export default {
    props: {
      label: {
        type: String,
        required: true,
      },
    },
    methods: {
      onClick() {
        alert('Button clicked!');
      },
    },
  };
  </script>
  
  <style scoped>
  button {
    margin: 2rem 0;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 4px;
  }
  </style>