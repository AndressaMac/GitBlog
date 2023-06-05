import axios from 'axios'
import { Container, Content, TitleContainer } from './styles'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import moment from 'moment'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import {BsFillCalendarEventFill,BsGithub} from 'react-icons/bs'
import{FaComment} from 'react-icons/fa'
import { ArrowSquareOut } from '@phosphor-icons/react'
import {IoIosArrowBack} from 'react-icons/io'
import { Link } from "react-router-dom";
import { Footer } from '../Blog/styles'




interface informationProps {
  title:string
  body:string
  created_at:string
  comments:string
  user: {
    login: string;
  }
}


export default function Post() {
 
  const { id } = useParams()
  
  const [information, setInformation] = useState<informationProps>({
    title:'',
    body:'',
    user: {
      login: ''
    },
    created_at:'',
    comments:''
  })

  const apiPost = `https://api.github.com/repos/AndressaMac/GitBlog/issues/${id}`
  const apiBlog = `https://github.com/AndressaMac/GitBlog/issues/${id}`

  useEffect(()=>{
    getBlog()
  },[])

  function getBlog() {
    axios.get(apiPost).then(response => {
      const data = response.data

      setInformation({ ...data})
    })
  }
console.log(id)
console.log(information)
  
function relativeDateFormatter(date: string) {
  return moment(date).fromNow();
}



return (
    
    <Container >
      <TitleContainer >
        <div className="fist">
            <Link to={'/'} className='link'><IoIosArrowBack/>
               voltar
            </Link>
            <Link to={apiBlog} className='link'>
              ver no github
              <ArrowSquareOut size={16} color="#3294F8" weight="bold" />
            </Link>
        </div>
        <h1>{information.title}</h1>
        <div className="last">
          <div className='information'>
            <span><BsGithub color='#3A536B'/>{information.user.login}</span>
          </div>
          <div className='information'>
            <span><BsFillCalendarEventFill color='#3A536B'/>{relativeDateFormatter(information.created_at)}</span>
          </div>
          <div className='information'>
            <span><FaComment color='#3A536B'/>{information.comments} comentários</span>
          </div>
        </div>
      </TitleContainer>
      <Content >
     <ReactMarkdown 
     children={information.body}
     components={{
      code({node, inline, className, children, ...props}) {
        const match = /language-(\w+)/.exec(className || '')
        return !inline && match ? (
          <SyntaxHighlighter
            {...props}
            children={String(children).replace(/\n$/, '')}
            style={materialDark}
            language={match[1]}
            PreTag="div"
          />  ) : (
            <code {...props} className={className}>
              {children}
            </code>    )
      }
    }}
     />
      </Content>
      <Footer/>
    </Container>
  )
}
