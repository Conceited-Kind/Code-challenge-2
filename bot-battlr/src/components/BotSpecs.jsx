import PropTypes from 'prop-types';

function BotSpecs({ bot, onBack, onEnlist }) {
  return (
    <div className="bot-specs">
      <button className="back-button" onClick={onBack}>
        ← Back to All Bots
      </button>
      
      <div className="bot-details">
        <img src={bot.avatar_url} alt={bot.name} className="bot-avatar" />
        <div className="bot-info">
          <h2>{bot.name}</h2>
          <p className="bot-class">{bot.bot_class}</p>
          <p className="catchphrase">"{bot.catchphrase}"</p>
          
          <div className="stats-container">
            <div className="stat">
              <span className="stat-label">Health:</span>
              <div className="stat-bar">
                <div 
                  className="stat-fill" 
                  style={{ width: `${bot.health}%` }}
                ></div>
                <span className="stat-value">{bot.health}</span>
              </div>
            </div>
            
            <div className="stat">
              <span className="stat-label">Damage:</span>
              <div className="stat-bar">
                <div 
                  className="stat-fill" 
                  style={{ width: `${bot.damage}%` }}
                ></div>
                <span className="stat-value">{bot.damage}</span>
              </div>
            </div>
            
            <div className="stat">
              <span className="stat-label">Armor:</span>
              <div className="stat-bar">
                <div 
                  className="stat-fill" 
                  style={{ width: `${bot.armor}%` }}
                ></div>
                <span className="stat-value">{bot.armor}</span>
              </div>
            </div>
          </div>
          
          <button 
            className="enlist-btn"
            onClick={() => onEnlist(bot)}
          >
            Enlist in Army
          </button>
        </div>
      </div>
    </div>
  );
}

BotSpecs.propTypes = {
  bot: PropTypes.object.isRequired,
  onBack: PropTypes.func.isRequired,
  onEnlist: PropTypes.func.isRequired
};

export default BotSpecs;