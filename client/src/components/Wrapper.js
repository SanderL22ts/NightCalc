import "./Wrapper.css";

const Wrapper = ({ title, children }) => {
  return (<div className="wrapper">
    <div className="wrapper_title">
      {title}
    </div>
    {children}
  </div>
  );
};

export default Wrapper;