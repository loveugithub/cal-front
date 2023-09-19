function CalculationHistory({ history, deleteCal }) {
  return (
    <div>
      <h2>Calculation History</h2>
      <table id="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Calculation</th>
            <th>Result</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {history.map((obj) => {
            return (
              <tr key={obj._id}>
                <td>{obj.name}</td>
                <td>{obj.cal}</td>
                <td>{obj.result}</td>
                <td>refresh</td>
                <td
                  onClick={() => {
                    deleteCal(obj._id);
                  }}
                >
                  del
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CalculationHistory;
