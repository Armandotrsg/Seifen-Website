import card from '../assets/img/card.png'
import styles, {layout} from '../styles';
import Button from './Button';

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Fina a better card deal <br className='sm:block hidden'/>
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="Card" className='w-full h-full' />
      </div>
    </section>
  )
}

export default CardDeal