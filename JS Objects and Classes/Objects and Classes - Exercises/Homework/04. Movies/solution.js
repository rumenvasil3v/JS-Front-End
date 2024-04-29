function solve(moviesArray) {
    const movies = [];
    
    const addMovie = 'addMovie';
    const directedBy = 'directedBy';
    const onDate = 'onDate'; 

    for (const movie of moviesArray) {

        if (movie.includes(addMovie)) {
            const movieName = movie.split(`${addMovie} `)[1];
           
            const currentMovie = {
                name: movieName,
            }

            movies.push(currentMovie);
        } else if (movie.includes(directedBy)) {
            const movieDirectorInfo = movie.split(` ${directedBy} `);
            const [movieName, director] = movieDirectorInfo;

            const doesMovieExist = movies.find(movie => movie.name === movieName);
            if (doesMovieExist) {
                doesMovieExist.director = director;
            }
        } else if (movie.includes(onDate)) {
            const movieDateInfo = movie.split(` ${onDate} `);
            const [movieName, date] = movieDateInfo;

            const doesMovieExist = movies.find(movie => movie.name === movieName);
            if (doesMovieExist) {
                doesMovieExist.date = date;
            }
        }
    }

    const filteredMovies = movies.filter(movie => movie.date && movie.director);
    
    for (const movie of filteredMovies) {
        const jsonFormat = JSON.stringify(movie);
        console.log(jsonFormat);
    }
}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
);

solve([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
]
);