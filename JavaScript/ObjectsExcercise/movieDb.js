let movieDb = [{ title: "In Bruges", rating: 4, hasWatched: true }, { title: "Frozen", rating: 4.5, hasWatched: false },
    { title: "Mad Max Fury Road", rating: 5, hasWatched: true }, { title: "Les Miserables", rating: 3.5, hasWatched: false },
    { title: "The Termianl", rating: 5, hasWatched: true }
];

movieDb.forEach(function(item) {
    if (item.hasWatched === true) {
        console.log("You have watched " + item.title + " - " + item.rating + " stars");
    } else {

        console.log("You have not watched " + item.title + " - " + item.rating + " stars");
    }
})