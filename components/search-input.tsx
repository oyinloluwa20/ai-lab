"use client";

import qs from 'query-string';
import React, { ChangeEventHandler, useState, useEffect } from 'react'
import { SearchIcon } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { useRouter, useSearchParams } from 'next/navigation'
import { UseDebounce } from '@/hooks/use-debounce';

export const SearchInput = () => {

    const router = useRouter();
    const searchParams = useSearchParams();

    const categoryId = searchParams.get("categoryId");
    const name = searchParams.get("name");

    const [value, setValue] = useState(name || "")
    const debouncedValue = UseDebounce<string>(value, 500);

    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value);
    }

    useEffect(() => {

        const query = {
            name: debouncedValue,
            categoryId: categoryId
        };

        const url = qs.stringifyUrl({
            url: window.location.href,
            query,
        }, { skipEmptyString: true, skipNull: true })


        router.push(url)
    }, [debouncedValue, router, categoryId])

    return (
        <div className='relative'>
            <SearchIcon className='absolute h-4 w-4 top-3 left-4 text-muted-foreground' />
            <Input
                onChange={onChange}
                value={value}
                placeholder='Search ...'
                className='pl-10 bg-primary/10' />
        </div>
    )
}
