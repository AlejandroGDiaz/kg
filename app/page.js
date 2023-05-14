"use client"; 
import Card from './card'
import { useCountdown } from './countdown';


export default function Home() {
  const targetDate = new Date('2023-05-14T20:53:00Z').getTime();
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  const countDownFinished = days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0;

  if(countDownFinished) {
    return (
      <Card/>
    )
  } else {
    return(
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <p>
          {days} {hours} {minutes} {seconds} 
        </p>
      </main>
    )
  }
}
