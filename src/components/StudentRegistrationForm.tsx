import React, { useState } from 'react';

interface FormData {
    studentName: string;
    age: string;
    guardianName: string;
    contactNumber: string;
    address: string;
}

interface FormErrors {
    studentName?: string;
    age?: string;
    guardianName?: string;
    contactNumber?: string;
    address?: string;
}

const StudentRegistrationForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        studentName: '',
        age: '',
        guardianName: '',
        contactNumber: '',
        address: '',
    });

    const [formErrors, setFormErrors] = useState<FormErrors>({});

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setFormErrors((prevErrors) => {
            const updatedErrors = { ...prevErrors };
            delete updatedErrors[name as keyof FormErrors];
            return updatedErrors;
        });
    };

    const validateForm = (): FormErrors => {
        const errors: FormErrors = {};
        if (!formData.studentName)
            errors.studentName = 'Student name is required.';
        if (!formData.age || isNaN(Number(formData.age)))
            errors.age = 'Valid age is required.';
        if (!formData.guardianName)
            errors.guardianName = "Guardian's name is required.";
        if (!formData.contactNumber || !/^\d{10}$/.test(formData.contactNumber))
            errors.contactNumber = 'Valid 10-digit contact number is required.';
        if (!formData.address) errors.address = 'Address is required.';
        return errors;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length === 0) {
            console.log('Form submitted:', formData);
            setFormData({
                studentName: '',
                age: '',
                guardianName: '',
                contactNumber: '',
                address: '',
            });
            setFormErrors({});
        } else {
            setFormErrors(errors);
        }
    };

    return (
        <form className="max-w-full mx-auto" onSubmit={handleSubmit}>
            <div className="mb-5">
                <label
                    htmlFor="student-name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Student Name
                </label>
                <input
                    type="text"
                    id="student-name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="student name"
                    value={formData.studentName}
                    onChange={handleInputChange}
                    name="studentName"
                />
                {formErrors.studentName && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                        {formErrors.studentName}
                    </p>
                )}
            </div>
            <div className="mb-5">
                <label
                    htmlFor="student-age"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Age
                </label>
                <input
                    id="student-age"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="student age"
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                />
                {formErrors.age && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                        {formErrors.age}
                    </p>
                )}
            </div>
            <div className="mb-5">
                <label
                    htmlFor="student-parent"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Guardian's Name
                </label>
                <input
                    type="text"
                    id="student-parent"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="gardian name"
                    name="guardianName"
                    value={formData.guardianName}
                    onChange={handleInputChange}
                />
                {formErrors.guardianName && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                        {formErrors.guardianName}
                    </p>
                )}
            </div>
            <div className="mb-5">
                <label
                    htmlFor="student-parent"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Contact Number
                </label>
                <input
                    type="text"
                    id="student-parent"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="contact number"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                />
                {formErrors.contactNumber && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                        {formErrors.contactNumber}
                    </p>
                )}
            </div>
            <div className="mb-5">
                <label
                    htmlFor="student-address"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Address
                </label>
                <textarea
                    id="message"
                    rows={4}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your address here..."
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                ></textarea>
                {formErrors.address && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                        {formErrors.address}
                    </p>
                )}
            </div>
            <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Submit
            </button>
        </form>
    );
};

export default StudentRegistrationForm;
