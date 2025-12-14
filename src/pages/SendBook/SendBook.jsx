import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/UseAxiosSecure';
import { useNavigate } from 'react-router';

const SendBook = () => {
    const { register, handleSubmit, control } = useForm();
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    // Service center data load
    const serviceCenters = useLoaderData();
    const regionsDuplicate = serviceCenters.map(c => c.region);
    const regions = [...new Set(regionsDuplicate)];

    const senderRegion = useWatch({ control, name: 'senderRegion' });

    const districtsByRegion = (region) => {
        return serviceCenters
            .filter(c => c.region === region)
            .map(d => d.district);
    }

    const handleSendBook = (data) => {
        const isSameDistrict = data.senderDistrict === data.receiverDistrict;
        const baseCost = isSameDistrict ? 50 : 80;
        const bookPrice = Number(data.bookPrice) || 0;
        const totalCost = baseCost + bookPrice;

        data.cost = totalCost;

        Swal.fire({
            title: "Confirm Book Cost",
            text: `You will be charged ${totalCost} taka (Book price + delivery cost).`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Confirm & Send",
            cancelButtonText: "Confirm and Continue Payment"
        }).then((result) => {
            if (result.isConfirmed) {
                    axiosSecure.post('/books', data)
                        .then(res => {
                            if (res.data.insertedId) {
                                navigate('/dashboard/my-orders')
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Book sent successfully!',
                                    showConfirmButton: false,
                                    timer: 2000
                                });
                            }
                        })
                    .catch(err => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: 'Failed to send book. Try again!'
                        });
                        console.log(err);
                    });
            }
        });
    }

    return (
        <div className="p-8">
            <h2 className="text-4xl font-bold mb-8">Send a Book</h2>

            <form onSubmit={handleSubmit(handleSendBook)} className="space-y-6 text-black">
                {/* Book Info */}
                <input type="text" {...register('bookName')} placeholder="Book Name" className="input w-full" />
                <input type="number" {...register('bookPrice')} placeholder="Book Price" className="input w-full" />
                <input type="text" {...register('bookAuthor')} placeholder="Author Name" className="input w-full" />

                {/* Sender Info */}
                <input type="text" {...register('senderName')} defaultValue={user?.displayName} placeholder="Sender Name" className="input w-full" />
                <input type="text" {...register('senderEmail')} defaultValue={user?.email} placeholder="Sender Email" className="input w-full" />

                <select {...register('senderRegion')} className="select w-full">
                    <option disabled>Pick Sender Region</option>
                    {regions.map((r, i) => <option key={i} value={r}>{r}</option>)}
                </select>

                <select {...register('senderDistrict')} className="select w-full">
                    <option disabled>Pick Sender District</option>
                    {districtsByRegion(senderRegion).map((d, i) => <option key={i} value={d}>{d}</option>)}
                </select>

                <button type="submit" className="btn btn-primary w-full">Send Book</button>
            </form>
        </div>
    );
}

export default SendBook;





{/* Receiver Info
                <input type="text" {...register('receiverName')} placeholder="Receiver Name" className="input w-full" />
                <input type="text" {...register('receiverEmail')} placeholder="Receiver Email" className="input w-full" />

                <select {...register('receiverRegion')} className="select w-full">
                    <option disabled>Pick Receiver Region</option>
                    {regions.map((r, i) => <option key={i} value={r}>{r}</option>)}
                </select>

                <select {...register('receiverDistrict')} className="select w-full">
                    <option disabled>Pick Receiver District</option>
                    {districtsByRegion(receiverRegion).map((d, i) => <option key={i} value={d}>{d}</option>)}
                </select> */}
