"use client";

import { Table } from "@/components/shared/Table";
import { ColumnDef } from "@tanstack/react-table";
import { User } from "@/actions/server";
import Image from "next/image";

type UserTableProps = {
  users?: User[];
};

const columns: ColumnDef<User>[] = [
  {
    id: "id",
    header: "ID",
    accessorFn: (row) => row.id,
  },
  {
    id: "customer",
    columns: [
      {
        header: "Customer",
        cell: ({ row }) => {
          return (
            <div className="flex flex-row">
              <div>
                <Image
                  className="rounded-full w-10 h-10 mr-2"
                  height={128}
                  width={128}
                  src={row.original.avatar}
                  alt={row.original.first_name}
                />
              </div>
              <div>
                <p className="font-bold text-slate-600">
                  {row.original.first_name} {row.original.last_name}
                </p>
                <div className="text-slate-500">{row.original.email}</div>
              </div>
            </div>
          );
        },
      },
    ],
  },
];

export const UserTable = ({ users = [] }: UserTableProps) => {
  return <Table data={users} columns={columns} />;
};
