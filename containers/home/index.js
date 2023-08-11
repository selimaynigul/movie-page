import Categories from "@/components/categories";
import FeaturedMovie from "@/components/featured-movie";
import MoviesSection from "@/components/movies-section";
import Movies from "@/mocks/movies.json";
import Genres from "@/mocks/genres.json";

const HomeContainer = ({ selectedCategory }) => {
  return (
    <>
      <FeaturedMovie movie={Movies.results[0]} />
      <Categories categories={Genres.genres.slice(0, 5)} />
      {selectedCategory.movies.length > 0 && (
        <MoviesSection
          title={
            Genres.genres.find((genre) => `${genre.id}` === selectedCategory.id)
              .name
          }
          movies={selectedCategory.movies}
        />
      )}
      <MoviesSection
        title="Popular Movies"
        movies={Movies.results.slice(1, 7)}
      />
      <MoviesSection
        title="Your Favourites"
        movies={Movies.results.slice(7, 13)}
      />
    </>
  );
};

export default HomeContainer;
