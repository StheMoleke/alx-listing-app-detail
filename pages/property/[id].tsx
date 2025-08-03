// pages/property/[id].tsx

import { useRouter } from 'next/router';
import PropertyDetail from '@/components/property/PropertyDetail';

const PropertyPage = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <PropertyDetail propertyId={id as string} />
    </div>
  );
};

export default PropertyPage;

