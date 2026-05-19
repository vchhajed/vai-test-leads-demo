'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useSiteContent } from '@/lib/useSiteContent';

export default function Footer() {
  const content = useSiteContent();
  const footer = content?.footer || {};
  const contact = content?.contact || {};

  const brandName = footer.brandName || 'FITLIFE GYM';
  const tagline = footer.tagline || 'Premium fitness center in Mumbai with state-of-the-art equipment, certified trainers, and comprehensive wellness programs. Your journey to fitness starts here.';
  const phone = footer.presentedPhone || contact.phone || '+91 99887 76655';
  const email = footer.presentedEmail || contact.email || 'hello@fitlifegym.in';
  const address = contact.address || '3rd Floor, Inorbit Mall,\nMalad West, Mumbai 400064';
  const presentedBy = footer.presentedBy || '';
  const copyright = footer.copyright || '© 2025 FitLife Gym. All rights reserved. | Premium Fitness Centre';
  const waPhone = phone.replace(/\D/g, '');

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="logo" style={{ marginBottom: 20 }}>
            <div style={{ background: '#fff', borderRadius: 8, padding: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, flexShrink: 0 }}>
              <Image src="/logo.png" alt={brandName} width={38} height={38} style={{ objectFit: 'contain' }} />
            </div>
            <div className="logo-text">
              <span className="logo-name">{brandName}</span>
              <span className="logo-tag">Fitness Excellence</span>
            </div>
          </div>
          <p>{tagline}</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            {[
              { href: '/about', label: 'About' },
              { href: '/memberships', label: 'Memberships' },
              { href: '/classes', label: 'Classes' },
              { href: '/trainers', label: 'Trainers' },
              { href: '/gallery', label: 'Gallery' },
              { href: '/contact', label: 'Contact' },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-products">
          <h4>Services</h4>
          <ul>
            {['Strength & Conditioning', 'Group Fitness Classes', 'Personal Training', 'Yoga & Meditation', 'Nutrition Counseling'].map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p><a href={`https://wa.me/${waPhone}`} target="_blank" rel="noopener noreferrer">{phone}</a></p>
          <p><a href={`mailto:${email}`}>{email}</a></p>
          <p style={{ whiteSpace: 'pre-line' }}>{address}</p>
          {presentedBy && <p className="footer-person">Presented by: <strong>{presentedBy}</strong></p>}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>{copyright}</p>
        </div>
      </div>
    </footer>
  );
}