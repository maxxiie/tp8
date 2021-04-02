

window.onload = function() {
document.getElementById("headermac").style.fontSize= "85px";
}


window.onclick = function(){
  document.getElementById('headermac').style.color = "#fcedd8";
}
notes.style.display = 'none';
ingredients.style.visibility = 'hidden';
equipment.style.visibility = 'hidden';
directions.style.visibility = 'hidden';

var notesdiv = document.getElementById("notes");
var ingred = document.getElementById("ingredients");
var equipmenta = document.getElementById("equipment");
var direc = document.getElementById("directions");

function hideshownotes() {
  if (notesdiv.style.display === "none") {
    notesdiv.style.display = "block";
  } else if (notesdiv.style.display === "block") {
    notesdiv.style.display = "none";
  }
}

function hideshowingred() {
  if (ingred.style.visibility === "hidden") {
    ingred.style.visibility = "visible";
  } else if (ingred.style.visibility === "visible") {
    ingred.style.display = "hidden";
  }
}

function hideshow3() {
  if (equipmenta.style.visibility === "hidden") {
    equipmenta.style.visibility = "visible";
  } else if (equipmenta.style.visibility === "hidden") {
    equipmenta.style.visibility = "visible";
  }
}

function hideshow4() {
  if (direc.style.visibility === "hidden") {
    direc.style.visibility = "visible";
  } else if (direc.style.visibility === "visible") {
    direc.style.display = "hidden";
  }
}

function showall (elements, ingred, direc, equipmenta) {
  elements = elements.length ? elements : [ingred, direc, equipmenta];
  for (var index = 0; index < elements.length; index++) {
    elements[index].style.visibility === "visible";
  }
}

//dog pic

// document.getElementById('awoo').innerHTML = '<img width="500" height="500" src="https://cdn.shopify.com/s/files/1/0086/6320/3921/products/Filou_Eating_800x.gif?v=1604302415">';


//Tp6 START


// JavaScript for TP6

// generic AJAX function to load fromFile into object with ID whereTo
function loadFileInto(fromIdentifier, fromList) {

	// creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();

  //fromfile value based on php url
  fromFile = "recipes.php?id=" + fromIdentifier + "&list=" + fromList;
  
	// defines the GET/POST method, source, and async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// prepares code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {
		
			if ((this.readyState == 4) && (this.status == 200)) {
        
        //convert received json to php into js array
        responseArray = JSON.parse(this.responseText);
        responseHTML = "";
        
        if (this.responseText != 0){
        for(x = 0; x<responseArray.length; x++){
          responseHTML += "<li>" + responseArray[x] + "</li>";
        }
        }
        whereTo = "#" + fromList + " ul";
        if(fromList == "directions") whereTo = whereTo = "#" + fromList + " ol";
        
				document.querySelector(whereTo).innerHTML = responseHTML;
				
			} else if ((this.readyState == 4) && (this.status != 200)) {
				console.log("Error: " + this.responseText);
				
			}
		
	} // end ajax.onreadystatechange

	// now that everything is set, initiate request
	ajax.send();

}

//load default preview files
// window.onload = function() {

//   loadFileInto("ingredientsde.html", "ingredients");

//   loadFileInto("equipmentde.html", "equipment");

//   loadFileInto("directionsde.html", "directions");

// };


//obj construct for recipe

function Recipe(recipeName, imageURL, contributorName, notesStuff, recipeID){
  this.recipeName = recipeName;
  this.imgsrc = imageURL;
  this.contributor = contributorName;
  this.identifier = recipeID;//prev this.ingFile
  
  //update the screen with this obj recipe info
  this.displayRecipe = function(){
    document.querySelector("#headermac").innerHTML = this.recipeName;
    document.querySelector("#contr").innerHTML =  "Contributed by: " + this.contributor;
    document.querySelector("#notescontent").innerHTML =  this.notesStuff;
    
    loadFileInto(this.identifier, "ingredients");
    loadFileInto(this.identifier, "equipment");
    loadFileInto(this.identifier, "directions");
    
    document.querySelector(".macawon").style.backgroundImage = "url(\"" + this.imgsrc + "\")";
  }
}

FrenchMacarons = new Recipe("French Macarons", 
                            "https://www.sweetandsavorybyshinee.com/wp-content/uploads/2013/01/Basic-French-Macarons-1.jpg",
                            "Max Ciot",
                            "<li>To ensure macarons are the same size, you can trace 1-inch circles with a pencil on parchment paper, then flip the paper and use the circles as a guide when piping.</li> <li>If you want to dye the macaron batter, add food coloring to egg whites in step 2; make the mixture a few shades darker than desired as baking will lighten the color. Use colors in powders or gel form - liquid food coloring may add too much moisture to the egg mixture and change the consistency.</li> <li>Make sure you bake only 1 baking sheet at a time.</li>",
                            "FrenchMacarons"
                           );

Tofu = new Recipe("Breaded, Fried, Softly Spiced Tofu", 
                            "http://www.veganricha.com/wp-content/uploads/2015/10/butternut-squash-pilaf-breaded-tofu-steak-0973.jpg",
                            "Rae Kolke",
                            "<li>This tofu recipe is completely gorgeous. A former roommate introduced me to some basics with tofu, and over the past few years, I've settled on this ratio of spices and other breading ingredients.</li> <li>The crust on the tofu sticks is tasty and the texture is really wonderful.</li> <li>Serve with a relish or a dip of some sort (I love this with plain yogurt mixed with eggplant brinjal). I usually make this with a cumin-scented rice dish and a garlicky broccoli side.</li>",
                            "Tofu"
                 );

Tart = new Recipe("Tart", 
                            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4468173.jpg",
                            "Jack Kay",
                            "<li>Cover any leftover tart (if any) lightly with an aluminum foil tent. Refrigerate for up to 2 days. Kirschwasser is a cherry-flavored liqueur.</li> <li> Instead of kirschwasser try using framboise, a raspberry-flavored liqueur.</li> <li>Currant or seedless raspberry preserves may be used in place of apricot preserves.</li>",
                            "Tart"
                           );



// FrenchMacarons = new Recipe("French Macarons", 
//                             "https://www.sweetandsavorybyshinee.com/wp-content/uploads/2013/01/Basic-French-Macarons-1.jpg",
//                             "Max Ciot",
//                             "ingredients.html",
//                             "equipment.html",
//                             "directions.html",
//                             "<li>To ensure macarons are the same size, you can trace 1-inch circles with a pencil on parchment paper, then flip the paper and use the circles as a guide when piping.</li> <li>If you want to dye the macaron batter, add food coloring to egg whites in step 2; make the mixture a few shades darker than desired as baking will lighten the color. Use colors in powders or gel form - liquid food coloring may add too much moisture to the egg mixture and change the consistency.</li> <li>Make sure you bake only 1 baking sheet at a time.</li>"
//                            );

// Tofu = new Recipe("Breaded, Fried, Softly Spiced Tofu", 
//                             "http://www.veganricha.com/wp-content/uploads/2015/10/butternut-squash-pilaf-breaded-tofu-steak-0973.jpg",
//                             "Rae Kolke",
//                             "ingredientsTofu.html",
//                             "equipmentTofu.html",
//                             "directionsTofu.html",
//                             "<li>This tofu recipe is completely gorgeous. A former roommate introduced me to some basics with tofu, and over the past few years, I've settled on this ratio of spices and other breading ingredients.</li> <li>The crust on the tofu sticks is tasty and the texture is really wonderful.</li> <li>Serve with a relish or a dip of some sort (I love this with plain yogurt mixed with eggplant brinjal). I usually make this with a cumin-scented rice dish and a garlicky broccoli side.</li>"
//                            );

// Tart = new Recipe("Raspberry Streusel Tart", 
//                             "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4468173.jpg",
//                             "Jack Kay",
//                             "ingredientsTart.html",
//                             "equipmentTart.html",
//                             "directionsTart.html",
//                             "<li>Cover any leftover tart (if any) lightly with an aluminum foil tent. Refrigerate for up to 2 days. Kirschwasser is a cherry-flavored liqueur.</li> <li> Instead of kirschwasser try using framboise, a raspberry-flavored liqueur.</li> <li>Currant or seedless raspberry preserves may be used in place of apricot preserves.</li>"
//                            );