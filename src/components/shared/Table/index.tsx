"use client";
import {
  Table as TableContainer,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  TableOptions,
  useReactTable,
  flexRender,
  getCoreRowModel,
} from "@tanstack/react-table";

type TableProps = { caption?: string } & Omit<
  TableOptions<any>,
  "getCoreRowModel"
>;

export const Table = ({ caption, ...props }: TableProps) => {
  const table = useReactTable({
    getCoreRowModel: getCoreRowModel(),
    ...props,
  });

  return (
    <TableContainer>
      {caption && <TableCaption>A list of your recent invoices.</TableCaption>}
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHead key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.map((row) => (
          <TableRow key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </TableContainer>
  );
};
