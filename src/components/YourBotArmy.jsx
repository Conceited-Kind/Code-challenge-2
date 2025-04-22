import BotCard from './BotCard';

function YourBotArmy({ army, onRelease, onDischarge }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {army.length === 0 ? (
        <div className="empty-army">
          <p>No bots enlisted yet.</p>
          <p>Click on bots to add them to your army!</p>
        </div>
      ) : (
        <div className="army-grid">
          {army.map(bot => (
            <BotCard
              key={bot.id}
              bot={bot}
              onRelease={() => onRelease(bot.id)}
              onDischarge={() => onDischarge(bot.id)}
              showAddButton={false}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default YourBotArmy;