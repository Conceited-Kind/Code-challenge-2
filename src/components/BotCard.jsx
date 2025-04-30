import React from 'react';

function BotCard({ bot, onAdd, onDischarge, onClick, showAddButton }) {
  const handleAdd = (e) => {
    e.stopPropagation();
    onAdd(bot);
  };

  const handleDischarge = (e) => {
    e.stopPropagation();
    onDischarge(bot);
  };

  return (
    <div className="bot-card" onClick={onClick}>
        <div className="discharge-btn" onClick={handleDischarge}>
          ✕
        </div>
      <img src={bot.avatar_url} alt={bot.name} className="bot-avatar" />
      <div className="bot-info">
        <h3>{bot.name}</h3>
        <p className="catchphrase">{bot.catchphrase}</p>
        <div className="bot-stats">
          <div className="stat">
            <span className="stat-icon">❤️</span>
            <span>{bot.health}</span>
          </div>
          <div className="stat">
            <span className="stat-icon">⚔️</span>
            <span>{bot.damage}</span>
          </div>
          <div className="stat">
            <span className="stat-icon">🛡️</span>
            <span>{bot.armor}</span>
          </div>
        </div>
        <div className="bot-class">{bot.bot_class}</div>
        {showAddButton && (
          <button className="enlist-btn" onClick={handleAdd}>
            Enlist
          </button>
        )}
      </div>
    </div>
  );
}

export default BotCard;