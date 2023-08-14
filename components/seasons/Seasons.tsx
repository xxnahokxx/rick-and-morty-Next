

import { useGetEpisodesQuery } from '@/redux/services/episodesApi';
import React from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";


const Seasons = ({ season }: { season: string }) => {

    const { data, isError, isLoading } = useGetEpisodesQuery({ page: 1, episodeCode: season });
    const info = data?.results;

    if (Array.isArray(info)) {
        return (
            // <table>
            //     {info?.map(el => <li className='flex gap-3' key={el.id}>
            //         <span>{el.id}</span>
            //         <h2>{el.name}</h2>
            //     </li>
            //     )}
            // </table>
            <Table aria-label="Example static collection table">
                <TableHeader>
                    <TableColumn>Cap</TableColumn>
                    <TableColumn>Name</TableColumn>
                    <TableColumn>Air date</TableColumn>
                </TableHeader>
                <TableBody>
                    {
                        info.map(el => <TableRow key={el.id}>
                            <TableCell>{el.id}</TableCell>
                            <TableCell>{el.name}</TableCell>
                            <TableCell>{el.air_date}</TableCell>
                        </TableRow>)
                    }
                </TableBody>
            </Table>
        )
    }
}

export default Seasons
