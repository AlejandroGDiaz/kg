import './card.css'
import Image from 'next/image';

export default function Card() {
    return(
        <div className='container'>
            <div className="birthdayCard">
            <div className="cardFront">
                <Image
                    src="/dragon.svg"
                    alt="Picture of the author"
                    width={200}
                    height={200}
                />
                <h3 className="happy">Presióname</h3>
                <Image
                    src="/swords.svg"
                    alt="Picture of the author"
                    width={200}
                    height={200}
                />
            </div>
            <div className="cardInside">
                <h3 className="back">Feliz día del maestro!</h3>
                <p>Amor,</p>
                <p>
                    Como pueda sabes que encontraré la manera de demostrarte todo
                    lo que te amo. Espero que disfrutes de tu día hoy con mi familia 
                    y del detalle que te preparamos. Se lo merece la mejor (y más hermosa) Maestra
                    que existe. Te amo, Immer
                </p>
                <p className="name">Alejandro</p>
            </div>
        </div>
        </div>
    )
}