import React from 'react'
import SectionCard from '@/components/common/SectionCard'
import { useTranslation } from 'react-i18next'
export default function Overheid() {
  const { t } = useTranslation()
  return (
    <SectionCard title={t('pages.overheid','Overheid')}>
      <p className='rr-muted'>Sprint 1 placeholder — content komt hier.</p>
    </SectionCard>
  )
}
