import Image from "next/image";
import PageTitle from "@/components/PageTitle"; // Corrected import path
import { DollarSign } from "lucide-react";
import Card, { CardContent, CardProps } from "@/components/card";
import BarChart from "@/components/BarChart";
import ReservationCard, { reservationProps } from "@/components/ReservationCard";

const cardData: CardProps[] = [
  {
    label: "Total Revenue",
    amount: "$45000",
    description: "sdhfvbksdjbksjdkjsdksd",
    icon: DollarSign,
  },
  {
    label: "Total Revenue",
    amount: "$45000",
    description: "sdhfvbksdjbksjdkjsdksd",
    icon: DollarSign,
  },
  {
    label: "Total Revenue",
    amount: "$45000",
    description: "sdhfvbksdjbksjdkjsdksd",
    icon: DollarSign,
  },
  {
    label: "Total Revenue",
    amount: "$45000",
    description: "sdhfvbksdjbksjdkjsdksd",
    icon: DollarSign,
  },
];

const userReservationData : reservationProps[]=[
  {
    name: "Olivia Martin",
    email: "oliviamartin@gmail.com",
    reservatonAmount: "$100",
  },
  {
    name: "Olivia Martin",
    email: "oliviamartin@gmail.com",
    reservatonAmount: "$100",
  },
  {
    name: "Olivia Martin",
    email: "oliviamartin@gmail.com",
    reservatonAmount: "$100",
  },
  {
    name: "Olivia Martin",
    email: "oliviamartin@gmail.com",
    reservatonAmount: "$100",
  },
  {
    name: "Olivia Martin",
    email: "oliviamartin@gmail.com",
    reservatonAmount: "$100",
  },
  {
    name: "Olivia Martin",
    email: "oliviamartin@gmail.com",
    reservatonAmount: "$100",
  },
  {
    name: "Olivia Martin",
    email: "oliviamartin@gmail.com",
    reservatonAmount: "$100",
  },
]

export default function Home() {
  return (
    <div className="flex flex-col gap-5 w-full"> 
    
      <PageTitle title="Airport Transfers - Admin Dashboard"/>
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((d, i) => (
          <Card 
            key={i}
            amount={d.amount}
            description={d.description}
            icon={d.icon}
            label={d.label}
          />   
        ))}
      </section>

      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
          <CardContent>
            <p className="p-4 font-semibold">OverView</p>
            <BarChart/>
          </CardContent>

          <CardContent className='flex justify-between gap-4'>
            <section>
            <p>Recent Bookings</p>
            <p className="text-sm text-gray-400">
              You Have Received 50 Reservation in this Month
            </p>
            </section>
            {userReservationData.map((d,i)=>(
              <ReservationCard key={i}
              name={d.name} 
              email={d.email} 
              reservatonAmount={d.reservatonAmount}  />
            ))}
            
          </CardContent>
      </section>

    </div>
  );
}
