$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
      const variable1 = $("input:radio[name=variable1]:checked").val();
      const variable2 = $("input:radio[name=variable2]:checked").val();
      const variable3 = $("input:radio[name=variable3]:checked").val();
      const variable4 = $("input:radio[name=variable4]:checked").val();
      const variable5 = $("input:radio[name=variable5]:checked").val();
      const variable6 = $("input:radio[name=variable6]:checked").val();
      if (variable1 === 'the master' && variable2 === 'the woman' && variable3 === 'father' && variable4 === 'tedium' && variable5 === 'tokyo' && variable6 === 'sparks') {
        $(".Ruby").show();
      } else if (variable1 === 'cadaver' && variable2 === 'crazy boy' && variable3 === 'fight' && variable4 === 'punishment' && variable5 === 'mother' && variable6 === 'dawn') {
        $(".Python").show();
      } else {
        $(".Csharp").show();
      }
  });
});

$(document).ready(function() {
  $(".bio").click(function() {
    alert("ああ!  You've revaled the hidden bio: Ryūnosuke Akutagawa, art name Chōkōdō Shujin, was a Japanese writer active in the Taishō period in Japan. He is regarded as the 'Father of the Japanese short story' and Japan's premier literary award, the Akutagawa Prize, is named after him. He died by suicide at the age of 35 through an overdose of barbital"); 
  });
});

$(document).ready(function() {
  $(".mysteriousrock").click(function() {
    $(".Csharp").hide()
  });
});

$(document).ready(function() {
  $(".mysteriousrock").click(function() {
    $(".Ruby").hide()
  });
});

$(document).ready(function() {
  $(".mysteriousrock").click(function() {
    $(".Python").hide()
  });
});