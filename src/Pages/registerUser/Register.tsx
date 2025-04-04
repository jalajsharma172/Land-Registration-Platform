import React, { useState } from 'react';

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        address: '',
        aadhar: '',
        pan: '',
        email: '',
        document: null
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-4">User Registration</h2>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full mb-4 p-2 border rounded"
                />
                <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full mb-4 p-2 border rounded"
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full mb-4 p-2 border rounded"
                />
                <input
                    type="text"
                    name="aadhar"
                    placeholder="Aadhar"
                    value={formData.aadhar}
                    onChange={handleChange}
                    className="w-full mb-4 p-2 border rounded"
                />
                <input
                    type="text"
                    name="pan"
                    placeholder="Pan"
                    value={formData.pan}
                    onChange={handleChange}
                    className="w-full mb-4 p-2 border rounded"
                />
                <input
                    type="file"
                    name="document"
                    onChange={handleChange}
                    className="w-full mb-4 p-2 border rounded"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full mb-4 p-2 border rounded"
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    Add
                </button>
            </form>
        </div>
    );
}

export default Register;