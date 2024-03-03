import { useParams } from "react-router-dom";

function RandomColor() {

  const params = useParams()

  console.log('Parameters: ', params)


  return (
    <div className={params.color}>
      <h1>RANDOM COLOR!</h1>
    </div>
  );
}

export default RandomColor