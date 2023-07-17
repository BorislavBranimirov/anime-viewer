import { useLoaderData } from 'react-router-dom';
import { IApiAnime } from '../utils/types';
import StarIcon from '../assets/StarIcon';
import HeartIcon from '../assets/HeartIcon';

const AnimePage = () => {
  const anime = useLoaderData() as IApiAnime;

  return (
    <div className="w-[90%] md:w-4/5 max-w-screen-2xl md:h-[90vh] mx-auto my-10 md:my-0 flex justify-center items-center">
      <div className="w-full md:h-[70vh] rounded-lg overflow-hidden flex flex-col md:flex-row shadow-lg outline outline-2 outline-violet-900">
        <div className="relative h-full w-auto shrink-0">
          <img
            src={anime.images.webp.large_image_url}
            alt="Anime image"
            className="w-full md:w-auto h-full"
          />
          {anime.airing && (
            <div className="absolute top-0 right-0 bg-violet-900 text-sm px-3 py-2 rounded-bl-md">
              Airing
            </div>
          )}
        </div>
        <div className="bg-gradient-to-b from-zinc-950/20 from-70% to-purple-950/20 px-5 md:px-10 py-7 flex flex-col gap-3 min-w-0 grow">
          <h2 className="text-2xl font-bold text-center">{anime.title}</h2>
          <div className="flex justify-between items-center flex-wrap">
            <p>#{anime.rank}</p>
            <div className="flex items-center gap-3">
              <p className="flex items-center gap-1">
                <span className="text-yellow-500">
                  <StarIcon />
                </span>
                {anime.score}
              </p>
              <p className="flex items-center gap-1">
                <span className="text-rose-500">
                  <HeartIcon />
                </span>
                {anime.favorites}
              </p>
            </div>
          </div>
          <div className="flex justify-between flex-wrap">
            {!!anime.year && (
              <p>
                <span className="font-bold">Year:</span> {anime.year}
              </p>
            )}
            {!!anime.episodes && (
              <p>
                <span className="font-bold">Episodes:</span> {anime.episodes}
              </p>
            )}
          </div>
          {!!anime.synopsis && (
            <p className="whitespace-pre-wrap break-words overflow-auto md:pr-3">
              {anime.synopsis}
            </p>
          )}
          <p>
            <span className="font-bold">Studios: </span>
            {anime.studios.map((studio) => studio.name).join(', ')}
          </p>
          <div className="flex gap-3 flex-wrap">
            {anime.genres.map((genre) => {
              return (
                <span
                  key={genre.mal_id}
                  className="px-2 py-1.5 bg-purple-900 rounded-xl text-sm"
                >
                  {genre.name}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimePage;
