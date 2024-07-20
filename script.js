 function colorOrange() {
    document.body.style.background="orange";
    // since we are using a p tag we need to give it an index number [0], so we can give the p element a color
    document.querySelectorAll("p")[0].style.color="red"; //I access the element with query seleector all
  }