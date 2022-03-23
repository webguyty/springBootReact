const InputSelect = ({formState, label, handleChange, id, name, list}) => (
  <div className="inputText">
    <label htmlFor={id}>{label}</label>
    <select value={formState[name]} name={name} id={id} onChange={handleChange}>
      {list.map((s, i) => <option key={i} value={s}>{s}</option>)}
    </select>
  </div>
)

export default InputSelect