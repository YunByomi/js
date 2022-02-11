const superEventHandler = {
  handleTitleClick: function () {
    title.style.color = "#f39c12";
  },

  handleMouseEnter: function () {
    title.innerText = "The mouse is here!";
    title.style.color = "#1abc9c";
  },

  handleMouseLeave: function () {
    title.innerText = "The mouse is gone!";
    title.style.color = "#3498db";
  },

  handleMouseContextMenu: function () {
    title.innerText = "That was a right click!";
    title.style.color = "#e74c3c";
  },

  handleWindowResize: function () {
    title.innerText = "You just resized!";
    title.style.color = "#9b59b6";
  }
};

const title = document.querySelector("h2");

title.addEventListener("click", superEventHandler.handleTitleClick);
title.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
title.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
title.addEventListener("contextmenu", superEventHandler.handleMouseContextMenu);
window.addEventListener("resize", superEventHandler.handleWindowResize);
