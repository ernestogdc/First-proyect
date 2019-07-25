"use strict";
(function () {
    var result = [{ "image": "https://cdn.pixabay.com/photo/2017/03/28/12/05/energy-2181904_960_720.jpg", "empresa": "Empresa ", "proyect": "Detalles del proyecto", "price": "$270,000" },
    { "image": "https://cdn.pixabay.com/photo/2017/03/28/12/05/energy-2181904_960_720.jpg", "empresa": "Empresa 1", "proyect": "Detalles del proyecto", "price": "$270,000" },
    { "image": "https://cdn.pixabay.com/photo/2017/03/28/12/05/energy-2181904_960_720.jpg", "empresa": "Empresa 2", "proyect": "Detalles del proyecto", "price": "$270,000" },
    { "image": "https://cdn.pixabay.com/photo/2017/03/28/12/05/energy-2181904_960_720.jpg", "empresa": "Empresa 4", "proyect": "Detalles del proyecto", "price": "$270,000" },

    ]



    function buildCard(spot) {
        var html = "<div class='col-md-9'>" +
                        "<div class='card' id='resultcard' >" +
                            "<div class='row' >" +
                                "<div class='col-md-5 '>" +
                                    "<img src='" + spot.image + "' class='card-img-top ' >" +
                                "</div>" +
                                "<div class='col-md-7'>" +
                                    "<div class='card-body'>" +
                                        "<a href='" + './result.html' + "'id='botton' class='btn'>" + spot.empresa + "</a>" +
                                        "<a href='" + './result.html' + "'id='botton' class='btn'>" + spot.proyect + "</a>" +
                                        "<h4 class='card-text'>Precio para tu proyecto: " + spot.price + "</h4>" +
                                    "</div>" +
                                "</div>" +
                            "</div>";
                        "</div>";
                    "</div>";        
        return html;
    }

    var row = document.getElementById('res');

    for (var i = 0; i < result.length; i++) {
        row.innerHTML = row.innerHTML + buildCard(result[i]);
    }

})(); 