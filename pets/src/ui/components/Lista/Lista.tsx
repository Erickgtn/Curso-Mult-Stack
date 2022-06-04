import{Button} from '@mui/material'
import {
ListaStyled,
ItemLista,
Foto,
Informacoes,
Nome,
Descricao
} from './Lista.style'

export default function Lista(){
    return(
        <ListaStyled>
            <ItemLista>
                <Foto src='https://cf.shopee.com.br/file/5cdb9855c6f64f333299d3c1d02d5de9' />
                <Informacoes>
                    <Nome>Dudu</Nome>
                    <Descricao>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto corrupti pariatur neque omnis molestiae aspernatur suscipit alias accusantium porro nobis dignissimos, minima voluptatum assumenda blanditiis beatae ullam vero ipsum earum.
                    </Descricao>
                    <Button
                        variant={'contained'}
                    >Adotar</Button>
                </Informacoes>
            </ItemLista>
            <ItemLista>
                <Foto src='https://cf.shopee.com.br/file/5cdb9855c6f64f333299d3c1d02d5de9' />
                <Informacoes>
                    <Nome>Dudu</Nome>
                    <Descricao>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto corrupti pariatur neque omnis molestiae aspernatur suscipit alias accusantium porro nobis dignissimos, minima voluptatum assumenda blanditiis beatae ullam vero ipsum earum.
                    </Descricao>
                    <Button
                        variant={'contained'}
                    >Adotar</Button>
                </Informacoes>
            </ItemLista>
        </ListaStyled>
    )
}