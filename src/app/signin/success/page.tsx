'use client';

import {useEffect} from "react";

import {useRouter, useSearchParams} from "next/navigation";


const SuccessLogin = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const token = searchParams.get('code');

  useEffect(() => {
    if (token) {
      localStorage.setItem('accessToken', token)

      router.push('/')
    }
  }, [token])

  return (
    <div>

    </div>
  );
};

export default SuccessLogin;