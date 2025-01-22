console.log('form-assist.js loaded');

const name = '名前';

const input = document.getElementById('name');
input.value = name;

console.log({ location: window.location.href });

// <input type="text" id="name" name="name" required>
