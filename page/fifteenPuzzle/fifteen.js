"use strict";
var blank_x = 300;
var blank_y = 300;

$(document).ready(function () {
  init();
  //$("#puzzlearea > div").addClass("puzzlepiece");
  $("#puzzlearea div").each(function () {
    $(this).click(function () {
      if (isMoveable(this)) {
        let temp_x = parseInt($(this).attr("x"));
        let temp_y = parseInt($(this).attr("y"));
        setPuzzlePiece(this, blank_x, blank_y);
        blank_x = temp_x;
        blank_y = temp_y;
      }
    });

    $(this)
      .mouseover(function () {
        var b = isMoveable(this);
        // $("#test").text("isMoveable= " + b);
        if (b) {
          $(this).addClass("movablepiece");
        }
      })
      .mouseout(function () {
        $(this).removeClass("movablepiece");
      });
  });

  $("#shufflebutton").click(function () {
    for (let i = 0; i < 200; i++) {
      let r_x = Math.floor(Math.random() * 4);
      let r_y = Math.floor(Math.random() * 4);
      r_x *= 100;
      r_y *= 100;
      $("#puzzlearea div").each(function () {
        let temp_x = parseInt($(this).attr("x"));
        let temp_y = parseInt($(this).attr("y"));
        if (temp_x === r_x && temp_y === r_y) {
          setPuzzlePiece(this, blank_x, blank_y);
          blank_x = temp_x;
          blank_y = temp_y;
        }
      });
    }
  });
});

function init() {
  $("#puzzlearea div").each(function (i) {
    // calculate x and y for this piece
    var x = (i % 4) * 100;
    var y = Math.floor(i / 4) * 100;
    setPuzzlePiece(this, x, y);
    $(this).css({
      backgroundPosition: -x + "px " + -y + "px",
    });
  });
}

function setPuzzlePiece(obj, x, y) {
  // set basic style and background
  $(obj).addClass("puzzlepiece");
  $(obj).css({
    left: x + "px",
    top: y + "px",
  });

  // store x and y for later
  $(obj).attr("x", x);
  $(obj).attr("y", y);
}

function isMoveable(obj) {
  let temp_x = parseInt($(obj).attr("x"));
  let temp_y = parseInt($(obj).attr("y"));
  let left = getLeft(temp_x, temp_y);
  let right = getRight(temp_x, temp_y);
  let top = getTop(temp_x, temp_y);
  let down = getDown(temp_x, temp_y);
  return (
    (left !== null && isBlank(left[0], left[1])) ||
    (right !== null && isBlank(right[0], right[1])) ||
    (top !== null && isBlank(top[0], top[1])) ||
    (down !== null && isBlank(down[0], down[1]))
  );
}

const ONE_HUNDRED = 100;
const THREE_HUNDRED = 300;
function getLeft(x, y) {
  let rs = x - ONE_HUNDRED;
  let rsArry = new Array();
  if (rs >= 0) {
    rsArry[0] = rs;
    rsArry[1] = y;
    return rsArry;
  } else {
    return null;
  }
}

function getRight(x, y) {
  let rs = x + ONE_HUNDRED;
  let rsArry = new Array();
  if (rs <= THREE_HUNDRED) {
    rsArry[0] = rs;
    rsArry[1] = y;
    return rsArry;
  } else {
    return null;
  }
}

function getTop(x, y) {
  let rs = y - ONE_HUNDRED;
  let rsArry = new Array();
  if (rs >= 0) {
    rsArry[0] = x;
    rsArry[1] = rs;
    return rsArry;
  } else {
    return null;
  }
}

function getDown(x, y) {
  let rs = y + ONE_HUNDRED;
  let rsArry = new Array();
  if (rs <= THREE_HUNDRED) {
    rsArry[0] = x;
    rsArry[1] = rs;
    return rsArry;
  } else {
    return null;
  }
}

function isBlank(x, y) {
  return x === blank_x && y === blank_y;
}

function getRandom(num) {
  for (let i = 0; i < 1000; i++) {
    let r = Math.floor(Math.random() * arrayObj.length);
  }
}
