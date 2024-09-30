import { NextResponse } from 'next/server'
import { CohereClient } from 'cohere-ai'

const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY,
})

export async function POST(request) {
  const { movies, places, foods, dislikes } = await request.json()

  try {
    const response = await cohere.chat({
      preamble: "Teniendo en cuenta tus películas, lugares, y comidas favoritas, y evitando los dislikes que has marcado, te voy a recomendar nuevas opciones que coincidan con tus gustos geolocalizadas en Argentina (excepto para películas). La respuesta debe estar en formato JSON, con las keys 'food', 'place', y 'movie'. Cada una de estas keys debe contener un array con las recomendaciones, en caso de que haya opciones disponibles",
      message: `likes: ${movies.join(', ')}, , places: ${places.join(', ')}, foods: ${foods.join(', ')},dislikes: ${dislikes.join(', ')}`,
    })

    const resultJSON = JSON.parse(response.text)
    return NextResponse.json(resultJSON)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Ocurrió un error al generar sugerencias' })
  }
}