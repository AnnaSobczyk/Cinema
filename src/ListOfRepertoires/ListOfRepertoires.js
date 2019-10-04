import React from 'react';
import Repertoire from "../Repertoire/Repertoire.js";
import moment from 'moment';
import "./ListOfRepertoires.css";

const getFilms = () => {
    return [{
        "_id": "5d9315bc1c9d44000088b24a",
        "movie_id": "tt4154796",
        "screenings": [
          {
            "_id": "5d935c201c9d4400004114f3",
            "screening_room": "5d93395b1c9d44000088b252",
            "date": "2019-10-30T18:25:00.000Z",
            "movie": "5d9315bc1c9d44000088b24a"
          },
          {
            "_id": "5d9363831c9d4400004114f5",
            "screening_room": "5d93395b1c9d44000088b252",
            "date": "2019-10-30T15:00:00.000Z",
            "movie": "5d9315bc1c9d44000088b24a"
          }
        ],
        "info": {
          "Title": "Avengers: Endgame",
          "Year": "2019",
          "Rated": "PG-13",
          "Released": "26 Apr 2019",
          "Runtime": "181 min",
          "Genre": "Action, Adventure, Sci-Fi",
          "Director": "Anthony Russo, Joe Russo",
          "Writer": "Christopher Markus (screenplay by), Stephen McFeely (screenplay by), Stan Lee (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by), Jim Starlin (Thanos,  Gamora & Drax created by), Jack Kirby (Groot created by)",
          "Actors": "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",
          "Plot": "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
          "Language": "English, Japanese, Xhosa",
          "Country": "USA, UK, Canada",
          "Awards": "N/A",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
          "Ratings": [
            {
              "Source": "Internet Movie Database",
              "Value": "8.6/10"
            },
            {
              "Source": "Rotten Tomatoes",
              "Value": "94%"
            },
            {
              "Source": "Metacritic",
              "Value": "78/100"
            }
          ],
          "Metascore": "78",
          "imdbRating": "8.6",
          "imdbVotes": "561,813",
          "imdbID": "tt4154796",
          "Type": "movie",
          "DVD": "30 Jul 2019",
          "BoxOffice": "N/A",
          "Production": "Marvel Studios",
          "Website": "N/A",
          "Response": "True"
        }
      },
      {
        "_id": "5d9315bc1c9d44000088b24a",
        "movie_id": "tt4154796",
        "screenings": [
          {
            "_id": "5d935c201c9d4400004114f3",
            "screening_room": "5d93395b1c9d44000088b252",
            "date": "2019-10-30T18:25:00.000Z",
            "movie": "5d9315bc1c9d44000088b24a"
          },
          {
            "_id": "5d9363831c9d4400004114f5",
            "screening_room": "5d93395b1c9d44000088b252",
            "date": "2019-10-30T15:00:00.000Z",
            "movie": "5d9315bc1c9d44000088b24a"
          }
        ],
        "info": {
          "Title": "Avengers: Endgame",
          "Year": "2019",
          "Rated": "PG-13",
          "Released": "26 Apr 2019",
          "Runtime": "181 min",
          "Genre": "Action, Adventure, Sci-Fi",
          "Director": "Anthony Russo, Joe Russo",
          "Writer": "Christopher Markus (screenplay by), Stephen McFeely (screenplay by), Stan Lee (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by), Jim Starlin (Thanos,  Gamora & Drax created by), Jack Kirby (Groot created by)",
          "Actors": "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",
          "Plot": "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
          "Language": "English, Japanese, Xhosa",
          "Country": "USA, UK, Canada",
          "Awards": "N/A",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
          "Ratings": [
            {
              "Source": "Internet Movie Database",
              "Value": "8.6/10"
            },
            {
              "Source": "Rotten Tomatoes",
              "Value": "94%"
            },
            {
              "Source": "Metacritic",
              "Value": "78/100"
            }
          ],
          "Metascore": "78",
          "imdbRating": "8.6",
          "imdbVotes": "561,813",
          "imdbID": "tt4154796",
          "Type": "movie",
          "DVD": "30 Jul 2019",
          "BoxOffice": "N/A",
          "Production": "Marvel Studios",
          "Website": "N/A",
          "Response": "True"
        }
      },
      {
        "_id": "5d9315bc1c9d44000088b24a",
        "movie_id": "tt4154796",
        "screenings": [
          {
            "_id": "5d935c201c9d4400004114f3",
            "screening_room": "5d93395b1c9d44000088b252",
            "date": "2019-10-30T18:25:00.000Z",
            "movie": "5d9315bc1c9d44000088b24a"
          },
          {
            "_id": "5d9363831c9d4400004114f5",
            "screening_room": "5d93395b1c9d44000088b252",
            "date": "2019-10-30T15:00:00.000Z",
            "movie": "5d9315bc1c9d44000088b24a"
          }
        ],
        "info": {
          "Title": "Avengers: Endgame",
          "Year": "2019",
          "Rated": "PG-13",
          "Released": "26 Apr 2019",
          "Runtime": "181 min",
          "Genre": "Action, Adventure, Sci-Fi",
          "Director": "Anthony Russo, Joe Russo",
          "Writer": "Christopher Markus (screenplay by), Stephen McFeely (screenplay by), Stan Lee (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by), Jim Starlin (Thanos,  Gamora & Drax created by), Jack Kirby (Groot created by)",
          "Actors": "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",
          "Plot": "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
          "Language": "English, Japanese, Xhosa",
          "Country": "USA, UK, Canada",
          "Awards": "N/A",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
          "Ratings": [
            {
              "Source": "Internet Movie Database",
              "Value": "8.6/10"
            },
            {
              "Source": "Rotten Tomatoes",
              "Value": "94%"
            },
            {
              "Source": "Metacritic",
              "Value": "78/100"
            }
          ],
          "Metascore": "78",
          "imdbRating": "8.6",
          "imdbVotes": "561,813",
          "imdbID": "tt4154796",
          "Type": "movie",
          "DVD": "30 Jul 2019",
          "BoxOffice": "N/A",
          "Production": "Marvel Studios",
          "Website": "N/A",
          "Response": "True"
        }
      }
    ]

//     return [{movie: "Title", hours: ["11:15", "13:15","15:15", "16:15", "13:15","15:15", "16:15", "13:15","15:15", "16:15", "13:15","15:15", "16:15", "13:15","15:15", "16:15", "13:15","15:15", "16:15"] },
//     {movie: "Title", hours: ["10:15", "12:15","15:15", "18:15", "13:15","15:15", "16:15", "13:15","21:15", "22:15"] } ,
//     {movie: "Title", hours: ["10:15", "12:15","15:15", "18:15", "13:15","15:15", "16:15", "13:15","15:15", "23:15"] } ,
//     {movie: "Title", hours: ["10:15", "12:15","15:15", "18:15", "13:15","15:15", "16:15", "13:15","15:15", "13:15"] } ,
//     {movie: "Title", hours: ["10:15", "12:15","15:15", "18:15", "13:15","15:15", "16:15", "13:15","15:15", "23:15"] } ,
//     {movie: "Title", hours: ["10:15", "12:15","15:15", "18:15", "13:15","15:15", "16:15", "13:15","15:15", "21:15"] } ,
//     {movie: "Title", hours: ["10:15", "12:15","15:15", "18:15", "13:15","15:15", "16:15", "13:15","15:15", "12:15"] } ,
//         {movie: "Title", hours: ["12:15", "13:15","16:15", "18:15", "13:15","15:15", "16:15", "13:15","15:15", "23:15"] }];
}

class ListOfRepertoires extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            repertoire: [],
            // showReservation: false
        };
        this.markedDate = null;
    }

    componentDidMount(){
        if(!this.state.showReservation){
            this.setState({repertoire: getFilms()});
            this.markedDate = document.querySelector(".date");
            this.markedDate.style.backgroundColor = "rgba(90,90,90,0.8)";
        }
    }

    // onShowReservation = (screeningId) => {
    //     this.setState({showReservation: true});
    // }

    // onHideReservation = () =>{
    //     console.log("ListOfRepertoires onHideReservation")
    //     this.setState({showReservation: false});
    // }

    showMoviesForDay(e, date){
        this.markedDate.style.backgroundColor = "transparent";
        e.currentTarget.style.backgroundColor = "rgba(90,90,90,0.8)";
        this.markedDate = e.currentTarget;
        //wywołać zapytanie o filmy z podaną date, i wywołać na danych setstate()
    }

    renderComponent() {
        // if(this.state.showReservation){
        //     return (
        //         <div id="container">
        //             <Reservation onHideReservation = { this.onHideReservation.bind(this) }  />
        //         </div>
        //     );
        // }else {
            return (
                <div id="container">
                    <p style = {{fontSize: "30px", color: "white"}}>Movies</p>
                    <div id="dateForm">
                        {
                            [0,1,2,3,4,5].map(d => <div key = {d} className = "date" onClick = {(e) => this.showMoviesForDay(e, moment().clone().add(d, "day").format("DD.MM.YYYY"))}>
                                                {moment().clone().add(d, "day").format("DD.MM")}
                                            </div>
                                            )
                        }

                    </div>
                    {
                        this.state.repertoire.map((r) => <Repertoire  key={r._id} movieDetails = {r}/>) //onShowReservation = { this.onShowReservation.bind(this) }
                    }
                </div>
            );
        //}
    }

    render(){
        return (
            <div className="div-wraper">
                { this.renderComponent() }
            </div>
        );
    }


}

export default ListOfRepertoires;