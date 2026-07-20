const RouteDetails = ({ routeData, loading }) => {
  if (!routeData && !loading) {
    return null;
  }

  return (
    <div className="absolute bottom-4 right-4 z-[1000] w-[min(92vw,360px)] rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-2xl backdrop-blur">
      {loading ? (
        <p className="text-sm text-slate-500">Analyzing the safest path...</p>
      ) : (
        <>
          <h3 className="text-lg font-semibold text-slate-800">Route Summary</h3>
          <div className="mt-3 space-y-2 text-sm text-slate-600">
            <div className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2">
              <span>Safety Score</span>
              <span className="font-semibold text-emerald-600">{routeData?.safety_score ?? '—'}</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2">
              <span>Travel Time</span>
              <span className="font-semibold text-slate-800">{routeData?.travel_time ?? '—'}</span>
            </div>
            <div className="rounded-lg bg-slate-50 px-3 py-2">
              <p className="font-medium text-slate-700">Explanation</p>
              <p className="mt-1 text-slate-600">{routeData?.explanation ?? 'No details returned yet.'}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RouteDetails;
