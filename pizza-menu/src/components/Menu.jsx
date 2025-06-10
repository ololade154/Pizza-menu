import Pizza from './Pizza';
function Menu({ pizzaData }) {
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      <div>
        {pizzaData.map((pizza) => (
          <Pizza pizza={pizza} />
        ))}
      </div>
    </main>
  );
}
export default Menu;
