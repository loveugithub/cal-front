function ScreenRow({ value }) {
  return (
    <div>
      <input className="screen" type="text" readOnly value={value} />
    </div>
  );
}

export default ScreenRow;
