import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  searchInput: string = '';
  selectedGenre: string = '';
  selectedYear: string = '';

  movies = [
    {
      title: "Deadpool & Wolverine",
      genre: "Acción",
      year: "2024",
      actors: "Ryan Reynolds, Hugh Jackman",
      synopsis: "Un apático Wade Wilson se afana en la vida civil tras dejar atrás sus días como Deadpool, un mercenario moralmente flexible. Pero cuando su mundo natal se enfrenta a una amenaza existencial, Wade debe volver a vestirse a regañadientes con un Wolverine aún más terco a ayudar.",
      poster: "https://s3.amazonaws.com/rtvc-assets-senalcolombia.gov.co/s3fs-public/styles/amp_1200x675_16_9/public/field/image/Deadpool%20Wolverine%20referencias%20sin%20spoierls.jpg?itok=zE4wmeuz"
  },
  {
      title: "El planeta de los simios 4: nuevo imperio",
      genre: "Acción",
      year: "2024",
      actors: "Owen Teague, Freya Allan",
      synopsis: "Ambientada varias generaciones en el futuro tras el reinado de César, en la que los simios son la especie dominante que vive en armonía y los humanos se han visto reducidos a vivir en la sombra. Mientras un nuevo y tiránico líder simio construye su imperio, un joven simio emprende un angustioso viaje que le llevará a cuestionarse todo lo que sabe sobre el pasado y a tomar decisiones que definirán el futuro de simios y humanos por igual.",
      poster: "https://hacerselacritica.com/wp-content/uploads/2024/05/70067.jpg"
  },
  {
      title: "Bad Boys Hasta la Muerte",
      genre: "Acción",
      year: "2024",
      actors: "Will Smith, Martin Lawrence",
      synopsis: "Los policías más famosos del mundo regresan con su icónica mezcla de acción al límite y comedia escandalosa, pero esta vez con un giro inesperado: ¡Los mejores de Miami se dan a la fuga! Cuarta entrega de la saga 'Dos policías rebeldes'.",
      poster: "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/06/03/USAT/73954478007-df-25849-r-copy.jpg?crop=4996,2812,x0,y0"
  },
  {
      title: "Jhon Wick 4",
      genre: "Acción",
      year: "2023",
      actors: "Keanu Reeves",
      synopsis: "John Wick descubre un camino para derrotar a la Alta Mesa. Pero para poder ganar su libertad, Wick deberá enfrentarse a un nuevo rival con poderosas alianzas en todo el mundo, capaz de convertir a viejos amigos en enemigos.",
      poster: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/06/john-wick-4-3069110.jpg?tf=3840x"
  },
  {
      title: "La vida es bella",
      genre: "Drama",
      year: "1997",
      actors: "Roberto Benigni, Nicoletta Braschi",
      synopsis: "Benigni interpreta a Guido Orefice, un judío italiano, muy optimista y vital, dueño de una librería. Con la eclosión del fascismo en el país, este buen hombre comprueba como, poco a poco, su vida se convierte en una lucha por la supervivencia, especialmente la de su hijo.",
      poster: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2016/09/192722-11-mejores-peliculas-drama.jpg?tf=3840x"
  },
  {
      title: "La lista de Schindler",
      genre: "Drama",
      year: "1993",
      actors: "Liam Neeson, Ben Kingsley, Ralph Fiennes",
      synopsis: "La historia real de Oskar Schindler, un empresario alemán que salva a más de mil refugiados judíos durante el Holocausto al emplearlos en su fábrica.",
      poster: "https://cdn.forbes.com.mx/2023/11/La-lista-de-Schindler-Netflix.webp"
  },
  {
      title: "Patos",
      genre: "Comedia",
      year: "2024",
      actors: "Kumail Nanjiani,Elizabeth Banks, Keegan-Michael Key, Awkwafina, Danny DeVito",
      synopsis: "Una familia de ánades reales convence a su padre sobreprotector de que se vayan a las vacaciones de su vida mientras intentan migrar desde Nueva Inglaterra, a través de la ciudad de Nueva York, y a las Bahamas",
      poster: "https://mexmads.com/wp-content/uploads/2023/12/snapshot.webp"
  }
  ];

  filteredMovies = this.movies;

  filterMovies() {
    this.filteredMovies = this.movies.filter(movie => {
      const matchesSearch = movie.title.toLowerCase().includes(this.searchInput.toLowerCase());
      const matchesGenre = this.selectedGenre ? movie.genre === this.selectedGenre : true;
      const matchesYear = this.selectedYear ? movie.year === this.selectedYear : true;
      return matchesSearch && matchesGenre && matchesYear;
    });
  }
}
