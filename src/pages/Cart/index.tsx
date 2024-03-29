import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
  Trash,
} from 'phosphor-react'
import {
  AddressContainer,
  AddressForm,
  AddressHeading,
  CartTotal,
  CartTotalInfo,
  CheckoutButton,
  Coffee,
  Container,
  InfoContainer,
  PaymentContainer,
  PaymentHeading,
  PaymentOptions,
} from './styles'

export function Cart() {
  return (
    <Container>
      <InfoContainer>
        <h2>Complete seu pedido</h2>

        <form action="">
          <AddressContainer>
            <AddressHeading>
              <MapPin size={22} />

              <div>
                <span>Endereço de Entrega</span>
                <p>Informe o endereço onde deseja receber o seu pedido</p>
              </div>
            </AddressHeading>

            <AddressForm>
              <input type="number" placeholder="CEP" />
              <input placeholder="Rua" />
              <input placeholder="Número" />
              <input placeholder="Complemento" />
              <input placeholder="Bairro" />
              <input placeholder="Cidade" />
              <input placeholder="UF" />
            </AddressForm>
          </AddressContainer>

          <PaymentContainer>
            <PaymentHeading>
              <CurrencyDollar size={22} />
              <div>
                <span>Pagamento</span>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </PaymentHeading>

            <PaymentOptions>
              <div>
                <CreditCard size={16} />
                <span>Cartão de crédito</span>

                <Bank size={16} />
                <span>Cartão de débito</span>

                <Money size={16} />
                <span>Dinheiro</span>
              </div>
            </PaymentOptions>
          </PaymentContainer>
        </form>
      </InfoContainer>

      <InfoContainer>
        <h2>Café selecionados</h2>

        <CartTotal>
          <Coffee>
            <span>Café 1</span>
            <span>R$ 10,00</span>
            <button>
              <Trash />
              <span>Remover</span>
            </button>

            <aside>R$33</aside>
          </Coffee>

          <CartTotalInfo>
            <div>
              <span>Total de itens</span>
              <span>R$10</span>
            </div>

            <div>
              <span>Entrega</span>
              <span>R$38</span>
            </div>

            <div>
              <span>Total</span>
              <span>R$48</span>
            </div>
          </CartTotalInfo>

          <CheckoutButton>Confirmar pedido</CheckoutButton>
        </CartTotal>
      </InfoContainer>
    </Container>
  )
}
