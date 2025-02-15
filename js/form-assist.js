console.log('form-assist.js loaded');

const triggerAttributeEvent = (element) => {
    console.log('triggerAttributeEvent is called');

    const events = ['onclick', 'onchange', 'onblur']
    let i, len;

    for ( i = 0, len = events[length]; i < len; i++ ) {
      if ( element[events[i]] ) {
        element[events[i]].call(element);
      }
    }
}

setTimeout(() => {
  const name = '名前';

  const input = document.getElementById('name');
  input.value = name;

  console.log({ location: window.location.href });

  // 失敗
  //triggerAttributeEvent(input);

  // 失敗
  // https://github.com/facebook/react/issues/27283
  //let event = new Event('change', { bubbles: true });
  //input.dispatchEvent(event);
}, 100);


// <input type="text" id="name" name="name" required>
