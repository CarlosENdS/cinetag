import Cabecalho from "components/Cabecalho"
import Container from "components/Container"
import Rodape from "components/Rodape"
import FavortitosProvider from "contextos/Favoritos"
import { Outlet } from "react-router-dom"

function PaginaBase(){
    return(
        <main>
            <Cabecalho />
            <FavortitosProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavortitosProvider>
            <Rodape />
        </main>
    )
}

export default PaginaBase;