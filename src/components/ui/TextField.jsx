function TextField({ label, type, onChange, value }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="block mb-3 text-size">{label}</label>
      <input
        type={type}
        onChange={onChange}
        value={value}
        className="input-style w-full p-4 mb-8"
      />
    </div>
  );
}

export default TextField;
