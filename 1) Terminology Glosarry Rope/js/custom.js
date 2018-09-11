console.log("ez megy"); 
jQuery.noConflict();
(function ($) {
    $(function () {
                        
            var tablerow = "";
            var imgUrl = "";
            // var imgUrl = "";

        Papa.parse("./assets/data.csv", {
            download: !0,
            header: !0,
            skipEmptyLines: true,
            delimiter: ";",
            error: function (err, file, inputElem, reason) 
                { console.log(err, file, inputElem, reason); },
            complete: function (results) {
                    console.log(results);
                $.each(results.data, function (index, val) {
                    tablerow += "<tr>",
                        tablerow += "<td>" + val['title'] + "</td>",
                        tablerow += "<td>" + val['text'] + "</td>",
                        tablerow += "<td><a href='#' class='woocommerce-product-gallery__trigger'><img draggable='false' class='emoji' alt='🔍' src='https://s.w.org/images/core/emoji/11/svg/1f50d.svg'></a><img src='" + imgUrl + "img/" + val['img'] + "' alt='placeholder'></td>",
                    tablerow += "</tr>";    
                });

                $("#buyrope-terminology").html(tablerow);
                
            }
        });
    });
})(jQuery);

