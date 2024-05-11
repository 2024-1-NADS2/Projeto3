import "./TextInput.css"

const Input = ({type, text, name, placeholder, handleOnChange, value, flexDirection}) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{text}</label>
      <input 
        style = {{flexDirection}}
        type={type}  
        name={name} 
        id={name} 
        placeholder={placeholder} 
        onChange={handleOnChange} 
        value={value} 
      />
    </div>
  )
}

export default Input