import { CheckCircle, Eye, Image as ImageIcon } from 'lucide-react';

export interface DesignFeature {
  name: string;
}

export interface WebsiteDesign {
  id: string;
  category: 'Restaurant' | 'Service' | 'Retail' | 'Professional' | 'Beauty' | 'Healthcare' | 'Other';
  claimedCount: number;
  title: string;
  description: string;
  features: DesignFeature[];
  imageIcon?: React.ElementType; // Optional: if we want specific icons per card later
}

export const designCategories = ['All', 'Restaurant', 'Service', 'Retail', 'Professional', 'Beauty', 'Healthcare'] as const;
export type DesignCategory = typeof designCategories[number];


export const websiteDesigns: WebsiteDesign[] = [
  {
    id: 'restaurant-classic',
    category: 'Restaurant',
    claimedCount: 1247,
    title: 'Local Restaurant',
    description: 'Perfect for cafes, bistros and local eateries',
    features: [
      { name: 'Online Menu' },
      { name: 'Reservation System' },
      { name: 'Mobile Optimized' },
      { name: 'SEO Optimized' },
    ],
  },
  {
    id: 'service-pro',
    category: 'Service',
    claimedCount: 892,
    title: 'Service Business',
    description: 'Ideal for plumbers, electricians, and contractors',
    features: [
      { name: 'Service Listings' },
      { name: 'Quote Request' },
      { name: 'Testimonials' },
      { name: 'Contact Forms' },
    ],
  },
  {
    id: 'retail-modern',
    category: 'Retail',
    claimedCount: 2156,
    title: 'Retail Store',
    description: 'Showcase your products and drive foot traffic',
    features: [
      { name: 'Product Gallery' },
      { name: 'Store Hours' },
      { name: 'Location Map' },
      { name: 'Social Media' },
    ],
  },
  {
    id: 'professional-corp',
    category: 'Professional',
    claimedCount: 743,
    title: 'Professional Services',
    description: 'For accountants, lawyers, and consultants',
    features: [
      { name: 'Service Pages' },
      { name: 'Appointment Booking' },
      { name: 'Team Profiles' },
      { name: 'Client Portal' },
    ],
  },
  {
    id: 'beauty-salon',
    category: 'Beauty',
    claimedCount: 1089,
    title: 'Salon & Spa',
    description: 'Elegant design for beauty and wellness businesses',
    features: [
      { name: 'Service Menu' },
      { name: 'Online Booking' },
      { name: 'Staff Profiles' },
      { name: 'Gallery' },
    ],
  },
  {
    id: 'healthcare-clinic',
    category: 'Healthcare',
    claimedCount: 567,
    title: 'Medical Practice',
    description: 'Clean design for healthcare professionals',
    features: [
      { name: 'Appointment Booking' },
      { name: 'Service Listings' },
      { name: 'Doctor Profiles' },
      { name: 'HIPAA Compliant' },
    ],
  },
  // Add a few more diverse examples
   {
    id: 'construction-builder',
    category: 'Service', // Re-using a category
    claimedCount: 305,
    title: 'Construction Co.',
    description: 'Showcase your projects and attract new clients',
    features: [
      { name: 'Project Portfolio' },
      { name: 'Service Areas' },
      { name: 'Free Estimates' },
      { name: 'Licensed & Insured' },
    ],
  },
  {
    id: 'bakery-sweet',
    category: 'Restaurant', // Re-using a category
    claimedCount: 680,
    title: 'Artisan Bakery',
    description: 'Delightful designs for bakeries and cake shops',
    features: [
      { name: 'Daily Specials' },
      { name: 'Online Orders' },
      { name: 'Photo Gallery' },
      { name: 'Customer Reviews' },
    ],
  },
]; 