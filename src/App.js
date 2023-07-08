import './App.css';
import Upcoming from './sections/Upcoming';
import Hero from './sections/Hero';
import Ranking from './sections/Ranking';
import Live from './sections/Live';
import Ended from './sections/Ended';
import Loader from './components/Loader';
import TournamentDetail from './components/TournamentDetail';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { AnimatePresence } from 'framer-motion';
import Backdrop from './components/Backdrop';
import Searchbar from './components/Searchbar';

function App() {
    const [open, setOpen] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    const [openTourney, setOpenTourney] = useState(false);
    const [loader, setLoader] = useState(true);
    const [tournamentName, setName] = useState("");
    const [tournamentCity, setTournamentCity] = useState("");
    const [tournamentStart, setTournamentStart] = useState("");
    const [tournamentEnd, setTournamentEnd] = useState("");
    const [tournamentSurface, setTournamentSurface] = useState("");
    const [tournamentCountry, setTournamentCountry] = useState("");
    const [tournaments, setTournaments] = useState([]);
    const [searched, setSearched] = useState([]);
    const [currentMonth, setCurrentMonth] = useState(("0" + (new Date().getMonth() + 1)).slice(-2));

    const closeSearch = () => {
        setOpenSearch(false);
        setSearched([]);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoader(false);
        }, 8000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='relative overflow-x-hidden'>
           
            {!openSearch && <Navbar open={open} setOpen={setOpen} />}
            {!open && <Searchbar openSearch={openSearch} setOpenSearch={setOpenSearch} setOpenTourney={setOpenTourney} setName={setName} setTournamentCity={setTournamentCity} setTournamentStart={setTournamentStart} setTournamentEnd={setTournamentEnd} setTournamentSurface={setTournamentSurface} setTournamentCountry={setTournamentCountry} setSearched={setSearched} searched={searched} tournaments={tournaments} />}
            <Hero />
            <Live />
            <div className='w-[calc(100vw-20px)] h-[1px] bg-[#4776d5] rounded-[10px] ml-[20px] mt-[20px] mb-[20px]' />
            <Ended />
            <div className='w-[calc(100vw-20px)] h-[1px] bg-[#4776d5] rounded-[10px] ml-[20px] mt-[20px] mb-[20px]' />
            <Ranking />
            <div className='w-[calc(100vw-20px)] h-[1px] bg-[#4776d5] rounded-[20px] ml-[20px] mt-[20px] mb-[20px]' />
            <Upcoming currentMonth={currentMonth} setTournaments={setTournaments} openTourney={openTourney} setOpenTourney={setOpenTourney} setName={setName} setTournamentCity={setTournamentCity} setTournamentStart={setTournamentStart} setTournamentEnd={setTournamentEnd} setTournamentSurface={setTournamentSurface} setTournamentCountry={setTournamentCountry} />
            <AnimatePresence initial={false} mode='wait' onExitComplete={() => null}>
                {(openTourney) && <TournamentDetail handleClose={() => setOpenTourney(false)} name={tournamentName} city={tournamentCity} start={tournamentStart} end={tournamentEnd} surface={tournamentSurface} country={tournamentCountry} />}
            </AnimatePresence>
            {open && <Backdrop onClick={() => setOpen(false)} />}
            {openSearch && <Backdrop onClick={closeSearch} />}
        </div>
    );
}

export default App;
