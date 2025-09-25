import React from 'react'
export default function SectionCard({ title, children }) {
  return (
    <section className='rr-card'>
      {title && <h2 className='rr-card-title'>{title}</h2>}
      <div>{children}</div>
    </section>
  )
}
