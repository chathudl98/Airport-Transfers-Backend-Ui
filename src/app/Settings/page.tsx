"use client"
import PageTitle from '@/components/PageTitle'
import { DataTable } from '@/components/ui/DataTable'
import { ColumnDef } from '@tanstack/react-table'
import React from 'react'

type Props = {}

export default function Settings({ }: Props) {
    return (
        <div className="flex flex-col gap-5 w-full">
            <PageTitle title="Users"/>
            <DataTable columns={columns} data={data} />
        </div>
    )
}


export type Payment = {
 
    name: string;
    address:string;
    email: string;
    contactno: string;
  }
   
  export const columns: ColumnDef<Payment>[] = [
    {
      accessorKey: "name",
      header: "Name",
      cell : ({row}) => {
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
      accessorKey: "address",
      header: "Address",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "contactno",
      header: "Contact No",
    },
  ]

  export const data: Payment[] = [
    {
      name: "Olivia Martin",
      address: "119/3,Sri Lanks",
      email: "m@example.com",
      contactno: "+9478516541489"
    },
    {
      name: "Olivia Martin",
      address: "119/3,Sri Lanks",
      email: "m@example.com",
      contactno: "+9478516541489"
    },
    {
      name: "Olivia Martin",
      address: "119/3,Sri Lanks",
      email: "m@example.com",
      contactno: "+9478516541489"
    },
  
  
  ]
  