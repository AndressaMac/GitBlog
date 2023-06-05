import { SearchInput } from './styles'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'


interface Iprops{
  onChange: any
  quantity:number 
  
}



export function Input({ onChange,quantity }: Iprops) {
  const urlsearch = `https://api.github.com/search/issues?q=`

  const schema = z.object({
    query: z.string()
  })

  const { register, handleSubmit } = useForm({
    resolver: zodResolver(schema)
  })

  function submitInput(query: any) {
    axios
      .get(`${urlsearch}${query.query}/%20repo:AndressaMac/GitBlog`)
      .then(response => {
        const data = response.data
        console.log(data)
        console.log(query.query)
      })
  }

  return (
    <SearchInput
      onSubmit={handleSubmit(D => {
        submitInput(D)
      })}
    >
      <div>
        <strong>Publicações</strong>
        <p>{quantity} publicações</p>
      </div>
      <input
        placeholder="  Buscar conteúdo"
        type="text"
        {...register('query')}
        onChange={onChange}
      />
    </SearchInput>
  )
}
