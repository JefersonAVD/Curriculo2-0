'use client'
import MainTemplate from '@/components/mainTemplate';

export default function Portfolio() {
    return (
        <MainTemplate
            show={{ opacity: 1, translateY: 0 }}
            hidden={{ opacity: 0, translateY: -300 }}
        >
            <h1>Portfólio</h1>
        </MainTemplate>
    )
}