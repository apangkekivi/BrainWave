
const Heading = ({className, title, text}) => {
  return <div>
      {title && <h2 className='h2 text-center'>{title}</h2>}
      {text && <p className="body-2 mt-4 text-n-4 text-center">{text}</p>}
    </div>;
  
};

export default Heading
