'use client';

import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from './reset-password.module.css';

function ResetPasswordForm() {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();
    const token = searchParams.get('token');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!token) {
            setError('Invalid reset link');
            return;
        }

        if (newPassword !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (newPassword.length < 8) {
            setError('Password must be at least 8 characters long');
            return;
        }

        try {
            setIsLoading(true);
            const outsmartApi = 'http://10.0.36.221:3000/api';
            const outsmartApiReset = outsmartApi + '/auth/reset-password';
            const response = await fetch(outsmartApiReset, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    token,
                    password: newPassword,
                    confirmPassword
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to reset password');
            }

            setSuccess(true);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    if (!token) {
        return (
            <div className={styles.container}>
                <h1>Password Reset</h1>
                <p>Invalid or expired reset link. Please request a new password reset link.</p>
            </div>
        );
    }

    if (success) {
        return (
            <div className={styles.container}>
                <h1 className='mb-4 text-center font-bold '>Password Reset Successful</h1>
                <p>Your password has been successfully reset.</p>
                <p>You can login in the mobile app now.</p>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Reset Your Password</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="newPassword">New Password</label>
                    <input
                        type="password"
                        id="newPassword"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                        minLength={8}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="confirmPassword">Confirm New Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        minLength={8}
                    />
                </div>
                {error && <div className={styles.error}>{error}</div>}
                <button type="submit" disabled={isLoading} className={styles.submitButton}>
                    {isLoading ? 'Resetting Password...' : 'Reset Password'}
                </button>
            </form>
        </div>
    );
}

function LoadingState() {
    return (
        <div className={styles.container}>
            <h1>Loading...</h1>
            <p>Please wait while we verify your reset link.</p>
        </div>
    );
}

export default function ResetPasswordPage() {
    return (
        <Suspense fallback={<LoadingState />}>
            <ResetPasswordForm />
        </Suspense>
    );
}
