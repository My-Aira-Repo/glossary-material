jQuery.noConflict();
(function ($) {
    $(function () {
                        
            var tablerow = "";
            var imgUrl = "";

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
                        tablerow += "<td><img src='" + imgUrl + "img/" + val['img'] + "' alt='placeholder'>",
                        tablerow += "<a href='#' class='woocommerce-product-gallery__trigger data-table'><img draggable='false' class='emoji' alt='🔍' src='https://s.w.org/images/core/emoji/11/svg/1f50d.svg'></a></td>",
                    tablerow += "</tr>";    
                });

                $("#buyrope-terminology").html(tablerow);

                $( ".data-table").on('click', function() {
                    var img = `<img src=${$(this).siblings('img')[0].src} alt="placeholder">`;
                    $("#airaModal").show();
                    $(".term-img-modal").html(img);
                    $(".term-modal").show();                    
                });

                $(".term-img-close").on("click", function() {
                    $("#airaModal").hide();
                    $(".term-modal").hide();
                    
                });
                
                
            }
        });
    });
})(jQuery);

