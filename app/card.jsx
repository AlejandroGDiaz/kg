import './card.css'
import Image from 'next/image';

export default function Card() {
    return(
        <div className='container'>
            <div className="birthdayCard">
            <div className="cardFront">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="200" height="200"><path d="M18.43 255.8L192 224L100.8 292.6C90.67 302.8 97.8 320 112 320h222.7c-9.499-26.5-14.75-54.5-14.75-83.38V194.2L200.3 106.8C176.5 90.88 145 92.75 123.3 111.2l-117.5 116.4C-6.562 238 2.436 258 18.43 255.8zM575.2 289.9l-100.7-50.25c-16.25-8.125-26.5-24.75-26.5-43V160h63.99l28.12 22.62C546.1 188.6 554.2 192 562.7 192h30.1c11.1 0 23.12-6.875 28.5-17.75l14.37-28.62c5.374-10.87 4.25-23.75-2.999-33.5l-74.49-99.37C552.1 4.75 543.5 0 533.5 0H296C288.9 0 285.4 8.625 290.4 13.62L351.1 64L292.4 88.75c-5.874 3-5.874 11.37 0 14.37L351.1 128l-.0011 108.6c0 72 35.99 139.4 95.99 179.4c-195.6 6.75-344.4 41-434.1 60.88c-8.124 1.75-13.87 9-13.87 17.38C.0463 504 8.045 512 17.79 512h499.1c63.24 0 119.6-47.5 122.1-110.8C642.3 354 617.1 310.9 575.2 289.9zM489.1 66.25l45.74 11.38c-2.75 11-12.5 18.88-24.12 18.25C497.7 95.25 484.8 83.38 489.1 66.25z"/></svg>
                <h3 className="happy">Presióname</h3>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 16" width="200" height="200" fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"> <path d="m2.75 9.25 1.5 2.5 2 1.5m-4.5 0 1 1m1.5-2.5-1.5 1.5m3-1 8.5-8.5v-2h-2l-8.5 8.5"/> <path d="m10.25 12.25-2.25-2.25m2-2 2.25 2.25m1-1-1.5 2.5-2 1.5m4.5 0-1 1m-1.5-2.5 1.5 1.5m-7.25-5.25-4.25-4.25v-2h2l4.25 4.25"/> </svg>
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