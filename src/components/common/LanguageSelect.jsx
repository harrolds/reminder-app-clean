import React from 'react'
import { useTranslation } from 'react-i18next'
const languages = [{ code:'nl', label:'NL' },{ code:'de', label:'DE' },{ code:'en', label:'EN' }]
export default function LanguageSelect() {
  const { i18n } = useTranslation()
  const onChange = (e)=>{ const next=e.target.value; i18n.changeLanguage(next); try{localStorage.setItem('lang',next)}catch{} }
  return (
    <select aria-label='Taalkeuze' value={i18n.language} onChange={onChange}>
      {languages.map(l=><option key={l.code} value={l.code}>{l.label}</option>)}
    </select>
  )
}
