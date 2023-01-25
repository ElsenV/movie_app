import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NextPage, PrevPage, ClickedPage } from "../../setup/actions/actions";
import { Link, useParams } from "react-router-dom";

const Pagination = () => {
  // const screenPages = newPage > 3 && [newPage - 1, newPage, newPage + 1];
  const { genre, name, id } = useParams();
  const newPage = useSelector((state) => state.page.value);
  const totalPages = 500;
  const dispatch = useDispatch();
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul class="inline-flex -space-x-px">
          {/* Prev Page Button */}
          {newPage > 1 && (
            <li>
              <Link
                to={`/${genre}/${name}/${id}/page=${
                  newPage > 1 ? newPage - 1 : 1
                }`}
                class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={() => dispatch(PrevPage(newPage, name))}
              >
                Previous
              </Link>
            </li>
          )}

          {/* First Page */}
          <li>
            <Link
              to={`/${genre}/${name}/${id}/page=${1}`}
              class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white "
              onClick={() => dispatch(ClickedPage(1))}
            >
              {1}
            </Link>
          </li>
          {/* Dotes */}
          {newPage > 3 && (
            <li>
              <Link class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                ...
              </Link>
            </li>
          )}

          {/* Prev Page Number */}
          {newPage > 2 ? (
            <li>
              <Link
                to={`/${genre}/${name}/${id}/page=${newPage - 1}`}
                class="px-3 py-2   leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={() => dispatch(ClickedPage(newPage - 1))}
              >
                {newPage - 1}
              </Link>
            </li>
          ) : null}

          {/* Current Page Number */}
          {newPage > 1 && newPage < totalPages && (
            <li>
              <Link
                to={`/${genre}/${name}/${id}/page=${newPage}`}
                class="px-3 py-2 leading-tight text-gray-500 bg-green-100 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={() => dispatch(ClickedPage(newPage))}
              >
                {newPage}
              </Link>
            </li>
          )}
          {/* Next Page Number */}
          {totalPages - 1 > newPage ? (
            <li>
              <Link
                to={`/${genre}/${name}/${id}/page=${newPage + 1}`}
                class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={() => dispatch(ClickedPage(newPage + 1))}
              >
                {newPage + 1}
              </Link>
            </li>
          ) : null}

          {/* Dotes */}
          {newPage < totalPages - 2 && (
            <li>
              <Link class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                ...
              </Link>
            </li>
          )}
          {/* Total Page Nmber  */}
          <li>
            <Link
              to={`/${genre}/${name}/${id}/page=${totalPages}`}
              class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={() => dispatch(ClickedPage(totalPages))}
            >
              {totalPages}
            </Link>
          </li>

          {/* Next Page Button */}
          {newPage < totalPages && (
            <li>
              <Link
                to={`/${genre}/${name}/${id}/page=${
                  newPage < totalPages ? newPage + 1 : newPage
                }`}
                class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={() => dispatch(NextPage(newPage, name, totalPages))}
              >
                Next
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
