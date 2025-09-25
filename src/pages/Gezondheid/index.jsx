import React from 'react'
import SectionCard from '@/components/common/SectionCard'
import { useTranslation } from 'react-i18next'
export default function Gezondheid() {
  const { t } = useTranslation()
  return (
    <SectionCard title={t('pages.gezondheid','Gezondheid')}>
      <p className='rr-muted'>Sprint 1 placeholder — content komt hier.</p>
    </SectionCard>
  )
}
