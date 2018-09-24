jQuery(document).ready(function($) {

    // var url = "/wp-content/themes/emallshop/js/terminology/";
    var imgUrl = "";
    var tableData = {};
    var info_types = [
      "material",
      "corrosion-resistant",
      "flexibility",
      "strength",
      "resilience-and-toughness",
      "abrasion-resistance",
      "impact-resistant"
    ];

    function create_table() {

      var tabelContent = "";

      $.each(getFilteredTable(), function(index, val) {
        tabelContent += "<tr class='item'>";
        info_types.forEach(function(types) {
          tabelContent += `<td data-attr="${val[types]}">${val[types]}</td>`;
        });
        tabelContent += "</tr>";
      });
      // console.log(tabelContent);
      $(".results").html(tabelContent);

    }

    function get_filter_selection() {

      var filters = {};
      $("tr.aira-filter select").each(function() {
        filters[$(this).attr("id")] = $(this).val();
      });
      return filters;
    }

    function getFilteredTable() {
      var filters = get_filter_selection();
      var temp = [];
      // console.log(tableData);

      $.each(tableData, function( index, row) {
        var show = true;
        $.each(filters, function(key, type) {
            if (type !== "") {
              if (type !== row[key]) {
                show = false;
              }
            }
        });
        if (show) {
          temp.push(row);
        }
      });
      // console.log(temp)
      return temp;
    }

    function create_filter() {

      var options = {};
      $.each(tableData, function (index, row) {
        info_types.forEach(type => {
          if ($.inArray(row[type], options[type]) == -1) {
            if (typeof options[type] == "undefined") {
              options[type] = [];
            }
            options[type].push(row[type]);
          }
        });
      });

      $.each(options, function(key, material) {
          var list = '';
          $.each(material, function (i, value) {
            list += `<option value="${value}">${value}</option>`;
          });
          $(`#${key}`).append(list);
      });

    }

    $('tr.aira-filter select').on('change', function () {
//      console.log(get_filter_selection());
      create_table();
    });

    Papa.parse("./assets/data.csv", {
      download: !0,
      header: !0,
      skipEmptyLines: true,
      error: function (err, file, inputElem, reason)
          { console.log(err, file, inputElem, reason); },
      complete: function (results) {

          tableData = results.data;          
          create_filter();
          create_table();
          // console.log(get_filter_selection());
      }
    });

  /********* SHOW MODAL *********/

  function modal_handel(info) {
    $(".info." + info).on("click", function() {
      $("#airaModal").show();
      $(".aira-modal-content." + info).show();
    });

    $(".aira-close").on("click", function() {
      $("#airaModal").hide();
      $(".aira-modal-content." + info).hide();
    });
  }

  $(window).click(function(event) {
    if (event.target == "#airaModal") {
      $("#airaModal").hide();
    }
  });

  info_types.forEach(function(element, index) {
    modal_handel(info_types[index]);
  });

  /********* SHOW MODAL END ******/

});