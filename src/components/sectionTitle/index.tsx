export default function SectionTitle({ title }: { title: string }) {
    return <h2
        className='
        border-l-4
        border-orange-500
        border-solid
        pl-2
        mb-2
        lg:col-span-2 
        text-2xl
        sm:text-3xl 
        text-black
        font-bold'
    >
        {title}
    </h2>
}