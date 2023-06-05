import { Route, Routes, useParams } from 'react-router-dom'
import Post from '../src/pages/Post'
import Blog from './pages/Blog/index'
import { DefaultLayout } from './layout/index'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Blog />} />
        <Route path="/Post/:id" element={<Post />} />
      </Route>
    </Routes>
  )
}
