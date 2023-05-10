import React from 'react'
import SearchHero from '../../Components/Hero/SearchHero'
import SearchBar from '../../Components/SearchBar/SearchBar'
import PageBreaker from '../../Components/PageBreaker/PageBreaker'
import SearchResults from '../../Components/SearchResults/SearchResults'
import { useState } from 'react'
function Search() {
  const [showFilter,setShowFilter] = useState(false)
  const showfilerfunc = () => {
    setShowFilter(!showFilter)
  }
  return (
    <div>
      <SearchHero />
      <SearchBar filterShow ={showfilerfunc}/>
      <PageBreaker title={""} />
      <SearchResults showfilter= {showFilter}/>
    </div>
  )
}

export default Search
