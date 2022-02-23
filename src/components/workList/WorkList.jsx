import "./workList.scss";

export default function WorkList({ id, title, active, setSelected }) {
  return (
    <div>
      <li
        className={active ? "workList active" : "workList"}
        onClick={() => setSelected(id)}
      >
        {title}
      </li>
    </div>
  )
}
