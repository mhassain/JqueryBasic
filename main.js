$(document).ready(function() {
  $(".btn-1").click(function() {
    $("p, h2").hide();
  });

  $("#btn-2").click(function() {
    $("ul li:nth-child(2)").hide();
  });

  $("input").focus(function() {
    $(this).css("background", "#ccc");
  });

  $("h3").on({
    mouseenter: function() {
      $(this).css("background-color", "red");
    },
    mouseleave: function() {
      $(this).css("background-color", "green");
    },
    click: function() {
      $(this).css("background-color", "yellow");
    }
  });
});

// ======index-2.html ========== //
$(document).ready(function() {
  $("#btn-1").click(function() {
    alert("Text: " + $(".text").text());
  });

  $("#btn-2").click(function() {
    alert("Html: " + $(".text").html());
  });

  $("#new").click(function() {
    alert($("#name").val());
  });
});

// ==========Ancestors========== //
$(document).ready(function() {
  $("span")
    .parent()
    .css({
      color: "red",
      border: "2px solid green"
    });
});
