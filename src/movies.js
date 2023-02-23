// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map((movie) => {return movie.director})
    return allDirectors
}

function getSingleDirectors(moviesArray) {
    return [...new Set(getAllDirectors(moviesArray))];
  }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const stevenDrama = moviesArray.filter((movie) =>
        movie.genre.includes("Drama") && movie.director.includes("Steven Spielberg")
    )
    return stevenDrama.length
} 

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (moviesArray.length) {

        const allScores = moviesArray.reduce((acc, elm) => {
            if (!elm.score) {
                elm.score = 0
            }
            return acc + elm.score
        }, 0)

        const avgScore = allScores / moviesArray.length

        return Number(avgScore.toFixed(2))
    }

     else {return 0}

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(elm => {
        return elm.genre.includes('Drama')
    })

    return scoresAverage(dramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
