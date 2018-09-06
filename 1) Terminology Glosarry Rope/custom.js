

var tableElement = document.getElementById("buyrope-terminology");
var tablerow = "";

Object.keys(data).forEach(function (key) {

    tablerow += "<tr>",
        tablerow += "<td>" + data[key]['title'] + "</td>",
        tablerow += "<td>" + data[key]['text'] + "</td>",
        tablerow += "<td><img src='/wp-content/themes/emallshop/js/terminology/" + data[key]['img'] + "' alt='placeholder'</td>",
    tablerow += "</tr>";    
});

// tableElement.innerHTML = tablerow;

