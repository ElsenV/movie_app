import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CardList from "../../container/CardList";
import { sendDetails } from "../../../setup/actions/dataAction";
import { Link } from "react-router-dom";

const AboutPeopleSearch = () => {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.details.item);

  return (
    <div className="h-auto md:h-screen">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mx-5 my-10">
        {item.known_for.map((item, i) => (
          <Link
            to={`/details/${item.name || item.title || item.original_name}`}
            onClick={() => dispatch(sendDetails(item))}
          >
            <CardList item={item} key={i} />
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default AboutPeopleSearch;
