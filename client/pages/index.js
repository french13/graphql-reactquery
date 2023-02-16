import MessageList from "../components/MessageList";

const Home = () => {
  return (
    <>
      <div id="contact-inquiry">
        문의구분 *{" "}
        <input className="inquiry1" type="radio" name="con_inquiry" />
        <label>전자등기(Mobi post)</label>
        <input className="inquiry2" type="radio" name="con_inquiry" />
        <label>전자문서</label>
        <input className="inquiry3" type="radio" name="con_inquiry" />
        <label>SI/SM</label>
      </div>
      <h1>simple sns</h1>
      <MessageList />
    </>
  );
};

export default Home;
