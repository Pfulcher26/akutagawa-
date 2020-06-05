$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
      const variable1 = $("input:radio[name=variable1]:checked").val();
      const variable2 = $("input:radio[name=variable2]:checked").val();
      const variable3 = $("input:radio[name=variable3]:checked").val()

  }
}