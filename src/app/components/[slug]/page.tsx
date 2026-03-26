import { notFound } from 'next/navigation';
import { components } from '@/data/components';
import { ClientComponent } from './client';

export function generateStaticParams() {
  return components.map((c) => ({
    slug: c.slug,
  }));
}

export default function ComponentPage({ params }: { params: { slug: string } }) {
  const component = components.find((c) => c.slug === params.slug);

  if (!component) {
    notFound();
  }

  return <ClientComponent component={component} />;
}