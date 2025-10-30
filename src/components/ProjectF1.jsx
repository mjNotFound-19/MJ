import { F1_RESULTS } from '../config/content'

export default function ProjectF1(){
  return (
    <div className="glass rounded-2xl border border-gray-800 p-0 overflow-hidden">
      <div className="p-6 md:p-8">
        <h3 className="text-2xl font-bold">Flat Out F1 — Intelligent Race Analytics</h3>
        <p className="text-gray-300 mt-3">
          AI-powered Formula 1 race prediction system that combines telemetry, lap-time statistics,
          and machine-learning models to forecast finishing positions and pit strategies.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div>
            <h4 className="font-semibold">Core Features</h4>
            <ul className="text-gray-300 mt-2 space-y-1 list-disc ml-5">
              <li>Real-time telemetry ingestion via FastF1 API</li>
              <li>Hybrid ML pipeline (XGBoost + Neural Network)</li>
              <li>Predictive leaderboard & pit strategy estimator</li>
              <li>Grafana dashboards and benchmarking across circuits</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">🏁 Overall Accuracy (Australia 2025 – Mexico 2025)</h4>
            <div className="table-wrap mt-2">
              <table className="metrics-table text-sm">
                <thead>
                  <tr><th>🧩 Metric</th><th>📊 Value</th></tr>
                </thead>
                <tbody>
                  {F1_RESULTS.map(([m,v]) => (
                    <tr key={m}><td>{m}</td><td>{v}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-400 mt-2 text-sm">
              These results highlight the model’s consistent accuracy in predicting top-performing drivers across recent Grands Prix.
            </p>
          </div>
        </div>

        <a
          href="https://github.com/mjNotFound-19/Flat_Out_F1"
          target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-2 mt-6 px-5 py-3 rounded-xl bg-primary text-black font-semibold shadow-glow hover:brightness-110 transition">
          View on GitHub ↗
        </a>
      </div>
    </div>
  )
}