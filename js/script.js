
function toggleDropdown(id){
    var dropdown = document.getElementById(id);
    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
      dropdown.style.display = 'block';
    } else {
      dropdown.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function() {
  var modal = document.getElementById('signup-modal'); // Get the modal

  // Attach a single event listener to the document body
  document.body.addEventListener('click', function(event) {
      // Check if the clicked element is the "Create a New Account" button
      if (event.target.id === 'create-account-btn') {
          modal.style.display = 'block'; // Open the modal
      }

      // Check if the clicked element is the close button in the modal
      if (event.target.classList.contains('close')) {
          modal.style.display = 'none'; // Close the modal
      }

      // Check if the clicked element is the modal itself (outside the modal content)
      if (event.target === modal) {
          modal.style.display = 'none'; // Close the modal
      }
  });


});
