function addingEventListener() {
  const button = document.getElementById('button'); // use the correct ID!
  button.addEventListener('click', function () {
    alert('I was clicked!');
  });
}

// If you're running tests in Node, export it:
module.exports = { addingEventListener };
