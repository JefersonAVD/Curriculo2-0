'use client'
import MainTemplate from '@/components/mainTemplate';
import useSWR from 'swr';

export default function Resumo() {

    return (
        <MainTemplate
            hidden={{ opacity: 0, translateX: 300 }}
            show={{ opacity: 1, translateX: 0 }}
        >

        </MainTemplate >
    )
}