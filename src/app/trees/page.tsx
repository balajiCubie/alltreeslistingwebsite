"use client";

import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/common/PageHeader';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import FilterBar from '../../components/trees/FilterBar';
import FilterChips from '../../components/trees/FilterChips';
import SortSelect from '../../components/trees/SortSelect';
import ResultsCount from '../../components/trees/ResultsCount';
import TreeGrid from '../../components/trees/TreeGrid';
import PaginationControls from '../../components/trees/PaginationControls';
import CTABanner from '../../components/common/CTABanner';
import SearchInput from '../../components/trees/SearchInput';
import ClearFiltersButton from '../../components/trees/ClearFiltersButton';
import RegionMapFilter from '../../components/trees/RegionMapFilter';
import TreeCardPlaceholder from '../../components/trees/TreeCardPlaceholder';
import NoResultsMessage from '../../components/trees/NoResultsMessage';
import BackToTopButton from '../../components/trees/BackToTopButton';
import StatsBanner from '../../components/trees/StatsBanner';
import PopularSpeciesCarousel from '../../components/trees/PopularSpeciesCarousel';
import { Tree } from '../../types/tree';

export default function TreesPage() {
  const [trees, setTrees] = useState<Tree[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Filter, Search, Sort States
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<Record<string, string[]>>({});
  const [sortOrder, setSortOrder] = useState('commonName-asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [treesPerPage] = useState(12); // Number of trees per page
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [cardSize, setCardSize] = useState('medium'); // 'small', 'medium', 'large'
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  useEffect(() => {
    const fetchTrees = async () => {
      try {
        setLoading(true);
        const response = await fetch('/data/trees/index.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Tree[] = await response.json();
        setTrees(data);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTrees();
  }, []);

  const handleFilterChange = (newFilters: Record<string, string[]>) => {
    setFilters(newFilters);
    setCurrentPage(1); // Reset to first page on filter change
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1); // Reset to first page on search change
  };

  const handleSortChange = (value: string) => {
    setSortOrder(value);
    setCurrentPage(1); // Reset to first page on sort change
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setFilters({});
    setSortOrder('commonName-asc');
    setSelectedRegion(null);
    setCurrentPage(1);
  };

  const handleRegionSelect = (region: string | null) => {
    setSelectedRegion(region);
    setCurrentPage(1);
  };

  // Apply filters, search, and sort
  const filteredTrees = trees.filter((tree) => {
    const matchesSearch = tree.commonName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          tree.scientificName.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilters = Object.entries(filters).every(([filterType, filterValues]) => {
      if (filterValues.length === 0) return true;
      if (filterType === 'region') {
        return filterValues.some(val => tree.region.includes(val));
      }
      // Add more filter types as needed
      return true;
    });

    const matchesRegion = selectedRegion ? tree.region.includes(selectedRegion) : true;

    return matchesSearch && matchesFilters && matchesRegion;
  });

  const sortedTrees = [...filteredTrees].sort((a, b) => {
    const [sortBy, order] = sortOrder.split('-');
    let compareValue = 0;

    if (sortBy === 'commonName') {
      compareValue = a.commonName.localeCompare(b.commonName);
    } else if (sortBy === 'scientificName') {
      compareValue = a.scientificName.localeCompare(b.scientificName);
    } else if (sortBy === 'status') {
      compareValue = a.status.localeCompare(b.status);
    }
    // Add more sort options as needed

    return order === 'asc' ? compareValue : -compareValue;
  });

  // Pagination logic
  const indexOfLastTree = currentPage * treesPerPage;
  const indexOfFirstTree = indexOfLastTree - treesPerPage;
  const currentTrees = sortedTrees.slice(indexOfFirstTree, indexOfLastTree);
  const totalPages = Math.ceil(sortedTrees.length / treesPerPage);

  const activeFilterCount = Object.values(filters).flat().length + (searchTerm ? 1 : 0) + (selectedRegion ? 1 : 0);

  if (loading) {
    return (
      <main className="container mx-auto px-4 py-12">
        <PageHeader title="Loading Trees..." subtitle="Fetching data, please wait." />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <TreeCardPlaceholder count={treesPerPage} />
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="container mx-auto px-4 py-12">
        <PageHeader title="Error" subtitle="Failed to load tree data." />
        <p className="text-red-500">Error: {error}</p>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-12">
      {/* Hero */}
      <PageHeader
        title="Explore All Trees"
        subtitle="Browse thousands of tree species, filter by region, family, or conservation status."
      />

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { href: "/trees", label: "Trees" },
        ]}
      />

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row gap-8 my-8">
        <aside className="w-full md:w-1/4">
          <SearchInput value={searchTerm} onChange={handleSearchChange} />
          <FilterBar
            onFilterChange={handleFilterChange}
            filters={filters} // Pass filters prop
            viewMode={viewMode}
            setViewMode={setViewMode}
            cardSize={cardSize}
            setCardSize={setCardSize}
          />
          <RegionMapFilter selectedRegion={selectedRegion} onSelectRegion={handleRegionSelect} />
          <ClearFiltersButton onClick={handleClearFilters} disabled={activeFilterCount === 0} />
        </aside>
        <section className="w-full md:w-3/4">
          <FilterChips activeFilters={Object.entries(filters).flatMap(([type, values]) =>
            values.map(value => ({ label: type, value, type }))
          ).concat(searchTerm ? [{ label: 'Search', value: searchTerm, type: 'search' }] : [])
          .concat(selectedRegion ? [{ label: 'Region', value: selectedRegion, type: 'region' }] : [])
          } onRemoveFilter={(filterToRemove) => {
            if (filterToRemove.type === 'search') {
              setSearchTerm('');
            } else if (filterToRemove.type === 'region') {
              setSelectedRegion(null);
            } else {
              setFilters(prevFilters => {
                const newValues = prevFilters[filterToRemove.type].filter(val => val !== filterToRemove.value);
                return { ...prevFilters, [filterToRemove.type]: newValues };
              });
            }
          }} />
          <SortSelect
            options={[
              { value: 'commonName-asc', label: 'Common Name (A-Z)' },
              { value: 'commonName-desc', label: 'Common Name (Z-A)' },
              { value: 'scientificName-asc', label: 'Scientific Name (A-Z)' },
              { value: 'scientificName-desc', label: 'Scientific Name (Z-A)' },
              { value: 'status-asc', label: 'Status (A-Z)' },
              { value: 'status-desc', label: 'Status (Z-A)' },
            ]}
            value={sortOrder}
            onChange={handleSortChange}
          />
          <ResultsCount count={currentTrees.length} total={sortedTrees.length} />

          {/* Trees Grid */}
          {currentTrees.length > 0 ? (
            <TreeGrid trees={currentTrees} />
          ) : (
            <NoResultsMessage />
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <PaginationControls
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </section>
      </div>

      {/* Optional Sections */}
      <StatsBanner totalSpecies={trees.length} regionsCovered={5} conservationEfforts={1200} />
      <PopularSpeciesCarousel trees={trees.filter(tree => tree.isFeatured).slice(0, 5)} /> {/* Assuming 'isFeatured' property */}

      {/* CTA */}
      <CTABanner />

      <BackToTopButton />
    </main>
  );
}
