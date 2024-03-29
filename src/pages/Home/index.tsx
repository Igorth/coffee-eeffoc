import { CofeeList, Heading, Hero, HeroContent, Info } from './styles'
import imgEeffoc from '../../assets/eeffoc-img.svg'
import imgBg from '../../assets/img-bg.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function Home() {
  return (
    <div>
      <Hero>
        <HeroContent>
          <div>
            <Heading>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <span>
                Com o Eeffoc Delivery você recebe seu café onde estiver, a
                qualquer hora
              </span>
            </Heading>

            <Info>
              <div>
                <ShoppingCart size={32} weight="fill" />
                <span>Compras simples e segura</span>
              </div>

              <div>
                <Package size={32} weight="fill" />
                <span>Embalagem mantém o café intacto</span>
              </div>

              <div>
                <Timer size={32} weight="fill" />
                <span>Entrega rápida e rastreada</span>
              </div>

              <div>
                <Coffee size={32} weight="fill" />
                <span>O café chega fresquinho até você</span>
              </div>
            </Info>
          </div>
          <img src={imgEeffoc} alt="Café do Eeffoc Delivery" />
        </HeroContent>

        <img src={imgBg} id="img-bg" alt="" />
      </Hero>

      <CofeeList>
        <h2>Nosso cafés</h2>
      </CofeeList>
    </div>
  )
}
