import { Github, Linkedin, Mail } from 'lucide-react'
import { CONTACT } from '../config/content'

function IconButton({ href, label, children }){
  const target = href.startsWith('http') ? '_blank' : undefined
  return (
    <a href={href} target={target} rel="noreferrer"
       className="icon-btn" aria-label={label} title={label}>
      {children}
    </a>
  )
}

export default function ContactIcons(){
  return (
    <div className="icon-row">
      <IconButton href={`mailto:${CONTACT.email}`} label={CONTACT.email}>
        <Mail size={18} />
      </IconButton>
      <IconButton href={CONTACT.github} label="GitHub">
        <Github size={18} />
      </IconButton>
      <IconButton href={CONTACT.linkedin} label="LinkedIn">
        <Linkedin size={18} />
      </IconButton>
    </div>
  )
}