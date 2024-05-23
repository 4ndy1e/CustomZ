let selected = [];

function select(num) {
  if (selected.length > 0) {
    let prior = "size" + selected[0];
    let priorSize = document.getElementById(prior);
    priorSize.style.borderWidth = "1px";
    priorSize.style.borderColor = "lightgray";
  }

  selected.pop();
  selected.push(num);

  console.log(selected[0]);

  let size = "size" + num;
  console.log(size);
  let highlightedSize = document.getElementById(size);
  highlightedSize.style.borderWidth = "2px";
  highlightedSize.style.borderColor = "black";
}

function switchImage(num) {
  let imgElement;

  if (num === 1) { imgElement = document.getElementById("imageSwitch1"); }
  if (num === 2) { imgElement = document.getElementById("imageSwitch2"); }
  if (num === 3) { imgElement = document.getElementById("imageSwitch3"); }

  const mainImgElement = document.getElementById("mainImageSwitch");
  if (imgElement) {

    imgElement.style.height = mainImgElement.style.height;
    mainImgElement.src = imgElement.src;
  } else {
    console.error("Image not found for the given number:", num);
  }
}

