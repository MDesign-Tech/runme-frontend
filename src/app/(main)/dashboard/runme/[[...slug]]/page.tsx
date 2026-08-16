import { notFound } from 'next/navigation';

import { RestaurantDashboardScreen } from '../../_components/restaurant-dashboard-screen';
import { getRestaurantScreen, restaurantSlugs } from '../../_components/restaurant-dashboard-data';

type Props = { params: Promise<{ slug?: string[] }> };

export function generateStaticParams() {
  return restaurantSlugs.map((slug) => ({ slug: [slug] }));
}

export default async function RunmePage({ params }: Props) {
  const { slug } = await params;
  const screen = getRestaurantScreen(slug?.[0] ?? 'dashboard');
  if (!screen) notFound();
  return <RestaurantDashboardScreen screen={screen} />;
}
