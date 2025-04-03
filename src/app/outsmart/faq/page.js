'use client';

import { useState } from 'react';
import styles from './faq.module.css';

const faqs = [
    {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit and debit cards including Visa, Mastercard, American Express, and Discover. We also support various digital wallets and payment methods through our Stripe integration."
    },
    {
        question: "Is my payment information secure?",
        answer: "Yes, absolutely. We use Stripe, a PCI-compliant payment processor, to handle all transactions. Your payment information is encrypted and never stored on our servers. Stripe is trusted by millions of businesses worldwide and maintains the highest security standards."
    },
    {
        question: "How do I update my payment method?",
        answer: "You can update your payment method by logging into your account and navigating to the payment settings section. There, you can add, remove, or update your payment methods securely."
    },
    {
        question: "What happens if my payment fails?",
        answer: "If a payment fails, we'll notify you immediately via email. You can update your payment method and retry the payment. We also offer automatic retry attempts for failed payments to ensure uninterrupted service."
    },
    {
        question: "Can I get a refund?",
        answer: "Yes, we offer refunds in accordance with our refund policy. To request a refund, please contact our support team with your order details. Refunds are typically processed within 5-10 business days, depending on your payment method."
    },
    {
        question: "Do you store my credit card information?",
        answer: "No, we never store your credit card information. All payment data is securely processed and stored by Stripe, our payment processor. This ensures the highest level of security for your financial information."
    },
    {
        question: "What currencies do you accept?",
        answer: "We accept payments in multiple currencies through our Stripe integration. The available currencies will be displayed during the checkout process based on your location and our supported currencies."
    },
    {
        question: "How do I view my payment history?",
        answer: "You can view your complete payment history by logging into your account and accessing the billing section. There, you'll find detailed records of all your transactions, including dates, amounts, and payment methods used."
    },
    {
        question: "Are there any transaction fees?",
        answer: "Standard payment processing fees apply as per Stripe's pricing structure. These fees are typically a small percentage of the transaction amount plus a fixed fee. You can find detailed information about our pricing on our pricing page."
    },
    {
        question: "How do I contact support for payment issues?",
        answer: "For any payment-related issues, you can contact our support team through the help center in your account dashboard or by emailing support@outsmart.com. Our team is available 24/7 to assist you with any payment concerns."
    }
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Frequently Asked Questions</h1>
            <p className={styles.subtitle}>Everything you need to know about payments and security</p>

            <div className={styles.faqContainer}>
                {faqs.map((faq, index) => (
                    <div key={index} className={styles.faqItem}>
                        <button
                            className={styles.question}
                            onClick={() => toggleFAQ(index)}
                            aria-expanded={openIndex === index}
                        >
                            <span>{faq.question}</span>
                            <span className={styles.icon}>
                                {openIndex === index ? '−' : '+'}
                            </span>
                        </button>
                        {openIndex === index && (
                            <div className={styles.answer}>
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
