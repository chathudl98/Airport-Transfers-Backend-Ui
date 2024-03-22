import React from 'react'

export type reservationProps = {
    name: string;
    email: string;
    reservatonAmount: string;
};

export default function ReservationCard(props: reservationProps) {
    return (
        <div className='flex flex-warp justify-between gap-3'>
            <section className='flex  justify-between gap-3'>
                <div className='h-12 w-12 rounded-full bg-gray-100 p-1'>
                    <img width={200} height={200} src={`https://api.dicebear.com/8.x/lorelei/svg?seed=${props.name}`} alt='avatar' />
                </div>
                <div className="text-sm">
                    <p>{props.name}</p>
                    <div className="text-ellipsis overflow-hidden whitespace-nowrap w=[120px] sm:w-auto text-gray-400">
                        <p>{props.email}</p>
                    </div>
                </div>
            </section>
            <p>{props.reservatonAmount}</p>
        </div>
    )
}