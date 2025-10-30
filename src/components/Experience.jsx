import { EXPERIENCE } from '../config/content'

export default function Experience(){
  return (
    <div className="grid gap-6">
      {EXPERIENCE.map((job) => (
        <div key={job.role+job.org} className="glass rounded-2xl p-6 border border-gray-800">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <h3 className="text-xl font-semibold">{job.role} — <span className="text-primary">{job.org}</span></h3>
            <span className="text-gray-400 text-sm">{job.period}</span>
          </div>
          <ul className="mt-3 text-gray-300 space-y-1 list-disc ml-5">
            {job.bullets.map(b => <li key={b}>{b}</li>)}
          </ul>
        </div>
      ))}
    </div>
  )
}