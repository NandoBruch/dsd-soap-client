import "./index.css";

interface InputProps {
  id: string;
  placeholder: string;
}

const Input = ({ id, placeholder }: InputProps) => {
  return <input id={id} placeholder={placeholder} type="text" />;
};

export default Input;
