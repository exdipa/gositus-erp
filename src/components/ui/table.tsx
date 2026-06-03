"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Table
 * req params: props:React.ComponentProps<"table">
 * optional params: className:string = undefined
 * result: React element table dengan container scroll.
 */
function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto"
    >
      <table
        data-slot="table"
        className={cn("w-full caption-bottom text-sm", className)}
        {...props}
      />
    </div>
  )
}

/**
 * TableHeader
 * req params: props:React.ComponentProps<"thead">
 * optional params: className:string = undefined
 * result: React element thead shadcn.
 */
function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn("[&_tr]:border-b", className)}
      {...props}
    />
  )
}

/**
 * TableBody
 * req params: props:React.ComponentProps<"tbody">
 * optional params: className:string = undefined
 * result: React element tbody shadcn.
 */
function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  )
}

/**
 * TableFooter
 * req params: props:React.ComponentProps<"tfoot">
 * optional params: className:string = undefined
 * result: React element tfoot shadcn.
 */
function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
        className
      )}
      {...props}
    />
  )
}

/**
 * TableRow
 * req params: props:React.ComponentProps<"tr">
 * optional params: className:string = undefined
 * result: React element row table shadcn.
 */
function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "border-b transition-colors hover:bg-muted/50 has-aria-expanded:bg-muted/50 data-[state=selected]:bg-muted",
        className
      )}
      {...props}
    />
  )
}

/**
 * TableHead
 * req params: props:React.ComponentProps<"th">
 * optional params: className:string = undefined
 * result: React element th shadcn.
 */
function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "h-10 px-2 text-left align-middle font-medium whitespace-nowrap text-foreground [&:has([role=checkbox])]:pr-0",
        className
      )}
      {...props}
    />
  )
}

/**
 * TableCell
 * req params: props:React.ComponentProps<"td">
 * optional params: className:string = undefined
 * result: React element td shadcn.
 */
function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0",
        className
      )}
      {...props}
    />
  )
}

/**
 * TableCaption
 * req params: props:React.ComponentProps<"caption">
 * optional params: className:string = undefined
 * result: React element caption table shadcn.
 */
function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("mt-4 text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
