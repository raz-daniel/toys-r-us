import './Header.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import logoImage from '../../../assets/images/toys-logo.jpg'

export default function Header(): JSX.Element {

    const [searchTerm, setSearchTerm] = useState<string>('')
    const navigate = useNavigate()

    function handleSearch(isClickEvent = false) {
        if (searchTerm.trim()) {
            navigate(`/games/list?search=${searchTerm}`, { state: { searchTerm: searchTerm} })
            if (isClickEvent) {
                setSearchTerm('')
            }   
        }
    }

    return (
        <div className='Header'>
            <div className='logo'>
                <img src={logoImage} />
            </div>
            <div>
                <nav>
                    <NavLink to="games/list">Games</NavLink>
                    <NavLink to="games/add">Add Game</NavLink>
                    <NavLink to="/home">Home</NavLink>
                </nav>
            </div>
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    handleSearch()
                }}>
                    <input
                        placeholder='search a game...'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyDown={(e) => { if (e.key === 'Enter') { 
                            e.preventDefault(); 
                            handleSearch(true); 
                        }}}
                    />
                    <button type='submit'>Search</button>
                </form>
            </div>

        </div>
    )
}