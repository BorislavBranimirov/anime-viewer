import { IApiResponse } from '../utils/types';
import AnimeItem from './AnimeItem';
import {
  useLoaderData,
  useNavigation,
  useSearchParams,
} from 'react-router-dom';
import Spinner from '../assets/Spinner';

const Viewer = () => {
  const { data: animeList, pagination } = useLoaderData() as IApiResponse;
  const navigation = useNavigation();
  const [searchParameters, setSearchParameters] = useSearchParams();
  const { current_page, has_next_page } = pagination;

  if (navigation.state === 'loading') {
    return (
      <div className="w-full h-[70vh] flex justify-center items-center">
        <Spinner />
      </div>
    );
  }

  const querySearchParam = searchParameters.get('q');

  return (
    <>
      {animeList.length === 0 ? (
        <p className="font-bold text-lg text-center">No entries found&#8230;</p>
      ) : (
        <div className="mb-16 grid auto-rows-fr grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-16">
          {animeList.map((anime) => (
            <AnimeItem key={anime.mal_id} anime={anime} />
          ))}
        </div>
      )}
      <div className="flex justify-between my-5">
        <button
          className="py-2 px-5 rounded-lg bg-violet-900 transition-colors hover:bg-violet-700/70 active:bg-violet-700/50 disabled:bg-violet-900/50"
          disabled={!(current_page > 1)}
          onClick={() => {
            if (current_page > 1) {
              setSearchParameters({
                ...(querySearchParam && { q: querySearchParam }),
                page: (current_page - 1).toString(),
              });
            }
          }}
        >
          Previous
        </button>
        <button
          className="py-2 px-5 rounded-lg bg-violet-900 transition-colors hover:bg-violet-700/70 active:bg-violet-700/50 disabled:bg-violet-900/50"
          disabled={!has_next_page}
          onClick={() => {
            if (has_next_page) {
              setSearchParameters({
                ...(querySearchParam && { q: querySearchParam }),
                page: (current_page + 1).toString(),
              });
            }
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Viewer;
