"use client";

import { Table } from "@/components/shared/Table";
import { createColumnHelper } from "@tanstack/react-table";
import { User } from "@/actions/server";

type UserTableProps = {
  users?: User[];
};

const columnHelper = createColumnHelper<User>();

const columns = [
  columnHelper.accessor("avatar", {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("id", {
    header: "ID",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("first_name", {
    header: "First Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("last_name", {
    header: "Last Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("email", {
    header: "Email",
    cell: (info) => info.getValue(),
  }),
];

export const UserTable = ({ users = [] }: UserTableProps) => {
  return <Table data={users} columns={columns} />;
};
