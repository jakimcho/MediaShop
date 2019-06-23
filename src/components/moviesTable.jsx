import JRTable from "./common/jrTable";
import React from "react";
import _ from "lodash";

const columns = ["Title", "Genre"];

class MoviesTable extends JRTable {
  constructor(props) {
    super(props, columns);
  }

  renderData = () => {
    const data = this.state.data;
    console.log(`Rendering data ${JSON.stringify(data)}`);
    if (data == null || _.isEmpty(data)) return;

    const rows = data.map(movie => (
      <tr key={movie.title}>
        <td className="title">{movie.title}</td>
        <td className="genre">{movie.genre.name}</td>
      </tr>
    ));
    return <tbody>{rows}</tbody>;
  };

  componentDidMount = () => {
    //const data = moviesServices.getMovies();
    const data = this.getMovies();
    console.log(`mounting data ${JSON.stringify(data)}`);
    this.setState({ data });
  };

  getMovies = () => {
    return [
      { title: "fsdfs", genre: { name: "fdfdf" } },
      { title: "f3sdfs", genre: { name: "fdfdf" } },
      { title: "fs2dfs", genre: { name: "fdfdf" } },
      { title: "fsdfs1", genre: { name: "fdfdf" } }
    ];
  };
}

export default MoviesTable;
