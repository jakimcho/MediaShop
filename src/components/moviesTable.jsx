import JRTable from "./common/jrTable";
import React from "react";
import { getMovies } from "../services/moviesServices";
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

  componentDidMount = async () => {
    const data = await getMovies();
    //const data = this.getMovies();
    console.log(`mounting data ${JSON.stringify(data)}`);
    this.setState({ data });
  };
}

export default MoviesTable;
