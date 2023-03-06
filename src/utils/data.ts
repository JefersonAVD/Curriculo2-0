import useSWR from 'swr';
export const fetcher = async (url:string) => await (await fetch(url)).json();

export const getData = () => {
    const { data, error, isLoading } = useSWR('/api/getSobre', fetcher);
    return { data, error, isLoading }
}
