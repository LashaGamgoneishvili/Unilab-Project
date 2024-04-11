import style from "./Selector.module.css";

function Selector({ dataList }) {
  return (
    <select className={style.select}>
      {dataList.map((item, i) => (
        <option key={i}>
          {item.initialValue
            ? item.initialValue
            : item.number || `${item?.country}, ${item?.city}`}
        </option>
      ))}
    </select>
  );
}

export default Selector;
