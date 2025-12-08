import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import UseAxiosSecure from './UseAxiosSecure';

const useRole = () => {
    const { user } = useAuth();
    const axiosSecure = UseAxiosSecure();

    const { data: role = 'user', isLoading } = useQuery({
        queryKey: ['user-role', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user.email}/role`);
            return res.data?.role || 'user';
        },
        enabled: !!user?.email
    });

    return { role, roleLoading: isLoading };
};

export default useRole;
