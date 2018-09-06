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
            .each(function(index) {
                console.log($(this).parent().html(), index);                
                $('.results ').append($(this).parent().fadeIn('slow'));
            });
    }
    
});

/****** CREATE FILTERS END *******/

/****** CREATE RATE FILTERS **********/

// var $uv_resistance = [];
// var $buoyancy = [];
// var $elongation = [];
// var $melting_point = [];
// var $chemical_resistance = [];
// var $abrasion_resistance = [];
// var $common_use = [];

// $.each(demo_data, function (index, val) {
//     if ($.inArray(val["uv-resistance"], $uv_resistance) == -1) {
//         $uv_resistance.push(val["uv-resistance"]);
//     }
// });

// $.each(demo_data, function(index, val) {
//     if ($.inArray(val["buoyancy"], $buoyancy) == -1) {
//         $buoyancy.push(val["buoyancy"]);
//     }
// });

// $.each(demo_data, function (index, val) {
//     if ($.inArray(val["elongation"], $elongation) == -1) {
//         $elongation.push(val["elongation"]);
//     }
// });

// $.each(demo_data, function (index, val) {
//     if ($.inArray(val["melting-point"], $melting_point) == -1) {
//         $melting_point.push(val["melting-point"]);
//     }
// });

// $.each(demo_data, function (index, val) {
//     if ($.inArray(val["chemical-resistance"], $chemical_resistance) == -1) {
//         $chemical_resistance.push(val["chemical-resistance"]);
//     }
// });

// $.each(demo_data, function (index, val) {
//     if ($.inArray(val["abrasion-resistance"], $abrasion_resistance) == -1) {
//         $abrasion_resistance.push(val["abrasion-resistance"]);
//     }
// });


// $.each(demo_data, function (index, val) {
//     if ($.inArray(val["common-uses"], $common_use) == -1) {
//     $common_use.push(val["common-uses"]);
//     }
// });

// rates_array = ['$uv_resistance', '$buoyancy', '$elongation', '$melting_point', '$chemical_resistance', '$abrasion_resistance', '$common_use'];


$.each($rates, function(i, value) {
    $rate_list += '<option value="' + value + '">' + value + "</option>";
});

$.each(info_types, function(i, elem) {
  if (i === 0) return;
  $("#" + elem).append($rate_list);
});


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