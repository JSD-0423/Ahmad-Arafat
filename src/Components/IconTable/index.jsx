import "./index.module.css";

const IconTable = ({ data, icon }) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>{data.topic} Sub Topics</td>
        </tr>
        {data.subtopics.map((subtopic, index) => {
          return (
            <tr key={index}>
              <td>
                {icon} {subtopic}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default IconTable;
