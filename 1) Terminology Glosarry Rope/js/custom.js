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
                        tablerow += "<td><img src='" + imgUrl + "img/" + val['img'] + "' alt='placeholder'</td>",
                    tablerow += "</tr>";    
                });

                $("#buyrope-terminology").html(tablerow);
                
            }
        });
    });
})(jQuery);

