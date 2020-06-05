$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
      const variable1 = $("input:radio[name=variable1]:checked").val();
      const variable2 = $("input:radio[name=variable2]:checked").val();
      const variable3 = $("input:radio[name=variable3]:checked").val();
      const variable4 = $("input:radio[name=variable4]:checked").val();
      const variable5 = $("input:radio[name=variable5]:checked").val();
      const variable6 = $("input:radio[name=variable6]:checked").val();
      if (variable1 === "the master" & variable2 === "the woman" & variable3 === "father" & variable4 === "tedium" & variable5 === "tokyo" & variable6 === "sparks") {
        $(".Ruby").show();
      }
  });
});