var demo_data = {
    0: {
        "material": "Nylon",
        "uv-resistance": "Good",
        "buoyancy": "Fair",
        "elongation": "Good",
        "melting-point": "Fair",
        "chemical-resistance": "Poor",
        "abrasion-resistance": "Excellent",
        "common-uses": "Low",
    },
    1: {
        "material": "Polysteel",
        "uv-resistance": "Fair",
        "buoyancy": "Fair",
        "elongation": "Poor",
        "melting-point": "Good",
        "chemical-resistance": "Good",
        "abrasion-resistance": "Excellent",
        "common-uses": "Excellent",
    }, 
    2: {
        "material": "Polyester",
        "uv-resistance": "Fair",
        "buoyancy": "Good",
        "elongation": "Fair",
        "melting-point": "Low",
        "chemical-resistance": "Good",
        "abrasion-resistance": "Excellent",
        "common-uses": "Excellent",
    }, 
    3: {
        "material": "Polypropylene",
        "uv-resistance": "Fair",
        "buoyancy": "Good",
        "elongation": "Fair",
        "melting-point": "Low",
        "chemical-resistance": "Excellent",
        "abrasion-resistance": "Poor",
        "common-uses": "Good",
    }, 
    4: {
        "material": "Hemp",
        "uv-resistance": "Good",
        "buoyancy": "Fair",
        "elongation": "Good",
        "melting-point": "Fair",
        "chemical-resistance": "Poor",
        "abrasion-resistance": "Excellent",
        "common-uses": "Low",
    }, 
    5: {
        "material": "Synthetic Hemp",
        "uv-resistance": "Good",
        "buoyancy": "Fair",
        "elongation": "Good",
        "melting-point": "Fair",
        "chemical-resistance": "Poor",
        "abrasion-resistance": "Excellent",
        "common-uses": "Low",
    }, 
    6: {
        "material": "Sisal",
        "uv-resistance": "Good",
        "buoyancy": "Fair",
        "elongation": "Good",
        "melting-point": "Fair",
        "chemical-resistance": "Poor",
        "abrasion-resistance": "Excellent",
        "common-uses": "Low",
    }, 
    7: {
        "material": "etc",
        "uv-resistance": "Good",
        "buoyancy": "Fair",
        "elongation": "Good",
        "melting-point": "Fair",
        "chemical-resistance": "Poor",
        "abrasion-resistance": "Excellent",
        "common-uses": "Low",
    },
    8: {
        "material": "Hemp",
        "uv-resistance": "Good",
        "buoyancy": "Fair",
        "elongation": "Good",
        "melting-point": "Good",
        "chemical-resistance": "Poor",
        "abrasion-resistance": "Excellent",
        "common-uses": "Low",
    }
}

var tabelContent = "";
var $filters = [];
var $material = [];
var $rates = ["Poor", "Low", "Fair", "Good", "Excellent"];
var $rate_list = "";
var $list = "";
var table_body = document.querySelector("tbody");
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

/****** CREATE TABLE *************/

Object.keys(demo_data).forEach(function(key) {
    tabelContent += "<tr class='item'>";
        info_types.forEach(function (types) {
            tabelContent += '<td data-attr="' + demo_data[key][types] + '">' + demo_data[key][types] + '</td>'; 
        });
    tabelContent += "</tr>";
});

$('tbody').append(tabelContent);


/****** CREATE TABLE END **********/

/****** CREATE FILTERS **********/

$.each(demo_data, function (index, val) {
    if ($.inArray(val['material'], $material) == -1) {
        $material.push(val['material']);
    }
});

$.each($material, function(i, value) {
    $list += '<option value="' + value + '">' + value + "</option>";
});

$("#material").append($list);

$('#material').change(function () {
    // table_body.innerHTML = tabelContent;
    $(".results .item").fadeOut("fast");
    if ($(this).val() == 'filter') {
        // table_body.innerHTML = tabelContent;
        $(".results .item").fadeIn("slow");
    } else {
        $("tbody")
            .find('td[data-attr="' + $(this).val() + '"]')
            .each(function() {
                //console.log($(this).parent().html());                
                $('.results ').append($(this).parent().fadeIn('slow'));
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

var $table_filter = {}

function get_filter_selection() {
    $.each(info_types, function (i, value) {
        i += 1;
        if (value === "material") return;
        $(".results .item td:nth-child(" + i + ")").each(function (index) {
            $table_filter[$(this).attr("data-attr")] = $(this).val();
        });
    });
    
    return $table_filter;
}

get_filter_selection();

console.log($table_filter);

$.each(info_types, function (i, value) {
    i += 1;    
    if (value === "material") return;    
    $('#' + value).change(function () {
        $(".results .item").fadeOut("fast");
        if ($(this).val() == 'filter') {
            $(".results .item").fadeIn("slow");
        } else {
            $("tbody")
                .find('td:nth-child('+ i +')[data-attr="' + $(this).val() + '"]')
                .each(function() {
                    console.log($(this).parent().html());
                    $('.results').append($(this).parent().fadeIn('slow'));
                });
        }

    });

});

/**** CREATE RATE FILTERS END ******/

/********* SHOW MODAL *********/

function modal_handel(info) {
    $(".info." + info).on('click', function () {
        $('#airaModal').show();
        $(".aira-modal-content." + info).show();
    });

    $(".aira-close").on('click', function () {
        $('#airaModal').hide();
        $(".aira-modal-content." + info).hide();
    });
}

$(window).click(function (event) {
    if (event.target == '#airaModal') {
        $('#airaModal').hide();
    }
});

info_types.forEach(function (element, index) {
    modal_handel(info_types[index]);
});

/********* SHOW MODAL END ******/