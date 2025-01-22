console.log('form-assist.js loaded');

setTimeout(() => {
  const name = '名前';

  const input = document.getElementById('name');
  input.value = name;

  console.log({ location: window.location.href });
}, 100);


// <input type="text" id="name" name="name" required>
