import { useParams } from 'react-router-dom';
function Country() {
  const params = useParams();
  console.log(params);
  return <h1>Country</h1>;
}

export default Country;
