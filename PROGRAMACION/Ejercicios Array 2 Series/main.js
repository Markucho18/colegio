let series = [
    {id: 32, titulo: "Breaking Bad", calificacion: 9.8},
    {id: 16, titulo: "Game of Thrones", calificacion: 8.3},
    {id: 51, titulo: "Better Call Saul", calificacion: 8.9},
    {id: 87, titulo: "Mr. Robot", calificacion: 9.3},
]

let calificaciones = series.map((serie) => serie.calificacion)
let califOrdenadas = calificaciones.sort((a, b) => a + b)
console.log(calificaciones)
console.log(califOrdenadas)