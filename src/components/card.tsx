import React from 'react';
import { cn } from "@/lib/utils";
import { LucideIcon } from 'lucide-react';

export type CardProps = {
    label: string; 
    icon: LucideIcon;
    amount: string;
    description: string;
};

export default function Card({ label, icon: Icon, amount, description }: CardProps) {
    return(
        <CardContent>
            <section className="flex justify-between gap-2">
                <p className="text-sm">{label}</p>
                <Icon className='h-4 w-4 text-gray-400'/>
            </section>

            <section className='flex flex-col gap-1'>
                <h2 className ="text-2xl font-semibold">{amount}</h2>
                <p className='text-xs text-gray-500'>{description}</p>
            </section>
        </CardContent>
    );
}

export function CardContent(props: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div 
        {...props} 
        className={cn("flex w-full flex-col gap-3 rounded-xl border p-5 shadow", props.className)} />
    );
}
