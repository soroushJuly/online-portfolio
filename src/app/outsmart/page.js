'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './outsmart.module.css';
import { QRCodeSVG } from 'qrcode.react';

function OutsmartPage() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <Image
                        src="/avatar.png"
                        alt="Outsmart Logo"
                        width={150}
                        height={50}
                        priority
                    />
                </div>
            </header>

            <main className={styles.main}>
                <div className={styles.hero}>
                    <h1 className={styles.title}>Outsmart Your Business</h1>
                    <p className={styles.subtitle}>
                        The all-in-one solution for modern business management
                    </p>

                    <div className={styles.downloadSection}>
                        <div className={styles.qrContainer}>
                            <QRCodeSVG
                                value="https://outsmart.com/download"
                                size={200}
                                level="H"
                                includeMargin={true}
                                className={styles.qrCode}
                            />
                            <p className={styles.qrText}>Scan to download</p>
                        </div>

                        <div className={styles.downloadButtons}>
                            <a
                                href="https://apps.apple.com/app/outsmart"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.downloadButton}
                            >
                                <Image
                                    src="/avatar.png"
                                    alt="Download on the App Store"
                                    width={160}
                                    height={48}
                                />
                            </a>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.outsmart"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.downloadButton}
                            >
                                <Image
                                    src="/avatar.png"
                                    alt="Get it on Google Play"
                                    width={180}
                                    height={54}
                                />
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.features}>
                    <div className={styles.feature}>
                        <div className={styles.featureIcon}>📊</div>
                        <h3>Analytics Dashboard</h3>
                        <p>Track your business performance in real-time</p>
                    </div>
                    <div className={styles.feature}>
                        <div className={styles.featureIcon}>💳</div>
                        <h3>Payment Processing</h3>
                        <p>Secure and seamless payment solutions</p>
                    </div>
                    <div className={styles.feature}>
                        <div className={styles.featureIcon}>📱</div>
                        <h3>Mobile Management</h3>
                        <p>Run your business from anywhere</p>
                    </div>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>© 2024 Outsmart. All rights reserved.</p>
                <div className={styles.footerLinks}>
                    <a href="/privacy">Privacy Policy</a>
                    <a href="/terms">Terms of Service</a>
                    <a href="/contact">Contact Us</a>
                </div>
            </footer>
        </div>
    );
}

export default OutsmartPage;