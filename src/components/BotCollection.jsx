import React, { useState, useEffect } from 'react';
import BotCard from './BotCard';

function BotCollection({ onAdd, onSelect, filters, sortBy }) {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch('/api/bots')
      .then((res) => res.json())
      .then((data) => setBots(data));
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