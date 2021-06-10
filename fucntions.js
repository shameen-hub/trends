// var worldwidetrends=new Array("Flash","&nbsp;&nbsp;&nbsp;John","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7.8","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;93%","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;America","Arrow","Elvish" ,"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7.5","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;90%","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Germany","Wonder","Alex","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7.2","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;87%","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Italy","Horrors","kevin","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.5","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;75%","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Turkey","Roger","Alice","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5.5","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;59%","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bangladesh");
// var World_wide= document.querySelector('#Global Trends');
// document.write("<h1> Shows&nbsp;&nbsp;&nbsp;Directors&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IMDB&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Audience&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Country&nbsp;&nbsp;&nbsp;&nbsp;&nbsp </h1>" +"<br/>");
// if(World_wide)
// {
//     for(let i=0;i<worldwidetrends.length;i=i+5)
//     {
//         document.write(worldwidetrends[i]+"&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+worldwidetrends[i+1]  +"&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+     worldwidetrends[i+2]+"&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp"+  worldwidetrends[i+3] +"&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp"+  worldwidetrends[i+4]+ "<br/>");
//     }
// }

const movies = new Array("The Shawshank Redemption 1994",
    "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    "Director : Frank Darabont",
    "imdb rating : 9.4",
    "The Godfather (1972)",
    "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
    "Director: Francis Ford Coppola",
    "imdb rating : 9.2",
    "The Godfather: Part II",
    "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael.",
    "Director: Francis Ford Coppola ",
    "imdb rating : 9.0",
    "The Dark Knight",
    "When the menace  Joker wreaks havoc and chaos on the people of Gotham,Btaman must accepts this challenge",
    "Director: Francis Chritopher Noala ",
    "imdb rating : 9.0",
    "12 Angry Man",
    "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
    "Director: Sidney Lumet  ",
    "imdb rating : 9.0",
    "Schindler's List",
    "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce",
    "Director: Stephan Spielberg  ",
    "imdb rating : 8.9",
    "Lord of the Rings",
    "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam ",
    "Director: Peter Jackson  ",
    "imdb rating : 8.9",
    "Pulp Fiction",
    "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales. ",
    "Director: Quentin Trantino  ",
    "imdb rating : 8.9",
    "The Good,the bad and the ugly",
    "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold ",
    "Director: Sergio Leone ",
    "imdb rating : 8.8",
    "The Lord of the Rings",
    "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    "Director: Peter Jackson ",
    "imdb rating : 8.8",
);
const Shows = new Array("Planet Earth II",
    "Wildlife documentary series with David Attenborough, beginning with a look at the remote islands which offer sanctuary to some of the planet's rarest creatures, to the beauty of cities, which are home to humans, and animals..",
    "Star: David Attenborough",
    "imdb rating : 9.5",
    "Planet Earth",
    "Emmy Award-winning, 11 episodes, five years in the making, the most expensive nature documentary series ever commissioned by the BBC, and the first to be filmed in high definition",
    "Star: Francis Ford Coppola, Thomas ,Sigournery",
    "imdb rating : 9.4",
    "Band of Brothers ",
    "The story of Easy Company of the U.S. Army 101st Airborne Division, and their mission in World War II Europe, from Operation Overlord, through V-J Day.",
    "Star: Scott, Damian, Ron ",
    "imdb rating : 9.4",
    "Breaking Bad",
    "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
    "Star: Bryan, Aron,Anna",
    "imdb rating : 9.4",
    "Chernobyl",
    "In April 1986, an explosion at the Chernobyl nuclear power plant in the Union of Soviet Socialist Republics becomes one of the world's worst man-made catastrophes.",
    "Star: Jessie  ",
    "imdb rating : 9.4",
    "The wire",
    "The Baltimore drug scene, as seen through the eyes of drug dealers and law enforcement.",
    "Star: Dominic West, Lanc Reddick, Sonja Sohn ",
    "imdb rating : 9.3",
    "Blue Planet II",
    "David Attenborough returns to the world's oceans in this sequel to the acclaimed documentary filming rare and unusual creatures of the deep, as well as documenting the problems our oceans face",
    "Star: David Attenborough, Peter Drost, Roger Horrocks  ",
    "imdb rating : 9.3",
    "Our Planet ",
    "Documentary series focusing on the breadth of the diversity of habitats around the world, from the remote Arctic wilderness and mysterious deep oceans to the vast landscapes of Africa and diverse jungles of South America ",
    "Star: David Attenborough   ",
    "imdb rating : 9.3",
    "Cosmos: A spacetimeodyssey",
    "An exploration of our discovery of the laws of nature and coordinates in space and time",
    "Star: Neil ",
    "imdb rating : 9.3",
    "Cosmos",
    "Astronomer Carl Sagan leads us on an engaging guided tour of the various elements and cosmological theories of the universe.",
    "Star: Neil ",
    "imdb rating : 9.3",
);
const moviesbtn = document.querySelector(".movies-btn");
const tvbtn = document.querySelector(".tv-btn");
const display_container = document.querySelector(".display-box");
display_container.style.background = "#ffffff";
moviesbtn.addEventListener('click', moviespress);
tvbtn.addEventListener('click', showpress);
function moviespress(e) {
    e.preventDefault();

    var count = 1;
    for (var i = 0; i < movies.length; i += 4) {
        // console.log(movies[i]);
        let moviename = document.createElement("h1");
        let description = document.createElement("h4");
        let movies_dir = document.createElement("h4");
        let rating = document.createElement("h4");
        let line = document.createElement("hr");
        line.style.borderTop = "2px solid black";
        moviename.innerText = (count) + ". " + movies[i];
        count++;
        description.innerText = movies[i + 1];
        movies_dir.innerText = movies[i + 2];
        rating.innerText = movies[i + 3];
        display_container.appendChild(moviename);
        display_container.appendChild(description);
        display_container.appendChild(movies_dir);
        display_container.appendChild(rating);
        display_container.appendChild(line);
    }



}
function showpress(e) {
    e.preventDefault();

    var count1 = 1;
    for (var i = 0; i < Shows.length; i += 4) {
        // console.log(movies[i]);
        let showname = document.createElement("h1");
        let description = document.createElement("h4");
        let show_star = document.createElement("h4");
        let rating = document.createElement("h4");
        let line = document.createElement("hr");
        line.style.borderTop = "2px solid black";
        showname.innerText = (count1) + ". " + Shows[i];
        count1++;
        description.innerText = Shows[i + 1];
        show_star.innerText = Shows[i + 2];
        rating.innerText = Shows[i + 3];
        display_container.appendChild(showname);
        display_container.appendChild(description);
        display_container.appendChild(show_star);
        display_container.appendChild(rating);
        display_container.appendChild(line);
    }


}

