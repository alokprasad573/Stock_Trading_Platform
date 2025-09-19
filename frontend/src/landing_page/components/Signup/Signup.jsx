import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
    const [form, setForm] = useState({ name: '', email: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            const result = await response.text();
            console.log(result);
        } catch (error) {
            console.error('Error sending data:', error);
        } // ✅ Fixed: Added missing closing brace here
    };

    return (
        <div className="container py-5">
            <h2 className="mb-4">Create your Zerodha account</h2>
            <form onSubmit={handleSubmit} style={{ maxWidth: 420 }}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        className="form-control"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        className="form-control"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        className="form-control"
                        value={form.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">Sign up</button>
                <p style={{ textAlign: 'center' }}>
                    Already have an account? <Link to="/signin">Sign in</Link>
                </p>
            </form>
        </div>
    );
}