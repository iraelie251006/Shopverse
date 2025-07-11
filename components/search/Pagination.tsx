"use client";

import { useRouter, useSearchParams } from 'next/navigation';

import { modifySearchParams } from '@/lib/utils';

const Pagination = () => {
    const searchParams = Object.fromEntries(useSearchParams()) as any;
    const page = parseInt(searchParams.page) || 1;
    const router = useRouter();

    const handlePageChange = (newPage: number) => {
        const query = modifySearchParams(searchParams, {...searchParams, page: newPage});
        router.push(`/search?${query}`);
    }
  return (
    <div className="flex justify-center gap-4">
      <button
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
        className="text-black disabled:text-gray-400"
      >
        Previous Page
      </button>
      <button
        onClick={() => handlePageChange(page + 1)}
        disabled={page === 5} // Assuming 5 is the last page 
        className="text-black disabled:text-gray-400"
      >
        Next Page
      </button>
    </div>
  )
}

export default Pagination