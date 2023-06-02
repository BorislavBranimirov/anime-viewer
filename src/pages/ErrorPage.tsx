import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="w-4/5 max-w-screen-2xl h-[90vh] mx-auto flex flex-col justify-center items-center gap-3 text-center">
      <h1 className="text-2xl font-bold">Error</h1>
      <p>Something went wrong. Try again in a few minutes.</p>
    </div>
  );
};

export default ErrorPage;
