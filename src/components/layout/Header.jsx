import React from 'react'
import LanguageSelect from '@/components/common/LanguageSelect'
export default function Header() {
  return (
    <header className='rr-header'>
      <div className='rr-container rr-header-inner'>
        <h1 className='rr-app-title'>Reminder App</h1>
        <LanguageSelect />
      </div>
    </header>
  )
}
