import { useQuery } from "@tanstack/react-query"
import { getPersons } from "../queries/getPersons"
import { request } from 'graphql-request'

export const MainPage = () => {

    const { data, isLoading, error } = useQuery({
        queryKey: ['getStarWarsPerson'],
        queryFn: async () => request(`https://swapi-graphql.netlify.app/.netlify/functions/index`, getPersons)
    })

    console.log(data);

    if (isLoading) return <p>Loading...</p>

    if (error) return <p>Error: {error.message}</p>

    return (
        <>
            <p>dav</p>
            <div>
                {data.allPeople.people.map((item, index) => {
                    return (
                        <p key={index}>{item.name}</p>
                    )
                })}
            </div>
        </>
    )
}