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
    header: "Customers",
    cell: ({ row }) => {
      return (
        <div className="flex flex-row">
          <div>
            <Image
              className="mr-2 h-10 w-10 rounded-full"
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
];

export const UserTable = ({ users = [] }: UserTableProps) => {
  return <Table data={users} columns={columns} />;
};
