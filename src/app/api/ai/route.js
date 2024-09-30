// import { NextResponse } from 'next/server'
// import { CohereClient } from 'cohere-ai'

// const cohere = new CohereClient({
//   token: process.env.COHERE_API_KEY,
// })

// export async function POST(request) {
//   const { movies, places, foods, dislikes } = await request.json()

//   try {
//     const response = await cohere.chat({
//       preamble: "Teniendo en cuenta tus películas, lugares, y comidas favoritas, y evitando los dislikes que has marcado, te voy a recomendar nuevas opciones que coincidan con tus gustos geolocalizadas en Argentina (excepto para películas). La respuesta debe estar en formato JSON, con las keys 'food', 'place', y 'movie'. Cada una de estas keys debe contener un array con las recomendaciones, en caso de que haya opciones disponibles",
//       message: `likes: ${movies.join(', ')}, places: ${places.join(', ')}, foods: ${foods.join(', ')},dislikes: ${dislikes.join(', ')}`,
//     })

//     const resultJSON = JSON.parse(response.text)
//     return NextResponse.json(resultJSON)
//   } catch (error) {
//     console.error(error)
//     return NextResponse.json({ error: 'Ocurrió un error al generar sugerencias' })
//   }
// }




import { NextResponse } from 'next/server';
import { CohereClient } from 'cohere-ai';

const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY,
});

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const getMostLikedItems = async (eventId, category) => {
  try {
    const response = await fetch(`${API_URL}/events/${eventId}/${category}/mostLiked`);
    if (!response.ok) {
      throw new Error(`Error al obtener los elementos más likeados: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error en getMostLikedItems:', error);
    throw error;
  }
};

const getDislikedItems = async (eventId, category) => {
  try {
    const response = await fetch(`${API_URL}/events/${eventId}/${category}/disliked`);
    if (!response.ok) {
      throw new Error(`Error al obtener los elementos dislikeados: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error en getDislikedItems:', error);
    throw error;
  }
};

export async function GET(eventId) {

  if (!eventId) {
    return NextResponse.json({ error: 'EventId is required' }, { status: 400 });
  }

  try {
    const movies = await getMostLikedItems(eventId, 'movies');
    const places = await getMostLikedItems(eventId, 'places');
    const foods = await getMostLikedItems(eventId, 'meals');
    const dislikes = await getDislikedItems(eventId, 'meals');

    const response = await cohere.chat({
      preamble: "Teniendo en cuenta tus películas, lugares, y comidas favoritas, y evitando los dislikes que has marcado, te voy a recomendar nuevas opciones que coincidan con tus gustos geolocalizadas en Argentina (excepto para películas). La respuesta debe estar en formato JSON, con las keys 'food', 'place', y 'movie'. Cada una de estas keys debe contener un array con las recomendaciones, en caso de que haya opciones disponibles",
      message: `likes: ${movies.map(movie => movie.title).join(', ')}, places: ${places.map(place => place.title).join(', ')}, foods: ${foods.map(food => food.title).join(', ')}, dislikes: ${dislikes.map(dislike => dislike.title).join(', ')}`,
    });

    const resultJSON = JSON.parse(response.text);
    return NextResponse.json(resultJSON);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Ocurrió un error al generar sugerencias' }, { status: 500 });
  }
}