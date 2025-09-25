import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import nl from './locales/nl.json'
import de from './locales/de.json'
import en from './locales/en.json'
const saved = (()=>{try{return localStorage.getItem('lang')}catch{return null}})()
const lng = saved || 'nl'
i18n.use(initReactI18next).init({
  resources:{nl:{translation:nl},de:{translation:de},en:{translation:en}},
  lng,fallbackLng:'en',interpolation:{escapeValue:false},
})
export default i18n
