'use client'
import MainTemplate from '@/components/mainTemplate';

export default function Resumo() {
    return (
        <MainTemplate
            show={{ opacity: 1, translateX: 0 }}
            hidden={{ opacity: 0, translateX: 300 }}
        >
            <h1>Resumo</h1>
        </MainTemplate>
    )
}