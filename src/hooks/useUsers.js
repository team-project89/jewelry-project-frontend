import { getAllUsersApi } from "@/services/userService"
import { useQuery } from "@tanstack/react-query"

export default function useUsers(){
    const {isLoading, data: users} = useQuery({
        queryKey: ["projects"],
        queryFn: getAllUsersApi,
    })

    return {isLoading, users}

}