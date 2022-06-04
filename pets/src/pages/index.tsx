import type { NextPage } from 'next'
import Titulo from '../ui/components/Titulo/Titulo';
import Lista from '../ui/components/Lista/Lista';
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
        <Lista 
          pets={[
            {
              id:1,
              nome:'Dudu',
              historia:'Teste Teste Teste',
              foto:'https://cf.shopee.com.br/file/5cdb9855c6f64f333299d3c1d02d5de9'
            },
            {
              id:2,
              nome:'Manolo',
              historia:'dfsfsdfsdfsdf',
              foto:'https://imagens4.ne10.uol.com.br/blogsne10/coisasdepet/uploads//2018/08/32063926_2046234762301281_6605712061194305536_n.jpg'
            }
          ]}
        />
    </div>
  )
}

export default Home
