import "./styles.css";

function GradientRange() {
  return (
    <div className='temperature-range'>
      <input
        className='temperature-range-slider'
        type='range'
        min='10'
        max='100'
      />
    </div>
  );
}

export default GradientRange;
