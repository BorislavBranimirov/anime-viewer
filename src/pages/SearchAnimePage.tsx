import { Form, useSearchParams } from 'react-router-dom';
import Viewer from '../components/Viewer';
import { useEffect, useState } from 'react';

const SearchAnimePage = () => {
  const [searchParameters] = useSearchParams();
  const querySearchParam = searchParameters.get('q');
  const [query, setQuery] = useState(querySearchParam || '');

  useEffect(() => {
    setQuery(querySearchParam || '');
  }, [querySearchParam]);

  return (
    <div className="w-4/5 max-w-screen-2xl mx-auto">
      <Form className="py-5 w-full flex gap-3">
        <input
          id="q"
          type="text"
          name="q"
          className="bg-zinc-800 px-3 py-2 rounded-lg border border-zinc-700 w-full min-w-0"
          placeholder="Search&#8230;"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <button
          type="submit"
          className="py-2 px-5 rounded-lg bg-violet-900 transition-colors hover:bg-violet-700/70 active:bg-violet-700/50 shrink-0"
        >
          Search
        </button>
      </Form>
      <Viewer />
    </div>
  );
};

export default SearchAnimePage;
