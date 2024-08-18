import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const PaginationContainer = () => {
  return (
    <div className="join grid grid-cols-2">
      <button className="join-item btn btn-outline">Previous page</button>
      <button className="join-item btn btn-outline">Next</button>
    </div>
  );
};
export default PaginationContainer;
