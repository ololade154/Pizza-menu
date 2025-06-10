function Pizza({ pizza }) {
  return (
    <div>
      <img src="{pizza.photoName}" alt="" />
      <h3>{pizza.name}</h3>
    </div>
  );
}
export default Pizza;
