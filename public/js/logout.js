$(document).ready(function() {
  console.log('I am connected')
  $('.logout-session').on('click', function() {
    $.ajax({
      success: function() {
        localStorage.clear();
        sessionStorage.clear();
        location.href = 'http://localhost:8080/index.html';
      },
      fail: function() {
        alert('Logout function failed')
      }
    })
  })
})
