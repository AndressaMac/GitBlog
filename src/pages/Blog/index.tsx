import PostBox from './components/PostBox'
import { BlogContainer, Footer, PersonalContainer, PostGrid } from './styles'

import { ArrowSquareOut } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import { BsGithub } from 'react-icons/bs'
import { BsFillBuildingFill } from 'react-icons/bs'
import { FaUserFriends } from 'react-icons/fa'

import axios from 'axios'
import { Input } from './components/Input'

interface PrpfilrProps {
  name: string
  bio: string
  login: string
  followers: string
  company: string
  avatar_url: string
}

interface blogProps {
  title: string
  body: string
  created_at: string
  number: string
}

export default function Blog() {
  const api = 'https://api.github.com/users/AndressaMac'
  const apiGit = 'https://github.com/AndressaMac'

  
  const [information, setInformation] = useState<PrpfilrProps>({
    name: '',
    bio: '',
    login: '',
    followers: '',
    company: '',
    avatar_url: ''
  })

  const [blog, setBlog] = useState<blogProps[]>([])
  const [showBlogs, setShowBlogs] = useState<blogProps[]>([])

  useEffect(() => {
    getUser()
    getBlog()
  }, [])

  console.log('USER', information)
  function getUser() {
    axios
      .get(api)
      .then(response => {
        const data = response.data

        setInformation({ ...data })
      })
      .catch(Error => console.log('error'))
  }

  async function getBlog() {
    try {
      axios
        .get(`https://api.github.com/repos/AndressaMac/GitBlog/issues`)
        .then(response => {
          const data = response.data
          setBlog([...data])
          setShowBlogs([...data])
          console.log('carregou', data)
                 
        })
    } catch {
      throw console.error()
    }
  }


  function filterBlog(e:any) {
    const newBlogs = blog.filter(bg => bg.body.indexOf(e.target.value) > -1)
    console.log(newBlogs)
    setShowBlogs(newBlogs)
  }

  return (
    <BlogContainer>
      <PersonalContainer>
        <div>
          <img src={information.avatar_url} alt="user image" />
        </div>
        <div>
          <div className="top">
            <strong>{information.name}</strong>
            <a href={apiGit}>
              github <ArrowSquareOut size={16} color="#3294F8" weight="bold" />
            </a>
          </div>
          <div className="midle">
            <p>{information.bio}</p>
          </div>
          <div className="boton">
            <span>
              <BsGithub color="#3A536B" />
              {information.login}
            </span>
            <span>
              <BsFillBuildingFill color="#3A536B" />
              {information.company}
            </span>
            <span>
              <FaUserFriends color="#3A536B" />
              {information.followers} seguidores
            </span>
          </div>
        </div>
      </PersonalContainer>
      <Input onChange={filterBlog} quantity={blog.length} />
      <PostGrid>
        {showBlogs.map(blogs => (
          <PostBox
            title={blogs?.title}
            body={blogs?.body?.split('\n\r')[0]}
            creatAt={blogs?.created_at}
            number={blogs?.number}
          />
        ))}
      </PostGrid>
      <Footer/>
    </BlogContainer>
  )
}
