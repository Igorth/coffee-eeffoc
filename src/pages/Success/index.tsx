import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { Container, Heading, InfoContent, Info, Order } from './styles'

import imgDelivery from '../../assets/delivery.svg'

export function Success() {
  return (
    <Container>
      <Order>
        <Heading>
          <h2>Uhul! Pedido confirmado</h2>
          <span>Agora é só aguardar que logo o café chegará até você</span>
        </Heading>

        <Info>
          <InfoContent>
            <div>
              <MapPin size={32} />

              <div>
                <span>
                  Entrega em <strong>Rue de Linspecteur</strong>
                </span>

                <span>Montreal - Canada,CA</span>
              </div>
            </div>

            <div>
              <Timer size={32} />

              <div>
                <span>Previsão de entrega</span>
                <strong>20 min - 30 min</strong>
              </div>
            </div>

            <div>
              <CurrencyDollar size={32} />

              <div>
                <span>Pagamento na entrega</span>
                <strong>Cartão de Crédito</strong>
              </div>
            </div>
          </InfoContent>
        </Info>
      </Order>

      <img src={imgDelivery} alt="" />
    </Container>
  )
}
