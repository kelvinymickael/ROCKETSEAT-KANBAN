/* FILTER CARDS */

const inputFilter = document.querySelector(".mainKanban__search input");
const cards = document.querySelectorAll("[data-card]");

inputFilter.addEventListener("input", filterCards);

function filterCards() {
  if (inputFilter.value != "") {
    cards.forEach((card) => {
      let title = card.querySelector("strong");

      title = title.textContent.toLowerCase();

      let filterText = inputFilter.value.toLowerCase();

      if (!title.includes(filterText)) {
        card.style.display = "none";
      } else {
        card.style.display = "block";
      }
    });
  } else {
    cards.forEach((card) => {
      card.style.display = "block";
    });
  }
}

/* CREATE EVENT DRAG AND DROP */

const cardsDrag = document.querySelectorAll("[data-drag]");
const dataDropZones = document.querySelectorAll("[data-dropzone]");

/* Our Cards */
cardsDrag.forEach((card) => {
  card.addEventListener("dragstart", dragstart);

  card.addEventListener("drag", drag);

  card.addEventListener("dragend", dragend);
});

function dragstart() {
  this.classList.add("is-dragging");
}

function drag() {}

function dragend() {
  this.classList.remove("is-dragging");
}

/* Place where we will drop cards */
dataDropZones.forEach((dropzone) => {
  dropzone.addEventListener("dragenter", dragenter);
  dropzone.addEventListener("dragover", dragover);
  dropzone.addEventListener("dragleave", dragleave);
  dropzone.addEventListener("drop", drop);
});

function dragenter() {}

function dragover() {
  const cardBeingDragged = document.querySelector(".is-dragging");

  this.appendChild(cardBeingDragged);
}

function dragleave() {}

function drop() {}
