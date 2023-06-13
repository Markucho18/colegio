let series = [
    {id: 32, titulo: "Breaking Bad", calificacion: 9.8},
    {id: 16, titulo: "Game of Thrones", calificacion: 8.3},
    {id: 51, titulo: "Better Call Saul", calificacion: 8.9},
    {id: 87, titulo: "Mr. Robot", calificacion: 9.3},
]

/* Ordenar por calificacion menor a mayor */
let calificaciones = series.map((serie) => serie.calificacion)
let califOrdenadas = calificaciones.sort((a, b) => b - a)
console.log(califOrdenadas)

/* Ordenar alfebeticamente los titulos */
let titulos = series.map((serie) => serie.titulo)
let titulosOrdenados = titulos.sort()
console.log(titulosOrdenados)

/* Array con IDs de las series */
let IDs = []
series.forEach((serie) => {
    IDs.push(serie.id)
})
console.log(IDs)

/* Array con solo calificaicones mayores a 9 */
let mayorQueNueve = calificaciones.filter((calificacion) => {
    return calificacion > 9;
})
console.log(mayorQueNueve)

/* Array con series en mayusculas */
let seriesMayus = []
titulos.forEach((titulo) =>{
    seriesMayus.push(titulo.toUpperCase());
})
console.log(seriesMayus)

