const useGenre = (selectedGenres) => {
  if (selectedGenres.lenght < 1) return "";

  const Genreid = selectedGenres.map((item) => item.id);
  return Genreid.reduce((acc, curr) => {
    return acc + "," + curr;
  }, "");
};

export default useGenre;
