import React, { useState, useEffect } from 'react';
import YourBotArmy from './components/YourBotArmy';
import BotCollection from './components/BotCollection';
import BotSpecs from './components/BotSpecs';
import FilterBar from './components/FilterBar';
import SortBar from './components/SortBar';
import './App.css';

function App() {
  const [army, setArmy] = useState([]);
  const [bots, setBots] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [filters, setFilters] = useState([]);
  const [currentSort, setCurrentSort] = useState('');

  useEffect(() => {
    fetch('https://bot-battlr-api.onrender.com/api/bots') 
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => setBots(data))
      .catch(err => console.error("Error fetching bots:", err));
  }, []);

  const addToArmy = (bot) => {
    const isBotInArmy = army.some(b => b.id === bot.id);
    const isClassInArmy = army.some(b => b.bot_class === bot.bot_class);
    
    if (!isBotInArmy && !isClassInArmy) {
      setArmy([...army, bot]);
    } else if (isClassInArmy) {
      alert(`You can only have one ${bot.bot_class} in your army!`);
    }
  };

  const releaseFromArmy = (bot) => {
    setArmy(army.filter(b => b.id !== bot.id));
  };

  const dischargeBot = (bot) => {
    fetch(`https://bot-battlr-api.onrender.com/api/bots/${bot.id}`, { 
      method: 'DELETE'
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        setArmy(army.filter(b => b.id !== bot.id));
        setBots(bots.filter(b => b.id !== bot.id));
      })
      .catch(err => console.error("Error deleting bot:", err));
  };

  const handleFilter = (cls) => {
    setFilters(prev => 
      prev.includes(cls) 
        ? prev.filter(f => f !== cls) 
        : [...prev, cls]
    );
  };

  const handleSort = (key) => {
    setCurrentSort(key);
  };

  const handleBack = () => {
    setSelectedBot(null);
  };

  return (
    <div className="app">
      <header>
        <h1>Bot Battlr</h1>
        <p>Build your ultimate bot army!</p>
      </header>
      
      <YourBotArmy 
        army={army} 
        onRelease={releaseFromArmy} 
        onDischarge={dischargeBot} 
      />
      
      {selectedBot ? (
        <BotSpecs 
          bot={selectedBot} 
          onBack={handleBack} 
          onEnlist={addToArmy} 
        />
      ) : (
        <>
          <div className="controls">
            <FilterBar 
              onFilter={handleFilter} 
              activeFilters={filters} 
            />
            <SortBar 
              onSort={handleSort} 
              currentSort={currentSort} 
            />
          </div>
          <BotCollection 
            bots={bots}
            onAdd={addToArmy} 
            onSelect={setSelectedBot}
            filters={filters}
            sortBy={currentSort}
          />
        </>
      )}
    </div>
  );
}

export default App;