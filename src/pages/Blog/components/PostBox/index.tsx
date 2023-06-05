import { PostContainer } from './styles'
import moment from 'moment'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { useNavigate } from 'react-router-dom'

interface informationBox {
  title: string
  body: string
  creatAt: string
  number: string
}

export default function PostBox({
  title,
  body,
  creatAt,
  number
}: informationBox) {
  function relativeDateFormatter(date: string) {
    return moment(date).fromNow()
  }
  const navigate = useNavigate()

  function navigateNumber(number: string) {
    navigate(`/Post/${number}`)
    console.log('clicou')
  }

  return (
    <PostContainer key={number} onClick={() => navigateNumber(number)}>
      <div className="titulo">
        <h1>{title}</h1>
        <span>{relativeDateFormatter(creatAt)}</span>
      </div>

      <p>
        <ReactMarkdown>{body}</ReactMarkdown>
      </p>
    </PostContainer>
  )
}
