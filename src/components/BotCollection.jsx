import React, { useState, useEffect } from 'react';
import BotCard from './BotCard';

function BotCollection({ onAdd, onSelect, filters, sortBy }) {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch('https://bot-battlr-api.onrender.com/api/bots')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setBots(data))
      .catch(err => console.error("Error fetching bots:", err));
  }, []);

  const filteredBots = filters.length > 0
    ? bots.filter((bot) => filters.includes(bot.bot_class))
    : bots;

  const sortedBots = [...filteredBots].sort((a, b) => {
    if (!sortBy) return 0;
    return b[sortBy] - a[sortBy];
  });

  return (
    <div className="bot-collection">
      {sortedBots.map((bot) => (
        <BotCard
          key={bot.id}
          bot={bot}
          onAdd={onAdd}
          onClick={() => onSelect(bot)}
        />
      ))}
    </div>
  );
}

export default BotCollection;