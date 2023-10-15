// function in props

const ListItemFunc = (props) => {
  const { srcAdd, name, altText, bgColor } = props;

  return (
    <>
      <div className={bgColor}>
        <img src={srcAdd} alt={altText} />
        <p>{name}</p>
      </div>
    </>
  );
};

export default ListItemFunc;
