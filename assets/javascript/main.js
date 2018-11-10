//background gradient code//
var colors = new Array(
    [62,35,255],
    [60,255,60],
    [149,35,98],
    [45,175,230],
    [23,0,255],
    [25,128,0]);
  
  var step = 0;
  //color table indices for: 
  // current color left
  // next color left
  // current color right
  // next color right
  var colorIndices = [0,1,2,3];
  
  //transition speed
  var gradientSpeed = 0.002;
  
  function updateGradient()
  {
    
    if ( $===undefined ) return;
    
  var c0_0 = colors[colorIndices[0]];
  var c0_1 = colors[colorIndices[1]];
  var c1_0 = colors[colorIndices[2]];
  var c1_1 = colors[colorIndices[3]];
  
  var istep = 1 - step;
  var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
  var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
  var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
  var color1 = "rgb("+r1+","+g1+","+b1+")";
  
  var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
  var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
  var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
  var color2 = "rgb("+r2+","+g2+","+b2+")";
  
   $('#gradient').css({
     background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
      background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
    
    step += gradientSpeed;
    if ( step >= 1 )
    {
      step %= 1;
      colorIndices[0] = colorIndices[1];
      colorIndices[2] = colorIndices[3];
      
      //pick two new target color indices
      //do not pick the same as the current one
      colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
      colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
      
    }
  }
  
  setInterval(updateGradient,10);
  //end of gradient code//

///////////////////////////
//Firebase configuration //
///////////////////////////
$(document).ready(function () {
    var config = {
      apiKey: "AIzaSyBMxbRavlaUZpJQWiMiCoFuT1hT_un6iQ0",
      authDomain: "ballmer-peak-project1.firebaseapp.com",
      databaseURL: "https://ballmer-peak-project1.firebaseio.com",
      projectId: "ballmer-peak-project1",
      storageBucket: "",
      messagingSenderId: "520183238866"
    };
  
    firebase.initializeApp(config);
  
    var database = firebase.database();
  
    // console.log(getDescription("Hulk"));
    // console.log(logActivity("Hulk"));
  
  
    let characters = [
      {
        name: 'Ant Man',
        imageUrl: "http://thesource.com/wp-content/uploads/2015/07/ant-man1.jpg",
      },
      {
        name: 'Black Panther',
        imageUrl: "https://cdn.vox-cdn.com/thumbor/SQnBpaoYz4vaIZ71gY_Oho2izjI=/0x0:1056x439/1200x800/filters:focal(495x39:663x207)/cdn.vox-cdn.com/uploads/chorus_image/image/58986389/Screen_Shot_2018_01_11_at_3.47.24_PM.0.png",
      },
      {
        name: 'Black Widow',
        imageUrl: "https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/Black-Widow-movie-700x300.jpg",
      },
      {
        name: 'Bucky',
        imageUrl: "https://static.tvtropes.org/pmwiki/pub/images/mcu_bucky_40s.png",
      },
      {
        name: 'Captain America',
        imageUrl: "https://onthegoinmco.com/wp-content/uploads/2013/11/Cap.jpg",
      },
      {
        name: 'Captain Marvel',
        imageUrl: "https://static.independent.co.uk/s3fs-public/styles/story_large/public/thumbnails/image/2018/06/15/15/brie-larson-captain-marvel-0.jpg",
      },
      {
        name: 'Deadpool',
        imageUrl: "http://specials-images.forbesimg.com/imageserve/577fe96da7ea436bd18c3ef7/416x416.jpg?background=000000&cropX1=0&cropX2=744&cropY1=15&cropY2=759",
      },
      {
        name: 'Ant Man',
        imageUrl: "http://thesource.com/wp-content/uploads/2015/07/ant-man1.jpg",
      },
      {
        name: 'Black Panther',
        imageUrl: "https://cdn.vox-cdn.com/thumbor/SQnBpaoYz4vaIZ71gY_Oho2izjI=/0x0:1056x439/1200x800/filters:focal(495x39:663x207)/cdn.vox-cdn.com/uploads/chorus_image/image/58986389/Screen_Shot_2018_01_11_at_3.47.24_PM.0.png",
      },
      {
        name: 'Black Widow',
        imageUrl: "https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/Black-Widow-movie-700x300.jpg",
      },
      {
        name: 'Bucky',
        imageUrl: "https://static.tvtropes.org/pmwiki/pub/images/mcu_bucky_40s.png",
      },
      {
        name: 'Captain America',
        imageUrl: "https://onthegoinmco.com/wp-content/uploads/2013/11/Cap.jpg",
      },
      {
        name: 'Captain Marvel',
        imageUrl: "https://static.independent.co.uk/s3fs-public/styles/story_large/public/thumbnails/image/2018/06/15/15/brie-larson-captain-marvel-0.jpg",
      },
      {
        name: 'Deadpool',
        imageUrl: "https://i2-prod.mirror.co.uk/incoming/article6809012.ece/ALTERNATES/s615b/Ryan-Reynolds.jpg",
      },
      {
        name: 'Hank Pym',
        imageUrl: "http://digitalspyuk.cdnds.net/18/25/1280x640/landscape-1529582593-hank-pym-michael-douglas-ant-man.jpg",
      },
      {
        name: 'Hawkeye',
        imageUrl: "https://s-media-cache-ak0.pinimg.com/736x/ac/12/0e/ac120efa6e318b9f6623d218165d084e--marvel-movies-avengers-marvel.jpg",
      },
      {
        name: 'Hela',
        imageUrl: "http://media.comicbook.com/2017/04/cate-blanchette-hela-thor-ragnarok-2-989388.jpg",
      },
      {
        name: 'The Hulk',
        imageUrl: "http://www.thefamouspeople.com/profiles/images/mark-ruffalo-3.jpg",
      },
      {
        name: 'Iron Man',
        imageUrl: "http://beardclinic.com/wp-content/uploads/2015/04/tony-stark-beard.jpg",
      },
      {
        name: 'Iron Monger',
        imageUrl: "https://s-media-cache-ak0.pinimg.com/564x/98/50/07/9850076033edf3fb33fad68ea4f47b3b.jpg",
      },
      {
        name: 'Jessica Jones',
        imageUrl: "https://tribzap2it.files.wordpress.com/2015/11/krysten-ritter-jessica-jones-netflix.jpg",
      },
      {
        name: 'Loki',
        imageUrl: "http://img2.wikia.nocookie.net/__cb20130927172049/marvelmovies/images/0/0a/Loki_evil-grin.jpg",
      },
      {
        name: 'Nakia',
        imageUrl: "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/0/02/Black_Panther_Textless_Character_Poster_10.jpg/revision/latest/scale-to-width-down/350?cb=20171201052655",
      },
      {
        name: 'Nick Fury',
        imageUrl: "http://img1.looper.com/img/gallery/nick-fury-reportedly-will-appear-in-captain-marvel/intro-1499372003.jpg",
      },
      {
        name: 'Professor X',
        imageUrl: "http://cdn-static.denofgeek.com/sites/denofgeek/files/4/43/professor_xavier.jpg",
      },
      {
        name: 'Quick Silver',
        imageUrl: "https://4.bp.blogspot.com/-6QSMJuB79Is/VwGz9qoiGYI/AAAAAAAAA8s/9t2TX4WbW2saUrMn3YTB3lCUI-BVPS2vg/s1600/Quicksilver.jpg",
      },
      {
        name: 'War Machine',
        imageUrl: "https://img.char.tw/uploads/2017/08/1502986591-7ba69ad0703ea5988687c871334c7e80.jpg",
      },
      {
        name: 'Scarlet Witch',
        imageUrl: "http://assets1.ignimgs.com/2015/03/27/scarlet-witch-1280jpg-3bd533_1280w.jpg",
      },
      {
        name: 'Spider-Man',
        imageUrl: "https://static3.srcdn.com/wordpress/wp-content/uploads/2017/06/Spider-Man-Homecoming-Tom-Holland-Interview.jpg",
      },
      {
        name: 'Star Lord',
        imageUrl: "https://d3rm69wky8vagu.cloudfront.net/photos/original/1.202845.jpg",
      },
      {
        name: 'The Wasp',
        imageUrl: "https://aws.boxofficebuz.com/actors/images/evangeline-lilly_212538.jpg",
      },
      {
        name: 'Thor',
        imageUrl: "http://images4.fanpop.com/image/photos/22100000/Thor-pics-thor-2011-22155397-1452-800.jpg",
      },
      {
        name: 'Valkyrie',
        imageUrl: "http://cdn.collider.com/wp-content/uploads/2017/10/thor-ragnarok-images-valkyrie.jpg",
      },
      {
        name: 'Wolverine',
        imageUrl: "http://ofcoursevegan.files.wordpress.com/2013/07/hugh-jackman.jpg",
      },
  // {
  //   name: 'blaaaake',
  //   imageUrl: "https://m.media-amazon.com/images/M/MV5BMTU2Njk0NTUyNl5BMl5BanBnXkFtZTcwODE0OTgyNw@@._V1_.jpg",
  // },
    ]
  
    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    }
  
    async function wait() {
      console.log('test')
      await sleep(2000)
    }
  
  
    var compareFace = function (imgUrl, charArray) {
      var superHero = "";
      var heroImage = "";
      var max = 0;
      for (var i = 0; i < charArray.length; i++) {
        var settings = {
          "async": false,
          "crossDomain": true,
          "url": "https://api-us.faceplusplus.com/facepp/v3/compare?api_key=AuLF26cH7L5MFtwVuC9hhqCQbiB6K8HR&api_secret=ovhD7RlOb-4xLChOM2EGP0sKaCnZ9aFV&image_url1=" + imgUrl + "&image_url2=" + charArray[i].imageUrl,
          "method": "POST",
          "headers": {
            "cache-control": "no-cache",
            "postman-token": "9428403f-73f7-3feb-dea0-7024e8be8f24",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "Origin, Methods, Content-Type"
  
          }
        }
        $.ajax(settings).then(function (response) {
          console.log(response)
          if (response.confidence > max) {
            console.log('new max found')
            max = response.confidence
            superHero = charArray[i].name
            heroImage = charArray[i].imageUrl
          }
        });
      }
      console.log(max)
      $("#marvel-anc").attr("src", heroImage);
  
      getDescription(superHero);
    }
  
    //   displaying the uploaded image
    $("#btn").click(function () {
      console.log("working");
      var photo = $("#url").val();
      $("#prof-pic").attr("src", photo);
  
      compareFace(photo, characters);
    });
  
  
    ///////////////////////////////////////////////////////
    // comparing the uploaded image with array of heroes //
    ///////////////////////////////////////////////////////
  
  
  
    //////////////////////////////////////////////
    // displaying details about the marvel hero //
    //////////////////////////////////////////////
  
    function getDescription(heroName) {
  
      // This is our API key.
      var APIKey = "51bf07f7552914c23894d501b60792a9";
      var queryURL = "https://gateway.marvel.com:443/v1/public/characters?name=" + heroName + "&apikey=" + APIKey;
      var marvelResponse = ""
      var marvelCharacter = ""
  
      // We then created an AJAX call
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function (response) {
  
        //the object returns the description here:
        console.log("first: " + response.data.results[0].description);
        marvelResponse = response.data.results[0].description;
        console.log("second: " + marvelResponse);
  
        console.log(response);
  
        console.log("fourth: " + response.data.results[0].name);
        marvelCharacter = response.data.results[0].name;
  
        console.log("Fifth: " + marvelCharacter);
  
        //display the description in the char-bio div
        $("#char-bio").text(marvelResponse);
        //display name in character div
        $("#char-title").text(marvelCharacter);
  
      });
  
    }
  
    // getDescription("Hulk")
  
  
  
    
  /////////////////////////////////////////////////////
// pushing past results from Firebase to the table //
/////////////////////////////////////////////////////

function logActivity(heroName) {

    //local variables to hold hero name and date
    var heroName = heroName
    var matchDate = moment().format("MM/DD/YYYY");
  
    var newMatch = {
      hero: heroName,
      date: matchDate
    };
  
    // Uploads employee data to the database
    database.ref().push(newMatch);
  
  
    // 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
  
    
  
    // Create Firebase event for adding the search to the databas
  
    database.ref().on("child_added", function (childSnapshot) {
  
          //capture the childsnapshot values	  database.ref().on("child_added", function (childSnapshot) {
            var lastHeroName = childSnapshot.val().hero;	
            var lastMatchDate = childSnapshot.val().date;
  
            
      // Create the new row
      var newRow = $("<tr>").append(
        $("<td>").text("On " + lastMatchDate + " you were matched with " + lastHeroName),
      );
    
      // Append the new row to the train table
      $("#resultsList > tbody").append(newRow);
  
    });
  
  }
  
  });
    //OFFICIAL NAMES
    // Ant-Man - no name
    // Black Panther - no description
    // Black Widow - no description
    // Bucky -  no description
    // Captain America
    // Captain Marvel - no name
    // Deadpool - no description
    // Hawkeye -  no description
    // Hank Pym -  no description
    // Hela - no name
    //                                        Hulk
    //                                        Iron Man
    // Iron Monger - no description
    // Jessica Jones -  no description
    // Loki -  no discription
    // Nakia -  no discription
    // Nick Fury -  no discription
    // Professor X-  no discription
    // Quicksilver -  no discription
    // Rhones - no name
    // Scarlet Witch - no description
    //                                         Spider-Man
    // Starlord  -  no discription
    //                                        Wasp
    //                                        Thor 
    // Valkyrie - no name
  