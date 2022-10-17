type dataArray = {
  read: boolean;
  img: string;
  name: string;
  action: string;
  link: string | false ;
  message: string | false;
  time: string;
};

function Message({
  index,
  data,
  setData,
}: {
  index: number;
  data: dataArray[];
  setData: any;
}) {
  const { read, img, name, action, message, time, link } = data[index];

 const imgOrText = () =>{
  if (typeof link === 'string' && link.includes('webp')) return <img style={{marginLeft:'auto'}} src={link} alt={link} />
  return link
 }


  const handleClick = () => {
    const res = data.map((msg, msgIndex) => {
      if (index === msgIndex) return { ...msg, read: !msg.read };
      return msg;
    });
    setData(res);
  };

  return (
    <section className={!read ? "msg-active msg-element" : "msg-element"} onClick={handleClick}>
      <img src={img} alt={img} />
      <div>
        <p style={{ fontWeight: "800" }}>
          {name} <span style={{ fontWeight: "400" }}>{action}  </span>  {imgOrText()} {!read && <object className="dot"></object>}
          
        </p>
        
        <p>{time}</p>
      </div>
      {message && <div className="msg">{message}</div>}
    </section>
  );
}

export default Message;
