import "./Botao.css";


export default function Botao({children, onClick}) {
  return <button onClick={onClick} className="botao">{children}</button>;
}
