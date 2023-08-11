import HomeContainer from "@/containers/home";
import Movies from "@/mocks/movies.json";

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const HomePage = async ({ params }) => {
  await delay(2000);

  let selectedCategory;
  if (params.category?.length > 0) {
    selectedCategory = true;
  }

  console.log(params.category);
  return (
    <HomeContainer
      selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: selectedCategory ? Movies.results.slice(0, 7) : [],
      }}
    />
  );
};

export default HomePage;
