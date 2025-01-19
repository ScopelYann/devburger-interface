import buy from '../../assets/buy.svg'
import { ContainerButton } from './styles'


export function CartButton ({...props}) {

    return(
        <ContainerButton {...props}>
            <img src={buy}/>
        </ContainerButton>
    )
}
