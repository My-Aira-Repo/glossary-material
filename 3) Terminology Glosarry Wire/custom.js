var data = {
  0: {
    title: "Agate",
    text:
      "Small type (usually 5.5 point) used for sports statistics, stock tables, classified ads, etc.",
    img: "img/icon-img-placeholder.svg"
  },
  1: {
    title: "Air",
    text: "White space used in a story design.",
    img: "img/icon-img-placeholder.svg"
  },
  2: {
    title: "All caps",
    text:"Type using only capital letters.",
    img: "img/icon-img-placeholder.svg"
  },
  3: {
      title: "Amberlith",
      text:"An orange plastic sheet, placed over a pasted-up page, that contains shapes that the printer needs to screen, overprint or print in another color.",
    img: "img/icon-img-placeholder.svg"
  },
  4: {
    title: "Anchor",
    text:  "White space used in a story design.",
    img: "img/icon-img-placeholder.svg"
  },
  5: {
    title: "Bumping/butting heads",
    text:  "Headlines from adjacent stories that collide with each other. Should be avoided when possible. Also called tombstoning.",
    img: "img/icon-img-placeholder.svg"
  }
};

var tableElement = document.querySelector("tbody");
var tablerow = "";

Object.keys(data).forEach(function (key) {

    tablerow += "<tr>",
        tablerow += "<td>" + data[key]['title'] + "</td>",
        tablerow += "<td>" + data[key]['text'] + "</td>",
        tablerow += "<td><img src='" + data[key]['img'] + "' alt='placeholder'</td>",
    tablerow += "</tr>";    
});

tableElement.innerHTML = tablerow;

