import type { NextPage } from 'next'
import Titulo from '../ui/components/Titulo/Titulo';
const Home: NextPage = () => {
  return (
    <div>
      <Titulo 
        titulo="Teste Teste Teste" 
        subTitulo={
        <span>
          Com o pequeno valor mensal, você <br />
          pode <strong>adotar um pet virtualmente</strong>
        </span>
        }/>
    </div>
  )
}

export default Home
