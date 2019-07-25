"use strict";
(function(){
    var post =  [{"image":"https://cdn.pixabay.com/photo/2017/03/28/12/05/energy-2181904_960_720.jpg","date":"fecha 23 23 23","source":"autor","title":"sera el titulo del post"},
    {"image":"https://cdn.pixabay.com/photo/2017/03/28/12/05/energy-2181904_960_720.jpg","date":"fecha 23 23 23","source":"autor","title":"sera el titulo del post"},
    {"image":"https://cdn.pixabay.com/photo/2017/03/28/12/05/energy-2181904_960_720.jpg","date":"fecha 23 23 23","source":"autor","title":"sera el titulo del post"},
    {"image":"https://cdn.pixabay.com/photo/2017/03/28/12/05/energy-2181904_960_720.jpg","date":"fecha 23 23 23","source":"autor","title":"sera el titulo del post"},
    {"image":"https://cdn.pixabay.com/photo/2017/03/28/12/05/energy-2181904_960_720.jpg","date":"fecha 23 23 23","source":"autor","title":"sera el titulo del post"},
    {"image":"https://cdn.pixabay.com/photo/2017/03/28/12/05/energy-2181904_960_720.jpg","date":"fecha 23 23 23","source":"autor","title":"sera el titulo del post"},
    {"image":"https://cdn.pixabay.com/photo/2017/03/28/12/05/energy-2181904_960_720.jpg","date":"fecha 23 23 23","source":"autor","title":"sera el titulo del post"},
    {"image":"https://cdn.pixabay.com/photo/2017/03/28/12/05/energy-2181904_960_720.jpg","date":"fecha 23 23 23","source":"autor","title":"sera el titulo del post"},
    {"image":"https://cdn.pixabay.com/photo/2017/03/28/12/05/energy-2181904_960_720.jpg","date":"fecha 23 23 23","source":"autor","title":"sera el titulo del post"},
    
]



	function buildCard(spot){
		var  html = "<div class='col-md-4'>"+
						"<div class='card' >"+
							"<img src='"+spot.image+"' class='card-img-top ' >"+
							"<div class='card-body'>"+
		  						"<p class='card-title'>"+spot.date +" - "+ spot.source +"</p>"+
		  						"<h4 class='card-text'>"+spot.title+"</h4>"+
		  						"<a href='"+'./post.html'+"' class='btn'>Ver más</a>"+
							"</div>"+
	  					"</div>"+
					"</div>";
		
		return html;
	}

	var row =  document.getElementById('post');

	for(var i = 0; i < post.length; i++){
		row.innerHTML =  row.innerHTML + buildCard(post[i]);
	}

})(); 