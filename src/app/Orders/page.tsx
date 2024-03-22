"use client"
import PageTitle from '@/components/PageTitle'
import { DataTable } from '@/components/ui/DataTable'
import { cn } from '@/lib/utils'
import { ColumnDef } from '@tanstack/react-table'
import React from 'react'

type Props = {}

export default function Orders({ }: Props) {
    return (
        <div className="flex flex-col gap-5 w-full">
            <PageTitle title="Users" />
            <DataTable columns={columns} data={data} />
        </div>
    )
}


export type Payment = {

    name: String;
    contactno: String;
    pickup: String;
    dropoff: String;
    reservationd: String;
    reservationt: String;
    amount: String;
    status: String;

}

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "name",
        header: "Name",
        cell: ({ row }) => {
            return (
                <div className='flex gap-2 items-center'>
                    <img
                        className='h-10 w-10'
                        src={`https://api.dicebear.com/8.x/lorelei/svg?seed=${row.getValue("name")}`} alt='user-image' />
                    <p>{row.getValue("name")}</p>
                </div>
            )
        }
    },
    {
        accessorKey: "contactno",
        header: "Contact No",
    },
    {
        accessorKey: "pickup",
        header: "Pick UP",
    },
    {
        accessorKey: "dropoff",
        header: "Dropoff",
    },
    {
        accessorKey: "reservationd",
        header: "Date",
    },
    {
        accessorKey: "reservationt",
        header: "Time",
    },
    {
        accessorKey: "amount",
        header: "Payment",
    },
    {
        accessorKey: "status",
        header: "Payment Status",
        cell: ({ row }) => {
            return (
                <div className={cn("font-medium w-fit px-4 py-2 rounded-lg",{
                "bg-red-200" : row.getValue("status") == "Pending",
                "bg-orange-200" : row.getValue("status") == "Processing",
                "bg-green-200" : row.getValue("status") == "Completed",
            })}>
                    {row.getValue("status")}
                </div>
            )
        }

    },
    
]

export const data: Payment[] = [
    {
        name: "Olivia Martin",
        contactno: "+9478516541489",
        pickup: "New York Airport",
        dropoff: "White House",
        reservationd: "2024-02-30",
        reservationt: "12:00",
        amount: "$100",
        status: "Pending",
    },
    {
        name: "Olivia Martin",
        contactno: "+9478516541489",
        pickup: "New York Airport",
        dropoff: "White House",
        reservationd: "2024-02-30",
        reservationt: "12:00",
        amount: "$100",
        status: "Processing",
    },
    {
        name: "Olivia Martin",
        contactno: "+9478516541489",
        pickup: "New York Airport",
        dropoff: "White House",
        reservationd: "2024-02-30",
        reservationt: "12:00",
        amount: "$100",
        status: "Completed",
    },



]
