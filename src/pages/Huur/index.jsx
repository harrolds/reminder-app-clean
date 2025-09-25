import React from 'react'
import SectionCard from '@/components/common/SectionCard'
import { useTranslation } from 'react-i18next'
export default function Huur() {
  const { t } = useTranslation()
  return (
    <SectionCard title={t('pages.huur','Huur')}>
      <p className='rr-muted'>Sprint 1 placeholder — content komt hier.</p>
    </SectionCard>
  )
}
