import { SKILLS } from '../config/content'

export default function SkillList(){
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Object.entries(SKILLS).map(([group, items]) => (
        <div key={group} className="glass rounded-2xl p-6 border border-gray-800">
          <h3 className="text-lg font-semibold">{group}</h3>
          <ul className="mt-3 text-gray-300 space-y-1">
            {items.map(i => <li key={i}>• {i}</li>)}
          </ul>
        </div>
      ))}
    </div>
  )
}