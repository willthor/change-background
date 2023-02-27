function validation() {
  var change = document.getElementsByName("colorchange");

  if (change[0].checked) {
    document.body.style.backgroundColor = "red";
  } else if (change[1].checked) {
    document.body.style.backgroundColor = "blue";
  } else if (change[2].checked) {
    document.body.style.backgroundColor = "yellow";
  } else if (change[3].checked) {
    document.body.style.backgroundColor = "green";
  } else if (change[4].checked) {
    document.body.style.backgroundColor = "gray";
  } else if (change[5].checked) {
    document.body.style.backgroundColor = "violet";
  } else if (change[6].checked) {
    document.body.style.backgroundColor = "pink";
  } else if (change[7].checked) {
    document.body.style.backgroundColor = "purple";
  }
}
