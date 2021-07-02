

export const YearSelector = ({year, view, modifyView}) => {
    if(!view){
        return null
    }

  return (
    <div >
      <label htmlfor="year">Year:</label>
      <select name="year" id="year" onChange={(e) => modifyView(e)}>
        <option value="2016">2016</option>
        <option value="2017">2017</option>
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
      </select>
    </div>
  );
};
