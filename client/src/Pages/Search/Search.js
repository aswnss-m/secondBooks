import React from 'react'
import SearchHero from '../../Components/Hero/SearchHero'
import SearchBar from '../../Components/SearchBar/SearchBar'
import PageBreaker from '../../Components/PageBreaker/PageBreaker'

function Search() {
  return (
    <div>
      <SearchHero />
      <SearchBar />
      <PageBreaker title={""} />
    </div>
  )
}

export default Search
