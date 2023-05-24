import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";


// cn is a wrapper around clsx that allows us to merge tailwind classes
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
} 