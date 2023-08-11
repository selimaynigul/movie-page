import FeatureMovieLoading from "@/components/featured-movie";
import CategoriesLoading from "@/components/categories";
import MoviesSectionLoading from "@/components/movies-section";

const Loading = () => {
  return (
    <>
      <CategoriesLoading />
      <FeatureMovieLoading />
      <MoviesSectionLoading />
      <MoviesSectionLoading />
      <MoviesSectionLoading />
    </>
  );
};

export default Loading;
