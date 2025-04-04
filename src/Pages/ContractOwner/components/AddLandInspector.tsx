import React, { useState } from 'react';

function AddLandInspector() {
    const [formData, setFormData] = useState({
        address: '',
        name: '',
        age: '',
        designation: '',
        city: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);  
    };

    return (
        <div className="m-0 block bg-black w-full">
          <div className='p-10 text-white font-bold w-full'>
          <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Enter Address"
                        className="border p-2 w-full"
                    />
                </div>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter Name"
                        className="border p-2 w-full"
                    />
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input
                        type="text"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        placeholder="Enter Age"
                        className="border p-2 w-full"
                    />
                </div>
                <div>
                    <label htmlFor="designation">Designation</label>
                    <input
                        type="text"
                        id="designation"
                        name="designation"
                        value={formData.designation}
                        onChange={handleChange}
                        placeholder="Enter Designation"
                        className="border p-2 w-full"
                    />
                </div>
                <div>
                    <label htmlFor="city">City</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Enter City"
                        className="border p-2 w-full"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add</button>
            </form>
          </div>
        </div>
    );
}

export default AddLandInspector;