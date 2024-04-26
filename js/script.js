
function toggleDropdown(id){
    var dropdown = document.getElementById(id);
    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
      dropdown.style.display = 'block';
    } else {
      dropdown.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function() {
  var modal = document.getElementById('signup-modal');
  var btn = document.getElementById('create-account-btn');
  var span = document.getElementsByClassName('close')[0];

  // Open modal
  btn.onclick = function() {
    modal.style.display = 'block';
  }

  // Close modal on close button click
  span.onclick = function() {
    modal.style.display = 'none';
  }

  // Close modal on outside click
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }
});


