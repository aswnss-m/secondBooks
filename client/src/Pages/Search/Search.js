import React from 'react'
import SearchHero from '../../Components/Hero/SearchHero'
import SearchBar from '../../Components/SearchBar/SearchBar'
import PageBreaker from '../../Components/PageBreaker/PageBreaker'
import SearchResults from '../../Components/SearchResults/SearchResults'

function Search() {
  return (
    <div>
      <SearchHero />
      <SearchBar />
      <PageBreaker title={""} />
      <SearchResults />
    </div>
  )
}

export default Search
