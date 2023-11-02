export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>
          Start adding some items to your packing list{" "}
          <span role="img" aria-label="Red cross">
            🚀{" "}
          </span>
        </em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100 ? (
          <span role="img" aria-label="Red cross">
            You got everything! Ready to go ✈️
          </span>
        ) : (
          ` 💼 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`
        )}
      </em>
    </footer>
  );
}
