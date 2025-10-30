import { CERTIFICATIONS } from "../config/content";

export default function Certifications() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {CERTIFICATIONS.map((cert) => (
        <div
          key={cert.title}
          className="glass rounded-2xl p-6 border border-gray-800 hover:border-blue-500 hover:shadow-[0_0_12px_rgba(0,180,255,0.4)] transition-all duration-300"
        >
          {/* Header: Masked neon-blue Google logo + title */}
          <div className="flex items-center gap-3 mb-3">
            <div className="relative w-10 h-10">
              <div
                className="absolute inset-0 bg-[rgba(0,180,255,0.9)]"
                style={{
                  mask: `url(${cert.logo}) center/contain no-repeat`,
                  WebkitMask: `url(${cert.logo}) center/contain no-repeat`,
                  filter: "drop-shadow(0 0 10px rgba(0,180,255,0.6))",
                }}
              />
            </div>

            <h3 className="text-lg font-semibold text-primary leading-tight">
              {cert.title}
            </h3>
          </div>

          {/* Body: Issuer, Date, Description */}
          <p className="text-gray-300">{cert.issuer}</p>
          <p className="text-sm text-gray-400 mt-1">{cert.date}</p>
          <p className="text-gray-400 text-sm mt-2">{cert.description}</p>

          {/* Footer: View Credential */}
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-blue-400 hover:text-blue-300 underline"
          >
            View Credential 
          </a>
        </div>
      ))}
    </div>
  );
}

