import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import Home from '@/pages/Home'
import Auto from '@/pages/Auto'
import Contracten from '@/pages/Contracten'
import Gezondheid from '@/pages/Gezondheid'
import Huur from '@/pages/Huur'
import Overheid from '@/pages/Overheid'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auto' element={<Auto />} />
        <Route path='/contracten' element={<Contracten />} />
        <Route path='/gezondheid' element={<Gezondheid />} />
        <Route path='/huur' element={<Huur />} />
        <Route path='/overheid' element={<Overheid />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </Layout>
  )
}
