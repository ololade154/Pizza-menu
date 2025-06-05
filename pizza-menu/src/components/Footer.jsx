function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  // if (hour >= openHour && hour <= closeHour) alert("We're currently open");
  // else alert("sorry we're closed");
  // console.log(hour);
  return (
    <div>
      <footer className="footer">
        {new Date().toLocaleTimeString()}. We're currently open !
      </footer>
    </div>
  );
}
export default Footer;
