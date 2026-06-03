import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * cn
 * req params: inputs:ClassValue[]
 * optional params: tidak ada
 * result: string className gabungan dari clsx dan tailwind-merge.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
