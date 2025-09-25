import React from 'react'
import SectionCard from '@/components/common/SectionCard'
import { useTranslation } from 'react-i18next'
export default function Home() {
  const { t } = useTranslation()
  return (
    <SectionCard title={t('home.title','Welkom bij de Reminder App')}>
      <p className='rr-muted'>{t('home.intro','Kies een domein hieronder.')}</p>
    </SectionCard>
  )
}
