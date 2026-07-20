import { useState } from 'react';

const RouteForm = ({ origin, destination, setOrigin, setDestination, onSubmit, loading }) => {
  const [localOrigin, setLocalOrigin] = useState(origin);
  const [localDestination, setLocalDestination] = useState(destination);

  const handleSubmit = (event) => {
    event.preventDefault();
    setOrigin(localOrigin);
    setDestination(localDestination);
    onSubmit(localOrigin, localDestination);
  };

  return (
    <div className="absolute left-4 top-4 z-[1000] w-[min(92vw,420px)] rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-2xl backdrop-blur">
      <h2 className="text-lg font-semibold text-slate-800">SafeRoute AI</h2>
      <p className="mt-1 text-sm text-slate-500">Find the safest route through the city.</p>

      <form onSubmit={handleSubmit} className="mt-4 space-y-3">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Origin</label>
          <input
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none ring-0 focus:border-emerald-500"
            placeholder="Enter origin street"
            value={localOrigin}
            onChange={(event) => setLocalOrigin(event.target.value)}
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Destination</label>
          <input
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:border-emerald-500"
            placeholder="Enter destination street"
            value={localDestination}
            onChange={(event) => setLocalDestination(event.target.value)}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-emerald-400"
        >
          {loading ? 'Finding route...' : 'Find Safe Route'}
        </button>
      </form>
    </div>
  );
};

export default RouteForm;
