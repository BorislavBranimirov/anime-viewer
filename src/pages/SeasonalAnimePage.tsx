import Viewer from '../components/Viewer';

const SeasonalAnimePage = () => {
  return (
    <div className="w-4/5 max-w-screen-2xl mx-auto">
      <h1 className="text-2xl font-bold py-6">Current Anime Season</h1>
      <Viewer />
    </div>
  );
};

export default SeasonalAnimePage;
