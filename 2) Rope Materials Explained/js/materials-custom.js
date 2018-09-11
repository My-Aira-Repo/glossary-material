jQuery(document).ready(function($) {
  
    var tabelContent = "";
    // var url = "/wp-content/themes/emallshop/js/terminology/";
    var imgUrl = "";
    var $material = [];
    var info_types = [
      "material",
      "uv-resistance",
      "buoyancy",
      "elongation",
      "melting-point",
      "chemical-resistance",
      "abrasion-resistance",
      "common-uses"
    ];
	


    Papa.parse("./assets/data.csv", {
      download: !0,
      header: !0,
      skipEmptyLines: true,
      error: function (err, file, inputElem, reason) 
          { console.log(err, file, inputElem, reason); },
      complete: function (results) {

		/****** CREATE TABLE *************/
		
		$.each(results.data, function (index, val) {
            tabelContent += "<tr class='item'>";
              info_types.forEach(function(types) {
                tabelContent += `<td data-attr="${val[types]}">${val[types]}</td>`; 
              });
            tabelContent += "</tr>";
            console.log(val["abrasion-resistance"]);
          });
          
    $(".results").html(tabelContent);
    
    
    
		
		  /****** CREATE TABLE END **********/
		  
		$.each(results.data, function(index, val) {
			if ($.inArray(val["material"], $material) == -1) {
				$material.push(val["material"]);
			}
		});
		  
		$.each($material, function(i, value) {
			$list += `<option value="${value}">${value}</option>`;
		});

		$("#material").append($list);
          
      }
  });


  var tabelContent = "";
  var $filters = [];
  var $rates = ["Poor", "Low", "Fair", "Good", "Excellent"];
  var $rate_list = "";
  var $list = "";



  /****** CREATE FILTERS **********/

  $("#material").change(function() {
    $(".results .item").fadeOut("fast");
    if ($(this).val() == "filter") {
      $(".results .item").fadeIn("slow");
    } else {
      $("tbody")
        .find('td[data-attr="' + $(this).val() + '"]')
        .each(function() {
          $(".results ").append( $(this).parent().fadeIn("slow") );
        });
    }
  });

  /****** CREATE FILTERS END *******/

  /****** CREATE RATE FILTERS **********/

  $.each($rates, function(i, value) {
    $rate_list += '<option value="' + value + '">' + value + "</option>";
  });

  $.each(info_types, function(i, elem) {
    if (i === 0) return;
    $("#" + elem).append($rate_list);
  });

  var $table_filter = {};

  function get_filter_selection() {
    $.each(info_types, function(i, value) {
      i += 1;
      if (value === "material") return;
      $(".results .item td:nth-child(" + i + ")").each(function(index) {
        $table_filter[$(this).attr("data-attr")] = $(this).val();
      });
    });

    return $table_filter;
  }

  get_filter_selection();

  $.each(info_types, function(i, value) {
    i += 1;
    if (value === "material") return;
    $("#" + value).change(function() {
      $(".results .item").fadeOut("fast");
      if ($(this).val() == "filter") {
        $(".results .item").fadeIn("slow");
      } else {
        $("tbody")
          .find("td:nth-child(" + i + ')[data-attr="' + $(this).val() + '"]')
          .each(function() {
            // console.log( $(this).parent().html() );
            $(".results").append( $(this).parent().fadeIn("slow") );
          });
      }
    });
  });

  /**** CREATE RATE FILTERS END ******/

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