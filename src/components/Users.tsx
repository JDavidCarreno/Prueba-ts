import { type User } from "../types";

interface Props {
    users: User[]
}

function Users({ users } : Props) {
    return (
        <>
                        {/* table, thead, tbody 
                            tr --> row  fila
                            th --> celdas del header
                            td --> celdas */}
            <table>                       
                <thead>
                    <tr>
                        <th>Foto</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>País</th>
                        <th>Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        users.map( user => {
                            return(
                                <tr key={user.id.value}>
                                    <td>
                                        <img src={user.picture.thumbnail} alt={user.picture.large} />
                                    </td>
                                    <td>
                                        {
                                            user.name.first
                                        }
                                    </td>
                                    <td>
                                        {
                                            user.name.last
                                        }
                                    </td>
                                    <td>
                                        {
                                            user.location.country
                                        }
                                    </td>
                                    <td></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Users;