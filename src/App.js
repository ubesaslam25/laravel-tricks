import './App.css';
import api from './api.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{api.title}</h1>
        {
          api.data.map((data, index) => {
            return <div key={index}>
              {data.heading ? <h3>{data.heading}</h3> : ""}
              {
                data.type ? 
                  data.type === "list" ? 
                    <ol>
                      {data.data.map((list, index) => {
                        return <li key={index}>{list.text}</li>
                      })}
                    </ol>
                  : 
                    <>
                      {data.paragraphs.map((list, index) => {
                        return <p key={index}>{list.title ? <b>{list.title}: </b> : ""}{list.text}</p>
                      })}
                      <table width={"100%"} border={1}>
                        <thead>
                          <tr>
                            <th>Verb</th>
                            <th>Path</th>
                            <th>Action</th>
                            <th>Route Name</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.data.map((table, index) => {
                            return <tr key={index}>
                              <td>{table.verb}</td>
                              <td>{table.path}</td>
                              <td>{table.action}</td>
                              <td>{table.routeName}</td>
                            </tr>
                          })}
                        </tbody>
                      </table>
                    </>
                : 
                  data.paragraphs.map((list, index) => {
                    return <p key={index}>{list.title ? <b>{list.title}: </b> : ""}{list.text}</p>
                  })
              }
            </div>
          })
        }
      </header>
    </div>
  );
}

export default App;
