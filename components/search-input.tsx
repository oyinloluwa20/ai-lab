"use client";
import React, { useState } from 'react'
import { SearchIcon } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { useRouter, useSearchParams } from 'next/navigation'

export const SearchInput = () => {

    const router = useRouter()
    const searchParams = useSearchParams()

    const categoryId = searchParams.get("categoryId")
    const name = searchParams.get("name")

    const [value, setValue] = useState(name || "")
    return (
        <div className='relative'>
            <SearchIcon className='absolute h-4 w-4 top-3 left-4 text-muted-foreground' />
            <Input
                placeholder='Search ...'
                className='pl-10 bg-primary/10' />
        </div>
    )
}
