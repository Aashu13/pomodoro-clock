$(document).ready(function () {

  var counter_1;
  var counter_2;

  var SessionTimer_Number = 24;
  var SessionTimer_Second = 60;

  var BreakTimer_Number = 5;
  var BreakTimer_Second = 60;

  var SessionTimer_span = document.getElementById("SessionTimer_span");
  SessionTimer_span.textContent = SessionTimer_Number;

  var SessionSecond_span = document.getElementById("SessionSecond_span");
  // SessionSecond_span = BreakTimer_Second;

  var BreakTimer_span = document.getElementById("BreakTimer_span");
  BreakTimer_span.textContent = BreakTimer_Number;

  var BreakSecond_span = document.getElementById("BreakSecond_span");
  var audio = $("#buzzer");

  function pomodoroApp() {
    $("#startTimer_play_btn").on("click", function () {
      $(this).hide();
      $("#stopTimer_pause_btn").show();

      function SessionTime_Function() {
        SessionSecond_span.textContent = ":" + (SessionTimer_Second -= 1);

        if (SessionTimer_Second === 0 && SessionTimer_Number > 0) {

          SessionTimer_Second = 60;
          SessionTimer_span.innerHTML = SessionTimer_Number -= 1;
        }

        if (SessionTimer_Second === 0 && SessionTimer_Number === 0) {
          clearInterval(counter_1);
          $("#SessionTimer_div").hide();
          $("#BreakTimer_div").show();
          $("#Session_text").text("Break Time!")
        }

      }

      counter_1 = setInterval(SessionTime_Function, 1000);

      function BreakTime_Function() {
        BreakSecond_span.textContent = ":" + (BreakTimer_Second -= 1);

        if (BreakTimer_Second === 0 && BreakTimer_Number > 0) {

          BreakTimer_Second = 60;
          BreakTimer_span.innerHTML = BreakTimer_Number -= 1;
        }

        if (BreakTimer_Second === 0 && BreakTimer_Number === 0) {
          clearInterval(counter_2);
          window.location.reload(1);
        }
      }
      counter_2 = setInterval(BreakTime_Function, 1000);

    });

    $("#stopTimer_pause_btn").on("click", function () {
      $(this).hide();
      $("#startTimer_play_btn").show();
      clearInterval(counter_1);
      clearInterval(counter_2);
    });
  }


  pomodoroApp();


  var Session_length = 25;
  var Break_length = 5;

  var Sessionlength_span = document.getElementById("Sessionlength_span");
  Sessionlength_span.textContent = Session_length;

  var Breaklength_span = document.getElementById("Breaklength_span");
  Breaklength_span.textContent = Break_length;

  $("#increaseSessionLength_btn").on("click", function () {
    Sessionlength_span.innerHTML = Session_length += 1;
    SessionTimer_span.innerHTML = SessionTimer_Number += 1;
  });

  $("#decreaseSessionLength_btn").on("click", function () {
    if (Session_length > 0) {
      Sessionlength_span.innerHTML = Session_length -= 1;
      SessionTimer_span.innerHTML = SessionTimer_Number -= 1;
    }
  });

  $("#increaseBreakLength_btn").on("click", function () {
    Breaklength_span.innerHTML = Break_length += 1;
    BreakTimer_span.innerHTML = BreakTimer_Number += 1;
  });


  $("#decreaseBreakLength_btn").on("click", function () {
    if (Break_length > 0) {
      Breaklength_span.innerHTML = Break_length -= 1;
      BreakTimer_span.innerHTML = BreakTimer_Number -= 1;
    }
  });

});