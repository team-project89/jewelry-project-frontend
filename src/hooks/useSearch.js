import { useState } from 'react';
import useProducts from './useProducts';
import { normalizeText } from '@/utils/persianTextUtils';

export default function useSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const { products } = useProducts();

  const searchResults = products?.filter((product) => {
    const normalizedSearchTerm = normalizeText(searchTerm);
    const normalizedProductName = normalizeText(product.name);
    
    return (
      normalizedProductName.includes(normalizedSearchTerm) ||
      product.id.toString().includes(searchTerm)
    );
  });

  return {
    searchTerm,
    setSearchTerm,
    searchResults: searchTerm.length >= 2 ? searchResults : []
  };
}