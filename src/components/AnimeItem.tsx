import { Link } from 'react-router-dom';
import StarIcon from '../assets/StarIcon';
import { IApiAnime } from '../utils/types';

const AnimeItem = ({ anime }: { anime: IApiAnime }) => {
  return (
    <div className="relative group">
      <Link to={`/anime/${anime.mal_id}`}>
        <div className="h-full pb-6 rounded-lg overflow-hidden bg-gradient-to-b from-zinc-950/20 from-80% to-purple-950/20 shadow-md transition-all outline outline-1 outline-violet-900/50 group-hover:outline-2 group-hover:outline-violet-900">
          <div className="relative w-full h-[400px] overflow-hidden">
            <img
              src={anime.images.webp.large_image_url}
              alt="Anime image"
              className="w-full h-full object-cover transition-transform group-hover:scale-125"
            />
            {anime.airing && (
              <div className="absolute top-0 right-0 bg-violet-900 text-sm px-3 py-2 rounded-bl-md">
                Airing
              </div>
            )}
          </div>
          <div className="h-[133px] flex flex-col p-3 justify-between">
            <p className="text-lg font-bold break-words overflow-hidden">
              {anime.title}
            </p>
            <p className="flex items-center justify-center gap-1">
              <span className="text-yellow-500">
                <StarIcon />
              </span>
              {anime.score}
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 w-1/2 mx-auto translate-y-1/2 text-center p-2 bg-violet-900 rounded-full shadow-md">
          <span>#{anime.rank}</span>
        </div>
      </Link>
    </div>
  );
};

export default AnimeItem;
